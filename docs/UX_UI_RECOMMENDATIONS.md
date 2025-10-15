# UX/UI RECOMMENDATIONS
## Mira Labs Pitch Deck - Expert Design Review

**Reviewer Perspective:** Senior UX/UI Designer with Financial Services Experience
**Date:** October 2024
**Overall Grade:** 7/10 (Technically competent but lacks brand differentiation)

---

## EXECUTIVE SUMMARY

The Mira Labs pitch deck demonstrates solid technical execution with Tailwind CSS and responsive design principles, but suffers from generic visual identity, information overload, and inconsistent emphasis hierarchy. While the design system is internally consistent, it lacks the brand memorability and visual storytelling required for institutional investor presentations.

### 2025 Update Addendum

- Slides 2, 5, 6, 7, 8, 9, and 10 were reauthored in October 2025 to clarify information hierarchy, reduce cognitive load, and better support the revised investment narrative.
- New market sizing, competitive landscape, and regulatory risk slides address several structural gaps identified in this review.
- Interaction layer remains unchanged; future sprints should target motion design, chart interactivity, and theme customization as originally recommended.

**High-Priority UX Follow-Ups:**
- Establish an evolved visual identity (color, typography, iconography) that differentiates Mira Labs from other Tailwind-based decks.
- Produce charting/diagram assets for the new slides so critical data is communicated visually instead of via text blocks.
- Prototype navigation enhancements (mini-map, presenter mode, keyboard shortcuts) once the core storytelling stabilises.

### Visual Identity Refresh Proposal (October 2025)

| Element | Recommendation | Notes |
|---------|----------------|-------|
| Primary Palette | `#0E1F3A` Midnight Navy, `#1C7ED6` Alpine Blue, `#15AABF` Glacier Teal, `#F8F9FA` Snow White | Establishes Swiss institutional tone and replaces default Tailwind neutrals. |
| Secondary Palette | `#FF922B` Amber (alerts), `#51CF66` Evergreen (positive), `#C92A2A` Merlot (risk) | Use sparingly for data states and emphasis. |
| Typography | Headings: Inter SemiBold (tracking -0.01em); Body: Source Sans Pro Regular (line height 1.6); Numerics: IBM Plex Mono | Load via Google Fonts; add to Tailwind theme extensions. |
| Iconography | Adopt Phosphor Thin/Fill duotone (Midnight Navy + Alpine Blue) | Update navigation and slide icons for consistent weight. |
| Illustration Motifs | Minimal Swiss-grid diagrams with diagonal cut accents | Apply to cover/interstitial slides to reinforce brand. |

Implementation: extend `tailwind.config.js` tokens, update shared components (KPI cards, callouts), and publish a Figma style guide for stakeholder sign-off.

### Data Visualisation System Plan

- **Libraries:** Nivo for primary charts (React + TS), D3 for bespoke Sankey/network visuals.
- **Chart Mapping:** Slide 02 TAM/SAM/SOM pyramid; Slide 06 combo revenue/EBITDA plot + sensitivity tornado; Slide 08 stacked revenue mix; Slide 09 capability heatmap; Slide 10 comparables scatter + valuation waterfall.
- **Component Guidelines:** Build reusable `<ChartContainer>` with shared legend, accessible summaries, and motion respect for `prefers-reduced-motion`.
- **Next Steps:** Produce Figma mocks → finalise chart theme → implement wrappers in `/src/components/charts`.

### Interaction Enhancement Plan

1. Navigation mini-map (toggle `M`) with slide thumbnails and titles.  
2. Presenter mode (`P`) offering current/next slide, timer, speaker notes.  
3. Framer Motion micro-animations for headers, KPIs, chart entrances (guard by reduced-motion).  
4. Touch gestures (swipe) while maintaining keyboard parity.  
5. Loading skeletons for data-heavy slides to improve perceived performance.

### Accessibility Audit Checklist

- Check contrast ratios (≥4.5:1) for new palette via axe/Stark.  
- Ensure visible focus outlines (`outline-offset: 2px`, Glacier Teal).  
- Add ARIA labels / annotations for navigation controls and charts; provide data table fallbacks.  
- Respect `prefers-reduced-motion` across animations.  
- Test with NVDA, VoiceOver, and Lighthouse before release.

#### Action Tracker (Oct 2025)

| Item | Status | Owner | Notes |
|------|--------|-------|-------|
| Slide narrative rewrites (2,5,6,7,8,9,10) | ✅ Complete | Content team | Implemented October 2025 |
| Visual identity refresh (palette, typography, iconography) | 🟡 Plan drafted | Design | Recommendations documented above; awaiting stakeholder approval |
| Data visualisation system (charts, diagrams) | 🟡 Plan drafted | Design + Eng | Library + chart mapping defined; next step Figma mocks |
| Interaction polish (micro-animations, presenter mode, mini-map) | 🟡 Plan drafted | Front-end | Implementation sequence outlined; execution tied to chart rollout |
| Accessibility audit (contrast, focus states, ARIA) | 🟡 Checklist ready | Design QA | Audit checklist above; schedule post visual refresh |

### Key Issues:
1. **Generic visual identity** - Looks like every other Tailwind-based pitch deck
2. **Cognitive overload** - Multiple slides exceed the 7±2 rule for working memory
3. **Inconsistent emphasis** - When everything is highlighted, nothing stands out
4. **Missing data visualization** - Over-reliance on tables vs charts
5. **Whitespace starvation** - Dense slides reduce readability

---

## 1. VISUAL HIERARCHY & INFORMATION DENSITY

### 🔴 CRITICAL ISSUES

#### 1.1 Slide 9: Cognitive Overload
**Problem:** 22 information units on a single slide
- 5 "Market Inefficiencies" bullets
- 5 "Solution" bullets
- 5 technology metrics
- 4 competitive comparisons
- 3 use case boxes

**Impact:** Investors will skim past critical points. Working memory can only hold 7±2 chunks.

**Solution:**
```
Split into 3 slides:
├── Slide 9A: The Problem (3 market inefficiencies with quantified impact)
├── Slide 9B: Our Solution (technology infrastructure overview)
└── Slide 9C: Use Cases (3 specific customer stories)
```

**Implementation:**
```tsx
// Bad: Current approach
<div className="space-y-8">
  {/* 22 information units crammed together */}
</div>

// Good: Split into digestible chunks
// Slide 9A - The Problem
<div className="space-y-12"> {/* Increased from space-y-8 */}
  <div className="max-w-4xl mx-auto"> {/* Limit width for readability */}
    {/* 3-4 key problems with visual icons */}
  </div>
</div>
```

#### 1.2 Inconsistent Emphasis Hierarchy
**Problem:** Multiple highlighting techniques without clear grammar
- Colored backgrounds (blue-50, green-50, purple-50)
- Border-left accent bars
- Bold text
- Font size variations
- Text colors (slate-600, slate-700, slate-900)

**Solution:** Establish clear visual grammar

```tsx
// HERO METRICS (most important numbers)
<div className="text-4xl font-light text-blue-600">
  $60M
</div>

// SECTION HEADERS
<h3 className="text-xs uppercase tracking-widest text-slate-900 font-semibold">
  Investment Thesis
</h3>

// SUPPORTING DETAIL
<div className="text-sm text-slate-600">
  Supporting information...
</div>

// CALLOUTS (1 per slide max)
<div className="border-l-4 border-blue-600 bg-blue-50 p-6">
  Single most important insight
</div>
```

#### 1.3 Whitespace Starvation
**Problem:** Dense slides (4, 8, 9) have minimal padding

**Current:**
```tsx
<div className="space-y-8 gap-6 p-6">
```

**Recommended:**
```tsx
<div className="space-y-12 gap-8 p-10">
```

**Spacing Scale:**
| Element | Current | Recommended |
|---------|---------|-------------|
| Between major sections | `space-y-8` (2rem) | `space-y-12` (3rem) |
| Around hero metrics | `p-6` (1.5rem) | `p-10` (2.5rem) |
| Between bullet points | `space-y-3` (0.75rem) | `space-y-4` (1rem) |
| Grid gaps | `gap-6` (1.5rem) | `gap-8` (2rem) |

---

## 2. COLOR PALETTE & BRAND IDENTITY

### 🟡 HIGH PRIORITY

#### 2.1 Generic Tailwind Colors
**Problem:** Deck uses default Tailwind palette
- `slate-900`, `blue-600`, `green-600`, `purple-600`
- Looks identical to thousands of other pitch decks
- No brand differentiation

**Solution:** Define custom Mira Labs brand colors

**Implementation:**
```tsx
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        // Mira Labs Brand Colors
        'mira-navy': '#0A1628',        // Primary dark (headers)
        'mira-blue': '#1E40AF',        // Primary brand
        'mira-gold': '#F59E0B',        // Accent for key metrics
        'mira-silver': '#94A3B8',      // Supporting text
        'mira-success': '#059669',     // Positive metrics
        'mira-warning': '#DC2626',     // Risk/concerns
      },
    },
  },
}

// Usage in components
<div className="bg-mira-navy text-white">
  <h2 className="text-mira-gold">$60M</h2>
  <p className="text-mira-silver">Immediate AUM</p>
</div>
```

#### 2.2 Inconsistent Color Semantics
**Problem:** Colors used randomly without meaning
- Why is "Asset Management" blue-50 but "Platform Services" purple-50?
- Green used for both success metrics AND section backgrounds

**Solution:** Establish color semantics

| Color | Meaning | Usage |
|-------|---------|-------|
| **Navy** | Authority | Headers, titles, primary text |
| **Blue** | Financial metrics | Revenue, AUM, returns |
| **Gold** | Key highlights | Hero numbers, CTAs |
| **Green** | Positive indicators | ✓ checkmarks, growth arrows, margins |
| **Red** | Risks/problems | Market inefficiencies, concerns |
| **Silver** | Supporting info | Subtitles, footnotes, timestamps |

---

## 3. TYPOGRAPHY & READABILITY

### 🟡 HIGH PRIORITY

#### 3.1 Font Size Hierarchy Confusion
**Problem:** Too many font sizes without clear purpose

**Current (11 different sizes):**
```tsx
text-xs, text-sm, text-base, text-lg, text-xl,
text-2xl, text-3xl, text-4xl, text-5xl, text-6xl, text-7xl
```

**Recommended (6 sizes):**
```tsx
// Display (slide titles only)
.text-display { font-size: 2.5rem; } // 40px

// Hero (key metrics)
.text-hero { font-size: 2rem; }      // 32px

// Heading (section headers)
.text-heading { font-size: 1rem; }   // 16px uppercase

// Body (main content)
.text-body { font-size: 0.875rem; }  // 14px

// Caption (footnotes)
.text-caption { font-size: 0.75rem; } // 12px

// Tiny (timestamps, codes)
.text-tiny { font-size: 0.625rem; }   // 10px
```

#### 3.2 Line Height Too Tight
**Problem:** Current line heights reduce readability

**Recommended:**
```css
.text-body {
  font-size: 0.875rem;
  line-height: 1.6; /* Increased from 1.4 */
}

.text-heading {
  font-size: 1rem;
  line-height: 1.4;
  letter-spacing: 0.05em; /* Add tracking for headers */
}
```

---

## 4. ICONOGRAPHY & VISUAL ELEMENTS

### 🟢 MEDIUM PRIORITY

#### 4.1 Inconsistent Icon Usage
**Problem:** Icons appear only on Slides 2 and 8
- Slide 2: CheckCircle
- Slide 8: Building2, Briefcase, Lock, CheckCircle
- Other slides: No icons

**Solution:** Systematic icon usage

```tsx
// Recommended icon mapping
const slideIcons = {
  executiveSummary: { CheckCircle, TrendingUp },
  strategicRationale: { Target, Clock, Shield },
  team: { Users, Award, Briefcase },
  infrastructure: { Building2, Globe, Lock },
  financials: { BarChart3, DollarSign },
  terms: { FileText, Scale },
  platform: { Layers, Users, Zap },
  technology: { Cpu, Zap, Activity },
  valuation: { TrendingUp, Target, Award }
}
```

**Implementation:**
```tsx
// Section header with icon
<div className="flex items-center gap-3 mb-4">
  <TrendingUp className="text-mira-blue" size={24} />
  <h3 className="text-heading">Revenue Projections</h3>
</div>
```

#### 4.2 Missing Visual Separators
**Problem:** Dense content sections run together

**Solution:** Add visual separators

```tsx
// Horizontal dividers
<hr className="border-mira-silver/20 my-8" />

// Or decorative elements
<div className="flex items-center gap-4 my-8">
  <div className="flex-1 border-t border-mira-silver/20"></div>
  <div className="text-mira-silver text-xs">• • •</div>
  <div className="flex-1 border-t border-mira-silver/20"></div>
</div>
```

---

## 5. DATA VISUALIZATION

### 🔴 CRITICAL ISSUES

#### 5.1 Over-Reliance on Tables
**Problem:** 5 major tables, 0 charts
- Slide 6: Financial projections (table)
- Slide 7: Investment terms comparison (table)
- Slide 8: Revenue scaling (table)
- Slide 9: Competitive comparison (table)
- Slide 10: Valuation scenarios (table)

**Solution:** Convert to visual charts

**Priority 1: Financial Projections (Slide 6)**
```tsx
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
  { year: 'Immediate', revenue: 0.9, ebitda: 0.3 },
  { year: 'Year 1', revenue: 1.65, ebitda: 0.75 },
  { year: 'Year 2', revenue: 3.5, ebitda: 1.75 },
  { year: 'Year 3', revenue: 6.4, ebitda: 3.2 },
];

<LineChart width={600} height={300} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="year" />
  <YAxis />
  <Tooltip />
  <Line type="monotone" dataKey="revenue" stroke="#1E40AF" strokeWidth={2} />
  <Line type="monotone" dataKey="ebitda" stroke="#059669" strokeWidth={2} />
</LineChart>
```

**Priority 2: Revenue Mix (Slide 8)**
```tsx
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

const revenueData = [
  { year: 'Y1', am: 1.05, platform: 0.6, advisory: 0.25 },
  { year: 'Y2', am: 2.5, platform: 1.25, advisory: 0.5 },
  { year: 'Y3', am: 5.25, platform: 3.25, advisory: 1.0 },
];

<BarChart width={500} height={300} data={revenueData}>
  <XAxis dataKey="year" />
  <YAxis />
  <Bar dataKey="am" stackId="a" fill="#1E40AF" />
  <Bar dataKey="platform" stackId="a" fill="#F59E0B" />
  <Bar dataKey="advisory" stackId="a" fill="#059669" />
</BarChart>
```

#### 5.2 Missing Visual Comparisons
**Problem:** Competitive positioning described in text (Slide 9)

**Solution:** 2x2 positioning matrix

```tsx
// Competitive positioning chart
<div className="relative w-full h-96 border border-mira-silver/20">
  {/* Axes */}
  <div className="absolute inset-0 flex flex-col">
    <div className="flex-1 flex items-center justify-center">
      <div className="text-xs text-mira-silver">High Tech Sophistication</div>
    </div>
  </div>

  {/* Quadrants */}
  <div className="grid grid-cols-2 grid-rows-2 h-full">
    <div className="border-r border-b border-mira-silver/20 p-4">
      <span className="text-xs text-mira-silver">Traditional Asset Mgrs</span>
    </div>
    <div className="border-b border-mira-silver/20 p-4 bg-blue-50">
      <span className="text-sm font-semibold text-mira-blue">★ Mira Labs</span>
    </div>
    <div className="border-r border-mira-silver/20 p-4">
      <span className="text-xs text-mira-silver">DeFi Native</span>
    </div>
    <div className="p-4">
      <span className="text-xs text-mira-silver">Other FPGAs</span>
    </div>
  </div>

  {/* Axis labels */}
  <div className="absolute bottom-0 right-0 text-xs text-mira-silver">
    High Regulatory Compliance →
  </div>
</div>
```

---

## 6. RESPONSIVE DESIGN

### 🟢 MEDIUM PRIORITY

#### 6.1 Mobile Optimization Overkill
**Problem:** Extensive responsive breakpoints (sm:, md:, lg:) for presentation deck

**Reality Check:**
- Pitch decks are viewed on: Large monitors (80%), Desktop screens (15%), Tablets (5%)
- Mobile viewing: <1% of actual usage

**Recommendation:**
```tsx
// REMOVE mobile breakpoints, optimize for 1920x1080
// Bad: Current approach
<div className="px-4 sm:px-6 md:px-8 lg:px-12">
  <h2 className="text-lg sm:text-xl md:text-2xl">

// Good: Single target resolution
<div className="px-12">
  <h2 className="text-2xl">
```

**Exception:** Keep responsive for web demo, but create separate "investor PDF" export

#### 6.2 Zoom Controls Are Excellent ✅
**What Works:** Zoom functionality (85%-150%) is perfect for presentation mode

**Enhance:**
```tsx
// Add keyboard shortcuts
useEffect(() => {
  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === '+' || e.key === '=') {
      setZoom(prev => Math.min(1.5, prev + 0.05));
    }
    if (e.key === '-') {
      setZoom(prev => Math.max(0.5, prev - 0.05));
    }
    if (e.key === '0') {
      setZoom(1); // Reset
    }
  };

  window.addEventListener('keydown', handleKeyPress);
  return () => window.removeEventListener('keydown', handleKeyPress);
}, []);
```

---

## 7. INTERACTION & ANIMATION

### 🟢 MEDIUM PRIORITY

#### 7.1 Missing Micro-Animations
**Problem:** Static presentation feels dated

**Quick Wins:**
```tsx
// Install framer-motion
npm install framer-motion

// Animated counters for hero metrics
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  <CountUp
    end={60}
    duration={2}
    suffix="M"
    prefix="$"
    className="text-4xl font-light text-mira-blue"
  />
</motion.div>

// Stagger children animation for bullet points
<motion.div
  variants={{
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }}
  initial="hidden"
  animate="show"
>
  {items.map((item) => (
    <motion.div
      key={item}
      variants={{
        hidden: { opacity: 0, x: -20 },
        show: { opacity: 1, x: 0 }
      }}
    >
      {item}
    </motion.div>
  ))}
</motion.div>
```

#### 7.2 Slide Transitions
**Current:** Instant slide changes feel jarring

**Recommended:**
```tsx
import { AnimatePresence, motion } from 'framer-motion';

<AnimatePresence mode="wait">
  <motion.div
    key={currentSlide}
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -100 }}
    transition={{ duration: 0.3 }}
  >
    {slides[currentSlide].content}
  </motion.div>
</AnimatePresence>
```

---

## 8. ACCESSIBILITY

### 🟡 HIGH PRIORITY

#### 8.1 Missing ARIA Labels
**Problem:** Navigation buttons lack proper accessibility

**Current:**
```tsx
<button onClick={nextSlide}>
  Next
</button>
```

**Improved:**
```tsx
<button
  onClick={nextSlide}
  aria-label={`Go to slide ${currentSlide + 2} of ${slides.length}`}
  disabled={currentSlide === slides.length - 1}
  className="..."
>
  <span aria-hidden="true">Next</span>
  <ChevronRight aria-hidden="true" size={18} />
</button>
```

#### 8.2 Color Contrast Issues
**Problem:** Some text fails WCAG AA standards

**Check:**
```tsx
// Bad: Low contrast
<div className="text-slate-400 bg-slate-50">
  // Contrast ratio: 2.5:1 (FAIL)

// Good: Sufficient contrast
<div className="text-slate-700 bg-white">
  // Contrast ratio: 4.8:1 (PASS)
```

**Tool:** Use Chrome DevTools Lighthouse audit to check contrast ratios

#### 8.3 Keyboard Navigation
**Current:** Partially implemented

**Complete implementation:**
```tsx
useEffect(() => {
  const handleKeyPress = (e: KeyboardEvent) => {
    switch(e.key) {
      case 'ArrowRight':
      case 'PageDown':
        nextSlide();
        break;
      case 'ArrowLeft':
      case 'PageUp':
        prevSlide();
        break;
      case 'Home':
        goToSlide(0);
        break;
      case 'End':
        goToSlide(slides.length - 1);
        break;
      case 'Escape':
        // Exit fullscreen mode
        document.exitFullscreen();
        break;
    }
  };

  window.addEventListener('keydown', handleKeyPress);
  return () => window.removeEventListener('keydown', handleKeyPress);
}, [currentSlide]);
```

---

## 9. PRINT/EXPORT OPTIMIZATION

### 🟡 HIGH PRIORITY

#### 9.1 Current Print Styles
**What Works:**
```css
@media print {
  @page {
    size: landscape;
    margin: 0;
  }

  button {
    display: none !important;
  }
}
```

#### 9.2 Missing Print Enhancements
**Add:**
```css
@media print {
  /* Prevent page breaks within slides */
  .slide-content {
    page-break-inside: avoid;
    break-inside: avoid;
  }

  /* Force page break between slides */
  .slide-container {
    page-break-after: always;
    break-after: page;
  }

  /* High-res backgrounds for PDF export */
  .bg-slate-900 {
    print-color-adjust: exact;
    -webkit-print-color-adjust: exact;
  }

  /* Ensure charts render properly */
  svg, canvas {
    max-width: 100%;
    height: auto;
  }
}
```

#### 9.3 PDF Export Functionality
**Recommended:** Add "Export as PDF" button

```tsx
const exportToPDF = async () => {
  const { jsPDF } = await import('jspdf');
  const html2canvas = (await import('html2canvas')).default;

  const pdf = new jsPDF('landscape', 'mm', 'a4');

  for (let i = 0; i < slides.length; i++) {
    setCurrentSlide(i);
    await new Promise(resolve => setTimeout(resolve, 500)); // Wait for render

    const element = document.querySelector('.slide-content');
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL('image/png');

    if (i > 0) pdf.addPage();
    pdf.addImage(imgData, 'PNG', 0, 0, 297, 210);
  }

  pdf.save('Mira-Labs-Pitch-Deck.pdf');
};

<button onClick={exportToPDF}>
  Export as PDF
</button>
```

---

## 10. COMPONENT ARCHITECTURE

### 🟢 MEDIUM PRIORITY

#### 10.1 Create Reusable Components
**Problem:** Lots of repeated JSX patterns

**Solution:** Extract common patterns

```tsx
// components/MetricCard.tsx
export const MetricCard = ({
  value,
  label,
  icon: Icon,
  color = 'blue'
}) => (
  <div className={`text-center p-6 bg-${color}-50 border-l-2 border-${color}-600`}>
    {Icon && <Icon className={`text-${color}-600 mx-auto mb-2`} size={24} />}
    <div className="text-3xl font-light text-slate-900 mb-2">{value}</div>
    <div className="text-xs uppercase tracking-wide text-slate-600">{label}</div>
  </div>
);

// Usage
<MetricCard
  value="$60M"
  label="Immediate AUM"
  icon={DollarSign}
  color="blue"
/>
```

```tsx
// components/SectionHeader.tsx
export const SectionHeader = ({
  title,
  subtitle,
  icon: Icon
}) => (
  <div className="mb-6">
    {Icon && (
      <Icon className="text-mira-blue mb-2" size={24} />
    )}
    <h3 className="text-heading text-mira-navy mb-1">{title}</h3>
    {subtitle && (
      <p className="text-caption text-mira-silver">{subtitle}</p>
    )}
  </div>
);
```

#### 10.2 Slide Template System
**Create base templates:**

```tsx
// components/SlideTemplate.tsx
export const SlideTemplate = ({
  children,
  layout = 'default'
}) => {
  const layouts = {
    default: 'grid grid-cols-1 gap-8',
    twoColumn: 'grid grid-cols-2 gap-8',
    hero: 'flex flex-col items-center justify-center min-h-full',
    comparison: 'grid grid-cols-3 gap-6'
  };

  return (
    <div className={layouts[layout]}>
      {children}
    </div>
  );
};
```

---

## IMPLEMENTATION ROADMAP

### Phase 1: Critical Fixes (Week 1)
- [ ] Split Slide 9 into 3 separate slides
- [ ] Establish consistent visual hierarchy (hero/heading/body/caption)
- [ ] Define custom brand colors (mira-navy, mira-blue, mira-gold)
- [ ] Add data visualizations for Slides 6, 8, 10
- [ ] Increase whitespace (space-y-12, gap-8, p-10)

### Phase 2: High Priority (Week 2)
- [ ] Systematic iconography across all slides
- [ ] Print/PDF export optimization
- [ ] Accessibility improvements (ARIA labels, contrast)
- [ ] Animated counters for hero metrics
- [ ] Slide transition animations

### Phase 3: Polish (Week 3)
- [ ] Extract reusable components (MetricCard, SectionHeader)
- [ ] Keyboard shortcuts enhancement
- [ ] Responsive charts (Recharts integration)
- [ ] Competitive positioning map
- [ ] Brand guidelines documentation

---

## DESIGN SYSTEM SPECIFICATION

### Component Library
```tsx
// Buttons
.btn-primary: bg-mira-blue text-white hover:bg-mira-blue/90
.btn-secondary: border border-mira-silver text-mira-navy
.btn-ghost: text-mira-blue hover:bg-blue-50

// Cards
.card: border border-mira-silver/20 rounded-lg p-6
.card-accent: border-l-4 border-mira-blue bg-blue-50

// Typography
.text-display: text-4xl font-light tracking-tight
.text-hero: text-3xl font-light
.text-heading: text-xs uppercase tracking-widest font-semibold
.text-body: text-sm leading-relaxed
.text-caption: text-xs text-mira-silver
```

### Spacing Scale
```tsx
const spacing = {
  xs: '0.5rem',   // 8px
  sm: '0.75rem',  // 12px
  md: '1rem',     // 16px
  lg: '1.5rem',   // 24px
  xl: '2rem',     // 32px
  '2xl': '3rem',  // 48px
  '3xl': '4rem',  // 64px
}
```

---

## TOOLS & LIBRARIES RECOMMENDED

```bash
# Animation
npm install framer-motion react-countup

# Charts
npm install recharts

# PDF Export
npm install jspdf html2canvas

# Icons (more variety than lucide)
npm install react-icons

# Utilities
npm install clsx
npm install tailwind-merge
```

---

## BEFORE/AFTER MOCKUPS

### Slide 2: Executive Summary

**Before:**
```tsx
<div className="grid grid-cols-4 gap-6">
  <div className="text-center p-6 bg-slate-50 border-l-2 border-blue-600">
    <div className="text-3xl font-light">$60M</div>
    <div className="text-xs uppercase">Immediate AUM</div>
  </div>
  {/* 3 more cards... */}
</div>
```

**After:**
```tsx
<motion.div
  className="grid grid-cols-4 gap-8"
  variants={staggerContainer}
  initial="hidden"
  animate="show"
>
  <motion.div
    variants={fadeInUp}
    className="text-center p-10 bg-gradient-to-br from-mira-blue/5 to-mira-blue/10 border-l-4 border-mira-blue rounded-r-lg"
  >
    <DollarSign className="mx-auto mb-3 text-mira-blue" size={28} />
    <CountUp
      end={60}
      suffix="M"
      prefix="$"
      className="text-4xl font-light text-mira-navy mb-2"
    />
    <div className="text-heading text-mira-silver">Immediate AUM</div>
  </motion.div>
  {/* 3 more animated cards... */}
</motion.div>
```

---

## FINAL ASSESSMENT

**Current State:** 7/10
- ✅ Technically competent Tailwind implementation
- ✅ Responsive design (though unnecessary for pitch deck)
- ✅ Consistent design system
- ❌ Generic visual identity
- ❌ Information overload
- ❌ No data visualization

**Target State:** 9/10
- ✅ Custom brand colors and typography
- ✅ Balanced information density
- ✅ Interactive charts and animations
- ✅ Professional print export
- ✅ Memorable visual identity

**Estimated Effort:** 40-60 hours of design/dev work

---

**Next Steps:**
1. Review this document with team
2. Prioritize Phase 1 critical fixes
3. Create Figma mockups for key slides
4. Implement changes iteratively
5. User test with sample investors

**Contact:** For implementation support, reference `/docs/PROJECT_DOCUMENTATION.md`
