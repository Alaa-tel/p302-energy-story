# The Hidden Energy Cost of Your Day

A responsive Vue 3 + TypeScript interactive data story about household energy consumption and sustainability.

## 📖 Overview

This application teaches users that the biggest household energy savings come from heating, cooling, and hot water rather than lights and small electronics. It's an engaging storytelling experience with smooth scrolling, subtle animations, and a modern sustainability-focused design.

## ✨ Features

- **Hero Section** - Engaging introduction with illustrated home
- **Interactive Quiz** - Users guess which activity uses the most energy
- **Animated Energy Breakdown** - Horizontal bar chart showing energy distribution
- **Habit Impact Calculator** - Toggle switches to select habits and see annual savings
- **Personalized Impact Summary** - Shows savings, energy reduction, and CO₂ impact
- **Responsive Design** - Works beautifully on desktop, tablet, and mobile
- **Smooth Animations** - Professional transitions and scroll-triggered effects
- **Accessibility** - WCAG-friendly design and interactions

## 🎨 Design Philosophy

- Clean, modern aesthetic inspired by Apple storytelling pages
- Soft green palette with warm off-white backgrounds
- Large typography and generous spacing
- Rounded cards with subtle shadows
- Smooth, purposeful animations
- Mobile-first responsive design

## 🛠️ Tech Stack

- **Vue 3** - Progressive JavaScript framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Lightning-fast build tool
- **CSS 3** - Modern styling with CSS variables

## 📦 Installation

```bash
npm install
```

## 🚀 Development

Start the development server with hot reload:

```bash
npm run dev
```

The application will open at `http://localhost:5173`

## 📦 Build

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Vue components
│   ├── HeroSection.vue
│   ├── QuizSection.vue
│   ├── EnergyBreakdown.vue
│   ├── AnimatedBar.vue
│   ├── HabitCalculator.vue
│   ├── ToggleCard.vue
│   ├── ImpactSummary.vue
│   └── SectionContainer.vue
├── data/
│   └── energyData.ts   # Data and interfaces
├── styles/
│   └── index.css       # Global styles and design tokens
├── App.vue             # Root component
└── main.ts             # Entry point

public/
├── favicon.ico

index.html             # HTML template
package.json           # Dependencies and scripts
tsconfig.json          # TypeScript configuration
vite.config.ts         # Vite configuration
```

## 📊 Data

All energy data is stored in `src/data/energyData.ts` and includes:

- Energy breakdown by category
- Savings actions with impact metrics
- Quiz options with feedback
- Comparison calculations

## 🎯 Key Components

### HeroSection
Eye-catching introduction with SVG home illustration and call-to-action button.

### QuizSection
Interactive multiple-choice quiz with immediate feedback revealing the correct answer about household energy usage.

### EnergyBreakdown
Animated horizontal bar chart showing the percentage distribution of household energy consumption across seven categories.

### HabitCalculator
Toggle switches for five energy-saving habits that dynamically calculate:
- Annual savings ($)
- Energy reduction (%)
- CO₂ avoided (kg)
- Effort level indicator

### ImpactSummary
Final section displaying personalized impact metrics and real-world comparisons (trees planted, miles saved, water conserved).

## 🎨 Color Palette

- **Primary Green**: `#10b981`
- **Secondary Orange**: `#d4841a`
- **Accent Amber**: `#f59e0b`
- **Text Dark**: `#1f2937`
- **Background Light**: `#f9faf8`
- **Card White**: `#ffffff`

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Color contrast compliant
- Touch-friendly button sizes
- Keyboard navigation support
- Smooth scroll behavior

## 📱 Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 1023px
- Mobile: < 768px

## 🚀 Performance

- Optimized animations using CSS transforms
- Lazy-loaded components
- Minified production build
- Efficient event handling
- Light animations for better performance

## 📝 License

This project is part of the Protogen Academy Case Study program.

## 🤝 Contributing

This is an educational project. Feel free to fork, modify, and learn from it!

---

**Built with ❤️ for sustainability education**
