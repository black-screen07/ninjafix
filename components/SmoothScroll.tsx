'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function SmoothScroll() {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]')
      
      if (anchor) {
        e.preventDefault()
        const href = anchor.getAttribute('href')
        if (href && href !== '#') {
          const element = document.querySelector(href)
          if (element) {
            gsap.to(window, {
              scrollTo: {
                y: element,
                offsetY: 80
              },
              duration: 1.5,
              ease: 'power3.inOut'
            })
          }
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)

    // Removed global parallax to prevent unwanted vertical movement
    // Parallax is now applied individually where needed

    return () => {
      document.removeEventListener('click', handleAnchorClick)
    }
  }, [])

  return null
}
