'use client'

import { motion } from 'framer-motion'
import { Terminal, Play } from 'lucide-react'
import { useState, useEffect } from 'react'

const codeLines = [
  { text: 'const ninjafix = {', delay: 0 },
  { text: '  mission: "développement express",', delay: 0.5 },
  { text: '  délai: "2-24h",', delay: 1 },
  { text: '  qualité: "premium",', delay: 1.5 },
  { text: '  paiement: "après satisfaction",', delay: 2 },
  { text: '};', delay: 2.5 },
  { text: '', delay: 3 },
  { text: 'ninjafix.deploy();', delay: 3.5 },
  { text: '// ✓ Mission accomplie', delay: 4, color: 'text-green-400' }
]

export default function LiveCodingSection() {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines(prev => {
        if (prev < codeLines.length) {
          return prev + 1
        }
        // Reset after showing all lines
        setTimeout(() => setVisibleLines(0), 2000)
        return prev
      })
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Live coding terminal */}
          <div className="bg-ninja-dark/80 backdrop-blur-sm rounded-2xl border border-ninja-blue/30 overflow-hidden shadow-2xl">
            {/* Terminal header */}
            <div className="flex items-center justify-between px-4 py-3 bg-ninja-darker/50 border-b border-ninja-blue/10">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <Terminal className="w-4 h-4" />
                  <span>live-demo.js</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Play className="w-4 h-4 text-green-400" />
                <span className="text-xs text-green-400">Running</span>
              </div>
            </div>

            {/* Code editor */}
            <div className="p-8 font-mono text-sm min-h-[300px]">
              <div className="space-y-2">
                {codeLines.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ 
                      opacity: visibleLines > index ? 1 : 0,
                      x: visibleLines > index ? 0 : -10
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex items-start"
                  >
                    <span className="text-gray-600 w-8 select-none">{index + 1}</span>
                    <span className={line.color || 'text-gray-300'}>
                      {line.text}
                    </span>
                    {visibleLines === index + 1 && (
                      <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        className="text-ninja-blue ml-1"
                      >
                        |
                      </motion.span>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Output section */}
              {visibleLines >= codeLines.length && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mt-6 pt-6 border-t border-ninja-blue/10"
                >
                  <div className="text-gray-500 mb-2">Console Output:</div>
                  <div className="space-y-1">
                    <div className="text-green-400">✓ Projet analysé</div>
                    <div className="text-green-400">✓ Solution développée</div>
                    <div className="text-green-400">✓ Tests validés</div>
                    <div className="text-ninja-blue">→ Prêt pour livraison</div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-400 max-w-2xl mx-auto">
            Chaque projet est traité avec la même rigueur : code propre, tests validés, livraison rapide.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
