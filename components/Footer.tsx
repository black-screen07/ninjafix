'use client'

import { motion } from 'framer-motion'
import { Code2, Github, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative py-16 px-6 border-t border-ninja-blue/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-ninja-blue to-ninja-purple flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text">NinjaFix</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Le développeur d'urgence pour vos projets express. 
              Rapide, précis, invisible.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-ninja-blue transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-ninja-blue transition-colors">
                  Tarifs
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-ninja-blue transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="mailto:akaemmanuelfreddy@gmail.com" className="hover:text-ninja-blue transition-colors">
                  akaemmanuelfreddy@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/2250767665462" className="hover:text-ninja-blue transition-colors">
                  +225 07 67 66 54 62
                </a>
              </li>
              <li className="pt-4">
                <div className="flex gap-4">
                  <a
                    href="https://wa.me/2250767665462"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-[#25D366] flex items-center justify-center hover:bg-[#20BA5A] transition-colors"
                    aria-label="WhatsApp"
                  >
                    <img 
                      src="https://cdn.simpleicons.org/whatsapp/FFFFFF" 
                      alt="WhatsApp"
                      className="w-5 h-5"
                    />
                  </a>
                  <a
                    href="mailto:akaemmanuelfreddy@gmail.com"
                    className="w-10 h-10 rounded-lg bg-ninja-dark border border-ninja-blue/30 flex items-center justify-center hover:border-ninja-blue/60 transition-colors"
                    aria-label="Email"
                  >
                    <img 
                      src="https://cdn.simpleicons.org/gmail/EA4335" 
                      alt="Email"
                      className="w-5 h-5"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aka-emmanuel-freddy-egnin-642805195/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-ninja-dark border border-ninja-blue/30 flex items-center justify-center hover:border-ninja-blue/60 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-ninja-blue" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-ninja-blue/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} NinjaFix. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-ninja-blue transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-gray-500 hover:text-ninja-blue transition-colors">
                Confidentialité
              </a>
              <a href="#" className="text-gray-500 hover:text-ninja-blue transition-colors">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
