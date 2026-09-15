import AnimateHeading from "../components/animations/animateHeading"
import ScrollTextReveal from "../components/animations/scroll-text-reveal"
import ScrollAnimate from "../components/animations/scrollAnimation"
import SlotCounter from "@/components/animations/slot-counter"
import Topbar from "@/components/sections/topbar"
import StopOnScroll from "@/components/animations/stop_on_scroll"
import FeaturesCard from "@/components/cards/featuresCard"
// import BankingCard from "@/components/cards/bankingCard"
import SavingBudgetCard from "@/components/cards/savingBudgetCard"
import FAQs from "../components/sections/faqs"
import PhoneIcon from "@/assets/icons/phone"
import BankingIcon from "@/assets/icons/banking"
import { ArrowRight, ArrowUpRight, Link2, Target } from "lucide-react"
import WalletIcon from "@/assets/icons/wallet"
import InvestmentIcon from "@/assets/icons/investment"
import BudgetIcon from "@/assets/icons/budget"
import EurroIcon from "@/assets/clients/eurro"
import FimmerIcon from "@/assets/clients/fimmer"
import InfiniIcon from "@/assets/clients/infini"
import OriginaIcon from "@/assets/clients/origina"
import SitaraIcon from "@/assets/clients/sitara"
import ScrollTextOpacity from "@/components/animations/scroll-text-opacity"

export default function Page() {
  return (
    <main className="bg-[url('/bg.png')] bg-contain bg-top bg-no-repeat">
      <Topbar />
      <header className="bg-gray-100 dark:bg-[#202020]/[0.25] lg:px-[15%] p-4 md:pt-[6%] pt-[100px] md:mx-auto flex flex-col justify-center items-center text-center gap-4">
      
        <div className="flex flex-col justify-center items-center text-center gap-4 2xl:px-[7%] lg:px-[10%] md:px-[18%] sm:px-[10%]">
          <ScrollTextReveal repeat={true} tag="p" delay={0.6} className="font-medium w-fit uppercase px-4 py-1 text-[10px] bg-primary/[0.09] rounded-full">
            Bank. Save. Invest. Grow
          </ScrollTextReveal>
          <AnimateHeading repeat={true} tag="h1" delay={0.4} className="font-medium dark:font-medium xl:text-[4em] lg:text-[3em] sm:text-[3em] text-[40px] leading-[120%] tracking-[-2%]">
            Smart Finance <span className="opacity-50">Management</span> for <span className="opacity-50">Growth</span>
          </AnimateHeading>
          <ScrollTextReveal repeat={true} tag="p" delay={0.6} className="mb-4 md:w-[65%] mx-auto font-medium opacity-75">
            Manage your money smarter, set budgets, and gain valuable insights for your financial growth.
          </ScrollTextReveal>

          <ScrollAnimate className="" delay={1} animation="slideUp">
            <button className="px-8 py-2 pr-2 flex items-center justify-between gap-3 text-white bg-primary font-medium rounded-full w-fit shadow-lg">
              <span className="">Get started </span>
              <span className="rounded-full p-2 bg-black/[0.5]"><ArrowRight size={15} /></span>
            </button>
          </ScrollAnimate>
        </div>

        <div className="flex md:flex-row flex-col gap-4 mt-12 w-full">
          <div className="relative flex items-end justify-end md:w-[60%] w-full h-[360px] bg-primary dark:bg-border/[0.5] bg-[url('/bg-hero.png')] bg-center bg-cover rounded-[20px]">
            <ScrollAnimate animation="slideLeft" start="top 80%" className="scale-70">
              <SavingBudgetCard />
            </ScrollAnimate>
          </div>
          <div className="relative md:w-[40%] w-full mx-auto flex w-full p-12 overflow-hidden justify-start gap-6 h-[360px] sm:block bg-gray-200 dark:bg-border/[0.5] rounded-[20px]">
            <ScrollAnimate animation="slideUp" start="top 80%" className="w-full">
              <div className="relative z-1 sm:absolute sm:left-1/2 sm:top-0 sm:-translate-x-1/2">
                <PhoneIcon className="text-white dark:text-[#101010] w-[200px] h-auto mx-auto" />
              </div>
            </ScrollAnimate>

            
            {/* <ScrollAnimate animation="slideRight" start="top 40%" className="">
              <BankingCard />
            </ScrollAnimate> */}
          </div>
        </div>
        {/* <div className="relative mt-12 w-fit mx-auto">
          <div className="flex justify-center bg-white dark:bg-[#202020] bg-cover bg-top w-[300px] h-[560px] border-3 border-gray-300 dark:border-[#181818] rounded-[36px] shadow-[0px_5px_20px_#11111120]">
            <span className="bg-white dark:bg-[#242424] h-[99%] w-[98%] absolute rounded border-6 border-[#181818] dark:border-[#000] rounded-[34px]"></span>
            <span className="bg-gray-300 dark:bg-[#000] h-12 w-[6px] absolute top-20 -left-[5px] rounded-l"></span>
            <span className="bg-gray-300 dark:bg-[#000] h-12 w-[6px] absolute top-36 -left-[5px] rounded-l"></span>
            <span className="bg-gray-300 dark:bg-[#000] h-12 w-[6px] absolute top-20 -right-[5px] rounded-r"></span>
            <span className="bg-[#202020] dark:bg-[#000] h-6 w-24 absolute top-4 rounded-full"></span>
            <span className="bg-white dark:bg-[#202020] h-2 w-2 absolute -translate-x-9 top-6 rounded-full"></span>
            <span className="bg-[#202020] dark:bg-[#121212] h-1 w-20 absolute bottom-5 rounded-full"></span>
          </div>
        </div> */}
        {/* <PhoneMockup /> */}
      </header>

      {/* ========== MARQUEE ========== */}
      <section className="bg-gray-100 dark:bg-[#202020]/[0.25] pt-12 pb-12">
        <div className="relative overflow-hidden lg:w-[70%] md:w-[90%] mx-auto py-2">
              <span className="h-[60px] py-4 w-[20%] absolute top-0 left-0 bg-gradient-to-r from-gray-100 dark:from-[#101010] z-2"></span>
              <span className="h-[60px] py-4 w-[20%] absolute top-0 right-0 bg-gradient-to-r to-gray-100 dark:to-[#101010] z-2"></span>
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

      <section className="pt-[100px]">
        <div className="flex flex-col items-center justify-center gap-4 lg:w-[70%] md:w-[90%] text-center mx-auto w-full">
          <ScrollTextOpacity className="md:text-[3em] text-[32px]">Spendy helps you manage your money, set smarter budgets, and make confident decisions for lasting financial growth.</ScrollTextOpacity>
        </div>
      </section>
      <section className="py-[100px]">
        <div className="flex flex-col items-center justify-center gap-4 lg:w-[55%] md:w-[90%] mx-auto w-full px-6">
          <h1 className="uppercase font-medium text-[14px] opacity-50">Why Spendy</h1>
          <AnimateHeading repeat={true} tag="h2" className="font-medium dark:font-normal md:w-[60%] leading-[120%] tracking-[-2%] text-center md:text-[28px] text-[24px]">
            A <span className="opacity-50">clearer</span> view and<br /> a <span className="opacity-50">smarter</span> path forward
          </AnimateHeading>
        </div>

        <div className="grid sm:grid-cols-3 lg:w-[70%] md:w-[90%] mx-auto py-12">
          <div className="flex flex-col justify-center items-center gap-4 py-8 border-r border-border w-full text-center">
              <h2 className="xl:text-[64px] lg:text-[48px] md:text-[40px] text-[32px] font-medium"><SlotCounter value="120K" /></h2>
              <ScrollTextReveal repeat={true} tag="p" className="opacity-50">Businesses growing with Spendy</ScrollTextReveal>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 py-8 border-r border-border w-full text-center">
              <h2 className="xl:text-[64px] lg:text-[48px] md:text-[40px] text-[32px] font-medium"><SlotCounter value="$250M" /></h2>
              <ScrollTextReveal repeat={true} tag="p" className="opacity-50">Revenue tracked</ScrollTextReveal>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 py-8 w-full text-center">
              <h2 className="xl:text-[64px] lg:text-[48px] md:text-[40px] text-[32px] font-medium"><SlotCounter value="90%" /></h2>
              <ScrollTextReveal repeat={true} tag="p" className="opacity-50">Average growth reported</ScrollTextReveal>
          </div>
        </div>
      </section>

      <section className="py-[100px] bg-gray-100/[0.8] dark:bg-[#121212]">
        <div className="flex flex-col items-center justify-center gap-4 lg:w-[55%] md:w-[90%] mx-auto w-full mb-8 px-6">
          <h1 className="uppercase font-medium text-[14px] opacity-50">Features</h1>
          <AnimateHeading repeat={true} tag="h2" className="font-medium  dark:font-normal md:w-[70%] leading-[120%] tracking-[-2%] text-center md:text-[28px] text-[24px]">
            <span className="opacity-50">The smarter way</span> to build<br/> lasting financial momentum
          </AnimateHeading>
            <ScrollTextReveal repeat={true} tag="p" className="lg:w-[50%] md:w-[80%] text-center opacity-75">
            Tools that turn everyday financial decisions into steady, measurable progress.
          </ScrollTextReveal>
        </div>
        
        <div className="lg:px-[15%] md:px-[5%] px-4 py-12 h-[3990px] max-[500px]:h-[1720px]">
          <StopOnScroll>
            {
              [
                { id: 0, heading: "Banking", text: "Set a plan that reflects your real life. Create flexible budgets, understand your habits, and stay ahead of every commitment without the guesswork.", list: ["Send money", "Receive money", "Virtual cards", "Manage accounts"], img: <BankingIcon className="text-white dark:text-[#101010] w-[70%] h-auto mt-12 mx-auto" />, subheading: "Seamless Digital Banking" },
                { id: 1, heading: "Saving", text: "Make progress feel automatic. Set meaningful goals, build healthy saving habits, and watch small decisions become lasting security.", list: ["Set goals", "Build habits", "Track progress", "Stay consistent"], img: <WalletIcon className="text-white dark:text-[#101010] w-[75%] h-auto mt-12 mx-auto" />, subheading: "Smart Saving Tools" },
                { id: 2, heading: "Investing", text: "Put your money to work with greater clarity. Follow your portfolio, understand your progress, and invest with a plan you can trust.", list: ["Research good investments", "Select the right ones", "Monitor performance", "Optimize your portfolio"], img: <InvestmentIcon className="text-white dark:text-[#101010] w-[75%] h-auto mt-12 mx-auto" />, subheading: "Intelligent Investments" },
                { id: 3, heading: "Budgeting", text: "Take control of your finances with a clear plan. Track your spending, adjust your budget as needed, and optimize your financial habits for long-term success.", list: ["Plan your budget", "Track your spending", "Adjust your budget", "Optimize your spending"], img: <BudgetIcon className="text-white dark:text-[#101010] w-[80%] h-auto mt-12 mx-auto " />, subheading: "Effective Budgeting" },
              ].map((item, index) => (
                <FeaturesCard key={item.id} index={index} heading={item.heading} list={item.list} text={item.text} img={item.img} subheading={item.subheading} />
              ))
            }
          </StopOnScroll>
        </div>
      
      </section>

      <section className="py-[100px]">
        <div className="flex flex-col items-center justify-center gap-4 lg:w-[55%] md:w-[90%] mx-auto w-full px-6">
          <h1 className="uppercase font-medium text-[14px] opacity-50">How it works</h1>
          <AnimateHeading repeat={true} tag="h2" className="font-medium  dark:font-normal md:w-[65%] leading-[120%] tracking-[-2%] text-center md:text-[28px] text-[24px]">
            <span className="opacity-50">Get Started With Spendy</span><br/> in Three Simple Steps
          </AnimateHeading>
          <ScrollTextReveal repeat={true} tag="p" className="lg:w-[55%] md:w-[90%] text-center opacity-75">
            Join Spendy now and get started in minutes.
          </ScrollTextReveal>
        </div>

        <div className="grid md:grid-cols-2 gap-4 lg:w-[70%] md:w-[90%] mx-auto mt-12 md:px-0 px-4">
          {[
            {
              number: "01",
              title: "Create your account",
              text: "Setup your account in seconds by signing up.",
              icon: Link2,
            },
            {
              number: "02",
              title: "Connect your accounts",
              text: "Bring your financial picture together in one secure, organized view.",
              icon: Target,
            },
            {
              number: "03",
              title: "Build your plan",
              text: "Create budgets and saving habits that fit your real life, not an idealized one.",
              icon: ArrowUpRight,
            },
          ].map(({ number, title, text, icon: Icon }) => (
            <div key={number} className="flex min-h-[230px] flex-col gap-8 rounded-[28px] bg-white dark:bg-[#101010] w-full p-6 border-gray-100 dark:border-gray-500/[0.1] md:min-h-[270px] md:last:col-span-2">
              <div className="flex items-start justify-between gap-4">
                <span className="text-sm font-medium opacity-50 uppercase">step {number}</span>
                <Icon aria-hidden="true" className="size-5 opacity-60" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-2">
                <ScrollTextReveal repeat={true} tag="h3" className="text-lg font-medium md:text-xl">{title}</ScrollTextReveal>
                <ScrollTextReveal repeat={true} tag="p" className="max-w-[360px] text-sm leading-6 opacity-70">{text}</ScrollTextReveal>
              </div>
              <div className="min-h-[160px] flex-1 rounded-lg bg-gradient-to-b to-gray-100 dark:to-[#202020]"></div>
            </div>
          ))}
        </div>
      </section>

      <FAQs />

      <section className="md:mx-[15%] mx-6 md:my-[100px] my-12 py-[47px] px-6 md:rounded-[20px] rounded-[10px] bg-gradient-to-b from-[#212121] to-[#101010] text-white flex flex-col gap-4 justify-center items-center text-center">
        <div className="md:p-[5%] lg:w-[45%] md:w-[70%] md:py-[5%] py-[10%] md:mx-auto flex flex-col justify-center items-center text-center gap-8 z-2 overflow-hidden">
          <AnimateHeading repeat={true} tag="h1" className="font-medium dark:font-normal 2xl:text-[32px] sm:text-[28px] text-[24px] leading-[130%]">
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
