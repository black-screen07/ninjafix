'use client'

import { motion } from 'framer-motion'
import { 
  Zap, 
  Code2, 
  Rocket, 
  Plug, 
  Workflow, 
  Shield,
  Clock,
  CheckCircle2,
  MessageSquare,
  Star,
  Terminal,
  Sparkles
} from 'lucide-react'
import HeroSectionGSAP from '@/components/HeroSectionGSAP'
import AnimatedBackground from '@/components/AnimatedBackground'
import CustomCursor from '@/components/CustomCursor'
import LiveCodingSection from '@/components/LiveCodingSection'
import AboutSection from '@/components/AboutSection'
import ServicesSectionGSAP from '@/components/ServicesSectionGSAP'
import WhySection from '@/components/WhySection'
import PricingSection from '@/components/PricingSection'
import ProcessSection from '@/components/ProcessSection'
import TrustSection from '@/components/TrustSection'
import CTASectionGSAP from '@/components/CTASectionGSAP'
import ShootSection from '@/components/ShootSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-ninja-darker overflow-hidden">
      {/* Custom cursor */}
      <CustomCursor />
      
      {/* Animated background grid */}
      <div className="fixed inset-0 grid-bg opacity-40 pointer-events-none" />
      
      {/* Gradient orbs */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-ninja-blue/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-ninja-purple/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Animated particles background */}
      <AnimatedBackground />
      
      {/* Content */}
      <div className="relative z-10">
        <HeroSectionGSAP />
        <LiveCodingSection />
        <AboutSection />
        <ServicesSectionGSAP />
        <WhySection />
        <PricingSection />
        <ProcessSection />
        <TrustSection />
        <CTASectionGSAP />
        <ShootSection />
        <Footer />
      </div>
    </main>
  )
}
