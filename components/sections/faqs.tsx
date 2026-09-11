import AnimateHeading from "../animations/animateHeading";
import { ChevronDownIcon } from "lucide-react";

export default function FAQs() {
    return (
    <section className="flex flex-col items-center justify-center gap-12 lg:px-[15%] md:px-[5%] px-[5%] py-[10%] mt-[40px]">
    <div className="flex flex-col items-center justify-center gap-4 w-full">
        <h1 className="uppercase font-medium text-[14px] opacity-50">Frequently Asked Questions</h1>
        <AnimateHeading repeat={true} tag="h2" className="font-medium md:w-[50%] leading-[120%] tracking-[-2%] text-center md:text-[28px] text-[24px]">
        Answers to common questions before you get started
        </AnimateHeading>
        </div>

        <div className="flex flex-col gap-3 py-4 w-full">
        {[
            {
            question: "What kind of projects do you work on?",
            answer: "We work with startups, growing teams, and established brands on product videos, brand visuals, websites, and digital product experiences.",
            },
            {
            question: "How long does a typical project take?",
            answer: "Most projects take between two and six weeks, depending on the scope. We will share a clear timeline and milestones before work begins.",
            },
            {
            question: "Can you work with our existing brand or product?",
            answer: "Absolutely. We can extend an existing visual system or help refine it so every new touchpoint feels consistent, intentional, and ready to scale.",
            },
            {
            question: "How do we get started?",
            answer: "Send us a note about your idea, goals, and timeline. We will review it and schedule a short call to understand the opportunity and recommend the best next step.",
            },
            {
            question: "What do you need from us to begin?",
            answer: "A clear view of your goals, audience, existing assets, and timeline is a great starting point. We will guide you through everything else during the discovery process.",
            },
            {
            question: "Do you offer strategy as part of your projects?",
            answer: "Yes. We shape the creative direction and recommend the right format, message, and experience so the final work supports your business goals.",
            },
            {
            question: "Can you help after the project launches?",
            answer: "Yes. We can support updates, new campaign assets, landing page improvements, and continued design or development as your product grows.",
            },
            {
            question: "How do you price your services?",
            answer: "Every project is scoped around its goals, deliverables, and timeline. After our initial conversation, we will send a tailored proposal with clear pricing.",
            },
        ].map((item) => (
            <details key={item.question} className="group border-b border-black/[0.15]">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-medium md:text-[20px] text-[16px] [&::-webkit-details-marker]:hidden">
                {item.question}
                <ChevronDownIcon className="shrink-0 text-[20px] transition-transform duration-300 group-open:rotate-180" />
            </summary>
            <p className="max-w-[75%] pb-5 text-sm leading-6 opacity-70 md:text-base">
                {item.answer}
            </p>
            </details>
        ))}
        </div>
    </section>
    )
}