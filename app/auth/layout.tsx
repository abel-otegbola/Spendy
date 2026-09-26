'use client'
import Slider from "../../components/slider/slider";
import { useEffect, useState } from "react";

function AuthPages({ children }: Readonly<{
  children: React.ReactNode
}>) {
  const [activeSlider, setActiveSlider] = useState(0);
  
const slides = [
  {
    title: "Make Your Money Make Sense",
    text: "Build the confidence to understand your money and take control.",
  },
  {
    title: "Small Habits, Bigger Goals",
    text: "Learn simple ways to budget, save, and spend intentionally.",
  },
  {
    title: "Your Future Starts Now",
    text: "Pursue your financial goals with confidence and clarity.",
  },
];

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveSlider((prev) => (prev === slides.length -1 ? 0 : prev + 1));
    }, 5000);
    return () => clearTimeout(timer);
  }, [activeSlider, slides.length]);

  return (
    <div className="min-h-[400px] flex justify-between">

      <div className="relative bg-[url('/auth-bg.jpg')] bg-cover bg-center md:w-[45%] h-[96vh] rounded-[12px] m-4 sticky top-0 md:block hidden">
        <div className="flex flex-col items-end gap-6 p-[10%] h-full justify-end w-full rounded-[12px] overflow-hidden bg-gradient-to-t from-background/80 via-transparent to-transparent">
          {/* Slides */}
          <div
            className="flex relative pb-[20%] w-full items-end"
          >
            <Slider slides={slides} activeSlider={activeSlider} />
          </div>
          <div className="flex items-center justify-center w-full gap-2 mt-2 z-2">
            {slides.map((slide, idx) => (
              <button
                key={slide.title}
                type="button"
                aria-label={`Show slide ${idx + 1}: ${slide.title}`}
                aria-current={activeSlider === idx ? "true" : undefined}
                onClick={() => setActiveSlider(idx)}
                className={`h-0.5 rounded-full transition-all cursor-pointer duration-300 ${
                  activeSlider === idx ? "w-7 bg-primary" : "w-4 bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      {children}

    </div>
  )
}

export default AuthPages