"use client"

import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import AnimateHeading from "../animations/animateHeading";
import ScrollTextReveal from "../animations/scroll-text-reveal";
import ScrollAnimation from "../animations/scrollAnimation";

export default function FeaturesCard({ index, heading, text, list, img, subheading }: { index: number; heading: string, text: string, list: string[], img: string | React.ReactNode, subheading: string }) {
    const cardRef = useRef<HTMLDivElement | null>(null)

    return (
        <div ref={cardRef} className={`bg-[#FBFBFB] dark:bg-[#101010] rounded-[20px] w-full p-2 border-8 border-white dark:border-gray-500/[0.1] flex max-[500px]:flex-col flex-row md:gap-8 gap-8 overflow-y-auto`} style={{ zIndex: index+2, top: (index * 12) + "px"}}>
            <div className={`flex flex-col justify-between max-[500px]:w-full w-[46%] gap-6 max-[480px]:gap-3 md:px-8 px-4 py-8 ${index%2 !== 0 ? "md:order-2 order-1" : ""}`}>
                <div className="flex flex-col gap-1">
                    {/* <span className="rounded bg-gray-500/[0.09] p-2 w-fit text-[16px] opacity-50">{icon}</span> */}
                    <ScrollTextReveal triggerRef={cardRef} repeat={false} start={`top ${-(index * 90) + 78}%`} tag="h1" className="font-semibold text-sm opacity-50 uppercase">{heading}</ScrollTextReveal>
                    <AnimateHeading triggerRef={cardRef}  start={`top ${-(index * 90) + 78}%`} className="font-medium 2xl:text-[28px] lg:text-[20px] md:w-[75%] text-[18px] tracking-[-0.2px] leading-[34px]">{subheading}</AnimateHeading>
                </div>

                <div className="flex flex-col gap-5">
                    <ScrollTextReveal triggerRef={cardRef} repeat={false} start={`top ${-(index * 90) + 78}%`} tag="p" className="text-sm opacity-75">{text}</ScrollTextReveal>
                </div>
                
                
                <ul className="flex flex-col gap-2 pt-4">
                    {
                        list.map((item, i) => (
                            <ScrollAnimation triggerRef={cardRef} animation="slideRight" delay={i * 0.1} repeat={false} start={`top ${-(index * 90) + 78}%`} key={i}>
                                <li className="flex items-center gap-1 text-[12px] font-medium rounded-full pl-[6px] px-3 py-1 bg-white dark:bg-[#202020] w-fit border border-gray-500/[0.2] opacity-75">
                                    <CheckCircle2 className="text-primary w-4 h-4" />
                                    {item}
                                </li>
                            </ScrollAnimation>
                        ))
                    }
                </ul>
            </div>
            <div className={`flex pt-[6%] min-h-[370px] bg-gradient-to-b from-white to-[#FBFBFB] dark:from-[#121212] dark:to-[#212121] text-white rounded-[10px] flex-1 aspect-5/4 ${index%2 !== 0 ? "md:order-1 order-2" : index === 0 ? "items-end" :  ""}`}>
                <ScrollAnimation triggerRef={cardRef} animation="zoomIn" repeat={false} start={`top ${-(index * 90) + 78}%`} className="">
                {img}
                </ScrollAnimation>
            </div>
        </div>
    )
}