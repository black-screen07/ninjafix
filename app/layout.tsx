import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NinjaFix – Le Développeur d\'Urgence | Micro-prestations Dev Express',
  description: 'Micro-prestations de développement livrées en quelques heures : corrections de bugs, intégrations API, landing pages, automatisations. Rapide. Précis. Invisible.',
  keywords: 'développeur freelance, correction bugs, intégration API, landing page, automatisation, développement express',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
