'use client'
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import toast, { Toaster } from "react-hot-toast";
import { FirebaseError } from 'firebase/app';
import { auth, db } from "../firebase/firebase";
import {
    EmailAuthProvider,
    applyActionCode,
    confirmPasswordReset,
    createUserWithEmailAndPassword,
    reauthenticateWithCredential,
    sendEmailVerification,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut,
    updatePassword as updateFirebasePassword,
    updateProfile as updateFirebaseProfile,
    verifyPasswordResetCode,
} from 'firebase/auth';
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { useLocalStorage } from '../customHooks/useLocaStorage';
import { User } from '../interface/auth';
import { useRouter } from 'next/navigation';

type values = {
    user: User;
    popup: { type: string, msg: string };
    loading: boolean;
    setPopup: (aug0: values["popup"]) => void;
    signIn: (email: string, password: string, callbackURL: string) => void; 
    signUp: ( name: string, email: string, password: string, callbackURL: string) => void;
    logOut: () => void;
    // acceptTeamInvite: (teamId: string, membershipId: string, userId: string, secret: string) => Promise<boolean>;
    getPhotoUrl: (email: string) => Promise<string | null>;
    updateAvatar: (file: File) => Promise<string>;
    updateProfile: (values: { name: string; photoUrl?: string }) => Promise<void>;
    changePassword: (currentPassword: string, newPassword: string) => Promise<void>;
    updateEmailVerification: (userId: string, secret?: string) => Promise<void>;
    emailVerification: () => Promise<void>;
    forgotPassword: (email: string) => Promise<void>;
    verifyOtp: (otp: string) => Promise<void>
    updatePassword: (password: string, userId?: string, secret?: string) => Promise<void>;
}

export const AuthContext = createContext({} as values);

export function useUser() {
  return useContext(AuthContext);
}

const AuthProvider = ({ children }: { children: ReactNode}) => {
    const [user, setUser] = useLocalStorage("user", null);
    const [popup, setPopup] = useState<{ type: string; msg: string; timestamp?: number }>({ type: "", msg: "" });
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const [resetCode, setResetCode] = useState('');

    // const acceptTeamInvite = async (teamId: string, membershipId: string, userId: string, secret: string) => {
    //     setLoading(true);
    //     try {
    //         const loggedIn = await account.get();
    //         if (!loggedIn) {
    //             toast.error('You must be logged in to accept the invite');
    //             router.push("/auth/login?callbackURL=/account/dashboard");
    //             return false;
    //         }

    //         await ensureMainUserRow(loggedIn);
    //         const membership = await teams.updateMembershipStatus({ teamId, membershipId, userId, secret });

    //         window.dispatchEvent(new Event('organizations:changed'));
    //         toast.success(`Joined ${membership?.teamName || 'organization'}`);
    //         return true;
    //     } catch (error) {
    //         console.error('Error accepting team invite', error);
    //         toast.error('Failed to accept invite');
    //         return false;
    //     } finally {
    //         setLoading(false);
    //     }
    // };
    
    const formatError = (msg: string) => {
        const cleaned = msg
            .replace(/^Firebase: Error \(/i, '') // remove prefix
            .replace(/\).*$/, '') // remove trailing ')' and anything after
            .replace(/^auth\//, ''); // remove auth/ namespace if present

        return cleaned.replace(/-/g, ' ').trim();
    }

    const signIn = async (email: string, password: string, callbackUrl?: string) => {
        setLoading(true);
        try {
            const res = await signInWithEmailAndPassword(auth, email, password);
            setUser(res.user);
            setPopup({ type: "success", msg: "Login Successful", timestamp: Date.now() });
            router.push(callbackUrl ? callbackUrl : "/account");
        } catch (error: unknown) {
            // Prefer FirebaseError when available, otherwise fall back to stringifying the error
            const message = error instanceof FirebaseError ? error.message : String(error);
            setPopup({ type: "error", msg: formatError(message), timestamp: Date.now() });
        } finally {
            setLoading(false);
        }
    }
    
    const signUp = async (name: string, email: string, password: string, callbackUrl?: string) => {
        setLoading(true)

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await updateFirebaseProfile(userCredential.user, { displayName: name });
            await setDoc(doc(db, 'users', userCredential.user.uid), {
                email,
                name,
                photoUrl: `https://api.dicebear.com/9.x/avataaars/svg?seed=${userCredential.user.uid}`,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            }, { merge: true });
            setUser({ ...userCredential.user });
            await sendEmailVerification(userCredential.user, {
                url: `${window.location.origin}/auth/verify-email`,
                handleCodeInApp: true,
            });
            setPopup({ type: "success", msg: "Signup Successful" });
            router.push(callbackUrl || "/account/dashboard");
        } catch (error) {
            setPopup({ type: "error", msg: error instanceof Error ? error.message.replace("Firebase: Error", "") : "Signup failed" });
        } finally {
            setLoading(false);
        }
    }

    const emailVerification = async () => {
        const currentUser = auth.currentUser;
        if (!currentUser) {
            setPopup({ type: 'error', msg: 'You must be logged in to verify your email' });
            return;
        }

        setLoading(true);
        try {
            await sendEmailVerification(currentUser, {
                url: `${window.location.origin}/auth/verify-email`,
                handleCodeInApp: true,
            });
            setPopup({ type: "success", msg: "Email verification link has been sent to your email" });
        } catch (error) {
            console.error('Failed to create email verification', error);
            setPopup({ type: 'error', msg: error instanceof Error ? error.message : 'Failed to send verification email' });
        } finally {
            setLoading(false);
        }
    };

    const updateEmailVerification = async (userId: string, secret?: string) => {
        const actionCode = secret || userId;
        setLoading(true);
        try {
            await applyActionCode(auth, actionCode);
            await auth.currentUser?.reload();
            setUser(auth.currentUser);
            setPopup({ type: "success", msg: "Email verified successfully" });
            router.push("/account/dashboard");
        } catch (error) {
            console.error('Failed to update email verification', error);
            setPopup({ type: 'error', msg: error instanceof Error ? error.message : 'Failed to verify email' });
        } finally {
            setLoading(false);
        }
    };

    const forgotPassword = async (email: string) => {
        setLoading(true);
        try {
            await sendPasswordResetEmail(auth, email);
            setPopup({ type: "success", msg: "Password reset link has been sent to your email", timestamp: Date.now() });
        } catch (error: unknown) {
            const message = error instanceof FirebaseError ? error.message : String(error);
            setPopup({ type: "error", msg: formatError(message), timestamp: Date.now() });
        } finally {
            setLoading(false);
        }
    }
    
    const verifyOtp = async (otp: string) => {
        setLoading(true);
        try {
            await verifyPasswordResetCode(auth, otp);
            setResetCode(otp);
            setPopup({ type: "success", msg: "OTP verified successfully", timestamp: Date.now() });
            router.push("/reset-password");
        } catch (error: unknown) {
            const message = error instanceof FirebaseError ? error.message : String(error);
            setPopup({ type: "error", msg: formatError(message), timestamp: Date.now() });
        } finally {
            setLoading(false);
        }
    }
    
    const updatePassword = async (password: string, userId?: string, secret?: string) => {
        setLoading(true);
        try {
            await confirmPasswordReset(auth, secret || userId || resetCode, password);
            setResetCode("");
            setPopup({ type: "success", msg: "Password reset successfully. Please login", timestamp: Date.now() });
            router.push("/auth/login");
        } catch (error: unknown) {
            const message = error instanceof FirebaseError ? error.message : String(error);
            setPopup({ type: "error", msg: formatError(message), timestamp: Date.now() });
        } finally {
            setLoading(false);
        }
    }

    const getPhotoUrl = async (email: string) => {
        try {
            const snapshot = await getDocs(collection(db, 'users'));
            const row = snapshot.docs.find((item) => item.data().email?.toLowerCase?.() === email.toLowerCase());
            return row?.data().photoUrl || row?.data().photoURL || null;
        } catch (error) {
            console.error('Failed to load photo url', error);
            return null;
        }
    }

    const readFileAsDataUrl = (file: File) =>
        new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(String(reader.result || ''));
            reader.onerror = () => reject(new Error('Unable to read the selected file'));
            reader.readAsDataURL(file);
        });

    const updateAvatar = async (file: File) => {
        const fileData = await readFileAsDataUrl(file);
        const response = await fetch('/api/cloudinary/upload', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                file: fileData,
                fileName: file.name,
                folder: process.env.VITE_CLOUDINARY_UPLOAD_FOLDER || 'profile-photos',
            }),
        });

        const payload = await response.json().catch(() => ({}));

        if (!response.ok) {
            throw new Error(payload?.error || 'Failed to upload image');
        }

        return String(payload?.secure_url || '');
    };

    const updateProfile = async ({ name, photoUrl }: { name: string; photoUrl?: string }) => {
        setLoading(true);
        try {
            const currentUser = auth.currentUser;
            if (!currentUser) throw new Error('You must be logged in to update your profile');

            await updateFirebaseProfile(currentUser, {
                displayName: name || currentUser.displayName,
                photoURL: photoUrl || currentUser.photoURL,
            });
            const rowData = {
                email: currentUser.email,
                name: currentUser.displayName || currentUser.email,
                photoUrl: currentUser.photoURL || `https://api.dicebear.com/9.x/avataaars/svg?seed=${currentUser.uid}`,
                updatedAt: new Date().toISOString(),
            };
            await setDoc(doc(db, 'users', currentUser.uid), rowData, { merge: true });
            setUser({ ...currentUser });
            setPopup({ type: 'success', msg: 'Profile updated' });
        } catch (error: unknown) {
            console.error('Failed to update profile', error);
            setPopup({ type: 'error', msg: error instanceof Error ? error.message : 'Failed to update profile' });
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const changePassword = async (currentPassword: string, newPassword: string) => {
        setLoading(true);
        try {
            const currentUser = auth.currentUser;
            if (!currentUser?.email) throw new Error('You must be logged in to change your password');
            await reauthenticateWithCredential(currentUser, EmailAuthProvider.credential(currentUser.email, currentPassword));
            await updateFirebasePassword(currentUser, newPassword);
            setPopup({ type: 'success', msg: 'Password updated' });
        } catch (error: unknown) {
            console.error('Failed to update password', error);
            setPopup({ type: 'error', msg: error instanceof Error ? error.message : 'Failed to update password' });
            throw error;
        } finally {
            setLoading(false);
        }
    };
    
    const logOut = async () => {
        try {
            await signOut(auth);
            setUser(null);
            setPopup({ type: "success", msg: "Logout Successful" });
        } catch (error) {
            setPopup({ type: "error", msg: error instanceof Error ? error.message.replace("Firebase: Error", "") : "Logout failed" });
        }
    }

    useEffect(() => {
        if(popup.type === "success") {
            toast.success(popup.msg)
        }
        else if(popup.type === "error") {
            toast.error(popup.msg)
        }
    }, [popup])

    return (
        <AuthContext.Provider value={{ user, popup, loading, setPopup, signIn, signUp, logOut, getPhotoUrl, updateAvatar, updateProfile, changePassword, updateEmailVerification, emailVerification, forgotPassword, verifyOtp, updatePassword }}>
            <Toaster containerClassName="p-8" />
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;