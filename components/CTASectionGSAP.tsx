'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MessageCircle, Mail, Sparkles } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function CTASectionGSAP() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const iconRef = useRef<HTMLDivElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const orbsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Card entrance animation
      gsap.from(cardRef.current, {
        scale: 0.8,
        opacity: 0,
        rotationY: -30,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      })

      // Photo entrance animation only (no continuous animation)
      gsap.from(iconRef.current, {
        scale: 0,
        opacity: 0,
        duration: 1,
        ease: 'elastic.out(1, 0.5)',
        scrollTrigger: {
          trigger: iconRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      })

      // Buttons stagger animation
      if (buttonsRef.current) {
        gsap.from(buttonsRef.current.children, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: buttonsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          },
          delay: 0.5
        })
      }

      // Floating orbs animation
      if (orbsRef.current) {
        const orbs = orbsRef.current.children
        Array.from(orbs).forEach((orb, index) => {
          gsap.to(orb, {
            y: -30,
            x: index % 2 === 0 ? 20 : -20,
            duration: 3 + index,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.5
          })

          gsap.to(orb, {
            scale: 1.2,
            duration: 2 + index * 0.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
          })
        })
      }

      // Removed parallax to prevent vertical page movement
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="contact" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div ref={cardRef} className="relative" style={{ perspective: '1000px' }}>
          {/* Main CTA card */}
          <div className="relative bg-gradient-to-br from-ninja-dark via-ninja-darker to-ninja-dark rounded-3xl p-12 md:p-16 border border-ninja-blue/30 overflow-hidden transform-gpu">
            {/* Background effects */}
            <div ref={orbsRef} className="absolute top-0 left-0 w-full h-full pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-ninja-blue/20 rounded-full blur-[100px]" />
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-ninja-purple/20 rounded-full blur-[100px]" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center">
              {/* Profile Photo */}
              <div ref={iconRef} className="inline-block mb-8">
                <div className="relative w-24 h-24">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-ninja-blue/50 to-ninja-purple/50 rounded-full blur-2xl animate-pulse" />
                  
                  {/* Photo circle */}
                  <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-br from-ninja-blue via-ninja-purple to-ninja-violet">
                    <div className="w-full h-full rounded-full overflow-hidden bg-ninja-darker border-2 border-ninja-dark">
                      <img 
                        src="/ninja.png" 
                        alt="Emmanuel Freddy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Online indicator */}
                  <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-ninja-dark animate-pulse" />
                </div>
              </div>

              {/* Heading */}
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Besoin d'une intervention
                <br />
                <span className="gradient-text">maintenant ?</span>
              </h2>

              <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
                Je suis disponible immédiatement pour votre projet.
                <br />
                Réponse garantie en moins d'1 heure.
              </p>

              {/* Contact buttons */}
              <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <a
                  href="https://wa.me/2250767665462"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden"
                >
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform relative z-10" />
                  <span className="relative z-10">WhatsApp Direct</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
                <a
                  href="mailto:akaemmanuelfreddy@gmail.com"
                  className="group w-full sm:w-auto px-8 py-4 bg-ninja-dark border border-ninja-blue/30 rounded-lg font-semibold text-white hover:bg-ninja-dark/80 hover:border-ninja-blue/60 transition-all duration-300 flex items-center justify-center gap-3 neon-border"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Email
                </a>
              </div>

              {/* Contact info */}
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center justify-center gap-2">
                  <MessageCircle className="w-4 h-4 text-ninja-blue" />
                  <span>WhatsApp: +225 07 67 66 54 62</span>
                </p>
                <p className="flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4 text-ninja-blue" />
                  <span>akaemmanuelfreddy@gmail.com</span>
                </p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-8 right-8 w-24 h-24 border border-ninja-blue/20 rounded-full animate-pulse" />
            <div className="absolute bottom-8 left-8 w-32 h-32 border border-ninja-purple/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-12 text-center">
          <p className="text-gray-500">
            Disponible 7j/7 pour les urgences • Réponse rapide garantie
          </p>
        </div>
      </div>
    </section>
  )
}
