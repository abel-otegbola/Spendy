'use client'
import { Button } from "@/components/ui/button";
import { useState } from 'react';
import ScrollTextReveal from "@/components/animations/scroll-text-reveal";
import Link from "next/link";
import ScrollAnimate from "@/components/animations/scrollAnimation";
import AnimateHeading from "@/components/animations/animateHeading";
import { ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";

export default function UniqueTopbar() {
    const [open, setOpen] = useState(false)
    const pathname = usePathname()

    return (
        <div className="flex items-center justify-between md:px-[5%] px-[5%] py-2 sticky top-0 z-10">
            <Link href={"/"} className="flex items-center gap-2 md:min-w-[8%]">
                {/* <img src="/logo.png" className="w-[40px] h-[36px]" /> */}
                <div className="flex gap-1 items-center">
                    {/* <ScrollAnimate animation="slideRight" repeat={false}>
                        <LogoIcon className="text-border"/>
                    </ScrollAnimate> */}
                    <h1 className="tracking-[-3%] text-lg font-semibold">Unique AI</h1>
                </div>
            </Link>
            <div className="items-center gap-4 text-[14px] md:flex hidden p-1 px-4 bg-border/[0.2] backdrop-blur-sm rounded-full border border-border">
                {
                    [
                        { id: 0, title: "Home", href: "/landings/unique#home" },
                        { id: 1, title: "Features", href: "/landings/unique#features" },
                        { id: 2, title: "Pricing", href: "/landings/unique#pricing" },
                        { id: 3, title: "Contact/support", href: "/support" },
                    ].map(link => (
                        <div key={link.id}>
                            <Link 
                                className={`px-2 py-1 capitalize flex gap-1 items-center ${pathname.indexOf(link.href) !== -1 ? "bg-white text-black" : ""}`} 
                                href={link.href}
                                onClick={() => {
                                    // scroll to top of page
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                            >
                                <span className="font-medium">{link.title}</span>
                            </Link>
                            </div>
                    ))
                }
            </div>
            <div className="flex items-center gap-3">
                {/* <ThemeSelector /> */}
                <ScrollAnimate animation="slideLeft" repeat={false} className="md:flex hidden">
                    <button className="px-4 py-1 pr-1 flex items-center gap-2 rounded-full text-[12px] border border-border bg-white shadow-xs hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50">
                        Sign up
                        <span className="rounded-full p-[6px] bg-border/[0.5]"><ArrowRight size={15} /></span>
                    </button>
                </ScrollAnimate>
            </div>

            <ul className={`
                md:hidden fixed top-0 right-0 z-20 flex lg:flex-row flex-col justify-between lg:px-0 md:py-0 py-2 pb-8 px-6 bg-white dark:bg-[#000] lg:w-auto md:h-full h-screen w-full overflow-hidden
                ${open ? "translate-y-[0px] w-full" : "lg:translate-y-[0] -translate-y-[120%] lg:w-auto w-0"} duration-500
            `}>
                <AnimateHeading tag={"h1"} repeat={open} className="tracking-[10%] font-bold text-[16px] uppercase p-2">Spendy.</AnimateHeading>
                <div className="flex flex-col mx-2">
                <p className="opacity-50 uppercase text-[12px] my-4">menu</p>
                {
                    
                    [
                        { id: 0, title: "Features", href: "#features" },
                        { id: 1, title: "Resources", href: "#resources" },
                        { id: 2, title: "Products", href: "#products" },
                        { id: 3, title: "FAQs", href: "#faqs" },
                        { id: 4, title: "Contact Us", href: "/contact" },
                    ].map(link => (
                            <Link
                                key={link.id}
                                href={link.href} 
                                className={`py-2 duration-300`}
                                onClick={() => {
                                    setOpen(false)
                                    // scroll to top of page
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                            >
                                <ScrollTextReveal repeat={open} delay={0.1 * (link.id + 1)}>
                                    {link.title}
                                </ScrollTextReveal>
                            </Link>
                    ))
                }
                <ScrollAnimate animation="slideUp" start="top 100%" repeat={false}>
                    <Button variant="outline" className="w-full mt-6" size="sm" >Sign in</Button>  
                </ScrollAnimate>
                <ScrollAnimate animation="slideUp" start="top 100%" repeat={false}>
                    <Button className="w-full mt-6" size="sm" >Sign up</Button>  
                </ScrollAnimate>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="opacity-50 uppercase text-[12px] mx-2">Contact</p>
                    <Link href="mailto:info@spendy.com" className="mx-2 my-2 text-lg opacity-70">info@spendy.com</Link>
                </div>
            </ul>
            
            <button className="md:hidden flex flex-col justify-center items-end gap-1 text-lg w-10 h-10 sm::hidden z-[50]" onClick={() => setOpen(!open)}>
                <span className={`w-[8px] h-[2px] py-[1px] px-[10px] duration-500 transition-all bg-black dark:bg-white rounded-[2px] ${open ? "rotate-[45deg] translate-y-[5px]" : "rotate-[0deg]"}`}></span>
                <span className={`duration-500 transition-all bg-black dark:bg-white rounded-[2px] ${open ? "py-[0px] w-[0px] h-[0px] translate-x-[-24px]" : "py-[1px] px-[8px] w-[8px] h-[2px]"}`}></span>
                <span className={`w-[8px] h-[2px] py-[1px] duration-500 transition-all bg-black dark:bg-white rounded-[2px] ${open ? "rotate-[-45deg] translate-y-[-5px] px-[10px] " : "rotate-[0deg] px-[6px]"}`}></span>
            </button>
        </div>
    )
}