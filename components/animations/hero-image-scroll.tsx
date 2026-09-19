"use client"

import { useEffect, useRef } from "react"

type HeroImageScrollProps = {
  children: React.ReactNode
  className?: string
}

export default function HeroImageScroll({
  children,
  className = "",
}: HeroImageScrollProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const imageRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const wrapper = wrapperRef.current
    const image = imageRef.current

    if (!wrapper || !image) return

    let cancelled = false
    let cleanup: (() => void) | undefined

    void import("gsap").then(async ({ gsap }) => {
      const { ScrollTrigger } = await import("gsap/ScrollTrigger")

      if (cancelled) return

      gsap.registerPlugin(ScrollTrigger)

      const coverScale = () => {
        const bounds = image.getBoundingClientRect()

        return Math.max(
          window.innerWidth / bounds.width,
          window.innerHeight / bounds.height,
        ) * 0.6
      }

      gsap.set(image, {
        y: 0,
        rotateX: -20,
        scale: 1,
        transformOrigin: "center center",
        transformPerspective: 1200,
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
        force3D: false,
        willChange: "transform",
      })

      const tween = gsap.to(image, {
        y: 260,
        rotateX: 0,
        scale: coverScale,
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          start: "top 70%",
          end: "bottom 40%",
          scrub: 1,
          invalidateOnRefresh: true,
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
  }, [])

  return (
    <div ref={wrapperRef} className={className}>
      <div ref={imageRef}>{children}</div>
    </div>
  )
}
