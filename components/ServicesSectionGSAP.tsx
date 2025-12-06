'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Zap, Rocket, Plug, Workflow, Shield, Code2, Terminal } from 'lucide-react'
import MagneticCard from './MagneticCard'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const services = [
  {
    icon: Zap,
    title: 'BugFix Express',
    description: 'Correction de bugs urgents en quelques heures.',
    color: 'from-gray-600 to-gray-700',
    glow: 'group-hover:shadow-gray-500/30',
    code: '// Bug trouvé\n- error: undefined\n+ fixed: validated ✓'
  },
  {
    icon: Rocket,
    title: 'Landing Page Rapide',
    description: 'Design moderne + développement éclair.',
    color: 'from-gray-600 to-gray-700',
    glow: 'group-hover:shadow-gray-500/30',
    code: 'npm run build\n✓ Optimized\n✓ Deployed'
  },
  {
    icon: Plug,
    title: 'Intégration API',
    description: 'WhatsApp, Stripe, Mobile Money, email, SMS.',
    color: 'from-gray-600 to-gray-700',
    glow: 'group-hover:shadow-gray-500/30',
    code: 'POST /api/integrate\n200 OK\nConnected ✓'
  },
  {
    icon: Workflow,
    title: 'Automatisations & Scripts',
    description: 'Webhooks, cron jobs, connecteurs.',
    color: 'from-gray-600 to-gray-700',
    glow: 'group-hover:shadow-gray-500/30',
    code: 'cron: 0 */6 * * *\nWebhook: active\nRunning ✓'
  },
  {
    icon: Shield,
    title: 'Support Technique Ninja',
    description: 'Interventions précises, rapides, silencieuses.',
    color: 'from-gray-600 to-gray-700',
    glow: 'group-hover:shadow-gray-500/30',
    code: '$ ninja --help\nResponse: <1min\nSolved ✓'
  },
  {
    icon: Code2,
    title: 'Développement Custom',
    description: 'Solutions sur mesure pour vos besoins spécifiques.',
    color: 'from-gray-600 to-gray-700',
    glow: 'group-hover:shadow-gray-500/30',
    code: 'function custom() {\n  return perfect;\n}'
  }
]

export default function ServicesSectionGSAP() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.children

      if (cards) {
        gsap.from(cards, {
          y: 100,
          opacity: 0,
          scale: 0.8,
          rotation: -10,
          duration: 0.8,
          stagger: 0.15,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        })

        // Hover animations for each card
        Array.from(cards).forEach((card) => {
          const icon = card.querySelector('.service-icon')
          const codeBlock = card.querySelector('.code-snippet')

          card.addEventListener('mouseenter', () => {
            gsap.to(icon, {
              rotation: 360,
              scale: 1.2,
              duration: 0.6,
              ease: 'back.out(1.7)'
            })

            gsap.to(codeBlock, {
              height: 'auto',
              opacity: 1,
              duration: 0.4,
              ease: 'power2.out'
            })
          })

          card.addEventListener('mouseleave', () => {
            gsap.to(icon, {
              rotation: 0,
              scale: 1,
              duration: 0.4,
              ease: 'power2.out'
            })
          })
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="services" className="relative py-32 px-6 bg-gradient-to-b from-ninja-darker via-gray-900 to-ninja-darker">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.02)_0%,_transparent_100%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
            Services Express
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gray-400 to-transparent rounded-full mx-auto mb-6" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Des interventions ciblées, livrées rapidement, pour débloquer vos projets
          </p>
        </div>

        {/* Services grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <MagneticCard key={service.title} className="group relative">
              <div className={`relative bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 h-full ${service.glow} hover:shadow-2xl overflow-hidden`}>
                {/* Icon */}
                <div className={`service-icon inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} mb-6 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-gray-200 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Code snippet */}
                <div className="code-snippet mt-4 bg-gray-900/80 rounded-lg p-3 border border-gray-700/30 font-mono text-xs h-0 opacity-0 overflow-hidden">
                  <div className="flex items-center gap-2 mb-2 text-gray-500">
                    <Terminal className="w-3 h-3" />
                    <span>output</span>
                  </div>
                  <pre className="text-gray-300 whitespace-pre-wrap leading-relaxed">
                    {service.code}
                  </pre>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-600/5 to-gray-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </MagneticCard>
          ))}
        </div>
      </div>
    </section>
  )
}
