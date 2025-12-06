'use client'

import { motion } from 'framer-motion'
import { Terminal, Zap, ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Ninja silhouette background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.05 }}
          transition={{ duration: 1.5 }}
          className="w-[600px] h-[600px]"
        >
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path
              d="M100 20 L120 60 L160 60 L130 85 L145 125 L100 100 L55 125 L70 85 L40 60 L80 60 Z"
              fill="currentColor"
              className="text-ninja-blue"
            />
          </svg>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ninja-dark/50 border border-ninja-blue/30 mb-8"
        >
          <Zap className="w-4 h-4 text-ninja-blue" />
          <span className="text-sm text-ninja-blue font-medium">Interventions Express 2-24h</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <span className="gradient-text">NinjaFix</span>
          <br />
          <span className="text-white">Le Développeur</span>
          <br />
          <span className="text-white">d'Urgence</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-400 mb-4 max-w-3xl mx-auto"
        >
          Rapide. Précis. Invisible.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-gray-500 mb-12 max-w-3xl mx-auto"
        >
          Micro-prestations de développement livrées en quelques heures : 
          corrections de bugs, intégrations API, landing pages, automatisations.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#contact"
            className="group px-8 py-4 bg-gradient-to-r from-ninja-blue to-ninja-purple rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-ninja-blue/50 transition-all duration-300 flex items-center gap-2"
          >
            Commencer une mission express
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-ninja-dark/50 border border-ninja-blue/30 rounded-lg font-semibold text-white hover:bg-ninja-dark hover:border-ninja-blue/60 transition-all duration-300 neon-border"
          >
            Me contacter maintenant
          </a>
        </motion.div>

        {/* Terminal animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 max-w-3xl mx-auto"
        >
          <div className="bg-ninja-dark/80 backdrop-blur-sm rounded-xl border border-ninja-blue/20 overflow-hidden shadow-2xl">
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
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-gray-400"
                >
                  _
                </motion.span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
