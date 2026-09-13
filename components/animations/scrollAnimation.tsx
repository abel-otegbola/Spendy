"use client"

import { useEffect, useRef } from "react"

type AnimationType =
  | "fadeIn"
  | "zoomIn"
  | "zoomOut"
  | "slideUp"
  | "slideDown"
  | "slideLeft"
  | "slideRight"

type ScrollAnimateProps = {
  children: React.ReactNode
  triggerRef?: React.RefObject<HTMLElement | null>
  animation?: AnimationType
  duration?: number
  delay?: number
  start?: string
  end?: string
  repeat?: boolean
  className?: string
  innerClassName?: string
}

export default function ScrollAnimate({
  children,
  triggerRef,
  animation = "fadeIn",
  duration = 1,
  delay = 0,
  start = "top 80%",
  end = "bottom 10%",
  repeat = true,
  className = "",
  innerClassName = "",
}: ScrollAnimateProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const innerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const wrapper = wrapperRef.current
    const inner = innerRef.current

    if (!wrapper || !inner) return

    let cancelled = false
    let cleanup: (() => void) | undefined

    void import("gsap").then(async ({ gsap }) => {
      const { ScrollTrigger } = await import("gsap/ScrollTrigger")

      if (cancelled) return

      gsap.registerPlugin(ScrollTrigger)

      const animations = {
        fadeIn: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },

        zoomIn: {
          from: {
            opacity: 0,
            scale: 0.4,
          },
          to: {
            opacity: 1,
            scale: 1,
          },
        },

        zoomOut: {
          from: {
            opacity: 0,
            scale: 1.4,
          },
          to: {
            opacity: 1,
            scale: 1,
          },
        },

        slideUp: {
          from: {
            opacity: 0,
            y: 60,
          },
          to: {
            opacity: 1,
            y: 0,
          },
        },

        slideDown: {
          from: {
            opacity: 0,
            y: -60,
          },
          to: {
            opacity: 1,
            y: 0,
          },
        },

        slideLeft: {
          from: {
            opacity: 0,
            x: 60,
          },
          to: {
            opacity: 1,
            x: 0,
          },
        },

        slideRight: {
          from: {
            opacity: 0,
            x: -60,
          },
          to: {
            opacity: 1,
            x: 0,
          },
        },
      }

      const selectedAnimation = animations[animation]

      gsap.set(inner, {
        ...selectedAnimation.from,
        transformOrigin: "center center",
        willChange: "transform, opacity",
      })

      const tween = gsap.to(inner, {
        ...selectedAnimation.to,
        duration,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: triggerRef?.current ?? wrapper,
          start,
          end,
          once: !repeat,
          toggleActions: repeat ? "play reverse play reverse" : "play none none none",
        },
      })

      cleanup = () => {
        tween.scrollTrigger?.kill()
        tween.kill()
      }
    })

    return () => {
      cancelled = true
      cleanup?.()
    }
  }, [
    animation,
    triggerRef,
    duration,
    delay,
    start,
    end,
    repeat
  ])

  return (
    <div
      ref={wrapperRef}
      className={className}
    >
      <div
        ref={innerRef}
        className={innerClassName}
      >
        {children}
      </div>
    </div>
  )
}