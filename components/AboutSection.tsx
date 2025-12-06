'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Code2, Zap, Target, Award } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const stats = [
  { icon: Zap, value: '2-24h', label: 'Délai moyen' },
  { icon: Award, value: '+50', label: 'Projets réalisés' },
  { icon: Target, value: '100%', label: 'Satisfaction' },
  { icon: Code2, value: '0', label: 'Délais dépassés' }
]

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image entrance animation
      if (imageRef.current) {
        gsap.from(imageRef.current, {
          x: -100,
          opacity: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        })

        // Glow pulse (no rotation)
        gsap.to(imageRef.current.querySelector('.ninja-glow'), {
          scale: 1.2,
          opacity: 0.8,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        })

        // Parallax on scroll
        gsap.to(imageRef.current, {
          y: -30,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          }
        })
      }

      // Content animation
      if (contentRef.current) {
        gsap.set(contentRef.current.children, { opacity: 1, x: 0 }) // Ensure visible by default
        gsap.from(contentRef.current.children, {
          x: 100,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-ninja-darker via-gray-900 to-ninja-darker">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03)_0%,_transparent_100%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div ref={imageRef} className="relative flex justify-center">
            <div className="relative w-80 h-80">
              {/* Glow effect */}
              <div className="ninja-glow absolute inset-0 bg-gradient-to-r from-gray-400/10 to-gray-600/10 rounded-full blur-3xl" />
              
              {/* Main image container - Circle */}
              <div className="ninja-image relative w-full h-full rounded-full p-1 bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-gray-900">
                  <img 
                    src="/ninja.png" 
                    alt="Emmanuel Freddy - Ninja Developer"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Floating badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full flex items-center gap-2 shadow-lg"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-semibold text-gray-900">Disponible</span>
                  </motion.div>
                </div>
              </div>

              {/* Decorative circles */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-gray-700/50 rounded-full animate-spin-slow" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-gray-700/50 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }} />
            </div>
          </div>

          {/* Content Section */}
          <div ref={contentRef} className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
                Le Ninja derrière le code
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-gray-400 to-transparent rounded-full mb-6" />
              <div className="space-y-4 text-gray-400 leading-relaxed text-lg">
                <p>
                  Développeur full-stack passionné, je transforme vos urgences en solutions élégantes. 
                  Spécialisé dans les interventions express, je livre du code propre et performant en quelques heures.
                </p>
                <p>
                  Que ce soit un bug critique à 23h ou une landing page pour demain matin, 
                  je suis là pour vous débloquer rapidement et efficacement.
                </p>
                <p className="text-white font-medium">
                  Rapide. Précis. Invisible. Comme un ninja. 🥷
                </p>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-gray-700/50 rounded-lg group-hover:scale-110 transition-transform">
                      <stat.icon className="w-5 h-5 text-gray-300" strokeWidth={1.5} />
                    </div>
                    <div className="text-3xl font-bold text-white">{stat.value}</div>
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
