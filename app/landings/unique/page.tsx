import AnimateHeading from "@/components/animations/animateHeading"
import ScrollTextReveal from "@/components/animations/scroll-text-reveal"
import ScrollAnimate from "@/components/animations/scrollAnimation"
import FAQs from "@/components/sections/faqs"
import { ArrowRight, ArrowUpRight, Plus } from "lucide-react"
import ScrollTextOpacity from "@/components/animations/scroll-text-opacity"
import CreateAccount from "@/assets/icons/createAccount"
import ConnectAccount from "@/assets/icons/connectAccount"
import BuildPlans from "@/assets/icons/buildPlans"
import UniqueTopbar from "@/components/sections/topbars/uniqueTopbar"
import HeroImageScroll from "@/components/animations/hero-image-scroll"
import HeroImage from "@/assets/icons/hero"

export default function Page() {
  return (
    <main className="">
      <div className="bg-[url('/bg2.png')] bg-cover bg-top bg-no-repeat bg-fixed pt-4 relative">
      <UniqueTopbar />
      {/* <video autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover z-[-1]">
        <source src="/bg.mp4" type="video/mp4" />
      </video> */}
      <header className="lg:px-[5%] md:pt-[6%] pt-[100px] md:mx-auto flex flex-col justify-center items-center text-center w-full">
      
        <div className="flex flex-col items-center text-center gap-4 md:px-[18%] sm:px-[20%] overflow-hidden w-full">
          <div className="relative overflow-hidden w-fit h-fit">
            <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/[0.4] xl:text-[3em] lg:text-[3em] sm:text-[3em] text-[48px] leading-[120%] tracking-[-4%]">
              Build at the <br /> Speed of Thought
            </h1>
          </div>
          <ScrollTextReveal repeat={true} tag="p" delay={0.6} className="relative overflow-hidden mb-4 md:w-[100%] mx-auto opacity-50">
            <span>Unique helps you build a no-code AI app in minutes</span>
          </ScrollTextReveal>

          <ScrollAnimate className="relative w-fit h-fit overflow-hidden p-[2px] rounded-full" start="top 100%" delay={1} animation="slideUp">
            <span className="absolute top-0 left-0 bg-gradient-to-r from-lime-300 via-green-400 to-transparent w-full h-[48px] z-1 blur-[8px] rounded-full animate-spin-slow"></span>
            <button className="relative h-[48px] block px-2 pr-4 flex items-center justify-between gap-2 border border-border bg-white/[0.4] dark:bg-[#101010]/[0.4] backdrops-blur-sm font-medium rounded-full shadow-lg z-2">
              <span className="rounded-full p-[6px] bg-black dark:bg-white/[0.05] text-white "><ArrowUpRight size={15} /></span> 
              <span className="">Get early access</span>
            </button>
          </ScrollAnimate>
            
          {/* hero image */}
          <HeroImageScroll className="sm:w-[300vw] md:scale-60 md:[perspective:1200px] flex justify-center items-end md:mt-6 mt-32 w-[92%] sm:translate-y-[-80px] translate-y-[-60px]">
            <div className="relative mx-auto w-fit rounded-[12px] overflow-hidden p-[2px]">
              <span className="absolute top-0 left-0 bg-gradient-to-r from-green-400 via-transparent to-transparent w-[120%] h-[120%] -translate-x-[10%] z-1 blur-[8px] animate-spin-fast"></span>
              <div className="flex flex-col gap-2 relative h-fit border border-green-400/[0.2] bg-white dark:bg-[#101010] z-2 rounded-[12px] overflow-hidden">
                <HeroImage className="w-full h-auto " />
              </div>
            </div>
          </HeroImageScroll>

        </div>
      
      </header>

      </div>

      <section className="pb-[40px] -mt-[40px]">
        <div className="relative my-4 md:w-[60%] w-[92%] mx-auto flex flex-col border border-border/[0.8] shadow-[0px_4px_10px_rgba(0,0,0,0.05)] p-2 overflow-hidden justify-between rounded-full bg-[#FFF] dark:bg-[#181818]/[0.8] backdrop-blur-sm">
          <div className="flex items-center gap-2 justify-between w-full pl-2">
            <button className="flex items-center gap-1 p-[6px] rounded-full bg-gray-200/[0.05] hover:bg-gray-200/[0.3] focus:bg-primary focus:text-white">
              <Plus size={16} />
            </button>
            <input
              placeholder="Describe the app you want to build"
              className="flex-1 h-full p-2 bg-transparent border-none focus:ring-0 focus:outline-none text-sm"
            />
            <div className="relative w-fit -fit overflow-hidden p-[2px] rounded-full">
              <span className="absolute top-0 left-0 bg-gradient-to-r from-lime-300 via-green-400 to-transparent w-full h-[40px] z-1 blur-[8px] rounded-full animate-spin-slow"></span>
              <button className="relative h-[40px] block px-2 pr-4 flex items-center justify-between gap-2 border border-border bg-white/[0.4] dark:bg-[#101010]/[0.4] backdrops-blur-sm font-medium rounded-full w-fit shadow-lg z-2">
                <span className="rounded-full p-[6px] bg-black dark:bg-white/[0.05] text-white "><ArrowUpRight size={15} /></span> 
                <span className="text-sm">Generate app</span>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-[100px] bg-[#FBFBFB] dark:bg-[#121212] bg-[url('/about-bg.png')] bg-cover bg-center flex sm:flex-row flex-col min-h-[600px] justify-between gap-4 w-full md:px-[5%] px-4 py-[40px]">
          <div className="flex flex-col justify-end gap-4 sm:w-[50%] w-full">
            <div className="relative w-fit -fit overflow-hidden p-[2px] rounded-full">
              <span className="absolute top-0 left-0 bg-gradient-to-r from-lime-300 via-green-400 to-transparent w-full h-[40px] z-1 blur-[8px] rounded-full animate-spin-slow"></span>
              <button className="relative h-[40px] block px-4 flex items-center justify-between gap-2 border border-border bg-white dark:bg-[#101010] backdrops-blur-sm font-medium rounded-full w-fit shadow-lg z-2">
                <span className="text-sm">From idea to app</span>
              </button>
            </div>
            <h2 className="lg:text-[3em] sm:text-[40px] text-[28px] leading-[110%] bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/[0.4]">Describe it. <br /> Build it. Ship it.</h2>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 sm:w-[50%] w-full">
            <ScrollTextOpacity className="lg:text-[32px] sm:text-[32px] text-[24px] leading-[120%]">Turn a simple description into a functional app with screens, workflows, and data shaped around your idea. Refine it with natural language until it works the way you want.</ScrollTextOpacity>
          </div>
        </div>
      </section>

      <section className="py-[40px]">
        
        <div className="flex flex-col items-end gap-4 md:px-[5%] px-4 py-12">
          <div className="flex flex-col items-center gap-6 w-full md:pr-6">
            <AnimateHeading repeat={false} tag="p" start="top 90%" className="w-[75%] font-normal leading-[120%] tracking-[-2%] md:text-[28px] text-[24px] text-center">
              Built for the way ideas move
            </AnimateHeading>
          </div>
        </div>

        {/* features */}

        <div className="grid md:grid-cols-2 gap-4 md:w-[90%] mx-auto mt-12 md:px-0 px-4">
          {[
            {
              eyebrow: "01 / Prompt",
              title: "Start with a sentence",
              text: "Describe your product in plain language and get a polished first version without starting from a blank screen.",
              span: "md:col-span-1",
              img: <CreateAccount className="text-white dark:text-[#101010] w-[78%] h-auto mx-auto" />
            },
            {
              eyebrow: "02 / Generate",
              title: "Working by design",
              text: "Generate connected screens, workflows, and data structures that are ready to explore and improve.",
              span: "md:col-span-1",
              img: <ConnectAccount className="text-white dark:text-[#101010] w-full h-auto mx-auto" />
            },
            {
              eyebrow: "03 / Refine",
              title: "Iterate without limits",
              text: "Ask for changes, test new directions, and shape every detail without rebuilding from scratch.",
              span: "md:col-span-1",
              img: <BuildPlans className="text-white dark:text-[#101010] w-[78%] h-auto mx-auto" />
            },
            {
              eyebrow: "04 / Launch",
              title: "Make it yours",
              text: "Turn a promising prototype into a focused product that feels right for your customers and your workflow.",
              span: "md:col-span-1",
              img: <BuildPlans className="text-white dark:text-[#101010] w-[62%] h-auto mx-auto" />
            },
          ].map(({ eyebrow, title, text, img, span }, index) => (
            <div key={eyebrow} className={`flex min-h-[430px] flex-col gap-6 rounded-[12px] bg-gray-100/[0.5] dark:bg-[#101010] w-full p-4 ${span}`}>
              <div className="flex min-h-[220px] items-center justify-center overflow-hidden rounded-[8px] bg-gradient-to-b from-white to-gray-100 dark:from-[#202020] dark:to-[#151515]">
                <ScrollAnimate animation="zoomIn" delay={index * 0.15} className="w-full">
                  {img}
                </ScrollAnimate>
              </div>
              <div className="flex flex-col gap-2 px-2 pb-2">
                <span className="text-[10px] font-medium uppercase tracking-[0.12em] opacity-50">{eyebrow}</span>
                <ScrollTextReveal repeat={true} tag="h3" delay={index * 0.15} className="text-xl font-medium md:text-2xl">{title}</ScrollTextReveal>
                <ScrollTextReveal repeat={true} tag="p" delay={index * 0.15} className="max-w-[520px] text-sm leading-6 opacity-60">{text}</ScrollTextReveal>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FAQs />

      <section className="child md:mx-[5%] mx-6 md:my-[100px] my-12 py-[47px] px-4 md:rounded-[20px] rounded-[10px] bg-gradient-to-b from-[#212121] to-[#101010] text-white flex flex-col gap-4 justify-center items-center text-center">
        <div className="md:p-[5%] lg:w-[45%] md:w-[70%] md:py-[5%] py-[10%] md:mx-auto flex flex-col justify-center items-center text-center gap-8 z-2 overflow-hidden">
          <AnimateHeading repeat={true} tag="h1" className="2xl:text-[32px] sm:text-[28px] text-[24px] leading-[130%]">
            Ready to build your <br /> next big idea
          </AnimateHeading>

          <ScrollAnimate className="" delay={1} animation="slideUp">
            <button className="px-8 py-2 pr-2 flex items-center justify-between gap-3 text-white bg-primary font-medium rounded-full w-fit shadow-lg">
              <span className="">Start building </span>
              <span className="rounded-full p-2 bg-black/[0.5]"><ArrowRight size={15} /></span>
            </button>
          </ScrollAnimate>
        </div>
      </section>


    </main>
  )
}
