"use client"

import { MousePointer2 } from "lucide-react"
import { useEffect, useRef } from "react"

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor || !window.matchMedia("(pointer: fine)").matches) return

    const moveCursor = (event: MouseEvent) => {
      cursor.style.transform = `translate3d(${event.clientX - 20}px, ${event.clientY - 20}px, 0)`
      cursor.style.opacity = "1"
    }

    const hideCursor = () => {
      cursor.style.opacity = "0"
    }

    const setPressed = () => cursor.dataset.pressed = "true"
    const setReleased = () => delete cursor.dataset.pressed

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("mouseleave", hideCursor)
    window.addEventListener("mousedown", setPressed)
    window.addEventListener("mouseup", setReleased)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mouseleave", hideCursor)
      window.removeEventListener("mousedown", setPressed)
      window.removeEventListener("mouseup", setReleased)
    }
  }, [])

  return (
    <div ref={cursorRef} className="custom-cursor" aria-hidden="true">
      <MousePointer2 size={17} strokeWidth={2} />
    </div>
  )
}