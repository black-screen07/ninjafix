'use client'

import { motion } from 'framer-motion'
import { Code2 } from 'lucide-react'
import Image from 'next/image'

const technologies = [
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', invert: false },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', invert: false },
  { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', invert: true },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', invert: false },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', invert: false },
  { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', invert: false },
  { name: 'Laravel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg', invert: false },
  { name: 'Stripe', logo: 'https://cdn.simpleicons.org/stripe/635BFF', invert: false },
  { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', invert: false },
  { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', invert: false },
  { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', invert: false },
  { name: 'Vercel', logo: 'https://cdn.simpleicons.org/vercel/FFFFFF', invert: false },
  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', invert: false },
  { name: 'TailwindCSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', invert: false },
  { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', invert: false },
  { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', invert: false },
  { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', invert: false },
  { name: 'API REST', logo: 'https://cdn.simpleicons.org/fastapi/009688', invert: false }
]

export default function TrustSection() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Technologies <span className="gradient-text">Maîtrisées</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Stack moderne et outils professionnels pour des résultats optimaux
          </p>
        </motion.div>

        {/* Tech grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group"
            >
              <div className="bg-ninja-dark/50 backdrop-blur-sm rounded-xl p-6 border border-ninja-blue/20 hover:border-ninja-blue/50 transition-all duration-300 text-center hover:scale-105 flex flex-col items-center justify-center min-h-[120px] group-hover:shadow-lg group-hover:shadow-ninja-blue/20">
                <div className="w-12 h-12 mb-3 flex items-center justify-center relative">
                  <img 
                    src={tech.logo} 
                    alt={tech.name}
                    className={`w-full h-full object-contain transition-all duration-300 group-hover:scale-110 ${
                      tech.invert ? 'brightness-200' : 'brightness-90 group-hover:brightness-110'
                    }`}
                  />
                </div>
                <div className="text-sm text-gray-400 group-hover:text-white transition-colors font-medium">
                  {tech.name}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-ninja-dark/80 to-ninja-darker/80 backdrop-blur-sm rounded-2xl p-12 border border-ninja-blue/30 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-ninja-blue/10 to-ninja-purple/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold gradient-text mb-2">+50</div>
                <div className="text-gray-400">Projets réalisés</div>
              </div>
              <div>
                <div className="text-5xl font-bold gradient-text mb-2">0</div>
                <div className="text-gray-400">Délais dépassés</div>
              </div>
              <div>
                <div className="text-5xl font-bold gradient-text mb-2">100%</div>
                <div className="text-gray-400">Clients satisfaits</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Package.json showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="max-w-3xl mx-auto bg-ninja-dark/80 backdrop-blur-sm rounded-2xl border border-ninja-blue/30 overflow-hidden">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-ninja-darker/50 border-b border-ninja-blue/10">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="text-gray-500 text-sm ml-4">quality-standards.json</div>
            </div>
            
            {/* Code content */}
            <div className="p-6 font-mono text-sm">
              <pre className="text-gray-300">
                <span className="text-gray-500">{'{'}</span>
                {'\n  '}<span className="text-ninja-purple">"code"</span>: <span className="text-green-400">"propre et documenté"</span>,
                {'\n  '}<span className="text-ninja-purple">"tests"</span>: <span className="text-green-400">"inclus et validés"</span>,
                {'\n  '}<span className="text-ninja-purple">"performance"</span>: <span className="text-green-400">"optimisée"</span>,
                {'\n  '}<span className="text-ninja-purple">"sécurité"</span>: <span className="text-green-400">"best practices"</span>,
                {'\n  '}<span className="text-ninja-purple">"maintenance"</span>: <span className="text-green-400">"facile"</span>,
                {'\n  '}<span className="text-ninja-purple">"documentation"</span>: <span className="text-green-400">"complète"</span>,
                {'\n  '}<span className="text-ninja-purple">"support"</span>: <span className="text-green-400">"post-livraison inclus"</span>
                {'\n'}<span className="text-gray-500">{'}'}</span>
              </pre>
              
              <div className="mt-4 pt-4 border-t border-ninja-blue/10 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-ninja-blue" />
                <span className="text-gray-400 text-xs">
                  Qualité professionnelle garantie sur chaque projet
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
