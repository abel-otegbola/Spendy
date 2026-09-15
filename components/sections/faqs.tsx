import AnimateHeading from "../animations/animateHeading";
import { ChevronDownIcon } from "lucide-react";
import ScrollAnimate from "../animations/scrollAnimation";

export default function FAQs() {
    return (
    <section className="flex flex-col items-center justify-center gap-12 lg:px-[15%] md:px-[5%] px-[5%] py-[5%] bg-gray-100 dark:bg-[#121212] mt-[40px]">
    <div className="flex flex-col items-center justify-center gap-4 w-full">
        <h1 className="uppercase font-medium text-[14px] opacity-50">Frequently Asked Questions</h1>
        <AnimateHeading repeat={true} tag="h2" className="font-medium dark:font-normal md:w-[50%] leading-[120%] text-center md:text-[28px] text-[24px]">
        <span className="opacity-50">Somethings You Need to Know</span><br /> Before You Get Started
        </AnimateHeading>
        </div>

        <div className="flex flex-col gap-3 py-4 md:w-[75%] mx-auto w-full">
        {[
            {
            question: "What is Spendy?",
            answer: "Spendy is a modern financial platform that brings banking, budgeting, saving, and investing into one clear experience so you can make more confident decisions with your money.",
            },
            {
            question: "Who is Spendy for?",
            answer: "Spendy is built for anyone who wants a clearer view of their finances, from building better everyday habits to planning for meaningful long-term goals.",
            },
            {
            question: "What can I do with Spendy?",
            answer: "You can manage your accounts, send and receive money, set budgets, create savings goals, monitor investments, and understand your financial progress in one place.",
            },
            {
            question: "How does Spendy help me manage spending?",
            answer: "Spendy organizes your activity and highlights useful patterns, giving you the context to see where your money is going and make adjustments before small decisions become bigger problems.",
            },
            {
            question: "Can I create a budget around my goals?",
            answer: "Yes. Build flexible budgets around the way you actually live, track progress as you go, and update your plan whenever your priorities change.",
            },
            {
            question: "Can Spendy help me save consistently?",
            answer: "Spendy lets you set specific goals and monitor your progress so saving feels visible, intentional, and easier to maintain over time.",
            },
            {
            question: "Is Spendy secure?",
            answer: "Protecting your financial information is fundamental to the Spendy experience. We use modern security practices and treat your data with care at every step.",
            },
            {
            question: "How much does Spendy cost?",
            answer: "Spendy is designed to make better financial management accessible. Choose the plan that fits your needs, with pricing presented clearly before you get started.",
            },
        ].map((item, index) => (
            <ScrollAnimate animation="slideUp" key={item.question} delay={index * 0.1}>
                <details className="group bg-white dark:bg-[#101010] rounded-[12px] px-4 border border-border/[0.5]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-medium [&::-webkit-details-marker]:hidden">
                    {item.question}
                    <ChevronDownIcon className="shrink-0 text-[20px] transition-transform duration-500 group-open:rotate-180" />
                </summary>
                <p className="pb-5 leading-6 opacity-70">
                    {item.answer}
                </p>
                </details>
            </ScrollAnimate>
        ))}
        </div>
    </section>
    )
}