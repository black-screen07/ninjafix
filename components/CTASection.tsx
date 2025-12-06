'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Mail, Sparkles } from 'lucide-react'

export default function CTASection() {
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Main CTA card */}
          <div className="relative bg-gradient-to-br from-ninja-dark via-ninja-darker to-ninja-dark rounded-3xl p-12 md:p-16 border border-ninja-blue/30 overflow-hidden">
            {/* Background effects */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-ninja-blue/20 rounded-full blur-[100px]" />
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-ninja-purple/20 rounded-full blur-[100px]" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-ninja-blue to-ninja-purple mb-8"
              >
                <Sparkles className="w-10 h-10 text-white" />
              </motion.div>

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
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <a
                  href="https://wa.me/33123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  WhatsApp Direct
                </a>
                <a
                  href="mailto:contact@ninjafix.dev"
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
                  <span>WhatsApp: +33 1 23 45 67 89</span>
                </p>
                <p className="flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4 text-ninja-blue" />
                  <span>contact@ninjafix.dev</span>
                </p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-8 right-8 w-24 h-24 border border-ninja-blue/20 rounded-full animate-pulse" />
            <div className="absolute bottom-8 left-8 w-32 h-32 border border-ninja-purple/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500">
            Disponible 7j/7 pour les urgences • Réponse rapide garantie
          </p>
        </motion.div>
      </div>
    </section>
  )
}
