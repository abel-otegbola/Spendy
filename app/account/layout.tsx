'use client'
import { useContext, useState } from 'react';
import LogoIcon from "@/assets/icons/logo";
import SearchBar from "@/components/search/searchBar";
import Sidebar from "@/components/sidebar/sidebar"
import { BellIcon } from "lucide-react";
import Link from "next/link";
import { AuthContext } from "../../context/authContext";

function AcoountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const { user } = useContext(AuthContext)
    const [open, setOpen] = useState(false)
    // Get user's initials for avatar
    const getUserInitial = () => {
        if (user?.firstname && typeof user.firstname === 'string') {
            return user.firstname.charAt(0).toUpperCase();
        } else if (user?.email && typeof user.email === 'string') {
            return user.email.charAt(0).toUpperCase();
        }
        return 'U';
    };

  return (
    <div className="flex">
        <Sidebar open={open} setOpen={setOpen} />
        <div className="flex-1">
            <div className="flex flex-wrap gap-4 justify-between bg-border/[0.1] items-center md:pl-8 p-4 py-2 border-b border-gray-500/[0.1]">
              <Link href={"/"} className={`md:hidden flex items-center fill-black dark:fill-white h-[24px]`}>
                  <LogoIcon width={20} />
              </Link>
              <div className="md:block hidden">
                <SearchBar />
              </div>

              <div className="flex items-center gap-6">
                <Link href="/inbox"> <button className="p-[6px] h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-500/[0.05] outline outline-offset-2 outline-secondary/[0.2]"><BellIcon size={20} /></button></Link>
                
                <div className={`flex items-center gap-2 p-1 md:mr-0 mr-6`} onClick={() => setOpen(!open)}>
                    {/* User Avatar */}
                    <div className="w-9 h-9 rounded-full bg-border flex items-center justify-center text-white font-bold  flex-shrink-0">
                        {getUserInitial()}
                    </div>
                    
                    {/* User Details */}
                    <div className={`flex-1 min-w-0 md:block hidden`}>
                        <p className="font-medium text-sm">
                            <span className=" capitalize">{user?.firstname || user?.email?.split('@')[0]}</span>
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                            {user.email || ''}
                        </p>
                    </div>
                </div>
              </div>
            </div>
            { children }
        </div>
    </div>
  )
}

export default AcoountLayout