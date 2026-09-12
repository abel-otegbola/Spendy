// import Image from "next/image";

import { CheckCircle2 } from "lucide-react";

export default function FeaturesCard({ index, heading, text, list, img, subheading }: { index: number; heading: string, text: string, list: string[], img: string | React.ReactNode, subheading: string }) {
    return (
        <div className={`bg-gray-100 dark:bg-[#101010] md:rounded-[28px] rounded-[10px] w-full p-2 border-8 border-white dark:border-gray-500/[0.1] flex xl:flex-row flex-col md:gap-[72px] gap-8 overflow-y-auto`} style={{ zIndex: index+2, top: (index * 12) + "px"}}>
            <div className="flex flex-col justify-between xl:w-[45%] w-full gap-6 max-[480px]:gap-3 md:px-8 px-4 py-8">
                <div className="flex flex-col gap-1">
                    {/* <span className="rounded bg-gray-500/[0.09] p-2 w-fit text-[16px] opacity-50">{icon}</span> */}
                    <h1 className="font-semibold text-sm opacity-50 uppercase">{heading}</h1>
                    <p className="font-semibold 2xl:text-[28px] lg:text-[20px] md:w-[75%] text-[18px] tracking-[-0.6px] leading-[34px]">{subheading}</p>
                </div>

                <div className="flex flex-col gap-5">
                    <p className="text-sm opacity-75">{text}</p>
                </div>
                
                
                <ul className="flex flex-col gap-2 pt-4">
                    {
                        list.map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-[12px] font-semibold rounded-full px-3 py-1 bg-white dark:bg-[#202020] w-fit border border-gray-500/[0.2] opacity-75">
                                <CheckCircle2 className="text-primary w-4 h-4" />
                                {item}
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="flex bg-gradient-to-b from-[#121212] to-[#212121] text-white rounded-[10px] shadow-lg flex-1 aspect-5/4">

                {/* <Image src={img} alt="feature" width={2000} height={2000} className="object-cover w-full aspect-5/3 h-auto duration-300" /> */}
                {img}
            </div>
        </div>
    )
}