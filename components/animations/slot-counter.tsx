"use client"

import { useEffect, useMemo, useRef, useState } from "react"

type SlotCounterProps = {
  value: number | string
  className?: string
  duration?: number
  delay?: number
}

function splitValue(value: number | string) {
  const text = String(value)
  return [...text].map((character) => ({
    character,
    digit: /\d/.test(character) ? Number(character) : null,
  }))
}

export default function SlotCounter({
  value,
  className = "",
  duration = 1600,
  delay = 0,
}: SlotCounterProps) {
  const characters = useMemo(() => splitValue(value), [value])
  const counterRef = useRef<HTMLSpanElement | null>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const counter = counterRef.current
    if (!counter) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.65 },
    )

    observer.observe(counter)

    return () => observer.disconnect()
  }, [value])

  return (
    <span
      ref={counterRef}
      className={`inline-flex items-baseline ${className}`}
      aria-label={String(value)}
    >
      {characters.map(({ character, digit }, index) => {
        if (digit === null) {
          return (
            <span key={`${character}-${index}`} aria-hidden="true">
              {character}
            </span>
          )
        }

        return (
          <span
            key={`${character}-${index}`}
            className="inline-block h-[1em] overflow-hidden align-center"
            aria-hidden="true"
          >
            <span
              className="inline-flex flex-col will-change-transform"
              style={{
                transform: started ? `translateY(-${digit * 10}%)` : "translateY(0)",
                transitionDuration: `${duration}ms`,
                transitionDelay: `${delay + index * 70}ms`,
                transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              {Array.from({ length: 10 }, (_, number) => (
                <span key={number} className="h-[1em] leading-[1em] translate-y-[-0.12em]">
                  {number}
                </span>
              ))}
            </span>
          </span>
        )
      })}
    </span>
  )
}
