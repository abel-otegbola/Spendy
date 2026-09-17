import AnimateHeading from "../components/animations/animateHeading"
import ScrollTextReveal from "../components/animations/scroll-text-reveal"
import ScrollAnimate from "../components/animations/scrollAnimation"
import SlotCounter from "@/components/animations/slot-counter"
import Topbar from "@/components/sections/topbar"
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
import CreateAccount from "../assets/icons/createAccount"
import ConnectAccount from "@/assets/icons/connectAccount"
import BuildPlans from "@/assets/icons/buildPlans"
import Link from "next/link"
import AppStoreIcon from "@/assets/icons/appstore"
import GooglePlayIcon from "@/assets/icons/googleplay"
import Graph from "@/assets/icons/graph"

export default function Page() {
  return (
    <main className="bg-[url('/bg.png')] bg-contain bg-top bg-no-repeat">
      <Topbar />
      <header className="bg-[#FBFBFB] dark:bg-[#202020]/[0.25] lg:px-[5%] p-4 md:pt-[10%] pt-[100px] md:mx-auto flex flex-col justify-center items-center text-center gap-4">
      
        <div className="flex flex-col justify-center items-center text-center gap-4 md:px-[18%] sm:px-[20%]">
          <ScrollTextReveal repeat={true} tag="p" delay={0.6} className="font-bold w-fit uppercase px-4 py-1 text-[10px] bg-primary/[0.09] rounded-full">
            Bank. Save. Invest. Grow
          </ScrollTextReveal>
          <AnimateHeading repeat={true} tag="h1" delay={0.4} className="xl:text-[4em] lg:text-[3em] sm:text-[3em] text-[32px] leading-[120%] tracking-[-2%]">
            Manage your money <br /> <span className="opacity-25"> efficiently</span> with Spendy 
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

        {/* ========== MARQUEE ========== */}
      <section className="child pt-12 pb-12 md:w-[90%] mx-auto opacity-25 overflow-hidden w-full">
        <div className="relative overflow-hidden lg:w-[70%] md:w-[90%] mx-auto py-2">
              <span className="h-[60px] py-4 w-[20%] absolute top-0 left-0 bg-gradient-to-r from-[#FBFBFB] dark:from-[#121212] z-2"></span>
              <span className="h-[60px] py-4 w-[20%] absolute top-0 right-0 bg-gradient-to-r to-[#FBFBFB] dark:to-[#121212] z-2"></span>
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

        <div className="flex sm:flex-row flex-col mt-2 w-full gap-4">
          <div className="relative flex items-end justify-center md:justify-between md:p-6 pb-6 md:w-[60%] w-full sm:h-[460px] h-[360px] md:rounded-[20px] rounded-[10px] bg-primary dark:bg-border/[0.5] bg-[url('/bg-hero.webp')] bg-center bg-cover">
            
            <ScrollAnimate animation="slideUp" className="">
              <SavingBudgetCard />
            </ScrollAnimate>
            <ScrollAnimate animation="slideUp" className="">
              <Link href="https://spendylab.vercel.app" className="relative z-10 flex w-fit gap-[10px] items-center justify-center rounded-full border border-white/25 bg-[#101010] px-3 py-3 pl-6 font-medium text-white backdrop-blur-md backdrop-saturate-150">
                  Get the App
                  <span className="text-white">
                      <AppStoreIcon />
                  </span>
                  <span className="w-[1px] h-[70%] bg-white"></span>
                  <span className="text-white">
                      <GooglePlayIcon />
                  </span>
              </Link>
            </ScrollAnimate>
            
          </div>
          <div className="relative md:w-[40%] w-full mx-auto flex w-full p-20 overflow-hidden justify-center gap-6 sm:h-[460px] h-[360px] md:rounded-[20px] rounded-[10px] sm:block bg-gray-200 dark:bg-border/[0.5]">
            <ScrollAnimate animation="slideUp" start="top 80%">
                <PhoneIcon className="text-white dark:text-[#101010] w-[240px] h-auto mx-auto" />
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

      

      <section className="py-[40px]">
        <div className="flex flex-col gap-4 lg:w-[90%] md:w-[90%] mx-auto w-full md:px-0 px-4 py-[40px]">
          <div className="flex flex-col items-center justify-center gap-4 w-full">
            <ScrollTextOpacity className="lg:text-[3em] sm:text-[40px] text-[28px] leading-[110%]">Spendy helps you manage your money, set smarter budgets, and make confident decisions for lasting financial growth.</ScrollTextOpacity>
          </div>
        </div>

        <div className="grid sm:grid-cols-4 grid-cols-3 lg:w-[90%] md:w-[90%] mx-auto py-12  items-center justify-center">
          <div className="flex flex-col justify-center items-center gap-4 py-8 border-r border-border w-full p-5">
              <h2 className="xl:text-[56px] lg:text-[48px] sm:text-[32px] text-[24px]"><SlotCounter value="120K" delay={0.2} /></h2>
              <ScrollTextReveal repeat={true} tag="p" className="opacity-25 sm:text-[15px] text-[13px] text-center">Growing Businesses</ScrollTextReveal>
          </div>
          <div className="sm:col-span-2 flex flex-col justify-center items-center gap-4 py-8 border-r border-border w-full p-5">
              <h2 className="xl:text-[56px] lg:text-[48px] sm:text-[32px] text-[24px]"><SlotCounter value="$250M"  delay={0.4}/></h2>
              <ScrollTextReveal repeat={true} tag="p" className="opacity-25 sm:text-[15px] text-[13px] text-center">Revenue Tracked</ScrollTextReveal>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 py-8 w-full p-5">
              <h2 className="xl:text-[56px] lg:text-[48px] sm:text-[32px] text-[24px]"><SlotCounter value="90%" delay={0.6} /></h2>
              <ScrollTextReveal repeat={true} tag="p" className="opacity-25 sm:text-[15px] text-[13px] text-center">Average Growth</ScrollTextReveal>
          </div>
        </div>
      </section>

      <section className="child py-[40px] bg-[#FBFBFB] dark:bg-[#121212]">
        
        <div className="flex md:flex-row flex-col items-end gap-4 md:px-[5%] px-4 py-12">
          <div className="sticky bottom-6 flex flex-col md:h-[80vh] justify-start gap-6 md:w-[30%] w-full md:pr-6">
            <AnimateHeading repeat={false} tag="h2" start="top 90%" className="w-[75%] leading-[120%] tracking-[-2%] md:text-[28px] text-[24px]">
              Build lasting <br/>financial momentum
            </AnimateHeading>
            
            <ScrollTextReveal repeat={false}  tag="p" start="top 90%" className="opacity-50">
              Smart financial tools that turn everyday financial decisions into steady, measurable progress. Spendy is designed to help you manage your money with confidence
            </ScrollTextReveal>
            <div className="flex items-end justify-start p-6 w-full min-h-[300px] flex-1 rounded-[20px] border-8 border-gray-100 dark:border-[#232323] bg-white dark:bg-[#212121] bg-[url('/girl.webp')] bg-no-repeat bg-cover bg-right">
              <Graph className="text-white dark:text-[#101010] w-[180px] h-auto" />
            </div>
          </div>
          <div className="md:w-[70%] w-full flex flex-col gap-4">
              {
                [
                  { id: 0, heading: "Banking", text: "Set a plan that reflects your real life. Create flexible budgets, understand your habits, and stay ahead of every commitment without the guesswork.", list: ["Send money", "Receive money", "Virtual cards", "Manage accounts"], img: <BankingIcon className="text-white dark:text-[#101010] w-[60%] h-auto mt-12 mx-auto" />, subheading: "Seamless Digital Banking" },
                  { id: 1, heading: "Saving", text: "Make progress feel automatic. Set meaningful goals, build healthy saving habits, and watch small decisions become lasting security.", list: ["Set goals", "Build habits", "Track progress", "Stay consistent"], img: <WalletIcon className="text-white dark:text-[#101010] w-[70%] h-auto mt-12 mx-auto" />, subheading: "Smart Saving Tools" },
                  { id: 2, heading: "Investing", text: "Put your money to work with greater clarity. Follow your portfolio, understand your progress, and invest with a plan you can trust.", list: ["Research good investments", "Select the right ones", "Monitor performance", "Optimize your portfolio"], img: <InvestmentIcon className="text-white dark:text-[#101010] w-[75%] h-auto mt-12 mx-auto" />, subheading: "Intelligent Investments" },
                  { id: 3, heading: "Budgeting", text: "Take control of your finances with a clear plan. Track your spending, adjust your budget as needed, and optimize your financial habits for long-term success.", list: ["Plan your budget", "Track your spending", "Adjust your budget", "Optimize your spending"], img: <BudgetIcon className="text-white dark:text-[#101010] w-[80%] h-auto mt-12 mx-auto " />, subheading: "Effective Budgeting" },
                ].map((item, index) => (
                  <FeaturesCard key={item.id} index={index} heading={item.heading} list={item.list} text={item.text} img={item.img} subheading={item.subheading} />
                ))
              }
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
              img: <CreateAccount  className="text-white dark:text-[#101010] w-full h-auto mx-auto" />
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
              img: <BuildPlans  className="text-white dark:text-[#101010] w-full h-auto mx-auto" />

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
