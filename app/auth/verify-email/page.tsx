import React, { useContext, useEffect } from 'react'
import LogoIcon from '@/assets/icons/logo'
import { AuthContext } from '@/context/authContext'
import { useSearchParams } from 'next/navigation'

function VerifyEmailPage() {
    const URLSearchParams = useSearchParams()
    const secret = URLSearchParams.get("secret") || ""
    const userId = URLSearchParams.get("userId") || ""  
    const { updateEmailVerification } = useContext(AuthContext)

    useEffect(() => {
        if (secret && userId) {
            updateEmailVerification(userId, secret)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [secret, userId])

    return (
        
        <div className="flex md:w-[55%] h-screen w-full items-center justify-center">
            <div className="sm:w-[400px] md:mx-0 mx-auto w-full p-6">
                <div className="flex flex-col justify-center gap-6 md:p-[5%]">
                    <LogoIcon />
                    <h1 className='md:text-[32px] text-[20px] font-semibold leading-[120%]'>Email Verification</h1>
                    
                    <p>Verifying your email address...</p>
                </div>
            </div>
        </div>
  )
}

export default VerifyEmailPage