'use client'
import { useContext, type ReactElement } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
// import ThemeSelector from "../themeSelector/ThemeSelector";
import LogoIcon from "@/assets/icons/logo";
import { LayoutDashboard, BookOpenText, WalletCards, Target, ChartNoAxesCombined, UserRound, Settings, LogOut, SidebarIcon, XCircleIcon } from "lucide-react";
import { AuthContext } from "../../context/authContext";

export interface Link {
    id: number; label: string; icon: ReactElement, activeIcon: ReactElement, link: string, subtext?: string
}

function Sidebar({ open, setOpen }: { open: boolean, setOpen: (value: boolean) => void }) {
    const pathname = usePathname();
    const { user, logOut } = useContext(AuthContext);

    const isLinkActive = (link: Link) =>
        pathname === link.link || (link.link !== "/account" && pathname.startsWith(`${link.link}/`));

    // Get user's initials for avatar
    const getUserInitial = () => {
        if (user?.firstname && typeof user.firstname === 'string') {
            return user.firstname.charAt(0).toUpperCase();
        } else if (user?.email && typeof user.email === 'string') {
            return user.email.charAt(0).toUpperCase();
        }
        return 'U';
    };

    const generalLinks: Link[] = [
        { id: 0, label: "Home", icon: <LayoutDashboard size={20} />, activeIcon: <LayoutDashboard size={20} strokeWidth={2.5} />, link: "/account" },
        { id: 1, label: "Learn", icon: <BookOpenText size={20} />, activeIcon: <BookOpenText size={20} strokeWidth={2.5} />, link: "/account/learn" },
        { id: 2, label: "Budget", icon: <WalletCards size={20} />, activeIcon: <WalletCards size={20} strokeWidth={2.5} />, link: "/account/budget" },
        { id: 3, label: "Goals", icon: <Target size={20} />, activeIcon: <Target size={20} strokeWidth={2.5} />, link: "/account/goals" },
        { id: 4, label: "Progress", icon: <ChartNoAxesCombined size={20} />, activeIcon: <ChartNoAxesCombined size={20} strokeWidth={2.5} />, link: "/account/progress" },
    ]
    
    const otherLinks: Link[] = [
        { id: 5, label: "Profile", icon: <UserRound size={20} />, activeIcon: <UserRound size={20} strokeWidth={2.5} />, link: "/account/profile" },
        { id: 6, label: "Settings", icon: <Settings size={20} />, activeIcon: <Settings size={20} strokeWidth={2.5} />, link: "/account/settings" },
    ]

    return (
        <div className={`md:sticky top-0 left-0 h-screen w-0 duration-500 text-[14px] ${open ? "sm:w-[70px]": "sm:w-[250px]"}`}>
            <button className={`md:absolute fixed top-[18px] md:flex hidden flex-col justify-center items-center backdrop-blur-md gap-1 z-[50] p-[6px] h-8 w-8 bg-gray-100 dark:bg-gray-500/[0.05] outline outline-offset-2 outline-secondary/[0.2] cursor-pointer rounded-full ${open ? "md:-right-3 right-5" : "right-5"}`} onClick={() => setOpen(!open)}>
                { open ?
                <XCircleIcon size={24} color="currentColor" />
                :
                <SidebarIcon size={20} color="currentColor" />
                }
            </button>

            <div  className={`fixed top-0 right-0 md:hidden bg-[#000]/[0.5] duration-300 ${open ? "w-full h-full" : "w-0 h-full"}`} onClick={() => setOpen(false)}></div>
            <div  className={`flex flex-col justify-between md:h-full bg-white dark:bg-[#121212] border-x border-gray-500/[0.1] dark:border-gray-500/[0.2] h-[100vh] md:sticky fixed md:shadow-none shadow-lg md:top-0 top-0 py-4 px-3 right-0 overflow-y-auto overflow-x-hidden z-[5] transition-all duration-700 ${open ? "sm:w-[70px] w-[280px] translate-x-[0px] opacity-[1]": "sm:w-full translate-x-[400px] md:translate-x-[0px] md:opacity-[1] opacity-[0]"}`}>  
                <Link href={"/"} className={`flex items-center fill-black dark:fill-white mb-2 h-[38px] ${open ? "sm:px-0 px-4" : "px-[14px]" }`}>
                    <LogoIcon width={24} />
                </Link>

                {/* Navigation Links */}
                <div className="flex-1 flex flex-col gap-6 mt-8">
                    <div className="flex flex-col gap-2">
                        {/* <p className={`text-gray-500 text-[12px] mb-2 px-4 ${open ? "sm:opacity-0" : ""}`}>MAIN</p> */}
                        {
                        generalLinks.map(link => {
                                return (
                                <Link key={link.id} onClick={() => setOpen(false)} href={ link.link} className={`relative flex items-center justify-between px-3 py-[6px] rounded-[8px] duration-300 ${isLinkActive(link) ? "text-primary" : "font-medium opacity-50 hover:bg-gray-500/[0.05]"}`}>
                                    <div className="flex items-center gap-6 text-[15px]">
                                        <span className={`w-[18px] ${isLinkActive(link) ? "text-primary opacity-100" : ""}`}>{isLinkActive(link) ? link.activeIcon : link.icon}</span>
                                        <span className={`flex-1 break-normal font-medium duration-500 ${open ? "sm:hidden" : ""}`}>{link.label} </span>
                                    </div>
                                    { link.subtext ? <span className="flex items-center justify-center bg-primary text-white text-[9px] rounded-full px-[6px]">{link.subtext}</span> : ""}
                                </Link>
                                )
                        })
                        }
                        {/* <p className={`text-gray-500 text-[12px] mb-2 px-4 mt-6 ${open ? "sm:opacity-0" : ""}`}>OTHERS</p> */}
                        <span className="w-full border-t border-gray-500/[0.1] my-6"></span>
                        {
                       otherLinks.map(link => {
                                return (
                                <Link key={link.id} onClick={() => setOpen(false)} href={ link.link} className={`relative flex items-center justify-between px-3 py-[6px] rounded-[8px] duration-300 ${isLinkActive(link) ? "text-primary" : "font-medium opacity-50 hover:bg-gray-500/[0.05]"}`}>
                                    <div className="flex items-center gap-6 text-[15px]">
                                        <span className={`w-[18px] ${isLinkActive(link) ? "text-primary opacity-100" : ""}`}>{isLinkActive(link) ? link.activeIcon : link.icon}</span>
                                        <span className={`flex-1 break-normal font-medium duration-500 ${open ? "sm:hidden" : ""}`}>{link.label} </span>
                                    </div>
                                    { link.subtext ? <span className="flex items-center justify-center bg-primary text-white text-[9px] rounded-full px-[6px]">{link.subtext}</span> : ""}
                                </Link>
                                )
                        })
                        }
                        
                        <button onClick={() => {setOpen(false); logOut()}} className={`relative flex items-center justify-between px-3 py-[6px] md:rounded-[8px] duration-300 font-medium opacity-50 hover:bg-gray-500/[0.05]`}>
                            <div className="flex items-center gap-6">
                                <span className={`w-[18px]`}><LogOut size={20} /></span>
                                <span className={`flex-1 break-normal duration-500 ${open ? "sm:hidden" : ""}`}>Logout </span>
                            </div>
                        </button>
                    </div>
                </div>

                {/* User Info & Theme Toggle */}
                <div className="flex flex-col gap-3 pt-4 mt-4 border-t border-gray-200 dark:border-gray-800">
                    
                    {/* Theme Selector */}
                    {/* <div className={``}>
                        <ThemeSelector openSidebar={open} />
                    </div> */}

                    {/* User Info */}
                    {user && (
                        <div className={`flex items-center gap-3 p-1`}>
                            {/* User Avatar */}
                            <div className="w-10 h-10 rounded-full bg-border border-input flex items-center justify-center text-white font-bold  flex-shrink-0">
                                {getUserInitial()}
                            </div>
                            
                            {/* User Details */}
                            <div className={`flex-1 min-w-0`}>
                                <p className="font-medium text-sm">
                                    <span className=" capitalize">{user?.firstname || user?.email?.split('@')[0]}</span>
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                                    {user.email || ''}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
