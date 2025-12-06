'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, Mail } from 'lucide-react'

interface EmailTerminalModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function EmailTerminalModal({ isOpen, onClose }: EmailTerminalModalProps) {
  const [message, setMessage] = useState('')
  const [lines, setLines] = useState<string[]>([
    '$ ninjafix --email-contact',
    '> Initialisation du terminal email...',
    '> Connexion établie ✓',
    '',
    '> Tapez votre message ci-dessous et appuyez sur Entrée',
    '> Votre message sera envoyé directement par email',
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
    
    // Open email client IMMEDIATELY to avoid popup blocker
    const mailtoUrl = `mailto:akaemmanuelfreddy@gmail.com?subject=Contact depuis NinjaFix&body=${encodeURIComponent(message)}`
    window.location.href = mailtoUrl
    
    // Add user message to terminal
    setLines(prev => [...prev, `$ ${message}`])
    
    // Simulate realistic processing
    setTimeout(() => {
      setLines(prev => [...prev, '> Analyse du message...'])
      
      setTimeout(() => {
        setLines(prev => [...prev, '✓ Message validé'])
        
        setTimeout(() => {
          setLines(prev => [...prev, '> Ouverture du client email...'])
          
          setTimeout(() => {
            setLines(prev => [...prev, '✓ Client email ouvert', '', '📧 Message prêt à envoyer!', '> Fermeture du terminal dans 2 secondes...'])
            
            setTimeout(() => {
              onClose()
              // Reset after close
              setTimeout(() => {
                setLines([
                  '$ ninjafix --email-contact',
                  '> Initialisation du terminal email...',
                  '> Connexion établie ✓',
                  '',
                  '> Tapez votre message ci-dessous et appuyez sur Entrée',
                  '> Votre message sera envoyé directement par email',
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
              <div className="bg-ninja-darker rounded-xl border border-ninja-blue/30 overflow-hidden shadow-2xl">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-ninja-dark/50 border-b border-ninja-blue/10">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-sm text-gray-400 ml-2">ninjafix-email-terminal</span>
                  </div>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Terminal Content */}
                <div ref={terminalRef} className="p-6 font-mono text-sm h-[400px] overflow-y-auto">
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
                            : line.startsWith('📧')
                            ? 'text-ninja-purple font-bold'
                            : 'text-white'
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
                </div>

                {/* Terminal Footer */}
                <div className="px-6 py-4 bg-ninja-darker/30 border-t border-ninja-blue/10 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Mail className="w-4 h-4 text-red-400" />
                    <span>Email: akaemmanuelfreddy@gmail.com</span>
                  </div>
                  <button
                    onClick={handleSend}
                    disabled={!message.trim() || isTyping}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-ninja-blue to-ninja-purple rounded-lg font-semibold text-white text-sm hover:shadow-lg hover:shadow-ninja-blue/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4" />
                    Envoyer
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
