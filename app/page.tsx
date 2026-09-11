import { Button } from "@/components/ui/button"
import AnimateHeading from "../components/animations/animateHeading"
import ScrollTextReveal from "../components/animations/scroll-text-reveal"
import ScrollAnimate from "../components/animations/scrollAnimation"
import SlotCounter from "@/components/animations/slot-counter"
import Topbar from "@/components/sections/topbar"

export default function Page() {
  return (
    <main className="bg-[url('/bg.png')] bg-contain bg-top bg-no-repeat">
      <Topbar />
      <header className=" md:px-[15%] p-[5%] md:w-[80%] md:pt-[6%] pt-[100px] md:mx-auto flex flex-col justify-center items-center text-center gap-4">
        <AnimateHeading repeat={true} tag="h1" delay={0.4} className="font-semibold dark:font-medium 2xl:text-[64px] lg:text-[52px] sm:text-[40px] text-[36px] leading-[120%] tracking-[-2%]">
          Efficiently Track and Manage Your <span className="opacity-50">Spending</span>
        </AnimateHeading>
        <ScrollTextReveal repeat={true} tag="p" delay={0.6} className="mb-4 md:w-[60%] mx-auto font-medium opacity-75">
          Track your spending, set budgets, and gain valuable insights into your financial habits.
        </ScrollTextReveal>

        <div className="flex sm:flex-row flex-col gap-4 sm:w-fit w-full">
          <ScrollAnimate className=" sm:w-fit w-full" delay={1} animation="slideUp">
            <Button className="font-semibold sm:w-fit w-full">Get started for free</Button>
          </ScrollAnimate>
          <ScrollAnimate className=" sm:w-fit w-full" delay={1.2} animation="slideUp">
            <Button variant="secondary" className="font-semibold sm:w-fit w-full">Watch demo</Button>
          </ScrollAnimate>
        </div>

        <ScrollAnimate animation="zoomIn" start="top 80%">
        <div className="relative mt-12 w-fit">
          <div className="flex justify-center bg-white dark:bg-[#202020] bg-cover bg-top w-[300px] h-[560px] border-6 border-[#f3f3f3] dark:border-[#121212] md:rounded-[36px] rounded-[24px] shadow-[0px_5px_20px_#11111120]">
            <span className="bg-[#e3e3e3] dark:bg-[#101010] h-12 w-[4px] absolute top-20 -left-[6px] rounded-l"></span>
            <span className="bg-[#e3e3e3] dark:bg-[#101010] h-12 w-[4px] absolute top-36 -left-[6px] rounded-l"></span>
            <span className="bg-[#e3e3e3] dark:bg-[#101010] h-12 w-[4px] absolute top-20 -right-[6px] rounded-r"></span>
            <span className="bg-[#f3f3f3] dark:bg-[#121212] h-6 w-24 absolute top-4 rounded-full"></span>
            <span className="bg-white dark:bg-[#202020] h-2 w-2 absolute -translate-x-9 top-6 rounded-full"></span>
            <span className="bg-[#f3f3f3] dark:bg-[#121212] h-1 w-20 absolute bottom-5 rounded-full"></span>
          </div>
        </div>
        </ScrollAnimate>
        {/* <PhoneMockup /> */}
      </header>

      {/* ========== MARQUEE ========== */}
      <section className="py-4 overflow-hidden md:w-[70%] mx-auto md:mt-0 mt-12">
          <div className="marquee-track">
              {[0, 1].map((rep) => (
                  <div key={rep} className="marquee-group flex items-center">
                      {["Bank", "Invest", "Budget", "Pay bills"].map((item, i) => (
                          <div key={`${rep}-${i}`} className="flex items-center gap-20 px-20">
                              <span className="text-sm font-semibold whitespace-nowrap uppercase">{item}</span>
                          </div>
                      ))}
                  </div>
              ))}
          </div>
      </section>

      <section className="py-[100px]">
        <div className="flex flex-col items-center justify-center gap-4 md:w-[55%] mx-auto w-full px-6">
          <h1 className="uppercase font-medium text-[14px] opacity-50">Why Spendy</h1>
          <AnimateHeading repeat={true} tag="h2" className="font-medium md:w-[60%] leading-[120%] tracking-[-2%] text-center md:text-[28px] text-[20px]">
            A clearer view of your money <br />and a smarter path forward
          </AnimateHeading>
            <ScrollTextReveal repeat={true} tag="p" className="md:w-[55%] text-center font-medium opacity-75">
            Spendy brings your spending, saving, and investing into one calm, intelligent experience built to help you make confident financial decisions.
          </ScrollTextReveal>
        </div>

        <div className="grid sm:grid-cols-3 md:w-[70%] mx-auto py-12">
          <div className="flex flex-col justify-center items-center gap-4 py-8 border-r border-border w-full">
              <h2 className="md:text-[64px] text-[48px] font-semibold"><SlotCounter value="120K" /></h2>
              <p className="opacity-50">Businesses growing with Spendy</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 py-8 border-r border-border w-full">
              <h2 className="md:text-[64px] text-[48px] font-semibold"><SlotCounter value="$250M" /></h2>
              <p className="opacity-50">Revenue tracked</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 py-8 w-full">
              <h2 className="md:text-[64px] text-[48px] font-semibold"><SlotCounter value="90%" /></h2>
              <p className="opacity-50">Average growth reported</p>
          </div>
        </div>
      </section>

      <section className="py-[100px] bg-gray-100 dark:bg-[#121212]">
        <div className="flex flex-col items-center justify-center gap-4 md:w-[55%] mx-auto w-full mb-8 px-6">
          <h1 className="uppercase font-medium text-[14px] opacity-50">Features</h1>
          <AnimateHeading repeat={true} tag="h2" className="font-medium md:w-[60%] leading-[120%] tracking-[-2%] text-center md:text-[28px] text-[24px]">
            The essentials for building lasting financial momentum
          </AnimateHeading>
            <ScrollTextReveal repeat={true} tag="p" className="md:w-[55%] text-center font-medium opacity-75">
            Thoughtful tools that turn everyday financial decisions into steady, measurable progress.
          </ScrollTextReveal>
        </div>

        <div className="md:px-[15%] px-6 flex md:flex-row flex-col justify-between gap-6 py-8">
          <div className="flex flex-col gap-4 md:w-[45%]">
            <AnimateHeading repeat={true} tag="h2" className="font-medium leading-[120%] tracking-[-2%] md:text-[28px] text-[20px]">
              Budgeting
            </AnimateHeading>
              <ScrollTextReveal repeat={true} tag="p" className="font-medium opacity-75">
              Set a plan that reflects your real life. Create flexible budgets, understand your habits, and stay ahead of every commitment without the guesswork.
            </ScrollTextReveal>
          </div>

          <div className="bg-white dark:bg-[#202020] h-[400px] md:w-[40%] w-auto aspect-3/4 md:rounded-[20px] rounded-[12px]">

          </div>
        </div>

        <div className="md:px-[15%] px-6 flex md:flex-row flex-col justify-between gap-6 py-8">
          <div className="bg-white dark:bg-[#202020] h-[400px] md:order-1 order-2 md:w-[40%] w-auto aspect-3/4 md:rounded-[20px] rounded-[12px]">

          </div>
          <div className="flex flex-col gap-4 md:w-[45%] md:order-2 order-1">
            <AnimateHeading repeat={true} tag="h2" className="font-medium leading-[120%] tracking-[-2%] md:text-[28px] text-[20px]">
              Saving
            </AnimateHeading>
              <ScrollTextReveal repeat={true} tag="p" className="font-medium opacity-75">
              Make progress feel automatic. Set meaningful goals, build healthy saving habits, and watch small decisions become lasting security.
            </ScrollTextReveal>
          </div>

        </div>

        <div className="md:px-[15%] px-6 flex md:flex-row flex-col justify-between gap-6 py-8">
          <div className="flex flex-col gap-4 md:w-[45%]">
            <AnimateHeading repeat={true} tag="h2" className="font-medium leading-[120%] tracking-[-2%] md:text-[28px] text-[20px]">
              Investing
            </AnimateHeading>
              <ScrollTextReveal repeat={true} tag="p" className="font-medium opacity-75">
              Put your money to work with greater clarity. Follow your portfolio, understand your progress, and invest with a plan you can trust.
            </ScrollTextReveal>
          </div>

          <div className="bg-white dark:bg-[#202020] h-[400px] md:w-[40%] w-auto aspect-3/4 md:rounded-[20px] rounded-[12px]">

          </div>
        </div>
      
      </section>

      <section className="md:mx-[15%] mx-6 md:my-[100px] my-12 py-[47px] px-6 md:rounded-[20px] rounded-[10px] bg-gray-100 dark:bg-[#121212] flex flex-col gap-4 justify-center items-center text-center">
        <div className="md:p-[5%] md:w-[45%] md:py-[5%] py-[10%] md:mx-auto flex flex-col justify-center md:items-center md:text-center gap-4 z-2 overflow-hidden">
          <AnimateHeading repeat={true} tag="h1" className="font-semibold 2xl:text-[32px] sm:text-[28px] text-[24px] leading-[130%]">
            Ready to manage and grow your finances
          </AnimateHeading>

          <div className="flex sm:flex-row flex-col gap-4 sm:w-fit w-full">
          <ScrollAnimate className=" sm:w-fit w-full" delay={1} animation="slideUp">
            <Button className="font-medium sm:w-fit w-full">Get Started - It&apos;s free</Button>
          </ScrollAnimate>
          </div>
        </div>
      </section>


    </main>
  )
}
