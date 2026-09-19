import AnimateHeading from "@/components/animations/animateHeading"
import ScrollTextReveal from "@/components/animations/scroll-text-reveal"
import ScrollAnimate from "@/components/animations/scrollAnimation"
import FAQs from "@/components/sections/faqs"
import { ArrowRight, ArrowUpRight, Link2, Target } from "lucide-react"
import EurroIcon from "@/assets/clients/eurro"
import FimmerIcon from "@/assets/clients/fimmer"
import InfiniIcon from "@/assets/clients/infini"
import OriginaIcon from "@/assets/clients/origina"
import SitaraIcon from "@/assets/clients/sitara"
import ScrollTextOpacity from "@/components/animations/scroll-text-opacity"
import CreateAccount from "@/assets/icons/createAccount"
import ConnectAccount from "@/assets/icons/connectAccount"
import BuildPlans from "@/assets/icons/buildPlans"
import UniqueTopbar from "@/components/sections/topbars/uniqueTopbar"

export default function Page() {
  return (
    <main className="">
      <div className="bg-[url('/bg2.png')] bg-cover bg-top bg-no-repeat bg-fixed">
      <UniqueTopbar />
      {/* <video autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover z-[-1]">
        <source src="/bg.mp4" type="video/mp4" />
      </video> */}
      <header className="min-h-[600px] lg:px-[5%] p-4 md:pt-[6%] pt-[100px] md:mx-auto flex flex-col justify-center items-center text-center gap-4">
      
        <div className="flex flex-col justify-center items-center text-center gap-4 md:px-[18%] sm:px-[20%]">
          <div className="relative overflow-hidden w-fit h-fit">
            <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-foreground to-transparent xl:text-[3em] lg:text-[3em] sm:text-[3em] text-[32px] leading-[120%] tracking-[-4%]">
              Build at the <br /> Speed of Thought
            </h1>
          </div>
          <ScrollTextReveal repeat={true} tag="p" delay={0.6} className="relative overflow-hidden mb-4 md:w-[100%] mx-auto opacity-50">
            <span>Uinque helps you build a no-code AI app in minutes</span>
          </ScrollTextReveal>

          <div className="w-full [perspective:1200px] overflow-hidden flex justify-center items-center">
            <div className="mx-auto w-[90%] max-w-[760px] rotate-x-[-30deg] transform-gpu rounded-[12px] overflow-hidden border-4 border-white shadow-[18px_24px_45px_rgba(0,0,0,0.2)] dark:border-border">
              <div className="aspect-3/1 h-[160px] border border-black/10 bg-gradient-to-tr via-green-500 from-sky-500 to-green-200 dark:to-green-800" />
            </div>
          </div>

          <ScrollAnimate className="" start="top 100%" delay={1} animation="slideUp">
            <button className="py-2 px-2 pr-4 flex items-center justify-between gap-2 border border-border bg-white dark:bg-[#101010] font-medium rounded-full w-fit shadow-lg">
              <span className="rounded-full p-[6px] bg-black dark:bg-white/[0.05] text-white "><ArrowUpRight size={15} /></span> 
              <span className="">Get started today</span>
            </button>
          </ScrollAnimate>
        </div>

        {/* ========== MARQUEE ========== */}
      <section className="child pt-12 pb-12 md:w-[90%] mx-auto opacity-50 overflow-hidden w-full">
        <div className="relative overflow-hidden lg:w-[70%] md:w-[90%] mx-auto py-2">
              <span className="h-[60px] py-4 w-[30%] absolute top-0 left-0 bg-gradient-to-r from-background z-2"></span>
              <span className="h-[60px] py-4 w-[30%] absolute top-0 right-0 bg-gradient-to-r to-background z-2"></span>
            <div className="marquee-track">
                {[0, 1].map((rep) => (
                    <div key={rep} className="marquee-group flex items-center">
                        {[
                          { id: 0, icon: <EurroIcon className="h-[16px] w-auto" />}, 
                          {id: 1, icon: <FimmerIcon className="h-[16px] w-auto" />}, 
                          {id: 2, icon: <InfiniIcon className="h-[16px] w-auto" />}, 
                          {id: 3, icon: <OriginaIcon className="h-[16px] w-auto" />}, 
                          {id: 4, icon: <SitaraIcon className="h-[16px] w-auto" />}
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-20 px-15 ">
                                <span className="text-[10px] font-medium whitespace-nowrap uppercase">{item.icon}</span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
          </div>
      </section>
      </header>

      </div>

      <section className="py-[40px] ">
        <div className="child flex sm:flex-row flex-col min-h-[600px] justify-between gap-4 lg:w-[90%] md:w-[90%] mx-auto w-full md:px-0 px-4 py-[40px]">
          <div className="flex flex-col justify-end gap-4 sm:w-[50%] w-full">
            <div className="flex items-center gap-1 p-2 px-4 rounded-full w-fit bg-black/[0.6] backdrop-blur-sm text-[10px] uppercase text-white">
                How it works
            </div>
            <h2 className="lg:text-[3em] sm:text-[40px] text-[28px] leading-[110%] opacity-25">Plan Smarter, <br /> Grow Faster</h2>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 sm:w-[50%] w-full">
            <ScrollTextOpacity className="lg:text-[32px] sm:text-[32px] text-[24px] leading-[120%]">Our state-of-the-art platform collects information about your ambitions and goal strategies. This allows us to create a customized business plan that perfectly matches your unique vision.</ScrollTextOpacity>
          </div>
        </div>
      </section>

      <section className="child py-[40px] bg-[#FBFBFB] dark:bg-[#121212]">
        
        <div className="flex md:flex-row flex-col items-end gap-4 md:px-[5%] px-4 py-12">
          <div className="sticky bottom-6 flex flex-col md:h-[80vh] justify-start gap-6 md:w-[30%] w-full md:pr-6">
            <AnimateHeading repeat={false} tag="h2" start="top 90%" className="w-[75%] leading-[120%] tracking-[-2%] md:text-[28px] text-[24px]">
              How we&apos;re different
            </AnimateHeading>
          </div>
        </div>
      
      </section>

      <section className="child py-[100px]">
        <div className="flex flex-col gap-4 md:w-[90%] mx-auto w-full mb-8 md:px-0 px-4">
            <ScrollTextOpacity repeat={true} tag="h2" className="md:w-[60%] leading-[120%] tracking-[-2%] md:text-[40px] sm:text-[32px] text-[24px]">
              Opening an account is quick and easy. Get started with Spendy in three simple steps
            </ScrollTextOpacity>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:w-[90%] mx-auto mt-12 md:px-0 px-4">
          {[
            {
              number: 1,
              title: "Create your account",
              text: "Setup your account in seconds by signing up.",
              icon: Link2,
              img: <CreateAccount  className="text-white dark:text-[#101010] w-[85%] h-auto mx-auto" />
            },
            {
              number: 2,
              title: "Connect your accounts",
              text: "Setup your financial records with just one click.",
              icon: Target,
              img: <ConnectAccount  className="text-white dark:text-[#101010] w-full h-auto mx-auto" />
            },
            {
              number: 3,
              title: "Build your plan",
              text: "Create budgets and saving habits fit for your growth.",
              icon: ArrowUpRight,
              img: <BuildPlans  className="text-white dark:text-[#101010] w-[70%] h-auto mx-auto" />

            },
          ].map(({ number, title, text, img }) => (
            <div key={number} className={`flex min-h-[230px] flex-col gap-8 md:rounded-[20px] rounded-[10px] bg-gray-100/[0.5] dark:bg-[#101010] w-full p-6 border-gray-100 dark:border-gray-500/[0.1] md:min-h-[270px]`}>
              <div className="min-h-[160px] flex items-end flex-1 rounded-lg min-h-[200px] bg-gradient-to-b from-white dark:from-[#202020]">
                <ScrollAnimate animation="slideUp" delay={number * 0.2} className="">
                  {img}
                </ScrollAnimate>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <div className="flex items-start justify-between gap-4">
                  <span className="text-sm font-medium opacity-25 uppercase">step 0{number}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <ScrollTextReveal repeat={true} tag="h3" delay={number * 0.2} className="text-lg font-medium md:text-xl">{title}</ScrollTextReveal>
                  <ScrollTextReveal repeat={true} tag="p" delay={number * 0.2} className="max-w-[360px] text-sm leading-6 opacity-70">{text}</ScrollTextReveal>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FAQs />

      <section className="child md:mx-[5%] mx-6 md:my-[100px] my-12 py-[47px] px-4 md:rounded-[20px] rounded-[10px] bg-gradient-to-b from-[#212121] to-[#101010] text-white flex flex-col gap-4 justify-center items-center text-center">
        <div className="md:p-[5%] lg:w-[45%] md:w-[70%] md:py-[5%] py-[10%] md:mx-auto flex flex-col justify-center items-center text-center gap-8 z-2 overflow-hidden">
          <AnimateHeading repeat={true} tag="h1" className="2xl:text-[32px] sm:text-[28px] text-[24px] leading-[130%]">
            Ready to manage and <br /> grow your finances
          </AnimateHeading>

          <ScrollAnimate className="" delay={1} animation="slideUp">
            <button className="px-8 py-2 pr-2 flex items-center justify-between gap-3 text-white bg-primary font-medium rounded-full w-fit shadow-lg">
              <span className="">Get started </span>
              <span className="rounded-full p-2 bg-black/[0.5]"><ArrowRight size={15} /></span>
            </button>
          </ScrollAnimate>
        </div>
      </section>


    </main>
  )
}
