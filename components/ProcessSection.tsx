'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, Zap, CheckCircle2 } from 'lucide-react'
import WhatsAppTerminalModal from './WhatsAppTerminalModal'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Vous décrivez votre problème',
    description: 'Expliquez-moi votre besoin en quelques lignes. Via WhatsApp, email ou formulaire.',
    color: 'from-gray-600 to-gray-700'
  },
  {
    number: '02',
    icon: Zap,
    title: 'J\'interviens immédiatement',
    description: 'Analyse rapide, solution proposée, développement express. Communication continue.',
    color: 'from-gray-600 to-gray-700'
  },
  {
    number: '03',
    icon: CheckCircle2,
    title: 'Vous payez une fois satisfait',
    description: 'Validation du travail, tests, livraison. Paiement uniquement après votre approbation.',
    color: 'from-gray-600 to-gray-700'
  }
]

export default function ProcessSection() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false)

  return (
    <section id="process" className="relative py-32 px-6 bg-gradient-to-b from-ninja-darker via-gray-900 to-ninja-darker">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.02)_0%,_transparent_100%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
            Process Ninja
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gray-400 to-transparent rounded-full mx-auto mb-6" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Simple, rapide, efficace. En 3 étapes seulement.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 opacity-20" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="relative bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group">
                  {/* Step number */}
                  <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-600/50 flex items-center justify-center shadow-lg shadow-gray-500/20">
                    <span className="text-2xl font-bold text-white">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${step.color} mb-6 mt-6 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-gray-200 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-600/5 to-gray-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Git workflow visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="max-w-3xl mx-auto bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-800/30 border-b border-gray-700/30">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-gray-600" />
                <div className="w-3 h-3 rounded-full bg-gray-600" />
                <div className="w-3 h-3 rounded-full bg-gray-600" />
              </div>
              <div className="text-gray-500 text-sm ml-4">workflow.sh</div>
            </div>
            
            {/* Terminal content */}
            <div className="p-6 font-mono text-sm">
              <div className="space-y-3">
                <div>
                  <span className="text-gray-400">$</span>
                  <span className="text-gray-400"> git checkout -b votre-projet</span>
                </div>
                <div className="text-gray-500 pl-4">→ Analyse de votre besoin</div>
                
                <div className="mt-4">
                  <span className="text-gray-400">$</span>
                  <span className="text-gray-400"> git commit -m "feat: développement express"</span>
                </div>
                <div className="text-gray-500 pl-4">→ Intervention rapide 2-24h</div>
                
                <div className="mt-4">
                  <span className="text-gray-400">$</span>
                  <span className="text-gray-400"> git push origin production</span>
                </div>
                <div className="text-gray-300 pl-4">✓ Livraison validée</div>
                <div className="text-gray-300 pl-4">✓ Tests passés</div>
                <div className="text-gray-300 pl-4">✓ Paiement après satisfaction</div>
                
                <div className="mt-6 pt-4 border-t border-gray-700/30">
                  <div className="text-center">
                    <button
                      onClick={() => setIsTerminalOpen(true)}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"
                    >
                      <span className="text-base">Lancer ma mission maintenant</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* WhatsApp Terminal Modal */}
      <WhatsAppTerminalModal 
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </section>
  )
}
