import Unique from "@/assets/icons/unique";
import ScrollTextReveal from "@/components/animations/scroll-text-reveal";
import ScrollAnimate from "@/components/animations/scrollAnimation";
import { ArrowRight, Bell, Bot, PenTool } from "lucide-react";

export default function IterateCard() {
    return (
        <div className="flex flex-col gap-4 w-[75%] mx-auto">
            <div className="relative p-[6px] overflow-hidden w-[240px] mx-auto rounded-[24px] bg-[#101010]">
              <span className="absolute top-0 left-0 bg-gradient-to-r from-green-400 via-green-300 to-lime-500 w-[50%] h-[120%] translate-x-[10%] z-1 blur-[8px] animate-spin-slow"></span>

                <div className="relative flex flex-col justify-end gap-2 w-full bg-white dark:bg-[#101010] bg-cover bg-center rounded-[20px] p-3 pb-6 aspect-2/4 z-2">
                    <div className="flex justify-between items-center">
                        <ScrollAnimate animation="slideRight" repeat={false}>
                            <Unique className="text-border w-6 h-6"/>
                        </ScrollAnimate>
                        <span className="h-6 w-6 rounded-full bg-border"></span>
                    </div>
                    <div className="flex-1 flex items-end w-full bg-[url('/woman.png')] bg-cover bg-top rounded-[12px] ">
                        <div className="bg-gradient-to-b to-[#101010] h-[40%] w-full"></div>
                    </div>
                    <div className="relative overflow-hidden w-fit h-fit">
                        <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/[0.4] lg:text-[2em] sm:text-[1em] text-[28px] leading-[100%] tracking-[-4%]">
                            Build Financial Freedom
                        </h1>
                    </div>
                    <ScrollTextReveal repeat={true} tag="p" delay={0.6} className="relative text-xs overflow-hidden mb-4 md:w-[100%] mx-auto opacity-50">
                    <span>We provide financial tools for seamless financial growth</span>
                    </ScrollTextReveal>
                    <div className="relative flex items-end gap-2 justify-between w-full rounded-full z-2">
                        <div className="flex gap-2 items-center justify-center text-[10px] tracking-[0.12em] w-full px-4 py-3 rounded bg-white text-black font-semibold">
                            <span className="opacity-75">Get Started</span>
                            <ArrowRight size={12} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function IterateIcons() {
    return (
        <div className="flex flex-1 items-center opacity-50">
            <div className="relative p-[2px] overflow-hidden rounded-[20px] w-fit">
                <span className="absolute top-0 left-0 bg-gradient-to-r from-border to-green-500 w-[120%] h-[120%] -translate-x-[10%] z-1 blur-[8px] animate-spin-fast"></span>

                <div className={`relative flex gap-4  bg-white dark:bg-[#121212] items-center justify-center text-[10px] font-medium tracking-[0.12em] w-fit p-4 border border-border rounded-[18px] z-2`}>
                    <PenTool size={48} strokeWidth={0.5} />
                </div>
            </div>
            <div className="flex flex-col gap-2 w-[40%]">
                <div className="w-full h-[2px] bg-border/[0.4] rounded-full"></div>
                <div className="w-full h-[2px] bg-border/[0.4] rounded-full"></div>
                <div className="w-full h-[2px] bg-border/[0.4] rounded-full"></div>
                <div className="w-full h-[2px] bg-border/[0.4] rounded-full"></div>
            </div>
            <div className="relative p-[2px] overflow-hidden rounded-[20px] w-fit">
                <span className="absolute top-0 left-0 bg-gradient-to-r from-border to-green-500 w-[120%] h-[120%] -translate-x-[10%] z-1 blur-[8px] animate-spin-fast"></span>

                <div className={`relative flex gap-4  bg-white dark:bg-[#121212] items-center justify-center text-[10px] font-medium tracking-[0.12em] w-fit p-4 border border-border rounded-[18px] z-2`}>
                    <Bot size={48} strokeWidth={0.5} />
                </div>
            </div>

        </div>
    )
}