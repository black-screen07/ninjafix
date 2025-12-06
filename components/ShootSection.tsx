'use client'

import { motion } from 'framer-motion'
import { Camera, ArrowRight, Sparkles } from 'lucide-react'

export default function ShootSection() {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-ninja-darker via-gray-900 to-ninja-darker overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03)_0%,_transparent_100%)]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Camera Icon Circle */}
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-400/10 to-gray-600/10 rounded-full blur-3xl" />
              
              {/* Main circle */}
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 flex items-center justify-center">
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-gray-700/30 to-gray-800/30 backdrop-blur-sm" />
                <Camera className="w-32 h-32 text-gray-300 relative z-10" strokeWidth={1} />
              </div>
              
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-4 -right-4 px-6 py-3 bg-white/95 backdrop-blur-sm rounded-full shadow-2xl"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-gray-800" />
                  <span className="text-sm font-semibold text-gray-800">Side Project</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-full">
              <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Projet Personnel</span>
            </div>

            {/* Title */}
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                Shoot<br />Photography
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-gray-400 to-transparent rounded-full" />
            </div>

            {/* Description */}
            <p className="text-xl text-gray-400 leading-relaxed">
              Transformez vos photos en portraits Haute-Couture. 
              Génération de portraits IA professionnels avec éclairage studio, style éditorial et composition cinématographique.
            </p>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2" />
                <div>
                  <div className="text-white font-medium">Portraits IA professionnels</div>
                  <div className="text-sm text-gray-500">Éclairage studio et style éditorial</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2" />
                <div>
                  <div className="text-white font-medium">Composition cinématographique</div>
                  <div className="text-sm text-gray-500">Portraits dignes de magazines</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2" />
                <div>
                  <div className="text-white font-medium">Génération en quelques secondes</div>
                  <div className="text-sm text-gray-500">Résultats instantanés et professionnels</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a
                href="https://shoot.photography/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 group shadow-lg hover:shadow-xl"
              >
                <span>Découvrir le projet</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Tech stack */}
            <div className="pt-8 border-t border-gray-800">
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-3">Technologies</div>
              <div className="flex flex-wrap gap-2">
                {['Supabase', 'React', 'TypeScript', 'TailwindCSS'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-800/50 border border-gray-700/50 rounded-full text-xs text-gray-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
