'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const pricingTiers = [
  {
    name: 'Correction Rapide',
    price: '50',
    description: 'Bug fixes et corrections urgentes',
    features: [
      'Correction de bugs simples',
      'Debug et analyse',
      'Tests de validation',
      'Livraison 2-6h',
      'Support post-livraison'
    ],
    popular: false
  },
  {
    name: 'Landing Page',
    price: '150',
    description: 'Page web moderne et responsive',
    features: [
      'Design moderne et épuré',
      'Responsive mobile/desktop',
      'Animations et interactions',
      'SEO optimisé',
      'Livraison 6-24h',
      'Code source fourni'
    ],
    popular: true
  },
  {
    name: 'Intégration API',
    price: '100',
    description: 'Connexion avec services externes',
    features: [
      'Intégration API complète',
      'WhatsApp, Stripe, etc.',
      'Gestion des erreurs',
      'Documentation fournie',
      'Tests inclus',
      'Support technique'
    ],
    popular: false
  },
  {
    name: 'Support Urgent',
    price: '25',
    description: 'Assistance technique rapide',
    features: [
      'Diagnostic rapide',
      'Conseil technique',
      'Résolution de problèmes',
      'Réponse immédiate',
      'Session de 30-60min'
    ],
    popular: false
  }
]

const handlePackageClick = (tier: typeof pricingTiers[0]) => {
  const message = `Bonjour! Je suis intéressé(e) par le pack "${tier.name}"

📦 Pack: ${tier.name}
💰 Prix: À partir de $${tier.price}
📝 Description: ${tier.description}

✅ Inclus:
${tier.features.map(f => `• ${f}`).join('\n')}

Pouvez-vous me donner plus d'informations?`

  const whatsappUrl = `https://wa.me/2250767665462?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank')
}

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Tarification <span className="gradient-text">Simple</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-4">
            Transparence totale, pas de surprises
          </p>
          <p className="text-lg text-ninja-blue font-semibold">
            Paiement uniquement après satisfaction
          </p>
        </motion.div>

        {/* Pricing grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Popular badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="px-4 py-1 bg-gradient-to-r from-ninja-blue to-ninja-purple rounded-full text-sm font-semibold text-white">
                    Populaire
                  </div>
                </div>
              )}

              <div className={`relative h-full bg-ninja-dark/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 ${
                tier.popular 
                  ? 'border-ninja-blue/50 shadow-lg shadow-ninja-blue/20 scale-105' 
                  : 'border-ninja-blue/20 hover:border-ninja-blue/40'
              }`}>
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {tier.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {tier.description}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-gray-400 text-sm">À partir de</span>
                    <span className="text-4xl font-bold gradient-text">
                      ${tier.price}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-ninja-blue flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={() => handlePackageClick(tier)}
                  className={`block w-full py-3 rounded-lg font-semibold text-center transition-all duration-300 cursor-pointer ${
                    tier.popular
                      ? 'bg-gradient-to-r from-ninja-blue to-ninja-purple text-white hover:shadow-lg hover:shadow-ninja-blue/50 hover:scale-105'
                      : 'bg-ninja-darker border border-ninja-blue/30 text-white hover:bg-ninja-dark hover:border-ninja-blue/60'
                  }`}
                >
                  Commander sur WhatsApp
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pricing CLI */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12"
        >
          <div className="max-w-3xl mx-auto bg-ninja-dark/80 backdrop-blur-sm rounded-2xl border border-ninja-blue/30 overflow-hidden">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-ninja-darker/50 border-b border-ninja-blue/10">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="text-gray-500 text-sm ml-4">pricing-calculator.js</div>
            </div>
            
            {/* Terminal content */}
            <div className="p-6 font-mono text-sm">
              <div className="mb-3">
                <span className="text-ninja-blue">$</span>
                <span className="text-gray-400"> ninjafix --calculate-price</span>
              </div>
              
              <div className="space-y-2 text-gray-300 mb-4">
                <div className="text-green-400">✓ Tarifs transparents et flexibles</div>
                <div className="text-green-400">✓ Devis précis après analyse</div>
                <div className="text-green-400">✓ Paiement uniquement après satisfaction</div>
              </div>
              
              <div className="border-t border-ninja-blue/10 pt-4">
                <div className="text-gray-500 mb-2">// Exemples de projets récents:</div>
                <div className="space-y-1 text-xs">
                  <div><span className="text-ninja-purple">Bug critique e-commerce</span> → <span className="text-ninja-blue">$50</span> <span className="text-gray-500">(3h)</span></div>
                  <div><span className="text-ninja-purple">Landing page startup</span> → <span className="text-ninja-blue">$150</span> <span className="text-gray-500">(18h)</span></div>
                  <div><span className="text-ninja-purple">API Stripe + WhatsApp</span> → <span className="text-ninja-blue">$100</span> <span className="text-gray-500">(8h)</span></div>
                </div>
              </div>
              
              <div className="mt-4 flex items-center gap-2">
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
