# 🥷 NinjaFix – Le Développeur d'Urgence

Landing page ultra moderne pour micro-prestations de développement express.

## ✨ Caractéristiques

- **Design Premium** : Interface futuriste avec thème sombre et effets néon
- **Animations Spectaculaires** : GSAP + Framer Motion pour des animations à couper le souffle
- **Particules Animées** : Background dynamique avec effets parallax
- **Cursor Personnalisé** : Cursor magnétique et interactif
- **Cartes Magnétiques** : Effet 3D au survol avec GSAP
- **Smooth Scroll** : Navigation fluide et élégante
- **Split Text Animation** : Texte qui se révèle lettre par lettre
- **Responsive** : Optimisé pour tous les écrans
- **Performance** : Next.js 14 avec App Router
- **SEO Optimisé** : Métadonnées complètes
- **TypeScript** : Code type-safe et maintenable

## 🚀 Installation

### Prérequis

- Node.js 18+ 
- npm ou yarn

### Étapes

1. **Installer les dépendances**

```bash
npm install
```

2. **Lancer le serveur de développement**

```bash
npm run dev
```

3. **Ouvrir dans le navigateur**

Accédez à [http://localhost:3000](http://localhost:3000)

## 📦 Build pour production

```bash
npm run build
npm start
```

## 🎨 Stack Technique

- **Framework** : Next.js 14
- **Language** : TypeScript
- **Styling** : TailwindCSS
- **Animations** : GSAP 3.12 + Framer Motion
- **Icons** : Lucide React
- **Font** : Inter (Google Fonts)

## 🎬 Animations GSAP Implémentées

- **Particules flottantes** : 50+ particules animées avec parallax au mouvement de la souris
- **Cartes magnétiques** : Effet 3D et attraction magnétique au survol
- **Split text** : Révélation lettre par lettre avec rotation 3D
- **Scroll parallax** : Effets de profondeur au scroll
- **Smooth scroll** : Navigation fluide entre sections
- **Cursor personnalisé** : Cursor qui réagit aux éléments interactifs
- **Rotations continues** : Éléments en rotation infinie
- **Scale & pulse** : Effets de respiration sur les icônes
- **Stagger animations** : Animations en cascade pour les listes

## 📂 Structure du projet

```
NinjaFix/
├── app/
│   ├── globals.css          # Styles globaux
│   ├── layout.tsx            # Layout principal
│   └── page.tsx              # Page d'accueil
├── components/
│   ├── HeroSection.tsx       # Section hero
│   ├── ServicesSection.tsx   # Services
│   ├── WhySection.tsx        # Pourquoi NinjaFix
│   ├── PricingSection.tsx    # Tarification
│   ├── ProcessSection.tsx    # Process en 3 étapes
│   ├── TrustSection.tsx      # Technologies & stats
│   ├── CTASection.tsx        # Call-to-action final
│   └── Footer.tsx            # Footer
├── public/                   # Assets statiques
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## 🎯 Sections de la landing page

1. **Hero Section** : Slogan impactant + CTAs + terminal animé
2. **Services Express** : 6 services avec icônes et animations
3. **Pourquoi NinjaFix** : 4 différenciateurs clés avec stats
4. **Tarification** : 4 offres transparentes
5. **Process Ninja** : 3 étapes simples
6. **Trust Section** : Technologies maîtrisées + statistiques
7. **CTA Final** : Contact WhatsApp + Email
8. **Footer** : Navigation + liens sociaux

## 🎨 Personnalisation

### Couleurs

Les couleurs principales sont définies dans `tailwind.config.ts` :

```typescript
colors: {
  'ninja-dark': '#0a0a0f',
  'ninja-darker': '#050508',
  'ninja-blue': '#00d4ff',
  'ninja-purple': '#a855f7',
  'ninja-violet': '#7c3aed',
}
```

### Contact

Modifiez les informations de contact dans `components/CTASection.tsx` :

- Numéro WhatsApp
- Email
- Liens sociaux

## 🚀 Déploiement

### Vercel (Recommandé)

1. Push le code sur GitHub
2. Connectez votre repo à [Vercel](https://vercel.com)
3. Déploiement automatique !

### Autres plateformes

- **Netlify** : `npm run build` puis déployez le dossier `.next`
- **AWS/Azure** : Utilisez Docker ou déploiement direct

## 📝 Licence

Projet personnel - Tous droits réservés

## 💬 Support

Pour toute question : akaemmanuelfreddy@gmail.com | +225 07 67 66 54 62

---

**Développé avec 🥷 par NinjaFix**
