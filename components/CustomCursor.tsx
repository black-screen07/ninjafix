'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current

    if (!cursor || !follower) return

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out'
      })

      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: 'power2.out'
      })
    }

    const handleMouseEnter = () => {
      gsap.to(cursor, {
        scale: 0.5,
        duration: 0.3,
        ease: 'back.out(1.7)'
      })
      gsap.to(follower, {
        scale: 1.5,
        duration: 0.3,
        ease: 'back.out(1.7)'
      })
    }

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
        ease: 'back.out(1.7)'
      })
      gsap.to(follower, {
        scale: 1,
        duration: 0.3,
        ease: 'back.out(1.7)'
      })
    }

    window.addEventListener('mousemove', moveCursor)

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .group')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-4 h-4 bg-ninja-blue rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ left: '-8px', top: '-8px' }}
      />
      <div
        ref={followerRef}
        className="fixed w-8 h-8 border-2 border-ninja-blue/50 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ left: '-16px', top: '-16px' }}
      />
    </>
  )
}
