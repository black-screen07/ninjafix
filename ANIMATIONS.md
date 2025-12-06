# 🎬 Guide des Animations GSAP - NinjaFix

## Corrections Appliquées

### ✅ Problème de mouvement vertical résolu

**Problème** : La page bougeait légèrement verticalement de manière indésirable.

**Solutions appliquées** :
1. ✅ Suppression de l'animation floating sur la section Hero
2. ✅ Suppression du parallax global sur toutes les sections
3. ✅ Réduction du mouvement parallax du terminal (de -50px à -20px)
4. ✅ Suppression du parallax sur la section CTA
5. ✅ Réduction du mouvement des particules (de ±100px à ±50px)
6. ✅ Ajout de `overflow-x: hidden` et `width: 100%` sur html et body

## 🎨 Animations Actives

### Hero Section
- ✨ **Badge** : Rotation + scale élastique à l'entrée
- ✨ **Ninja Star** : Rotation continue 360° + pulse
- ✨ **Split Text** : Révélation lettre par lettre avec rotation 3D
- ✨ **CTAs** : Stagger animation avec back.out easing
- ✨ **Terminal** : 
  - Entrée avec scale + opacity
  - Glow pulsant continu
  - Parallax subtil au scroll (réduit à -20px)

### Services Section
- ✨ **Cartes** : Entrée en stagger avec rotation + scale
- ✨ **Icônes** : Rotation 360° au hover
- ✨ **Code snippets** : Révélation au hover
- ✨ **Effet magnétique** : Attraction 3D au mouvement de la souris

### CTA Section
- ✨ **Carte** : Entrée avec rotationY 3D
- ✨ **Icône** : Rotation élastique + pulse continu
- ✨ **Boutons** : Stagger animation
- ✨ **Orbes** : Mouvement flottant + scale
- ✨ **Gradient hover** : Transition fluide sur les boutons

### Background
- ✨ **50+ Particules** : 
  - Mouvement aléatoire réduit (±50px)
  - Pulse scale continu
  - Parallax au mouvement de la souris
  - Blur aléatoire

### Cursor Personnalisé
- ✨ **Cursor principal** : Suit la souris avec délai court
- ✨ **Follower** : Suit avec délai plus long
- ✨ **Hover** : Scale up sur éléments interactifs
- ✨ **Mix-blend-mode** : Effet de différence

### Smooth Scroll
- ✨ **Navigation** : Scroll fluide entre sections (1.5s)
- ✨ **Easing** : power3.inOut pour mouvement naturel

## 🎯 Performances

- **GSAP Context** : Nettoyage automatique des animations
- **ScrollTrigger** : Optimisé avec `toggleActions`
- **Transform GPU** : Utilisation de `transform-gpu` pour accélération matérielle
- **Perspective** : Appliquée localement pour effets 3D

## 🛠️ Composants GSAP

1. **HeroSectionGSAP** : Hero avec animations spectaculaires
2. **ServicesSectionGSAP** : Services avec cartes magnétiques
3. **CTASectionGSAP** : CTA avec animations 3D
4. **AnimatedBackground** : Particules flottantes
5. **MagneticCard** : Wrapper pour effet magnétique
6. **SplitText** : Révélation texte lettre par lettre
7. **CustomCursor** : Cursor interactif
8. **SmoothScroll** : Navigation fluide

## 📝 Notes Techniques

- Toutes les animations utilisent `gsap.context()` pour un nettoyage propre
- Les effets parallax sont appliqués individuellement (pas globalement)
- Les mouvements sont réduits pour éviter les déplacements de page
- Le cursor personnalisé utilise `mix-blend-mode: difference`
- ScrollTrigger est configuré avec `once: true` pour la plupart des animations d'entrée

## 🚀 Pour Ajouter de Nouvelles Animations

```typescript
useEffect(() => {
  const ctx = gsap.context(() => {
    // Vos animations ici
    gsap.from('.element', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out'
    })
  }, containerRef)

  return () => ctx.revert() // Nettoyage automatique
}, [])
```

## 🎨 Easings Utilisés

- `elastic.out(1, 0.5)` : Effet rebond
- `back.out(1.7)` : Dépassement puis retour
- `power3.out` : Décélération douce
- `sine.inOut` : Mouvement sinusoïdal
- `power2.out` : Décélération rapide

---

**Résultat** : Animations fluides, performantes et sans mouvement de page indésirable ! 🎉
