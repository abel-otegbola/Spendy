"use client"

import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import AnimateHeading from "../animations/animateHeading";
import ScrollTextReveal from "../animations/scroll-text-reveal";
import ScrollAnimation from "../animations/scrollAnimation";

export default function FeaturesCard({ index, heading, text, list, img, subheading }: { index: number; heading: string, text: string, list: string[], img: string | React.ReactNode, subheading: string }) {
    const cardRef = useRef<HTMLDivElement | null>(null)

    return (
        <div ref={cardRef} className={`child bg-[#FBFBFB] dark:bg-[#101010] rounded-[20px] w-full p-2 border-8 border-white dark:border-gray-500/[0.1] grid grid-cols-2 max-[500px]:grid-cols-1 md:gap-8 gap-8`} style={{ zIndex: index+2, top: (index * 12) + "px"}}>
            <div className={`flex flex-col justify-between max-[500px]:w-full gap-6 max-[480px]:gap-3 md:px-8 px-2 md:py-8 py-4`}>
                <div className="flex flex-col gap-1">
                    {/* <span className="rounded bg-gray-500/[0.09] p-2 w-fit text-[16px] opacity-50">{icon}</span> */}
                    <ScrollTextReveal triggerRef={cardRef}  start={"top 60%"} repeat={false} tag="h1" className="font-semibold text-sm opacity-50 uppercase">{heading}</ScrollTextReveal>
                    <AnimateHeading triggerRef={cardRef}  start={"top 60%"}  className="2xl:text-[28px] lg:text-[20px] md:w-[75%] text-[18px] tracking-[-0.2px] leading-[34px]">{subheading}</AnimateHeading>
                </div>

                <div className="flex flex-col gap-5">
                    <ScrollTextReveal triggerRef={cardRef} repeat={false} tag="p" className="text-sm opacity-75">{text}</ScrollTextReveal>
                </div>
                
                
                <ul className="flex flex-col gap-2 pt-4">
                    {
                        list.map((item, i) => (
                            <ScrollAnimation triggerRef={cardRef} animation="slideRight" start={"top 60%"}  delay={i * 0.1} repeat={false} key={i}>
                                <li className="flex items-center gap-1 text-[12px] font-medium rounded-full pl-[6px] px-3 py-1 bg-white dark:bg-[#202020] w-fit border border-gray-500/[0.2] opacity-75">
                                    <CheckCircle2 className="text-primary w-4 h-4" />
                                    {item}
                                </li>
                            </ScrollAnimation>
                        ))
                    }
                </ul>
            </div>
            <div className={`flex justify-center h-full min-h-[300px] w-full bg-gradient-to-b from-white to-[#FBFBFB] dark:from-[#121212] dark:to-[#212121] text-white rounded-[10px] ${index === 0 ? "items-end" :  "md:items-center items-start"}`}>
                <ScrollAnimation triggerRef={cardRef} animation="zoomIn" start={"top 60%"}  repeat={false} className="">
                {img}
                </ScrollAnimation>
            </div>
        </div>
    )
}