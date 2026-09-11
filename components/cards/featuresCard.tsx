// import Image from "next/image";
import AnimateHeading from "../animations/animateHeading";

export default function FeaturesCard({ index, heading, text }: { index: number; heading: string, text: string, img: string }) {
    return (
        <div className={`bg-white dark:bg-[#101010] w-full p-4 border border-gray-500/[0.1] flex xl:flex-row flex-col md:gap-[72px] gap-8 overflow-y-auto`} style={{ zIndex: index+2, top: (index * 20) + "px", borderRadius: "28px" }}>
            <div className="flex flex-col justify-between xl:w-[45%] w-full max-[480px]:gap-3 p-8">
                <div className="flex items-center gap-4">
                    {/* <p className="opacity-50 uppercase text-lg ">0{index + 1}</p> */}
                    <AnimateHeading className="font-semibold 2xl:text-[28px] lg:text-[20px] md:w-[75%] text-[18px] tracking-[-0.6px] leading-[34px]">{heading}</AnimateHeading>
                </div>

                <div className="flex flex-col gap-5">
                    <p className="text-sm opacity-50">{text}</p>
                    {/* <Link href="https://spendylab.vercel.app" className="text-sm flex gap-[10px] items-center font-medium pt-4">Learn more <ArrowRight size={12} /></Link> */}
                </div>
            </div>
            <div className="gap-[1.8px] bg-gray-100 dark:bg-[#212121] rounded-[10px] flex-1 aspect-5/4">
                {/* <Image src={img} alt="feature" width={2000} height={2000} className="object-cover w-full aspect-5/3 h-auto duration-300" /> */}
            </div>
        </div>
    )
}