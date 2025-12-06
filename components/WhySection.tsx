'use client'

import { motion } from 'framer-motion'
import { Clock, CheckCircle2, MessageSquare, Star } from 'lucide-react'

const reasons = [
  {
    icon: Clock,
    title: 'Vitesse Ninja',
    description: 'Livraison garantie en 2-24h selon la complexité. Pas de délais interminables.',
    stat: '2-24h',
    statLabel: 'Livraison'
  },
  {
    icon: CheckCircle2,
    title: 'Paiement après satisfaction',
    description: 'Vous payez uniquement quand le travail est terminé et validé par vous.',
    stat: '100%',
    statLabel: 'Satisfaction'
  },
  {
    icon: MessageSquare,
    title: 'Communication directe',
    description: 'Échanges clairs, rapides et instantanés. Pas de jargon inutile.',
    stat: '<1h',
    statLabel: 'Réponse'
  },
  {
    icon: Star,
    title: 'Expertise réelle',
    description: 'Maîtrise complète des APIs, SaaS, intégrations et développement moderne.',
    stat: '5+',
    statLabel: 'Années'
  }
]

export default function WhySection() {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-ninja-darker via-gray-900 to-ninja-darker">
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
            Pourquoi NinjaFix ?
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gray-400 to-transparent rounded-full mx-auto mb-6" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Une approche différente du développement freelance
          </p>
        </motion.div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 overflow-hidden">
                {/* Background gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-600/10 to-gray-700/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex items-start gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="p-4 rounded-xl bg-gray-700/30 border border-gray-600/50 group-hover:scale-110 transition-transform duration-300">
                      <reason.icon className="w-8 h-8 text-gray-300" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-gray-200 transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-4">
                      {reason.description}
                    </p>
                    
                    {/* Stat */}
                    <div className="inline-flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-white">
                        {reason.stat}
                      </span>
                      <span className="text-sm text-gray-500 uppercase tracking-wider">
                        {reason.statLabel}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Terminal comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <div className="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-800/30 border-b border-gray-700/30">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-gray-600" />
                <div className="w-3 h-3 rounded-full bg-gray-600" />
                <div className="w-3 h-3 rounded-full bg-gray-600" />
              </div>
              <div className="text-gray-500 text-sm ml-4">comparison.sh</div>
            </div>
            
            {/* Terminal content */}
            <div className="p-6 font-mono text-sm">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Autres devs */}
                <div>
                  <div className="text-gray-500 mb-3">$ autres_devs --status</div>
                  <div className="space-y-2 text-gray-400">
                    <div>⏱️  Délai: 7-14 jours</div>
                    <div>💰 Paiement: 50% avance</div>
                    <div>📧 Réponse: 24-48h</div>
                    <div>❌ Disponibilité: limitée</div>
                  </div>
                </div>
                
                {/* NinjaFix */}
                <div>
                  <div className="text-gray-500 mb-3">$ ninjafix --status</div>
                  <div className="space-y-2 text-gray-300">
                    <div>⚡ Délai: 2-24h</div>
                    <div>✓ Paiement: après satisfaction</div>
                    <div>💬 Réponse: &lt;1h</div>
                    <div>✓ Disponibilité: 7j/7</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-700/30">
                <div className="text-gray-400">
                  → <span className="text-white">Résultat:</span> <span className="text-white font-bold">+50 projets • 0 délais dépassés • 100% satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
