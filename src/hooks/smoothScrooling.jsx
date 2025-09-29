"use client"
import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"

export function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1, // higher = slower scroll (default: 1.2)
      smoothWheel: true,
      smoothTouch: false, // set true if you want touch smooth too
      lerp: 0.1, // inertia, 0 = instant, 1 = no movement
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])
}
