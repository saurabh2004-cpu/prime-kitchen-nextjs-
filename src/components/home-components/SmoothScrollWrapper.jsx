"use client"

import { useRef, useEffect } from "react"
import LocomotiveScroll from "locomotive-scroll"
import "locomotive-scroll/dist/locomotive-scroll.css"

export default function SmoothScrollWrapper({ children}   ) {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      lerp: 0.07,
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
    })

    return () => scroll.destroy()
  }, [])

  return (
    <div id="smooth-wrapper" data-scroll-container ref={containerRef}>
      {children}
    </div>
  )
}
