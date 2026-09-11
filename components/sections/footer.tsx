import Link from 'next/link';
import FacebookIcon from "@/assets/icons/facebook";
import InstagramIcon from "@/assets/icons/instagram";
import TwitterIcon from "@/assets/icons/twitter";
import LinkedinIcon from "@/assets/icons/linkedin";
import AnimateHeading from '../animations/animateHeading';
// import Image from 'next/image';

export default function Footer() {
    
    const socialLinks = [
        { id: 'facebook', href: 'https://facebook.com', icon: FacebookIcon },
        { id: 'instagram', href: 'https://instagram.com', icon: InstagramIcon },
        { id: 'twitter', href: 'https://x.com', icon: TwitterIcon },
        { id: 'linkedin', href: 'https://linkedin.com', icon: LinkedinIcon },
    ];
    
    return (
        <footer className="md:pb-0 pb-[32px] bg-gradient-to-b from-[#121212] to-[#000] lg:px-[15%] md:px-[5%] px-6 py-16 text-white">
            <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-12 py-[40px]">
            <div className="md:col-span-2 text-white flex flex-col gap-5">
                <Link href={"/"} className="flex items-center gap-2 md:min-w-[10%]">
                    {/* <Image src="/Spendy.svg" width={26} height={26} alt="Spendy Logo" className="w-[26px] h-[26px] rounded" /> */}
                    <div className="flex flex-col gap-0">
                        <AnimateHeading tag={"h1"} className="tracking-[10%] font-bold text-[16px] uppercase">Spendy.</AnimateHeading>
                    </div>
                </Link>
                <div className="flex items-center gap-2">
                    {
                        socialLinks.map((link) => (
                            <Link key={link.id} href={link.href} title={link.id} aria-label={link.id} target="_blank" rel="noopener noreferrer" className="text-white p-2 rounded-full border border-white/10">
                                <link.icon className="h-3 w-3" />
                            </Link>
                        ))
                    }
                </div>
            </div>

            <div className="flex flex-col gap-5">
                <p className="font-semibold text-[16px] leading-[24px] tracking-[-0.1%]">
                Products
                </p>
                <div className="flex flex-col text-sm">
                    {
                        ["features", "solutions", "pricing", "releases"].map(link => (
                            <Link href={`/${link.replaceAll(" ", "-")}`} className="capitalize font-medium leading-[120%] tracking-[-2%] py-2 hover:opacity-100 opacity-50" key={link}>{link}</Link>
                        ))
                    }
                </div>            
            </div>
            
            <div className="flex flex-col gap-5">
                <p className="font-semibold text-[16px] leading-[24px] tracking-[-0.1%]">
                Company
                </p>
                <div className="flex flex-col text-sm">
                    {
                        ["About Us", "Careers", "Contact"].map(link => (
                            <Link href={`/${link.replaceAll(" ", "-")}`} className="capitalize font-medium leading-[120%] tracking-[-2%] py-2 hover:opacity-100 opacity-50" key={link}>{link}</Link>
                        ))
                    }
                </div>
            </div>

            <div className="flex flex-col gap-5">
                <p className="font-semibold text-[16px] leading-[24px] tracking-[-0.1%]">
                Resources
                </p>
                <div className="flex flex-col text-sm">
                    {
                        ["blog", "newsletter", "help center"].map(link => (
                            <Link href={`/${link.replaceAll(" ", "-")}`} className="capitalize font-medium leading-[120%] tracking-[-2%] py-2 hover:opacity-100 opacity-50" key={link}>{link}</Link>
                        ))
                    }
                </div>
            </div>

        </div>

        <div className="flex md:flex-row flex-col gap-8 justify-center md:items-end py-12 border-t border-border">
            <p className="font-medium md:px-8">2026 &copy; Spendy. All rights reserved.</p>
        </div>
      </footer>
    )
}