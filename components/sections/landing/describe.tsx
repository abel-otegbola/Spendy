"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, Bitcoin, Bot, ChevronDown, HomeIcon, PenTool, Plus, Star, Wallet } from "lucide-react";
import ScrollAnimate from "@/components/animations/scrollAnimation";

const suggestions = [
    { id: 0, text: "Ecommerce app for my brand store", icon: <HomeIcon size={14} /> },
    { id: 1, text: "Ecommerce app for managing orders and inventory", icon: <HomeIcon size={14} /> },
    { id: 2, text: "Ecommerce app marketplace for independent sellers", icon: <HomeIcon size={14} /> },
    { id: 3, text: "Crypto app for realtime market analysis", icon: <Bitcoin size={14} /> },
    { id: 4, text: "Crypto app portfolio tracker with price alerts", icon: <Bitcoin size={14} /> },
    { id: 5, text: "Saving, investing and budgeting app", icon: <Wallet size={14} /> },
    { id: 6, text: "Personal banking app for monthly spending", icon: <Wallet size={14} /> },
    { id: 7, text: "Online store landing page for a fashion brand", icon: <HomeIcon size={14} /> },
];

const animatedValues = ["ecommerce app", "crypto app", "banking app", "budgeting app"];

export default function DescribeCard() {
    const [inputValue, setInputValue] = useState("ecommerce app");
    const [isTyping, setIsTyping] = useState(false);
    const [isAutoTyping, setIsAutoTyping] = useState(false);
    const isTypingRef = useRef(false);

    useEffect(() => {
        if (isTyping || isTypingRef.current) return;

        let currentIndex = 0;
        let rotationTimeout: number | undefined;
        let typingInterval: number | undefined;

        const typeNextValue = () => {
            currentIndex = (currentIndex + 1) % animatedValues.length;
            const nextValue = animatedValues[currentIndex];
            let characterIndex = 0;

            setIsAutoTyping(true);
            setInputValue("");
            typingInterval = window.setInterval(() => {
                if (isTypingRef.current) {
                    window.clearInterval(typingInterval);
                    setIsAutoTyping(false);
                    return;
                }

                characterIndex += 1;
                setInputValue(nextValue.slice(0, characterIndex));

                if (characterIndex === nextValue.length) {
                    window.clearInterval(typingInterval);
                    setIsAutoTyping(false);
                }
            }, 120);

            rotationTimeout = window.setTimeout(typeNextValue, 2800);
        };

        rotationTimeout = window.setTimeout(typeNextValue, 2800);

        return () => {
            if (rotationTimeout) window.clearTimeout(rotationTimeout);
            if (typingInterval) window.clearInterval(typingInterval);
        };
    }, [isTyping]);

    const matchingSuggestions = useMemo(() => {
        const searchValue = inputValue.trim().toLowerCase();

        return !isAutoTyping && searchValue
            ? suggestions.filter(({ text }) => text.toLowerCase().includes(searchValue))
            : [];
    }, [inputValue, isAutoTyping]);

    return (
        <div className="flex flex-col gap-4  w-[75%] mx-auto">
            <div className="relative p-[2px] overflow-hidden w-full rounded-[20px]">
              <span className="absolute top-0 left-0 bg-gradient-to-r from-green-400 via-transparent to-lime-500 w-[120%] h-[120%] -translate-x-[10%] z-1 blur-[8px] animate-spin-fast"></span>

                <div className="relative flex flex-col justify-between gap-2 w-full bg-white dark:bg-[#101010] bg-[url('/bg.svg')] bg-cover bg-center rounded-[18px] p-2 pb-2 h-[120px] z-2">
                    <input
                        value={inputValue}
                        onFocus={() => {
                            isTypingRef.current = true;
                            setIsTyping(true);
                            setIsAutoTyping(false);
                        }}
                        onBlur={() => {
                            isTypingRef.current = false;
                            setIsTyping(false);
                        }}
                        onChange={(event) => {
                            isTypingRef.current = true;
                            setIsTyping(true);
                            setIsAutoTyping(false);
                            setInputValue(event.target.value);
                        }}
                        placeholder="Describe the app you want to build"
                        className="px-2 py-1 bg-transparent border-none focus:ring-0 focus:outline-none text-sm"
                    />
                    <div className="relative flex items-end gap-2 justify-between w-full rounded-full z-2">
                        <div className="flex gap-2 items-center">
                            <button className="flex items-center gap-1 p-[6px] rounded-full bg-gray-200/[0.05] hover:bg-gray-200/[0.3] focus:bg-primary focus:text-white">
                                <Plus size={16} />
                            </button>
                            <div className="flex gap-2 items-center text-[10px] font-medium tracking-[0.12em] w-fit px-4 py-2 border border-border rounded-full">
                                <span className="opacity-75">Design styles</span>
                                <ChevronDown size={12} />
                            </div>
                        </div>
                        <div className="relative w-fit flex gap-2 items-center">
                            <div className="flex gap-2 items-center text-[10px] font-medium tracking-[0.12em] w-fit px-4 py-2 border border-border rounded-full">
                                <Star size={12} />
                                <span className="opacity-75">Framer AI</span>
                                <ChevronDown size={12} />
                            </div>
                            <button className="relative h-[40px] w-[40px] block px-2 flex items-center justify-center gap-2 border border-border bg-[#101010]/[0.4] backdrops-blur-sm font-medium rounded-full shadow-lg z-2">
                                <span className="text-white"><ArrowUpRight size={15} /></span> 
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex min-w-[100%] overflow-x-hidden gap-2">
                { [ "Suggestions",  "App", "Wireframes", "Websites", "Prototyping" ] 
                .map(item => (
                    <div key={item} className={`flex gap-2 items-center text-[10px] font-medium tracking-[0.12em] w-fit px-4 py-3 border border-border rounded-full ${item === "Suggestions" ? "bg-white/[0.5] dark:bg-[#101010]" : ""}`}>
                        <span className="h-2 w-2 rounded-full border border-border"></span>
                        <span className="opacity-50">{item}</span>
                    </div>
                ))
                }
            </div>

            <div className="flex max-h-[220px] gap-2 flex-col overflow-y-hidden pr-1">
                {!isAutoTyping && inputValue.trim() && matchingSuggestions.map(item => (
                    <ScrollAnimate animation="slideDown" key={item.id} innerClassName="flex gap-2 items-center rounded-lg bg-border/[0.4] p-2 text-sm opacity-50">
                        {item.icon}
                        <p>{item.text}</p>
                    </ScrollAnimate>
                ))}

            </div>
        </div>
    )
}

export function DescribeIcons() {
    return (
        <div className="flex flex-1 items-center opacity-50">
            <div className="relative p-[2px] overflow-hidden rounded-[20px] w-fit">
                <span className="absolute top-0 left-0 bg-gradient-to-r from-border to-green-500 w-[120%] h-[120%] -translate-x-[10%] z-1 blur-[8px] animate-spin-fast"></span>

                <div className={`relative flex gap-4  bg-white dark:bg-[#121212] items-center justify-center text-[10px] font-medium tracking-[0.12em] w-fit p-4 border border-border rounded-[18px] z-2`}>
                    <PenTool size={48} strokeWidth={0.5} />
                </div>
            </div>
            <div className="flex flex-col gap-2 w-[40%]">
                <div className="w-full h-[2px] bg-border/[0.4] rounded-full"></div>
                <div className="w-full h-[2px] bg-border/[0.4] rounded-full"></div>
                <div className="w-full h-[2px] bg-border/[0.4] rounded-full"></div>
                <div className="w-full h-[2px] bg-border/[0.4] rounded-full"></div>
            </div>
            <div className="relative p-[2px] overflow-hidden rounded-[20px] w-fit">
                <span className="absolute top-0 left-0 bg-gradient-to-r from-border to-green-500 w-[120%] h-[120%] -translate-x-[10%] z-1 blur-[8px] animate-spin-fast"></span>

                <div className={`relative flex gap-4  bg-white dark:bg-[#121212] items-center justify-center text-[10px] font-medium tracking-[0.12em] w-fit p-4 border border-border rounded-[18px] z-2`}>
                    <Bot size={48} strokeWidth={0.5} />
                </div>
            </div>

        </div>
    )
}