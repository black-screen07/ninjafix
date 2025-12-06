'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface SplitTextProps {
  text: string
  className?: string
  delay?: number
  stagger?: number
}

export default function SplitText({ 
  text, 
  className = '', 
  delay = 0,
  stagger = 0.03 
}: SplitTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const chars = containerRef.current.querySelectorAll('.char')

    gsap.fromTo(
      chars,
      {
        opacity: 0,
        y: 50,
        rotationX: -90,
        transformOrigin: '50% 50%'
      },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.8,
        stagger: stagger,
        delay: delay,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    )
  }, [delay, stagger])

  const chars = text.split('').map((char, index) => (
    <span
      key={index}
      className="char inline-block"
      style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  ))

  return (
    <div ref={containerRef} className={className} style={{ perspective: '1000px' }}>
      {chars}
    </div>
  )
}
