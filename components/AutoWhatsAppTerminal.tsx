'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface AutoWhatsAppTerminalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AutoWhatsAppTerminal({ isOpen, onClose }: AutoWhatsAppTerminalProps) {
  const [lines, setLines] = useState<string[]>([])
  const [currentStep, setCurrentStep] = useState(0)

  const commands = [
    { delay: 500, text: '$ ninjafix --launch-mission' },
    { delay: 800, text: '> Initialisation de la mission...' },
    { delay: 600, text: '> Vérification de la disponibilité...' },
    { delay: 700, text: '✓ Ninja disponible immédiatement' },
    { delay: 500, text: '' },
    { delay: 600, text: '> Préparation de l\'environnement de contact...' },
    { delay: 800, text: '✓ Terminal de communication prêt' },
    { delay: 700, text: '✓ Connexion WhatsApp établie' },
    { delay: 500, text: '' },
    { delay: 600, text: '> Ouverture de WhatsApp...' },
    { delay: 1000, text: '✓ Redirection vers WhatsApp en cours...' },
    { delay: 800, text: '' },
    { delay: 500, text: '🚀 Mission lancée ! Vous allez être redirigé...' }
  ]

  useEffect(() => {
    if (!isOpen) {
      setLines([])
      setCurrentStep(0)
      return
    }

    if (currentStep >= commands.length) {
      // Ouvrir WhatsApp après toutes les commandes
      setTimeout(() => {
        const message = encodeURIComponent(
          `Bonjour! Je souhaite lancer une mission avec NinjaFix.

Je suis prêt à démarrer mon projet immédiatement.

Pouvez-vous me contacter pour discuter des détails?`
        )
        window.open(`https://wa.me/2250767665462?text=${message}`, '_blank')
        
        // Fermer le terminal après redirection
        setTimeout(() => {
          onClose()
        }, 1000)
      }, 500)
      return
    }

    const timer = setTimeout(() => {
      setLines(prev => [...prev, commands[currentStep].text])
      setCurrentStep(prev => prev + 1)
    }, commands[currentStep].delay)

    return () => clearTimeout(timer)
  }, [isOpen, currentStep, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
          >
            {/* Terminal */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl"
            >
              <div className="bg-ninja-darker rounded-xl border border-ninja-blue/30 overflow-hidden shadow-2xl">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-ninja-dark/50 border-b border-ninja-blue/10">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-sm text-gray-400 ml-2">ninjafix-mission-launcher</span>
                  </div>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Terminal Content */}
                <div className="p-6 font-mono text-sm h-[400px] overflow-y-auto">
                  <div className="space-y-1">
                    {lines.map((line, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2 }}
                        className={`${
                          line.startsWith('$') 
                            ? 'text-ninja-blue font-semibold' 
                            : line.startsWith('✓')
                            ? 'text-green-400'
                            : line.startsWith('>')
                            ? 'text-gray-400'
                            : line.startsWith('🚀')
                            ? 'text-ninja-purple font-bold text-lg'
                            : 'text-white'
                        }`}
                      >
                        {line}
                      </motion.div>
                    ))}
                    
                    {/* Cursor */}
                    {currentStep < commands.length && (
                      <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        className="text-ninja-blue inline-block ml-1"
                      >
                        ▊
                      </motion.span>
                    )}
                  </div>
                </div>

                {/* Terminal Footer */}
                <div className="px-6 py-3 bg-ninja-darker/30 border-t border-ninja-blue/10">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Mission Launcher v1.0</span>
                    <span>WhatsApp: +225 07 67 66 54 62</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
