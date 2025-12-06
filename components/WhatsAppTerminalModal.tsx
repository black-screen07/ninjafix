'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Terminal, Send, MessageCircle } from 'lucide-react'
import gsap from 'gsap'

interface WhatsAppTerminalModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function WhatsAppTerminalModal({ isOpen, onClose }: WhatsAppTerminalModalProps) {
  const [message, setMessage] = useState('')
  const [lines, setLines] = useState<string[]>([
    '$ ninjafix --contact',
    '> Initialisation du terminal de contact...',
    '> Connexion établie ✓',
    '',
    '> Tapez votre message ci-dessous et appuyez sur Entrée',
    '> Votre message sera envoyé directement via WhatsApp',
    ''
  ])
  const [isTyping, setIsTyping] = useState(false)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 500)
    }
  }, [isOpen])

  // Auto-resize textarea
  useEffect(() => {
    if (inputRef.current) {
      const textarea = inputRef.current as HTMLTextAreaElement
      textarea.style.height = 'auto'
      textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px'
    }
  }, [message])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [lines])

  const handleSend = () => {
    if (!message.trim()) return

    setIsTyping(true)
    
    // Open WhatsApp IMMEDIATELY to avoid popup blocker
    const whatsappUrl = `https://wa.me/2250767665462?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    
    // Add user message to terminal
    setLines(prev => [...prev, `$ ${message}`])
    
    // Simulate realistic processing with more steps
    setTimeout(() => {
      setLines(prev => [...prev, '> Analyse du message...'])
      
      setTimeout(() => {
        setLines(prev => [...prev, '✓ Message validé'])
        
        setTimeout(() => {
          setLines(prev => [...prev, '> Ouverture de WhatsApp...'])
          
          setTimeout(() => {
            setLines(prev => [...prev, '✓ Redirection effectuée', '', '🚀 Message envoyé avec succès!', '> Fermeture du terminal dans 2 secondes...'])
            
            setTimeout(() => {
              onClose()
              // Reset after close
              setTimeout(() => {
                setLines([
                  '$ ninjafix --contact',
                  '> Initialisation du terminal de contact...',
                  '> Connexion établie ✓',
                  '',
                  '> Tapez votre message ci-dessous et appuyez sur Entrée',
                  '> Votre message sera envoyé directement via WhatsApp',
                  ''
                ])
                setMessage('')
                setIsTyping(false)
              }, 300)
            }, 2000)
          }, 500)
        }, 500)
      }, 500)
    }, 300)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isTyping) {
      handleSend()
    }
  }

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
            {/* Modal */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl"
            >
              {/* Terminal Window */}
              <div className="bg-ninja-dark/95 backdrop-blur-md rounded-2xl border border-ninja-blue/30 overflow-hidden shadow-2xl shadow-ninja-blue/20">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-ninja-darker/50 border-b border-ninja-blue/10">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 cursor-pointer transition-colors" onClick={onClose} />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Terminal className="w-4 h-4" />
                      <span>whatsapp-contact.sh</span>
                    </div>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-1 hover:bg-ninja-blue/20 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-400 hover:text-white" />
                  </button>
                </div>

                {/* Terminal Content */}
                <div 
                  ref={terminalRef}
                  className="p-6 font-mono text-sm h-[400px] overflow-y-auto custom-scrollbar"
                >
                  {lines.map((line, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                      className={`mb-1 ${
                        line.startsWith('$') 
                          ? 'text-ninja-blue' 
                          : line.startsWith('>') 
                          ? 'text-gray-400' 
                          : 'text-green-400'
                      }`}
                    >
                      {line}
                    </motion.div>
                  ))}

                  {/* Input Line */}
                  {!isTyping && (
                    <div className="flex items-start gap-2 mt-2">
                      <span className="text-ninja-blue mt-1">$</span>
                      <textarea
                        ref={inputRef}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Tapez votre message ici..."
                        className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-600 resize-none min-h-[24px] max-h-[120px] overflow-y-auto"
                        disabled={isTyping}
                        rows={1}
                        style={{ lineHeight: '1.5' }}
                      />
                      <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="text-ninja-blue mt-1"
                      >
                        |
                      </motion.span>
                    </div>
                  )}
                </div>

                {/* Terminal Footer */}
                <div className="px-6 py-4 bg-ninja-darker/30 border-t border-ninja-blue/10 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <MessageCircle className="w-4 h-4 text-green-400" />
                    <span>WhatsApp: +225 07 67 66 54 62</span>
                  </div>
                  <button
                    onClick={handleSend}
                    disabled={!message.trim() || isTyping}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg font-semibold text-white text-sm hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4" />
                    Envoyer
                  </button>
                </div>
              </div>

              {/* Helper Text */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-4 text-center text-sm text-gray-400"
              >
                <p>💡 Astuce : Appuyez sur <kbd className="px-2 py-1 bg-ninja-dark rounded border border-ninja-blue/30">Entrée</kbd> pour envoyer</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
