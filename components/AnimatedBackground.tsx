'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const particlesCount = 50

    // Create particles
    for (let i = 0; i < particlesCount; i++) {
      const particle = document.createElement('div')
      particle.className = 'particle'
      
      const size = Math.random() * 4 + 1
      const startX = Math.random() * window.innerWidth
      const startY = Math.random() * window.innerHeight
      
      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: ${Math.random() > 0.5 ? '#00d4ff' : '#a855f7'};
        border-radius: 50%;
        left: ${startX}px;
        top: ${startY}px;
        opacity: ${Math.random() * 0.5 + 0.2};
        filter: blur(${Math.random() * 2}px);
      `
      
      container.appendChild(particle)

      // Animate particle (reduced movement)
      gsap.to(particle, {
        x: `+=${Math.random() * 100 - 50}`,
        y: `+=${Math.random() * 100 - 50}`,
        duration: Math.random() * 10 + 5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: Math.random() * 2
      })

      // Pulse animation
      gsap.to(particle, {
        scale: Math.random() * 0.5 + 0.5,
        duration: Math.random() * 3 + 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })
    }

    // Mouse parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const particles = container.querySelectorAll('.particle')
      const x = (e.clientX / window.innerWidth - 0.5) * 50
      const y = (e.clientY / window.innerHeight - 0.5) * 50

      particles.forEach((particle, index) => {
        const speed = (index % 3 + 1) * 0.3
        gsap.to(particle, {
          x: `+=${x * speed}`,
          y: `+=${y * speed}`,
          duration: 1,
          ease: 'power2.out'
        })
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      container.innerHTML = ''
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ perspective: '1000px' }}
    />
  )
}
