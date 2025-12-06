'use client'

import { motion } from 'framer-motion'
import { Zap, Rocket, Plug, Workflow, Shield, Code2, Terminal } from 'lucide-react'

const services = [
  {
    icon: Zap,
    title: 'BugFix Express',
    description: 'Correction de bugs urgents en quelques heures.',
    color: 'from-red-500 to-orange-500',
    glow: 'group-hover:shadow-red-500/50',
    code: '// Bug trouvé\n- error: undefined\n+ fixed: validated ✓'
  },
  {
    icon: Rocket,
    title: 'Landing Page Rapide',
    description: 'Design moderne + développement éclair.',
    color: 'from-ninja-blue to-cyan-500',
    glow: 'group-hover:shadow-ninja-blue/50',
    code: 'npm run build\n✓ Optimized\n✓ Deployed'
  },
  {
    icon: Plug,
    title: 'Intégration API',
    description: 'WhatsApp, Stripe, Mobile Money, email, SMS.',
    color: 'from-ninja-purple to-pink-500',
    glow: 'group-hover:shadow-ninja-purple/50',
    code: 'POST /api/integrate\n200 OK\nConnected ✓'
  },
  {
    icon: Workflow,
    title: 'Automatisations & Scripts',
    description: 'Webhooks, cron jobs, connecteurs.',
    color: 'from-green-500 to-emerald-500',
    glow: 'group-hover:shadow-green-500/50',
    code: 'cron: 0 */6 * * *\nWebhook: active\nRunning ✓'
  },
  {
    icon: Shield,
    title: 'Support Technique Ninja',
    description: 'Interventions précises, rapides, silencieuses.',
    color: 'from-ninja-violet to-purple-500',
    glow: 'group-hover:shadow-ninja-violet/50',
    code: '$ ninja --help\nResponse: <1min\nSolved ✓'
  },
  {
    icon: Code2,
    title: 'Développement Custom',
    description: 'Solutions sur mesure pour vos besoins spécifiques.',
    color: 'from-yellow-500 to-orange-500',
    glow: 'group-hover:shadow-yellow-500/50',
    code: 'function custom() {\n  return perfect;\n}'
  }
]

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-32 px-6">
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
            Services <span className="gradient-text">Express</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Des interventions ciblées, livrées rapidement, pour débloquer vos projets
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`relative bg-ninja-dark/50 backdrop-blur-sm rounded-2xl p-8 border border-ninja-blue/20 hover:border-ninja-blue/50 transition-all duration-300 h-full ${service.glow} hover:shadow-2xl overflow-hidden`}>
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-ninja-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Code snippet */}
                <div className="mt-4 bg-ninja-darker/80 rounded-lg p-3 border border-ninja-blue/10 font-mono text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="flex items-center gap-2 mb-2 text-gray-500">
                    <Terminal className="w-3 h-3" />
                    <span>output</span>
                  </div>
                  <pre className="text-green-400 whitespace-pre-wrap leading-relaxed">
                    {service.code}
                  </pre>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-ninja-blue/5 to-ninja-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
