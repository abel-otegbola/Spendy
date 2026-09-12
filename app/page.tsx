import { Button } from "@/components/ui/button"
import AnimateHeading from "../components/animations/animateHeading"
import ScrollTextReveal from "../components/animations/scroll-text-reveal"
import ScrollAnimate from "../components/animations/scrollAnimation"
import SlotCounter from "@/components/animations/slot-counter"
import Topbar from "@/components/sections/topbar"
import StopOnScroll from "@/components/animations/stop_on_scroll"
import FeaturesCard from "@/components/cards/featuresCard"
import BankingCard from "@/components/cards/bankingCard"
import SavingBudgetCard from "@/components/cards/savingBudgetCard"
import FAQs from "../components/sections/faqs"
import PhoneIcon from "@/assets/icons/phone"
import BankingIcon from "@/assets/icons/banking"
import { ArrowUpRight, Link2, Target, TrendingUp } from "lucide-react"
import WalletIcon from "@/assets/icons/wallet"
import InvestmentIcon from "@/assets/icons/investment"
import BudgetIcon from "@/assets/icons/budget"

export default function Page() {
  return (
    <main className="bg-[url('/bg.png')] bg-contain bg-top bg-no-repeat">
      <Topbar />
      <header className="bg-gray-100/[0.25] dark:bg-[#202020]/[0.25] lg:px-[25%] md:px-[15%] p-[5%] md:pt-[6%] pt-[100px] md:mx-auto flex flex-col justify-center sm:items-center sm:text-center gap-4">
        <AnimateHeading repeat={true} tag="h1" delay={0.4} className="font-semibold dark:font-medium 2xl:text-[64px] lg:text-[52px] sm:text-[40px] text-[40px] leading-[120%] tracking-[-2%]">
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

        <ScrollAnimate animation="zoomIn" start="top 80%" className="w-full">
        <div className="relative mx-auto mt-12 flex w-full max-w-[900px] flex-col items-center gap-6 sm:min-h-[530px] sm:block ">
          <div className="relative z-1 sm:absolute sm:left-1/2 sm:top-0 sm:-translate-x-1/2">
            <PhoneIcon className="text-white dark:text-[#101010] sm:w-[300px] w-[240px] h-auto mx-auto" />
          </div>

          <SavingBudgetCard />
          <BankingCard />
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
        </ScrollAnimate>
        {/* <PhoneMockup /> */}
      </header>

      {/* ========== MARQUEE ========== */}
      <section className="bg-gray-100/[0.25] dark:bg-[#202020]/[0.25] pt-6 pb-12">
        <div className="overflow-hidden lg:w-[70%] md:w-[90%] mx-auto">
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
          </div>
      </section>

      <section className="py-[100px]">
        <div className="flex flex-col items-center justify-center gap-4 lg:w-[55%] md:w-[90%] mx-auto w-full px-6">
          <h1 className="uppercase font-medium text-[14px] text-primary">Why Spendy</h1>
          <AnimateHeading repeat={true} tag="h2" className="font-semibold md:w-[60%] leading-[120%] tracking-[-2%] text-center md:text-[28px] text-[24px]">
            A <span className="opacity-50">clearer</span> view of your money <br />and a <span className="opacity-50">smarter</span> path forward
          </AnimateHeading>
        </div>

        <div className="grid sm:grid-cols-3 lg:w-[70%] md:w-[90%] mx-auto py-12">
          <div className="flex flex-col justify-center items-center gap-4 py-8 border-r border-border w-full text-center">
              <h2 className="lg:text-[64px] sm:text-[48px] text-[32px] font-semibold"><SlotCounter value="120K" /></h2>
              <p className="opacity-50">Businesses growing with Spendy</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 py-8 border-r border-border w-full text-center">
              <h2 className="lg:text-[64px] sm:text-[48px] text-[32px] font-semibold"><SlotCounter value="$250M" /></h2>
              <p className="opacity-50">Revenue tracked</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 py-8 w-full text-center">
              <h2 className="lg:text-[64px] sm:text-[48px] text-[32px] font-semibold"><SlotCounter value="90%" /></h2>
              <p className="opacity-50">Average growth reported</p>
          </div>
        </div>
      </section>

      <section className="py-[100px] bg-gray-100/[0.8] dark:bg-[#121212]">
        <div className="flex flex-col items-center justify-center gap-4 lg:w-[55%] md:w-[90%] mx-auto w-full mb-8 px-6">
          <h1 className="uppercase font-medium text-[14px] text-primary">Features</h1>
          <AnimateHeading repeat={true} tag="h2" className="font-semibold md:w-[70%] leading-[120%] tracking-[-2%] text-center md:text-[28px] text-[24px]">
            The <span className="opacity-50">essentials</span> for building lasting financial <span className="opacity-50">momentum</span>
          </AnimateHeading>
            <ScrollTextReveal repeat={true} tag="p" className="lg:w-[55%] md:w-[90%] text-center opacity-75">
            Thoughtful tools that turn everyday financial decisions into steady, measurable progress.
          </ScrollTextReveal>
        </div>
        
        <div className="lg:px-[15%] md:px-[5%] px-4 py-12 md:h-[3890px] min-[500px]:h-[1720px] h-auto">
          <StopOnScroll>
            {
              [
                { id: 0, heading: "Banking", text: "Set a plan that reflects your real life. Create flexible budgets, understand your habits, and stay ahead of every commitment without the guesswork.", list: ["Send money", "Receive money", "Virtual cards", "Manage accounts"], img: <BankingIcon className="text-white dark:text-[#101010] w-[280px] h-auto mt-12 mx-auto" />, subheading: "Seamless Digital Banking" },
                { id: 1, heading: "Saving", text: "Make progress feel automatic. Set meaningful goals, build healthy saving habits, and watch small decisions become lasting security.", list: ["Set goals", "Build habits", "Track progress", "Stay consistent"], img: <WalletIcon className="text-white dark:text-[#101010] w-[320px] h-auto mt-12 mx-auto" />, subheading: "Smart Saving Tools" },
                { id: 2, heading: "Investing", text: "Put your money to work with greater clarity. Follow your portfolio, understand your progress, and invest with a plan you can trust.", list: ["Research good investments", "Select the right ones", "Monitor performance", "Optimize your portfolio"], img: <InvestmentIcon className="text-white dark:text-[#101010] w-[320px] h-auto mt-12 mx-auto" />, subheading: "Intelligent Investments" },
                { id: 3, heading: "Budgeting", text: "Take control of your finances with a clear plan. Track your spending, adjust your budget as needed, and optimize your financial habits for long-term success.", list: ["Plan your budget", "Track your spending", "Adjust your budget", "Optimize your spending"], img: <BudgetIcon className="text-white dark:text-[#101010] w-[340px] h-auto mt-12 mx-auto " />, subheading: "Effective Budgeting" },
              ].map((item, index) => (
                <FeaturesCard key={item.id} index={index} heading={item.heading} list={item.list} text={item.text} img={item.img} subheading={item.subheading} />
              ))
            }
          </StopOnScroll>
        </div>
      
      </section>

      <section className="py-[100px]">
        <div className="flex flex-col items-center justify-center gap-4 lg:w-[55%] md:w-[90%] mx-auto w-full px-6">
          <h1 className="uppercase font-medium text-[14px] text-primary">How it works</h1>
          <AnimateHeading repeat={true} tag="h2" className="font-semibold md:w-[65%] leading-[120%] tracking-[-2%] text-center md:text-[28px] text-[24px]">
            A simpler way to make every financial decision count
          </AnimateHeading>
          <ScrollTextReveal repeat={true} tag="p" className="lg:w-[55%] md:w-[90%] text-center opacity-75">
            Connect your financial life, create a plan, and let Spendy turn your progress into a habit you can see.
          </ScrollTextReveal>
        </div>

        <div className="grid md:grid-cols-2 lg:w-[70%] md:w-[90%] mx-auto mt-12 border-t border-border">
          {[
            {
              number: "01",
              title: "Connect your accounts",
              text: "Bring your financial picture together in one secure, organized view.",
              icon: Link2,
            },
            {
              number: "02",
              title: "Set your priorities",
              text: "Define the goals that matter most, from everyday spending to long-term growth.",
              icon: Target,
            },
            {
              number: "03",
              title: "Build your plan",
              text: "Create budgets and saving habits that fit your real life, not an idealized one.",
              icon: ArrowUpRight,
            },
            {
              number: "04",
              title: "Watch your progress",
              text: "Use clear insights to stay on track, adjust with confidence, and keep moving forward.",
              icon: TrendingUp,
            },
          ].map(({ number, title, text, icon: Icon }) => (
            <div key={number} className="flex min-h-[230px] flex-col justify-between gap-8 border-b border-border p-6 md:min-h-[270px] md:p-8 md:even:border-l">
              <div className="flex items-start justify-between gap-4">
                <span className="text-sm font-medium text-primary">{number}</span>
                <Icon aria-hidden="true" className="size-5 opacity-60" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold md:text-xl">{title}</h3>
                <p className="max-w-[360px] text-sm leading-6 opacity-70">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FAQs />

      <section className="md:mx-[15%] mx-6 md:my-[100px] my-12 py-[47px] px-6 md:rounded-[20px] rounded-[10px] bg-gradient-to-b from-[#212121] to-[#101010] text-white flex flex-col gap-4 justify-center items-center text-center">
        <div className="md:p-[5%] lg:w-[45%] md:w-[70%] md:py-[5%] py-[10%] md:mx-auto flex flex-col justify-center md:items-center md:text-center gap-4 z-2 overflow-hidden">
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
