'use client'

import { useRef, useEffect, ReactNode } from 'react'
import gsap from 'gsap'

interface MagneticCardProps {
  children: ReactNode
  className?: string
}

export default function MagneticCard({ children, className = '' }: MagneticCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      const distance = Math.sqrt(x * x + y * y)
      const maxDistance = 200

      if (distance < maxDistance) {
        const strength = 1 - distance / maxDistance
        gsap.to(card, {
          x: x * strength * 0.3,
          y: y * strength * 0.3,
          rotationY: x * strength * 0.05,
          rotationX: -y * strength * 0.05,
          scale: 1 + strength * 0.05,
          duration: 0.4,
          ease: 'power2.out'
        })
      } else {
        gsap.to(card, {
          x: 0,
          y: 0,
          rotationY: 0,
          rotationX: 0,
          scale: 1,
          duration: 0.6,
          ease: 'elastic.out(1, 0.3)'
        })
      }
    }

    const handleMouseLeave = () => {
      gsap.to(card, {
        x: 0,
        y: 0,
        rotationY: 0,
        rotationX: 0,
        scale: 1,
        duration: 0.6,
        ease: 'elastic.out(1, 0.3)'
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    card.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      card.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div
      ref={cardRef}
      className={className}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  )
}
