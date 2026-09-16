"use client"

import { useEffect, useRef } from "react"

type StopOnScrollProps = {
  children: React.ReactNode
  className?: string
  innerClassName?: string
}

export default function StopOnScroll({
  children,
  className = "",
  innerClassName = "",
}: StopOnScrollProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const innerRef = useRef<HTMLDivElement | null>(null)
  
  useEffect(() => {
    const wrapper = wrapperRef.current
    const inner = innerRef.current
    const mediaQuery = window.matchMedia("(min-width: 768px)")

    if (!wrapper || !inner) return
    // if (mediaQueryTooSmall.matches) return

    let cancelled = false
    let cleanup: (() => void) | undefined

    void import("gsap").then(async ({ gsap }) => {
      const { ScrollTrigger } = await import("gsap/ScrollTrigger")

      if (cancelled) return

      gsap.registerPlugin(ScrollTrigger)

      const features = Array.from(inner.children) as HTMLElement[]

      if (features.length < 2) return

      gsap.set(features.slice(1), {
        y: () => window.innerHeight,
      })

      // Tune these independently:
      const vhPerTransition = 1000 // scroll distance to bring each feature in
      const holdVh = 400          // extra scroll distance to "rest" on the last feature
                                  // before the pin releases and the next section can enter

      const totalScroll =
        (features.length - 1) * vhPerTransition + holdVh

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: mediaQuery.matches ? "top 24%" : "top 12%",
          end: `+=${totalScroll}vh`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      })

      features.slice(1).forEach((feature) => {
        timeline.to(feature, {
          y: 0,
          ease: "none",
          duration: vhPerTransition,
        })
      })

      // No-op tween: just holds scroll progress here, keeping the
      // last feature pinned on screen before the next section slides in
      timeline.to({}, { duration: holdVh })

      cleanup = () => {
        timeline.scrollTrigger?.kill()
        timeline.kill()
      }
    })

    return () => {
      cancelled = true
      cleanup?.()
    }
  }, [])

  return (
    <div
      ref={wrapperRef}
      className={`relative w-full ${className}`}
    >
      <div
        ref={innerRef}
        className={`relative w-full grid [&>*]:absolute [&>*]:absolute max-[500px]:gap-2 ${innerClassName}`}
      >
        {children}
      </div>
    </div>
  )
}