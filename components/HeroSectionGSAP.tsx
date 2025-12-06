'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Terminal, Zap, ArrowRight, MessageCircle } from 'lucide-react'
import SplitText from './SplitText'
import WhatsAppTerminalModal from './WhatsAppTerminalModal'
import EmailTerminalModal from './EmailTerminalModal'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function HeroSectionGSAP() {
  const heroRef = useRef<HTMLElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const ninjaRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const urgenceRef = useRef<HTMLDivElement>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false)
  const [typingText, setTypingText] = useState('')
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)

  const messages = [
    'Interventions Express 2-24h',
    'Bug critique ? Réponse en <1h',
    'Landing page livrée demain',
    'API intégrée en quelques heures',
    'Developpement custom',
    'Paiement après satisfaction',
    'Disponible 7j/7'
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Badge animation (fade in only, no scale/rotation to avoid blocking typing)
      gsap.from(badgeRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.3
      })

      // Ninja star rotation
      if (ninjaRef.current) {
        // Pulse effect only (no rotation)
        gsap.to(ninjaRef.current, {
          scale: 1.05,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        })
      }

      // Advanced title animations
      // "Le Développeur" - 3D wave effect
      if (titleRef.current) {
        const chars = titleRef.current.querySelectorAll('.title-char')
        
        gsap.from(chars, {
          y: 100,
          rotationX: -90,
          opacity: 0,
          duration: 1.2,
          stagger: 0.05,
          ease: 'back.out(1.7)',
          delay: 0.8,
          transformOrigin: '50% 50% -50px'
        })

        // Continuous wave animation
        gsap.to(chars, {
          y: -10,
          duration: 2,
          stagger: {
            each: 0.1,
            repeat: -1,
            yoyo: true
          },
          ease: 'sine.inOut',
          delay: 2
        })
      }

      // "d'Urgence" - Glitch effect
      if (urgenceRef.current) {
        const chars = urgenceRef.current.querySelectorAll('.urgence-char')
        const glitchLayers1 = urgenceRef.current.querySelectorAll('.glitch-layer-1')
        const glitchLayers2 = urgenceRef.current.querySelectorAll('.glitch-layer-2')
        
        // Initial entrance with elastic bounce
        gsap.from(chars, {
          x: -100,
          opacity: 0,
          scale: 0,
          rotation: -180,
          duration: 1,
          stagger: 0.04,
          ease: 'elastic.out(1, 0.5)',
          delay: 1.1
        })

        // Glitch effect loop (subtle, less frequent)
        gsap.timeline({ repeat: -1, repeatDelay: 5, delay: 3 })
          .to(glitchLayers1, {
            opacity: 0.7,
            duration: 0.03,
            stagger: 0.01
          })
          .to(glitchLayers2, {
            opacity: 0.7,
            duration: 0.03,
            stagger: 0.01
          }, '<')
          .to([glitchLayers1, glitchLayers2], {
            opacity: 0,
            duration: 0.03
          })
          .to(glitchLayers1, {
            opacity: 0.5,
            x: -3,
            duration: 0.05
          }, '+=0.1')
          .to(glitchLayers2, {
            opacity: 0.5,
            x: 3,
            duration: 0.05
          }, '<')
          .to([glitchLayers1, glitchLayers2], {
            opacity: 0,
            x: 0,
            duration: 0.05
          })
      }

      // CTAs animation
      if (ctaRef.current) {
        gsap.set(ctaRef.current.children, { opacity: 1 }) // Ensure visible by default
        gsap.from(ctaRef.current.children, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'back.out(1.7)',
          delay: 1.5
        })
      }

      // Terminal animation
      if (terminalRef.current) {
        gsap.from(terminalRef.current, {
          y: 100,
          opacity: 0,
          scale: 0.9,
          duration: 1,
          ease: 'power3.out',
          delay: 2
        })

        // Terminal glow effect
        gsap.to(terminalRef.current, {
          boxShadow: '0 0 60px rgba(0, 212, 255, 0.3)',
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        })

        // Subtle parallax scroll effect (reduced movement)
        gsap.to(terminalRef.current, {
          y: -20,
          scrollTrigger: {
            trigger: terminalRef.current,
            start: 'top center',
            end: 'bottom top',
            scrub: 2
          }
        })
      }

      // Removed floating animation to prevent vertical movement
    }, heroRef)

    return () => ctx.revert()
  }, [])

  // Typing effect for badge
  useEffect(() => {
    let timeout: NodeJS.Timeout
    let charIndex = 0
    const currentMessage = messages[currentMessageIndex]
    
    const typeNextChar = () => {
      if (charIndex < currentMessage.length) {
        setTypingText(currentMessage.substring(0, charIndex + 1))
        charIndex++
        timeout = setTimeout(typeNextChar, 80) // Typing speed
      } else {
        // Wait before erasing
        timeout = setTimeout(() => {
          eraseText()
        }, 3000) // Display duration
      }
    }
    
    const eraseText = () => {
      if (charIndex > 0) {
        setTypingText(currentMessage.substring(0, charIndex - 1))
        charIndex--
        timeout = setTimeout(eraseText, 40) // Erasing speed (faster)
      } else {
        // Move to next message
        setCurrentMessageIndex((prev) => (prev + 1) % messages.length)
      }
    }
    
    // Start typing after initial delay
    timeout = setTimeout(typeNextChar, 500)
    
    return () => clearTimeout(timeout)
  }, [currentMessageIndex])

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Animated ninja photo background */}
      <div ref={ninjaRef} className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-20 pointer-events-none overflow-hidden">
        <div className="relative w-full h-full">
          <img 
            src="/ninja.png" 
            alt="Ninja Developer"
            className="w-full h-full object-contain"
            style={{ filter: 'drop-shadow(0 0 60px rgba(0, 212, 255, 0.4))' }}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-ninja-blue/10 to-ninja-darker" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Typing effect */}
        <div ref={badgeRef} className="mb-8">
          <span className="text-base md:text-lg text-ninja-blue font-medium font-mono">
            {typingText}
            <span className="inline-block w-0.5 h-5 bg-ninja-blue ml-1 animate-pulse" />
          </span>
        </div>

        {/* Main heading with advanced animation */}
        <div className="mb-6 relative">
          <SplitText 
            text="NinjaFix" 
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white block mb-4 tracking-tight"
            delay={0.5}
            stagger={0.05}
          />
          
          {/* Le Développeur with 3D perspective */}
          <div className="relative overflow-hidden mb-4" style={{ perspective: '1000px' }}>
            <div ref={titleRef} className="text-4xl md:text-6xl lg:text-7xl font-bold text-white block whitespace-nowrap">
              {'Le Développeur'.split('').map((char, i) => (
                <span
                  key={i}
                  className="inline-block title-char"
                  style={{
                    display: char === ' ' ? 'inline' : 'inline-block',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </div>
          </div>
          
          {/* d'Urgence with glitch effect */}
          <div className="relative">
            <div ref={urgenceRef} className="text-4xl md:text-6xl lg:text-7xl font-bold text-white block relative">
              {'d\'Urgence'.split('').map((char, i) => (
                <span
                  key={i}
                  className="inline-block urgence-char relative"
                  style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
                >
                  {char === ' ' ? '\u00A0' : char}
                  {/* Glitch layers */}
                  <span className="absolute inset-0 text-ninja-blue opacity-0 glitch-layer-1" style={{ left: '-2px' }}>
                    {char}
                  </span>
                  <span className="absolute inset-0 text-ninja-purple opacity-0 glitch-layer-2" style={{ left: '2px' }}>
                    {char}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <div className="text-xl md:text-2xl text-gray-400 mb-4 max-w-3xl mx-auto">
          <SplitText 
            text="Rapide. Précis. Invisible." 
            delay={1.3}
            stagger={0.02}
          />
        </div>

        <div className="text-lg md:text-xl text-gray-500 mb-12 max-w-3xl mx-auto">
          <SplitText 
            text="Micro-prestations de développement livrées en quelques heures : corrections de bugs, intégrations API, landing pages, automatisations."
            delay={1.5}
            stagger={0.01}
          />
        </div>

        {/* CTAs Contact */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-20">
          <button
            onClick={() => setIsModalOpen(true)}
            className="group px-10 py-5 bg-[#25D366] hover:bg-[#20BA5A] rounded-xl font-bold text-white hover:shadow-2xl hover:shadow-green-500/40 transition-all duration-300 flex items-center gap-3 transform hover:scale-105"
          >
            <img 
              src="https://cdn.simpleicons.org/whatsapp/FFFFFF" 
              alt="WhatsApp"
              className="w-7 h-7"
            />
            <span className="text-lg">Démarrer sur WhatsApp</span>
          </button>
          <button
            onClick={() => setIsEmailModalOpen(true)}
            className="group px-10 py-5 bg-ninja-dark border-2 border-ninja-blue/50 hover:border-ninja-blue rounded-xl font-bold text-white hover:shadow-2xl hover:shadow-ninja-blue/40 transition-all duration-300 flex items-center gap-3 transform hover:scale-105"
          >
            <img 
              src="https://cdn.simpleicons.org/gmail/EA4335" 
              alt="Email"
              className="w-7 h-7"
            />
            <span className="text-lg">Écrire par Email</span>
          </button>
        </div>

        {/* Terminal animation */}
        <div ref={terminalRef} className="mt-20 max-w-3xl mx-auto">
          <div className="bg-ninja-dark/80 backdrop-blur-sm rounded-xl border border-ninja-blue/20 overflow-hidden shadow-2xl transform-gpu">
            <div className="flex items-center gap-2 px-4 py-3 bg-ninja-darker/50 border-b border-ninja-blue/10">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex items-center gap-2 ml-4 text-gray-500 text-sm">
                <Terminal className="w-4 h-4" />
                <span>terminal</span>
              </div>
            </div>
            <div className="p-6 font-mono text-sm text-left">
              <div className="flex items-start gap-2 mb-2">
                <span className="text-ninja-blue">$</span>
                <span className="text-gray-400">ninjafix --deploy</span>
              </div>
              <div className="text-green-400 mb-2">✓ Bug corrigé en 2h</div>
              <div className="text-green-400 mb-2">✓ API intégrée avec succès</div>
              <div className="text-green-400 mb-2">✓ Tests passés</div>
              <div className="flex items-center gap-2 mt-4">
                <span className="text-ninja-blue">$</span>
                <span className="text-gray-400 animate-pulse">_</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Terminal Modal */}
      <WhatsAppTerminalModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      {/* Email Terminal Modal */}
      <EmailTerminalModal 
        isOpen={isEmailModalOpen} 
        onClose={() => setIsEmailModalOpen(false)} 
      />
    </section>
  )
}
