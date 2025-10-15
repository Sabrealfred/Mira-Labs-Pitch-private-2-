# PROJECT DOCUMENTATION
## Mira Labs Pitch Deck - Technical Documentation

---

## 1. PROJECT OVERVIEW

### Project Name
**Mira Labs Pitch Deck** - Interactive Web-Based Presentation Platform

### Description
A modern, interactive pitch deck application built as a single-page web application for presenting Mira Labs' Pre-Seed investment opportunity. The application delivers a professional, institutional-grade presentation experience with 13 comprehensive slides covering the company's value proposition, financial model, team, infrastructure, and investment terms.

### Purpose
- Present Mira Labs' investment opportunity to potential investors
- Provide an interactive, web-based alternative to traditional PDF/PowerPoint presentations
- Enable easy navigation, zoom controls, and responsive viewing across devices
- Deliver a professional, branded experience that reflects institutional quality

### Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.1.1 | UI framework for component-based architecture |
| TypeScript | 5.9.3 | Type-safe development and enhanced IDE support |
| Vite | 7.1.7 | Build tool and development server with HMR |
| Tailwind CSS | 3.4.18 | Utility-first CSS framework for styling |
| Lucide React | 0.545.0 | Icon library for navigation and UI elements |
| PostCSS | 8.5.6 | CSS processing for Tailwind |
| Autoprefixer | 10.4.21 | Automatic vendor prefixing for cross-browser support |

### Key Features

1. **Interactive Navigation**
   - Next/Previous slide controls
   - Direct slide selection via progress indicators
   - Keyboard shortcuts support
   - Slide counter display

2. **Zoom Controls**
   - Adjustable zoom from 50% to 150%
   - Visual zoom percentage display
   - Smooth scaling transitions

3. **Responsive Design**
   - Mobile-first approach
   - Optimized layouts for phones, tablets, and desktops
   - Touch-friendly controls
   - Adaptive grid systems

4. **Professional Presentation Mode**
   - Full-screen slide display
   - Consistent header/footer branding on content slides
   - Confidential markings and metadata
   - Print-optimized styles

5. **Type Safety**
   - Full TypeScript implementation
   - Strict type checking enabled
   - Enhanced developer experience

---

## 2. ARCHITECTURE

### Project Structure

```
/root/mira-labs-pitch/
├── docs/                           # Documentation directory
│   └── PROJECT_DOCUMENTATION.md    # This file
├── node_modules/                   # Dependencies (not tracked)
├── public/                         # Static assets
├── src/                            # Source code
│   ├── slides/                     # Slide components
│   │   ├── Slide01Title.tsx
│   │   ├── Slide02ExecutiveSummary.tsx
│   │   ├── Slide03StrategicRationale.tsx
│   │   ├── Slide04LeadershipTeam.tsx
│   │   ├── Slide05InstitutionalInfrastructure.tsx
│   │   ├── Slide06FinancialModel.tsx
│   │   ├── Slide07InvestmentTerms.tsx
│   │   ├── Slide08PlatformBusinessModel.tsx
│   │   ├── Slide09TechnologyMarketSolution.tsx
│   │   ├── Slide10ValuationFramework.tsx
│   │   └── index.ts                # Slide exports
│   ├── App.css                     # Component-specific styles
│   ├── App.tsx                     # Main application component
│   ├── index.css                   # Global styles and Tailwind config
│   └── main.tsx                    # Application entry point
├── .gitignore                      # Git ignore rules
├── eslint.config.js                # ESLint configuration
├── index.html                      # HTML entry point
├── package.json                    # Project dependencies and scripts
├── package-lock.json               # Locked dependency versions
├── postcss.config.js               # PostCSS configuration
├── README.md                       # Basic project information
├── tailwind.config.js              # Tailwind CSS configuration
├── tsconfig.json                   # TypeScript base configuration
├── tsconfig.app.json               # TypeScript app configuration
├── tsconfig.node.json              # TypeScript Node.js configuration
└── vite.config.ts                  # Vite build configuration
```

### Component Hierarchy

```
main.tsx (Entry Point)
    └── StrictMode
        └── MiraLabsPitch (App.tsx)
            ├── Slide Container (with zoom transform)
            │   ├── Header (for content slides)
            │   │   ├── Title
            │   │   ├── Subtitle
            │   │   └── Metadata (Confidential, slide number)
            │   ├── Slide Content (dynamic)
            │   │   └── [Slide01-10 components]
            │   └── Footer (for content slides)
            │       └── Branding & Location
            └── Navigation Bar
                ├── Previous Button
                ├── Slide Progress Indicators
                ├── Zoom Controls
                └── Next Button
```

### Slide Organization

**Slide Types:**
1. **Title Slide** (`type: 'title'`)
   - Full-screen branded title page
   - No header/footer chrome
   - Custom layout with company branding

2. **Content Slides** (`type: 'content'`)
   - Header with title, subtitle, and metadata
   - Scrollable content area
   - Footer with branding and locations

**Slide Manifest (`/src/slides/`):**
1. **Slide01Title.tsx** - Cover slide with MIRA LABS branding
2. **Slide02MarketOpportunity.tsx** - TAM/SAM/SOM sizing and institutional demand drivers (NEW Oct 2025)
3. **Slide02ExecutiveSummary.tsx** - Investment thesis and key metrics
4. **Slide03StrategicRationale.tsx** - Market opportunity and rationale
5. **Slide04CompetitiveLandscape.tsx** - Swiss digital asset managers comparison and differentiation (NEW Oct 2025)
6. **Slide04LeadershipTeam.tsx** - Team credentials and experience
7. **Slide05InstitutionalInfrastructure.tsx** - Regulatory and operational setup (UPDATED with sources)
8. **Slide06FinancialModel.tsx** - Financial projections and metrics (UPDATED with sources)
9. **Slide07InvestmentTerms.tsx** - Deal structures and terms (UPDATED Series A timing)
10. **Slide08PlatformBusinessModel.tsx** - Business model and operations
11. **Slide09TechnologyMarketSolution.tsx** - Technology stack and solutions
12. **Slide10ValuationFramework.tsx** - Valuation methodology and comparables (UPDATED Series A timing)
13. **Slide11RegulatoryRisk.tsx** - Regulatory transfer risks and mitigation strategies (NEW Oct 2025)

### State Management Approach

**State Structure:**
```typescript
// Local component state (useState hooks)
const [currentSlide, setCurrentSlide] = useState(0);  // Active slide index
const [zoom, setZoom] = useState(1);                   // Zoom level (0.5-1.5)
```

**No External State Management:**
- Uses React's built-in useState hooks
- Simple state needs don't require Redux/MobX/Zustand
- All state is local to the main App component
- Props are passed down to child components

**State Flow:**
1. User interaction (click, keyboard) triggers event handlers
2. Event handlers update state via setState functions
3. React re-renders affected components
4. New slide content or zoom level is displayed

---

## 3. SETUP & INSTALLATION

### Prerequisites

**Required Software:**
- **Node.js:** v22.14.0 or higher (LTS recommended)
- **npm:** v10.9.2 or higher (comes with Node.js)
- **Modern web browser:** Chrome, Firefox, Safari, or Edge (latest versions)

**Recommended:**
- **Git:** For version control
- **VS Code:** With ESLint and TypeScript extensions

### Installation Steps

1. **Clone or Download the Project**
   ```bash
   # If using git
   git clone <repository-url>
   cd mira-labs-pitch

   # Or download and extract the ZIP file
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

   This installs all packages listed in `package.json`:
   - React and React DOM
   - TypeScript and type definitions
   - Vite and plugins
   - Tailwind CSS and PostCSS
   - ESLint and configuration
   - Lucide React icons

3. **Verify Installation**
   ```bash
   # Check if node_modules directory exists
   ls node_modules

   # Verify no errors in package installation
   npm list --depth=0
   ```

### Running the Development Server

1. **Start the Dev Server**
   ```bash
   npm run dev
   ```

2. **Access the Application**
   - Open your browser to: `http://localhost:5173`
   - The port may vary if 5173 is in use (Vite will display the actual URL)

3. **Hot Module Replacement (HMR)**
   - Changes to source files automatically reflect in the browser
   - No manual refresh needed
   - Preserves application state during updates

4. **Stop the Server**
   - Press `Ctrl+C` in the terminal

### Building for Production

1. **Create Production Build**
   ```bash
   npm run build
   ```

   This command:
   - Runs TypeScript compiler (`tsc -b`)
   - Bundles the application with Vite
   - Optimizes and minifies code
   - Outputs to `/dist` directory

2. **Build Output**
   ```
   dist/
   ├── assets/          # JS, CSS, and asset files (hashed names)
   ├── index.html       # Production HTML
   └── vite.svg         # Favicon
   ```

3. **Preview Production Build Locally**
   ```bash
   npm run preview
   ```
   - Serves the production build locally
   - Useful for testing before deployment

4. **Build Artifacts**
   - Minified JavaScript bundles
   - Extracted and optimized CSS
   - Source maps for debugging (optional)
   - Hashed filenames for cache busting

---

## 4. FILE STRUCTURE

### Detailed Breakdown of `/src/` Directory

#### **`/src/main.tsx`** - Application Entry Point
```typescript
// Initializes React and mounts the application
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MiraLabsPitch from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MiraLabsPitch />
  </StrictMode>,
)
```
- **Purpose:** Bootstraps the React application
- **Key Functions:**
  - Imports global CSS
  - Creates React root on `#root` div
  - Wraps app in StrictMode for development warnings

#### **`/src/App.tsx`** - Main Application Component
- **Purpose:** Core presentation logic and UI orchestration
- **Key Responsibilities:**
  - Slide state management (current slide, zoom)
  - Navigation controls and keyboard handlers
  - Layout rendering (header, footer, navigation)
  - Slide content rendering
- **State Variables:**
  - `currentSlide`: Index of active slide (0-9)
  - `zoom`: Current zoom level (0.5-1.5)
- **Key Functions:**
  - `nextSlide()`: Advance to next slide
  - `prevSlide()`: Go to previous slide
  - `goToSlide(index)`: Jump to specific slide

#### **`/src/index.css`** - Global Styles
- **Purpose:** Global CSS, Tailwind imports, and custom utilities
- **Sections:**
  1. **Tailwind Directives:** `@tailwind base/components/utilities`
  2. **Reset Styles:** Box-sizing, margin, padding reset
  3. **Body Styles:** Font family, smoothing, overflow settings
  4. **Responsive Typography:** Media queries for font scaling
  5. **Custom Utilities:** Table responsive wrapper
  6. **Text Size Overrides:** Compact sizes for presentation mode
  7. **Spacing Overrides:** Reduced spacing for better slide density
  8. **Print Styles:** Optimized for PDF export
  9. **Mobile Optimizations:** Grid column adjustments for small screens

#### **`/src/App.css`** - Component-Specific Styles
- Currently minimal/empty
- Reserved for component-specific styles not covered by Tailwind

### Explanation of Each Slide File

All slides follow a consistent structure:

```typescript
export const SlideXXName = {
  type: 'title' | 'content',      // Slide type
  title?: string,                  // Header title (content slides only)
  subtitle?: string,               // Header subtitle (content slides only)
  content: JSX.Element             // React component/JSX
};
```

#### **Slide01Title.tsx** (1,590 bytes)
- **Type:** Title slide
- **Content:** Full-screen cover page
- **Elements:**
  - Company name (MIRA LABS)
  - Tagline: "Swiss-Regulated Digital Asset Management Platform"
  - Investment opportunity details: "Pre-Seed Investment Opportunity | $2-5M Raise"
  - Locations: New York, Luzern, Luxembourg, Singapore
  - Confidential marking and date

#### **Slide02ExecutiveSummary.tsx** (5,119 bytes)
- **Type:** Content slide
- **Content:** Investment overview
- **Sections:**
  - Key metrics cards ($60M AUM, ~14x revenue multiple, 400+ capacity, <120ns latency)
  - Investment thesis (4 checkmark items)
  - Key value drivers
  - Investment opportunity callout

#### **Slide03StrategicRationale.tsx** (6,719 bytes)
- **Type:** Content slide
- **Content:** Why now, why this opportunity
- **Sections:**
  - Market opportunity
  - Regulatory advantages
  - Immediate value creation
  - Strategic positioning

#### **Slide04LeadershipTeam.tsx** (7,821 bytes)
- **Type:** Content slide
- **Content:** Team credentials
- **Sections:**
  - Leadership profiles with photos/icons
  - Experience highlights
  - Track record metrics
  - Advisor information

#### **Slide05InstitutionalInfrastructure.tsx** (5,600 bytes)
- **Type:** Content slide
- **Content:** Operational setup
- **Sections:**
  - Regulatory licenses (FINMA, CSSF)
  - Banking relationships
  - Service providers
  - Infrastructure capacity

#### **Slide06FinancialModel.tsx** (7,577 bytes)
- **Type:** Content slide
- **Content:** Financial projections
- **Sections:**
  - Revenue model
  - AUM growth projections
  - P&L forecasts
  - Margin analysis
  - Key assumptions

#### **Slide07InvestmentTerms.tsx** (8,286 bytes)
- **Type:** Content slide
- **Content:** Deal structures
- **Sections:**
  - Three investment options (Note + Warrants, Convertible Note, Equity)
  - Terms and conditions
  - Valuation parameters
  - Use of proceeds

#### **Slide08PlatformBusinessModel.tsx** (11,884 bytes)
- **Type:** Content slide
- **Content:** Business operations
- **Sections:**
  - Revenue streams
  - Client acquisition strategy
  - Operational workflow
  - Scalability factors

#### **Slide09TechnologyMarketSolution.tsx** (11,108 bytes)
- **Type:** Content slide
- **Content:** Technical infrastructure
- **Sections:**
  - Technology stack
  - FPGA infrastructure details
  - Market solution positioning
  - Competitive advantages

#### **Slide10ValuationFramework.tsx** (9,459 bytes)
- **Type:** Content slide
- **Content:** Valuation methodology
- **Sections:**
  - Valuation approaches
  - Comparable company analysis
  - Exit scenarios
  - Return projections

### Configuration Files

#### **`tailwind.config.js`**
```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
- **Purpose:** Configures Tailwind CSS
- **Content Paths:** Tells Tailwind which files to scan for class names
- **Theme:** Default theme with no custom extensions
- **Plugins:** No additional Tailwind plugins

#### **`vite.config.ts`**
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```
- **Purpose:** Configures Vite build tool
- **Plugins:** React plugin for JSX/TSX support and Fast Refresh
- **Default Settings:** Uses Vite defaults (optimized for modern browsers)

#### **`postcss.config.js`**
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```
- **Purpose:** PostCSS plugin configuration
- **Plugins:**
  - `tailwindcss`: Processes Tailwind directives
  - `autoprefixer`: Adds vendor prefixes for browser compatibility

#### **`tsconfig.json`**
- Base TypeScript configuration
- References two sub-configs:
  - `tsconfig.app.json`: Application code
  - `tsconfig.node.json`: Build tooling

#### **`tsconfig.app.json`**
- **Target:** ES2022
- **Module:** ESNext with bundler resolution
- **JSX:** React JSX transform
- **Strict Mode:** Enabled
- **Linting:** Strict unused variable checks

#### **`eslint.config.js`**
- ESLint configuration for code quality
- TypeScript ESLint rules
- React hooks linting
- React refresh patterns

#### **`index.html`**
- HTML entry point
- Mounts React app to `<div id="root">`
- Loads `/src/main.tsx` as module script

### CSS Organization

1. **Global Reset** (`index.css`)
   - Box-sizing, margin, padding resets
   - Prevents default browser styling conflicts

2. **Tailwind Base/Components/Utilities** (`index.css`)
   - Imported via `@tailwind` directives
   - Provides utility class system

3. **Custom Global Styles** (`index.css`)
   - Body typography and font smoothing
   - Responsive font scaling
   - Table responsive utilities

4. **Text and Spacing Overrides** (`index.css`)
   - Compact text sizes for presentation density
   - Reduced spacing (margins, padding, gaps)
   - Optimized for slide content

5. **Print Styles** (`index.css`)
   - Media query for `@media print`
   - Landscape page orientation
   - Hidden navigation controls
   - Content scaling for single-page slides

6. **Mobile Responsive Overrides** (`index.css`)
   - Grid column adjustments for small screens
   - Breakpoint at 640px

---

## 5. SLIDE SYSTEM

### How Slides are Structured

Each slide is a TypeScript object with a consistent interface:

```typescript
interface Slide {
  type: 'title' | 'content';  // Determines layout
  title?: string;              // Header title (content slides)
  subtitle?: string;           // Header subtitle (content slides)
  content: JSX.Element;        // React component to render
}
```

**Example:**
```typescript
export const Slide02ExecutiveSummary = {
  type: 'content',
  title: 'Executive Summary',
  subtitle: 'Institutional-grade digital asset platform with immediate market access',
  content: (
    <div className="space-y-8">
      {/* Slide content JSX */}
    </div>
  )
};
```

### Adding New Slides

**Step-by-Step Process:**

1. **Create New Slide File**
   ```bash
   # Create file in /src/slides/ directory
   touch /root/mira-labs-pitch/src/slides/Slide11NewSlide.tsx
   ```

2. **Define Slide Component**
   ```typescript
   // Slide11NewSlide.tsx
   export const Slide11NewSlide = {
     type: 'content',
     title: 'Your Slide Title',
     subtitle: 'Optional subtitle for context',
     content: (
       <div className="space-y-8">
         <h2 className="text-xl font-semibold">Section Heading</h2>
         <p className="text-sm text-slate-700">
           Your content here...
         </p>
       </div>
     )
   };
   ```

3. **Export from Index**
   ```typescript
   // /src/slides/index.ts
   export { Slide01Title } from './Slide01Title';
   // ... existing exports
   export { Slide11NewSlide } from './Slide11NewSlide';  // Add this line
   ```

4. **Import in App.tsx**
   ```typescript
   // App.tsx
   import {
     Slide01Title,
     // ... existing imports
     Slide11NewSlide  // Add this
   } from './slides';
   ```

5. **Add to Slides Array**
   ```typescript
   // App.tsx - in MiraLabsPitch component
   const slides = [
     Slide01Title,
     // ... existing slides
     Slide11NewSlide  // Add to array
   ];
   ```

6. **Test Navigation**
   - Start dev server: `npm run dev`
   - Navigate to new slide
   - Verify content renders correctly

### Slide Types

#### **Title Slides**
```typescript
{
  type: 'title',
  content: <JSX>
}
```
- **Layout:** Full-screen, no chrome
- **Use Cases:**
  - Cover/title page
  - Section dividers
  - Closing/thank you slides
- **Characteristics:**
  - No header or footer
  - No zoom restrictions
  - Custom background and layout

#### **Content Slides**
```typescript
{
  type: 'content',
  title: 'Slide Title',
  subtitle: 'Optional context',
  content: <JSX>
}
```
- **Layout:** Header + content + footer
- **Use Cases:**
  - Information slides
  - Data presentations
  - Lists and details
- **Characteristics:**
  - Consistent header with title/subtitle
  - Scrollable content area
  - Footer with branding
  - "CONFIDENTIAL" marking
  - Slide number display

### Props and Properties

**Slide Object Properties:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `type` | `'title' \| 'content'` | Yes | Determines slide layout |
| `title` | `string` | No* | Header title (*required for content slides) |
| `subtitle` | `string` | No | Header subtitle (optional for content slides) |
| `content` | `JSX.Element` | Yes | React component to render |

**Layout Behavior Based on Type:**

**Title Slide:**
- Renders `content` directly in full container
- No header/footer elements
- Full creative control over layout

**Content Slide:**
- Renders header with `title` and `subtitle`
- Renders `content` in scrollable middle section
- Renders footer with branding
- Adds confidential markings and slide number

**Content Area Styling:**
- Content slides get padding and scrolling: `pt-20 sm:pt-22 md:pt-24 pb-12 sm:pb-14 px-4 sm:px-5 md:px-6 lg:px-8 h-full overflow-y-auto`
- Title slides get full height: `h-full`

---

## 6. FEATURES

### Navigation System

**Control Methods:**

1. **Next/Previous Buttons**
   - Located in bottom navigation bar
   - Left: Previous button (disabled on first slide)
   - Right: Next button (disabled on last slide)
   - Icons from Lucide React (`ChevronLeft`, `ChevronRight`)
   - Hover effects (text-white hover:text-blue-400)

2. **Progress Indicators**
   - Row of dots in center of navigation bar
   - Current slide highlighted (blue, wider)
   - Clickable to jump to any slide
   - Visual representation of position in deck

3. **Slide Counter**
   - Displays "X / Y" format (e.g., "3 / 10")
   - Shows current position and total slides
   - Located in bottom-right of navigation bar

**Implementation:**
```typescript
// State
const [currentSlide, setCurrentSlide] = useState(0);

// Navigation functions
const nextSlide = () => {
  if (currentSlide < slides.length - 1) {
    setCurrentSlide(currentSlide + 1);
  }
};

const prevSlide = () => {
  if (currentSlide > 0) {
    setCurrentSlide(currentSlide - 1);
  }
};

const goToSlide = (index: number) => {
  setCurrentSlide(index);
};
```

### Zoom Controls

**Zoom Range:** 50% to 150%

**Controls:**
- **Zoom Out Button:** `-` icon, decreases by 5%
- **Zoom Display:** Shows current percentage (e.g., "100%")
- **Zoom In Button:** `+` icon, increases by 5%

**Implementation:**
```typescript
// State
const [zoom, setZoom] = useState(1);  // 1 = 100%

// Zoom functions
const zoomOut = () => setZoom(Math.max(0.5, zoom - 0.05));
const zoomIn = () => setZoom(Math.min(1.5, zoom + 0.05));

// Applied to content
<div style={{ transform: `scale(${zoom})`, transformOrigin: 'top center' }}>
  {slides[currentSlide].content}
</div>
```

**Behavior:**
- Scales entire slide content
- Origin point: top center (scales downward)
- Smooth CSS transform transitions
- Bounds: 50% minimum, 150% maximum

### Keyboard Shortcuts

Currently not implemented, but recommended additions:

| Key | Action |
|-----|--------|
| `ArrowRight` / `Space` | Next slide |
| `ArrowLeft` | Previous slide |
| `Home` | First slide |
| `End` | Last slide |
| `1-9, 0` | Jump to slide |
| `+` / `=` | Zoom in |
| `-` | Zoom out |
| `0` (zero) | Reset zoom to 100% |

**Implementation Template:**
```typescript
useEffect(() => {
  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'Home') goToSlide(0);
    if (e.key === 'End') goToSlide(slides.length - 1);
    // ... more shortcuts
  };

  window.addEventListener('keydown', handleKeyPress);
  return () => window.removeEventListener('keydown', handleKeyPress);
}, [currentSlide]);
```

### Responsive Design

**Breakpoints:**
- **Mobile:** < 640px (sm)
- **Tablet:** 640px - 1024px (md)
- **Desktop:** 1024px+ (lg)
- **Large Desktop:** 1280px+ (xl)

**Responsive Features:**

1. **Typography Scaling**
   - Base: 14px
   - 1280px+: 15px
   - 1920px+: 16px

2. **Button Sizing**
   - Mobile: Smaller padding, hidden text labels
   - Desktop: Full labels with text

3. **Grid Adjustments**
   - 4-column grids → 2 columns on mobile
   - 3-column grids → 1 column on mobile
   - 2-column grids → 1 column on mobile

4. **Icon Sizing**
   - Mobile: 16px icons
   - Desktop: 18px icons

5. **Header Layout**
   - Mobile: Stacked vertically
   - Desktop: Horizontal layout

6. **Navigation Bar**
   - Mobile: Compact spacing, smaller buttons
   - Desktop: Full spacing and labels

**Tailwind Responsive Classes:**
```jsx
<div className="text-sm sm:text-base md:text-lg lg:text-xl">
  {/* Scales up at each breakpoint */}
</div>

<div className="px-4 sm:px-6 md:px-8 lg:px-12">
  {/* Padding increases with screen size */}
</div>
```

### Print/Export Capabilities

**Print Styles** (`@media print` in index.css)

1. **Page Setup**
   ```css
   @page {
     size: landscape;
     margin: 0;
   }
   ```
   - Landscape orientation for slides
   - No margins for full-page slides

2. **Font Scaling**
   ```css
   body {
     font-size: 10px;
   }
   ```
   - Smaller base font for print density

3. **Hidden Elements**
   ```css
   button {
     display: none !important;
   }
   ```
   - Removes all navigation controls

4. **Overflow Handling**
   ```css
   .overflow-y-auto {
     overflow: visible !important;
     height: auto !important;
   }
   ```
   - Ensures all content prints (no scrolling)

5. **Content Scaling**
   ```css
   .flex-1 > div {
     transform: scale(0.85);
     transform-origin: top center;
   }
   ```
   - Scales content to fit page

**Export Workflow:**

1. **Browser Print Dialog**
   - Press `Ctrl+P` (Windows) or `Cmd+P` (Mac)
   - Or: File → Print

2. **Print Settings**
   - Destination: Save as PDF
   - Layout: Landscape
   - Margins: None
   - Background graphics: Enabled

3. **Export Each Slide**
   - Navigate to desired slide
   - Print to PDF
   - Repeat for all slides

4. **Alternative: PDF Merge**
   - Export all slides individually
   - Use PDF merge tool to combine
   - Tools: Adobe Acrobat, PDFtk, online mergers

---

## 7. CUSTOMIZATION GUIDE

### Updating Content in Slides

**Text Content:**

1. Locate the slide file in `/src/slides/`
2. Find the text to update (inside JSX)
3. Modify the string or content
4. Save the file (HMR will auto-reload)

**Example:**
```typescript
// Before
<div className="text-3xl font-light">$60M</div>

// After
<div className="text-3xl font-light">$80M</div>
```

**Data in Tables:**

Find the table structure and update cell values:
```typescript
<table className="w-full text-xs">
  <tbody>
    <tr>
      <td>Year 1</td>
      <td>$1.5M</td>  {/* Update this value */}
    </tr>
  </tbody>
</table>
```

**Lists and Bullet Points:**

Modify array items or JSX list elements:
```typescript
<div className="space-y-4">
  <div>First point</div>     {/* Modify or add items */}
  <div>Second point</div>
  <div>Third point</div>
</div>
```

### Modifying Styles and Colors

**Color Palette:**

Tailwind uses a color system. Key colors in the deck:

| Color | Class | Usage |
|-------|-------|-------|
| Slate 900 | `bg-slate-900`, `text-slate-900` | Headers, dark backgrounds |
| Slate 700 | `text-slate-700` | Body text |
| Slate 400 | `text-slate-400` | Metadata, muted text |
| Blue 500 | `bg-blue-500`, `text-blue-500` | Accent, active states |
| Green 600 | `text-green-600` | Success, positive metrics |
| Red 600 | `text-red-600` | Warnings, negative metrics |

**Changing Colors:**

```typescript
// Change from blue accent to purple
// Before:
<div className="border-l-4 border-blue-500">

// After:
<div className="border-l-4 border-purple-500">
```

**Background Colors:**

```typescript
// Change slide background
// Before:
<div className="bg-slate-900">

// After:
<div className="bg-gradient-to-br from-slate-900 to-slate-800">
```

**Adding Custom Colors:**

Update `tailwind.config.js`:
```javascript
export default {
  theme: {
    extend: {
      colors: {
        'brand': {
          primary: '#1E3A8A',
          secondary: '#3B82F6',
          accent: '#60A5FA',
        }
      }
    },
  },
}
```

Then use: `bg-brand-primary`, `text-brand-accent`, etc.

### Adding New Sections

**Adding a Section to Existing Slide:**

1. Open the slide file (e.g., `Slide02ExecutiveSummary.tsx`)
2. Locate the main content div
3. Add a new section block

```typescript
content: (
  <div className="space-y-8">
    {/* Existing sections */}

    {/* New section */}
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900 mb-4 pb-2 border-b border-slate-300">
        New Section Title
      </h3>
      <div className="space-y-4 text-sm text-slate-700">
        <p>Section content here...</p>
      </div>
    </div>
  </div>
)
```

**Common Section Patterns:**

**Metric Cards:**
```typescript
<div className="grid grid-cols-4 gap-6">
  <div className="text-center p-6 bg-slate-50 border-l-2 border-blue-600">
    <div className="text-3xl font-light text-slate-900 mb-2">$60M</div>
    <div className="text-xs uppercase tracking-wide text-slate-600">Label</div>
  </div>
</div>
```

**Two-Column Layout:**
```typescript
<div className="grid grid-cols-2 gap-8">
  <div>Left column content</div>
  <div>Right column content</div>
</div>
```

**Checkmark List:**
```typescript
import { CheckCircle } from 'lucide-react';

<div className="space-y-4">
  <div className="flex gap-3">
    <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
    <div>List item text</div>
  </div>
</div>
```

### Changing Fonts and Typography

**System Font Stack:**

Current font (in `index.css`):
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
```

**Using Custom Fonts:**

1. **Google Fonts (Recommended):**

Add to `index.html` in `<head>`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
```

Update `index.css`:
```css
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

2. **Local Fonts:**

Add font files to `/public/fonts/`:
```
/public/fonts/
├── CustomFont-Regular.woff2
├── CustomFont-Bold.woff2
└── CustomFont-Light.woff2
```

Add `@font-face` to `index.css`:
```css
@font-face {
  font-family: 'CustomFont';
  src: url('/fonts/CustomFont-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

body {
  font-family: 'CustomFont', sans-serif;
}
```

**Typography Utilities:**

Extend Tailwind config for custom typography:
```javascript
// tailwind.config.js
export default {
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Inter', 'sans-serif'],
        'body': ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        'xxs': '0.65rem',
        '3xl': '1.75rem',
      }
    },
  },
}
```

Use: `font-heading`, `font-body`, `text-xxs`

---

## 8. DEPENDENCIES

### Production Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| **lucide-react** | ^0.545.0 | Icon library providing ChevronLeft, ChevronRight, ZoomIn, ZoomOut, CheckCircle icons |
| **react** | ^19.1.1 | Core React library for building UI components |
| **react-dom** | ^19.1.1 | React DOM bindings for web applications |

### Development Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| **@eslint/js** | ^9.36.0 | ESLint JavaScript configurations |
| **@types/node** | ^24.6.0 | TypeScript type definitions for Node.js APIs |
| **@types/react** | ^19.1.16 | TypeScript type definitions for React |
| **@types/react-dom** | ^19.1.9 | TypeScript type definitions for React DOM |
| **@vitejs/plugin-react** | ^5.0.4 | Vite plugin for React Fast Refresh and JSX support |
| **autoprefixer** | ^10.4.21 | PostCSS plugin for automatic vendor prefixing |
| **eslint** | ^9.36.0 | JavaScript/TypeScript linting tool |
| **eslint-plugin-react-hooks** | ^5.2.0 | ESLint rules for React Hooks |
| **eslint-plugin-react-refresh** | ^0.4.22 | ESLint rules for React Fast Refresh |
| **globals** | ^16.4.0 | Global variable definitions for ESLint |
| **postcss** | ^8.5.6 | CSS transformation tool (required by Tailwind) |
| **tailwindcss** | ^3.4.18 | Utility-first CSS framework |
| **typescript** | ~5.9.3 | TypeScript compiler and language |
| **typescript-eslint** | ^8.45.0 | TypeScript support for ESLint |
| **vite** | ^7.1.7 | Build tool and dev server |

### Version Requirements

**Node.js:** v22.14.0 or higher
- Required for Vite 7.x support
- LTS versions recommended for stability

**npm:** v10.9.2 or higher
- Comes with Node.js
- Manages package installation

**Browser Compatibility:**
- Chrome/Edge 90+
- Firefox 90+
- Safari 15+
- Modern ES2022 features required

### Dependency Purposes

**lucide-react:**
- SVG icon library with React components
- Tree-shakable (only imports used icons)
- Used for navigation controls and UI elements
- Alternative to: FontAwesome, Material Icons

**React 19:**
- Latest stable React version
- Improved performance and features
- Concurrent rendering capabilities
- Enhanced TypeScript support

**Vite:**
- Lightning-fast dev server with HMR
- Optimized production builds with Rollup
- Native ES modules support
- Plugin ecosystem for React/TypeScript

**Tailwind CSS:**
- Utility-first CSS framework
- Eliminates need for custom CSS files
- Built-in responsive design system
- Production optimization (purges unused CSS)

**TypeScript:**
- Static type checking
- Enhanced IDE autocomplete
- Catch errors at compile time
- Better documentation through types

**ESLint:**
- Code quality and consistency
- React-specific rules (hooks, refresh)
- TypeScript integration
- Catch common mistakes

---

## 9. DEPLOYMENT

### How to Build for Production

**Build Command:**
```bash
npm run build
```

**Build Process:**
1. TypeScript compilation check (`tsc -b`)
2. Vite bundles all code and assets
3. CSS purging (removes unused Tailwind classes)
4. Code minification and optimization
5. Asset hashing for cache busting
6. Output to `/dist` directory

**Build Output Structure:**
```
dist/
├── assets/
│   ├── index-[hash].js       # Main JavaScript bundle
│   ├── index-[hash].css      # Compiled and minified CSS
│   └── [other assets]        # Images, fonts, etc.
├── index.html                # Entry HTML file
└── vite.svg                  # Favicon
```

**Build Artifacts:**
- **JavaScript:** Minified, code-split bundles
- **CSS:** Single optimized stylesheet with unused classes removed
- **HTML:** Production HTML with inlined assets
- **Source Maps:** Optional (configure in vite.config.ts)

**Build Verification:**
```bash
# Preview production build locally
npm run preview

# Check build size
du -sh dist/
ls -lh dist/assets/
```

### Hosting Options

#### **1. Static Hosting (Recommended)**

**Vercel** (Easiest)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```
- **Pros:** Zero config, automatic HTTPS, global CDN, preview deployments
- **Cons:** Requires Vercel account

**Netlify**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```
- **Pros:** Simple, free tier, form handling, redirects
- **Configuration:** Add `netlify.toml`
  ```toml
  [build]
    command = "npm run build"
    publish = "dist"
  ```

**GitHub Pages**
```bash
# Install gh-pages
npm install -D gh-pages

# Add to package.json scripts
"deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```
- **Pros:** Free, GitHub integration
- **Cons:** Requires base path configuration in vite.config.ts
  ```typescript
  export default defineConfig({
    base: '/mira-labs-pitch/',
    plugins: [react()],
  })
  ```

**AWS S3 + CloudFront**
```bash
# Build
npm run build

# Sync to S3 bucket
aws s3 sync dist/ s3://your-bucket-name/

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```
- **Pros:** Scalable, custom domain, full control
- **Cons:** More setup, AWS costs

#### **2. Traditional Web Hosting**

Upload `/dist` folder contents to web root:
- cPanel file manager
- FTP/SFTP (FileZilla, Cyberduck)
- SSH/SCP

Ensure server configured for SPA (Single Page Application):
- All routes should serve `index.html`
- MIME types configured for `.js`, `.css`, `.svg`

#### **3. Docker Container**

```dockerfile
# Dockerfile
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Build and run:
```bash
docker build -t mira-labs-pitch .
docker run -p 8080:80 mira-labs-pitch
```

### PDF Export Workflow

#### **Method 1: Browser Print to PDF (Recommended)**

**Steps:**
1. Open application in browser
2. Navigate to first slide
3. Open print dialog (`Ctrl+P` / `Cmd+P`)
4. Configure settings:
   - Destination: Save as PDF
   - Layout: Landscape
   - Margins: None
   - Background graphics: On
5. Save as `Slide01.pdf`
6. Repeat for each slide
7. Merge PDFs using tool (Adobe Acrobat, PDFtk, online merger)

**Automation Script (Optional):**
```javascript
// Use Puppeteer to automate PDF generation
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:5173');

  for (let i = 0; i < 10; i++) {
    await page.pdf({
      path: `slide-${i+1}.pdf`,
      format: 'A4',
      landscape: true,
      printBackground: true
    });
    // Click next button
    await page.click('button[aria-label="Next"]');
  }

  await browser.close();
})();
```

#### **Method 2: Screenshot Tools**

**Browser Extensions:**
- **GoFullPage:** Full-page screenshots
- **Awesome Screenshot:** Capture and edit

**CLI Tools:**
- **Pageres:** `npm install -g pageres-cli`
  ```bash
  pageres http://localhost:5173 1920x1080 --filename='slide'
  ```

#### **Method 3: Presentation Mode + Screen Recording**

1. Open in full-screen browser mode (F11)
2. Use OBS Studio or QuickTime to record screen
3. Convert video to PDF slides (if needed)

#### **PDF Merge Tools**

**Online:**
- Smallpdf.com
- ilovepdf.com
- Adobe Acrobat Online

**Offline:**
- Adobe Acrobat Pro
- PDFtk: `pdftk slide*.pdf cat output deck.pdf`
- macOS Preview: Open all PDFs, select thumbnails, export

---

## 10. TROUBLESHOOTING

### Common Issues and Solutions

#### **Issue: Port 5173 Already in Use**

**Symptom:**
```
Error: Port 5173 is already in use
```

**Solutions:**
1. Kill process using port:
   ```bash
   # Linux/Mac
   lsof -ti:5173 | xargs kill -9

   # Windows
   netstat -ano | findstr :5173
   taskkill /PID <PID> /F
   ```

2. Use different port:
   ```bash
   npm run dev -- --port 3000
   ```

3. Configure in `vite.config.ts`:
   ```typescript
   export default defineConfig({
     server: { port: 3000 },
     plugins: [react()],
   })
   ```

#### **Issue: "Cannot find module" Errors**

**Symptom:**
```
Error: Cannot find module 'lucide-react'
```

**Solutions:**
1. Install dependencies:
   ```bash
   npm install
   ```

2. Clear node_modules and reinstall:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. Check package.json for missing dependencies

#### **Issue: White Screen / Blank Page**

**Symptoms:**
- Browser shows blank white page
- No console errors or warnings

**Solutions:**
1. Check browser console (F12) for errors
2. Verify `#root` div in index.html
3. Check main.tsx imports:
   ```typescript
   import './index.css'  // Must be imported
   ```
4. Clear browser cache (Ctrl+Shift+Delete)
5. Try incognito/private window

#### **Issue: Styles Not Loading**

**Symptoms:**
- Content appears but unstyled
- No background colors or fonts

**Solutions:**
1. Verify Tailwind imports in index.css:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

2. Check PostCSS config exists:
   ```bash
   cat postcss.config.js
   ```

3. Clear Vite cache:
   ```bash
   rm -rf node_modules/.vite
   npm run dev
   ```

4. Rebuild CSS:
   ```bash
   npm run build
   ```

#### **Issue: Hot Module Replacement Not Working**

**Symptoms:**
- Changes don't reflect automatically
- Manual refresh required

**Solutions:**
1. Restart dev server (Ctrl+C, `npm run dev`)
2. Check Vite HMR connection in browser console
3. Disable browser extensions (ad blockers)
4. Check firewall/antivirus settings
5. Use `localhost` instead of `127.0.0.1`

### TypeScript Errors

#### **Error: Type 'X' is not assignable to type 'Y'**

**Solution:**
1. Check type definitions
2. Add proper type annotations:
   ```typescript
   const slides: Slide[] = [...]
   ```
3. Use type assertion if necessary:
   ```typescript
   const value = data as SpecificType
   ```

#### **Error: Property 'X' does not exist on type 'Y'**

**Solution:**
1. Verify property exists in type definition
2. Add optional chaining:
   ```typescript
   object?.property
   ```
3. Extend type if needed:
   ```typescript
   interface ExtendedType extends BaseType {
     newProperty: string;
   }
   ```

#### **Error: Cannot find name 'X'**

**Solution:**
1. Add import statement
2. Install type definitions:
   ```bash
   npm install -D @types/package-name
   ```

### Build Problems

#### **Build Fails with TypeScript Errors**

**Solutions:**
1. Fix type errors shown in output
2. Temporarily skip type checking:
   ```bash
   # Edit package.json scripts
   "build": "vite build"  # Remove tsc -b
   ```
3. Check tsconfig.json settings

#### **Build Output Too Large**

**Solutions:**
1. Check bundle analyzer:
   ```bash
   npm install -D rollup-plugin-visualizer
   ```

   Update vite.config.ts:
   ```typescript
   import { visualizer } from 'rollup-plugin-visualizer'

   export default defineConfig({
     plugins: [react(), visualizer()],
   })
   ```

2. Enable compression in hosting
3. Code-split large components
4. Lazy load components:
   ```typescript
   const HeavyComponent = lazy(() => import('./HeavyComponent'))
   ```

#### **Build Succeeds but App Doesn't Work in Production**

**Solutions:**
1. Test with preview server:
   ```bash
   npm run preview
   ```
2. Check browser console for errors
3. Verify base path if deployed to subdirectory
4. Check CORS/CSP headers
5. Enable source maps for debugging:
   ```typescript
   // vite.config.ts
   export default defineConfig({
     build: { sourcemap: true },
     plugins: [react()],
   })
   ```

#### **Out of Memory During Build**

**Solution:**
Increase Node.js memory:
```bash
# Increase to 4GB
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

---

## 11. DEVELOPMENT WORKFLOW

### How to Add Content

**Step-by-Step Content Update Process:**

1. **Identify Target Slide**
   - Determine which slide needs content update
   - Locate corresponding file in `/src/slides/`

2. **Start Dev Server**
   ```bash
   npm run dev
   ```
   - Enables hot module replacement
   - See changes instantly

3. **Edit Content**
   - Open slide file in editor
   - Modify JSX content within `content` property
   - Save file

4. **Preview Changes**
   - Browser auto-refreshes with HMR
   - Navigate to modified slide
   - Verify appearance

5. **Repeat as Needed**
   - Make additional edits
   - Check responsive behavior (resize browser)
   - Test on mobile devices

**Content Update Examples:**

**Update Text:**
```typescript
// Before
<div className="text-3xl">$60M</div>

// After
<div className="text-3xl">$75M</div>
```

**Add List Item:**
```typescript
// Before
<div className="space-y-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

// After
<div className="space-y-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>  {/* New item */}
</div>
```

**Update Table Data:**
```typescript
<tbody>
  <tr>
    <td>Year 1</td>
    <td>$1.5M</td>  {/* Update value */}
  </tr>
</tbody>
```

### How to Test Changes

**Testing Checklist:**

1. **Visual Testing**
   - [ ] Content renders correctly
   - [ ] No text overflow or truncation
   - [ ] Images load properly
   - [ ] Colors and styling correct

2. **Responsive Testing**
   - [ ] Mobile view (< 640px)
   - [ ] Tablet view (640-1024px)
   - [ ] Desktop view (> 1024px)
   - [ ] Use browser DevTools device emulation

3. **Navigation Testing**
   - [ ] Next/previous buttons work
   - [ ] Progress indicators clickable
   - [ ] Correct slide counter display
   - [ ] No errors in console

4. **Zoom Testing**
   - [ ] Zoom in/out functions
   - [ ] Content scales correctly
   - [ ] Bounds respected (50-150%)

5. **Cross-Browser Testing**
   - [ ] Chrome/Edge
   - [ ] Firefox
   - [ ] Safari (if available)

6. **Print Preview Testing**
   - [ ] Ctrl+P to open print dialog
   - [ ] Check landscape orientation
   - [ ] Verify content fits page
   - [ ] Background graphics visible

**Testing Tools:**

Browser DevTools:
```
F12 - Open DevTools
Ctrl+Shift+M - Toggle device toolbar
Ctrl+Shift+C - Element inspector
```

Responsive Testing:
- Chrome DevTools device emulation
- Firefox Responsive Design Mode
- Physical devices (phones, tablets)

Console Monitoring:
- Watch for errors (red)
- Check warnings (yellow)
- Verify no 404s for assets

### Best Practices

**Code Organization:**

1. **Keep Slides Self-Contained**
   - Each slide file exports one object
   - All content within `content` property
   - Import icons/utilities at top

2. **Consistent Styling**
   - Use existing Tailwind classes
   - Follow established patterns (headings, sections)
   - Maintain spacing consistency (`space-y-8`, `gap-6`)

3. **Readable JSX**
   - Proper indentation (2 spaces)
   - Break long lines
   - Add comments for complex sections
   ```typescript
   {/* Financial Metrics Section */}
   <div className="grid grid-cols-4 gap-6">
     {/* ... */}
   </div>
   ```

**Performance:**

1. **Optimize Images**
   - Use WebP format when possible
   - Compress images before adding
   - Use appropriate dimensions

2. **Lazy Load Heavy Components**
   ```typescript
   const HeavyChart = lazy(() => import('./HeavyChart'))
   ```

3. **Minimize Bundle Size**
   - Only import used Lucide icons
   - Avoid large dependencies
   - Use code splitting for large features

**Version Control:**

1. **Meaningful Commit Messages**
   ```bash
   git commit -m "Update financial projections in Slide06"
   git commit -m "Add new team member to Slide04"
   ```

2. **Small, Focused Commits**
   - One logical change per commit
   - Easier to review and revert

3. **Branch for Features**
   ```bash
   git checkout -b update-financials
   # Make changes
   git commit -m "Update Slide06 financial model"
   git checkout main
   git merge update-financials
   ```

**Documentation:**

1. **Comment Complex Logic**
   ```typescript
   // Calculate revenue based on AUM tiers
   const revenue = aum * (aum > 100M ? 0.012 : 0.015)
   ```

2. **Update This Documentation**
   - Keep PROJECT_DOCUMENTATION.md current
   - Document new features or patterns
   - Update examples when architecture changes

**Code Quality:**

1. **Run Linter**
   ```bash
   npm run lint
   ```
   - Fix errors and warnings
   - Maintain code consistency

2. **Type Safety**
   - Add TypeScript types for new code
   - Avoid `any` types
   - Use interfaces for complex objects

3. **Test Before Committing**
   - Build succeeds: `npm run build`
   - No TypeScript errors
   - No console errors in browser

---

## 12. PERFORMANCE OPTIMIZATION

### Current Optimizations

**Build-Time Optimizations:**

1. **CSS Purging (Tailwind)**
   - Removes unused CSS classes
   - Analyzes all JSX/TSX files
   - Typically reduces CSS by 95%+
   - Configured in `tailwind.config.js` content paths

2. **Code Minification**
   - JavaScript minified with Terser (via Vite/Rollup)
   - CSS minified with cssnano
   - Removes whitespace, comments, dead code
   - Typical 30-40% size reduction

3. **Tree Shaking**
   - Eliminates unused imports
   - Only bundles imported Lucide icons
   - ES modules enable effective tree shaking

4. **Asset Hashing**
   - Filenames include content hash
   - Enables aggressive caching
   - Example: `index-a7b3c9d2.js`

**Runtime Optimizations:**

1. **React 19 Performance**
   - Automatic batching of state updates
   - Concurrent rendering
   - Improved reconciliation algorithm

2. **CSS Transform Zoom**
   - Uses GPU-accelerated transforms
   - Better than scaling with width/height
   - Smooth 60fps animations

3. **Conditional Rendering**
   ```typescript
   {slides[currentSlide].type === 'content' && (
     <Header />  // Only renders when needed
   )}
   ```

4. **Responsive Images**
   - Not currently implemented
   - Opportunity for improvement (see below)

**Development Optimizations:**

1. **Vite Fast Refresh**
   - Sub-second HMR updates
   - Preserves component state
   - Native ES modules (no bundling in dev)

2. **TypeScript Performance**
   - `skipLibCheck: true` in tsconfig
   - Faster type checking
   - Build info file caching

### Areas for Improvement

**1. Code Splitting**

Currently all slides load upfront. Implement lazy loading:

```typescript
// App.tsx
import { lazy, Suspense } from 'react';

const Slide01Title = lazy(() => import('./slides/Slide01Title'));
const Slide02ExecutiveSummary = lazy(() => import('./slides/Slide02ExecutiveSummary'));
// ... other slides

const slides = [
  Slide01Title,
  Slide02ExecutiveSummary,
  // ...
];

// In render
<Suspense fallback={<div>Loading...</div>}>
  {slides[currentSlide].content}
</Suspense>
```

**Impact:** Reduce initial bundle by ~40%, faster first load

**2. Image Optimization**

If images are added:
- Use WebP format with JPEG fallback
- Implement responsive images with `srcset`
- Lazy load off-screen images
- Compress images (TinyPNG, Squoosh)

```typescript
<img
  src="/images/chart.webp"
  srcSet="/images/chart-sm.webp 640w, /images/chart-md.webp 1024w"
  alt="Chart"
  loading="lazy"
/>
```

**3. Font Loading Optimization**

If custom fonts added:
- Use `font-display: swap` in @font-face
- Preload critical fonts
- Subset fonts to used characters

```html
<link rel="preload" href="/fonts/CustomFont.woff2" as="font" type="font/woff2" crossorigin>
```

**4. Preloading/Prefetching**

Prefetch next slide:
```typescript
useEffect(() => {
  if (currentSlide < slides.length - 1) {
    // Prefetch next slide component
    const nextSlide = slides[currentSlide + 1];
    // Implementation depends on lazy loading setup
  }
}, [currentSlide]);
```

**5. Virtual Scrolling**

For very long slide lists (100+), implement virtual scrolling:
- Only render visible slides
- Libraries: react-window, react-virtualized

**6. Service Worker / PWA**

Cache assets for offline access:
- Add service worker with Workbox
- Cache slide content
- Enable offline viewing

### Bundle Size Considerations

**Current Bundle Size (Approximate):**
- Main JS bundle: ~150-200 KB (minified)
- CSS bundle: ~10-15 KB (after purge)
- Total (gzipped): ~60-80 KB

**Strategies to Reduce Bundle:**

1. **Analyze Bundle Composition**
   ```bash
   npm install -D rollup-plugin-visualizer
   ```

   Add to vite.config.ts:
   ```typescript
   import { visualizer } from 'rollup-plugin-visualizer'

   export default defineConfig({
     plugins: [
       react(),
       visualizer({ open: true })
     ],
   })
   ```

   Run build: `npm run build`
   Opens interactive treemap

2. **Replace Large Dependencies**
   - lucide-react is lightweight (good choice)
   - Avoid: moment.js (use date-fns or native Intl)
   - Avoid: lodash (use native methods or lodash-es)

3. **Dynamic Imports**
   ```typescript
   // Instead of
   import { HeavyLibrary } from 'heavy-library'

   // Use
   const lib = await import('heavy-library')
   ```

4. **CDN for Large Libraries**
   For third-party libraries, consider CDN:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/library@version"></script>
   ```

**Bundle Size Targets:**

| Size Category | Size | Load Time (3G) |
|---------------|------|----------------|
| Excellent | < 100 KB | < 1s |
| Good | 100-200 KB | 1-2s |
| Acceptable | 200-500 KB | 2-5s |
| Poor | > 500 KB | > 5s |

Current project is in **Good** range.

---

## 13. FUTURE ENHANCEMENTS

### Planned Features

**1. Keyboard Navigation**
- Arrow keys for next/previous
- Number keys for direct slide access
- Home/End for first/last slide
- Escape to reset zoom
- **Priority:** High
- **Effort:** Low (1-2 hours)

**2. Slide Transitions**
- Fade transitions between slides
- Configurable animation duration
- Smooth zoom animations
- **Priority:** Medium
- **Effort:** Medium (4-6 hours)

```typescript
// Implementation approach
<AnimatePresence mode="wait">
  <motion.div
    key={currentSlide}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    {slides[currentSlide].content}
  </motion.div>
</AnimatePresence>
```

**3. Presentation Mode**
- Full-screen API integration
- Hide navigation controls option
- Speaker notes panel
- Timer/clock display
- **Priority:** High
- **Effort:** High (8-12 hours)

**4. PDF Export (Single-File)**
- Generate complete PDF from browser
- Automated slide capture
- Single-click export
- **Priority:** High
- **Effort:** High (12-16 hours)
- **Library:** Puppeteer or html2pdf.js

**5. Theme Customization**
- Light/dark mode toggle
- Custom color schemes
- Brand color configuration
- **Priority:** Medium
- **Effort:** Medium (6-8 hours)

### Nice-to-Have Improvements

**1. Slide Notes**
- Speaker notes for each slide
- Toggle visibility
- Print with or without notes
- **Use Case:** Presenter reference
- **Effort:** Low-Medium (3-4 hours)

**2. Progress Save State**
- Remember last viewed slide
- Auto-resume on reload
- Local storage persistence
- **Use Case:** Long presentations
- **Effort:** Low (1-2 hours)

```typescript
// Implementation
useEffect(() => {
  localStorage.setItem('currentSlide', currentSlide.toString())
}, [currentSlide])

// On load
const [currentSlide, setCurrentSlide] = useState(
  Number(localStorage.getItem('currentSlide')) || 0
)
```

**3. Slide Animations**
- Entrance animations for content
- Bullet point reveals
- Chart animations
- **Use Case:** Engaging presentations
- **Effort:** High (varies by complexity)
- **Library:** Framer Motion, React Spring

**4. Multi-Language Support**
- i18n integration
- Language switcher
- Translated content
- **Use Case:** International investors
- **Effort:** High (20+ hours)
- **Library:** react-i18next

**5. Analytics Integration**
- Track slide views
- Time spent per slide
- Navigation patterns
- **Use Case:** Understand engagement
- **Effort:** Low-Medium (3-5 hours)
- **Service:** Google Analytics, Mixpanel

**6. QR Code Sharing**
- Generate QR code for deck URL
- Easy mobile sharing
- **Use Case:** In-person presentations
- **Effort:** Low (1-2 hours)
- **Library:** qrcode.react

**7. Thumbnail Navigation**
- Grid view of all slides
- Click thumbnail to navigate
- Visual slide overview
- **Use Case:** Quick navigation
- **Effort:** Medium (6-8 hours)

**8. Search Functionality**
- Search across all slide content
- Jump to search results
- Highlight matches
- **Use Case:** Finding specific information
- **Effort:** Medium (5-7 hours)
- **Library:** Fuse.js for fuzzy search

**9. Responsive Tables**
- Better mobile table handling
- Horizontal scroll for wide tables
- Stack columns on mobile
- **Use Case:** Improved mobile experience
- **Effort:** Medium (4-6 hours)

**10. Commenting System**
- Add comments to specific slides
- Collaborative review
- Feedback collection
- **Use Case:** Team collaboration
- **Effort:** High (20+ hours)
- **Backend:** Firebase, Supabase

### Integration Possibilities

**1. CRM Integration**
- Track which investors viewed deck
- Sync with Salesforce, HubSpot
- Automatic follow-up triggers
- **Use Case:** Sales pipeline management

**2. Video Conferencing**
- Screen share optimization
- Remote presentation controls
- Live slide sync for attendees
- **Platforms:** Zoom, Teams, Meet

**3. CMS Integration**
- Manage slide content via CMS
- Non-technical content updates
- Version control
- **CMS Options:** Contentful, Sanity, Strapi

**4. E-Signature Integration**
- Sign investment documents
- Embedded term sheet signing
- **Platforms:** DocuSign, HelloSign

**5. Data Room Integration**
- Link to due diligence documents
- Secure document access
- **Platforms:** Intralinks, DealRoom

**6. Calendar Integration**
- Schedule follow-up meetings
- Book demo calls
- **Platforms:** Calendly, Google Calendar API

**7. Authentication System**
- Password-protected deck
- Track individual viewers
- Expiring access links
- **Solutions:** Auth0, Firebase Auth, NextAuth

**8. Version Control**
- Track deck versions
- Compare changes
- Revert to previous versions
- **Implementation:** Git-based workflow, CMS

**9. Slide Deck Builder**
- Drag-and-drop slide editor
- Template library
- WYSIWYG editing
- **Use Case:** Non-developers creating decks

**10. API for Content Management**
- RESTful API for slide content
- Programmatic updates
- Integration with other systems
- **Implementation:** Express/Fastify backend

---

## APPENDIX

### Quick Reference Commands

```bash
# Installation
npm install

# Development
npm run dev                 # Start dev server
npm run build               # Production build
npm run preview             # Preview production build
npm run lint                # Run ESLint

# Package Management
npm install <package>       # Add new dependency
npm install -D <package>    # Add dev dependency
npm update                  # Update dependencies
npm outdated                # Check outdated packages

# Git
git status                  # Check status
git add .                   # Stage all changes
git commit -m "message"     # Commit changes
git push                    # Push to remote

# Deployment
vercel                      # Deploy to Vercel
netlify deploy --prod       # Deploy to Netlify
npm run build && gh-pages -d dist  # Deploy to GitHub Pages
```

### Useful Resources

**Documentation:**
- React: https://react.dev/
- TypeScript: https://www.typescriptlang.org/docs/
- Vite: https://vite.dev/
- Tailwind CSS: https://tailwindcss.com/docs
- Lucide Icons: https://lucide.dev/

**Tools:**
- VS Code: https://code.visualstudio.com/
- Chrome DevTools: https://developer.chrome.com/docs/devtools/
- Can I Use (browser support): https://caniuse.com/

**Learning:**
- React Handbook: https://react.dev/learn
- TypeScript Handbook: https://www.typescriptlang.org/docs/handbook/
- Tailwind CSS Tutorial: https://tailwindcss.com/docs/utility-first

## 8. RECENT UPDATES (OCTOBER 2025)

- Added `Slide02MarketOpportunity.tsx`, `Slide04CompetitiveLandscape.tsx`, and `Slide11RegulatoryRisk.tsx` to expand the storyline around TAM, competitive positioning, and institutional risk transparency.
- Refreshed core narrative slides (`Slide02ExecutiveSummary`, `Slide05InstitutionalInfrastructure`, `Slide06FinancialModel`, `Slide07InvestmentTerms`, `Slide08PlatformBusinessModel`, `Slide09TechnologyMarketSolution`, `Slide10ValuationFramework`) to reflect the revised investment thesis, technology partnership framing, and updated financial assumptions.
- Updated `App.tsx` to include the expanded slide list (now 13 items) while preserving sequential flow: Title → Market Opportunity → Executive Summary → Strategic Rationale → Competitive Landscape → Leadership Team → Infrastructure → Financial Model → Investment Terms → Platform Model → Technology → Valuation → Regulatory & Risk Disclosures.
- Extended `/docs/CONTENT_IMPROVEMENTS.md` and `/docs/UX_UI_RECOMMENDATIONS.md` with October 2025 addenda summarising completed work and residual follow-ups.

### Outstanding Follow-Ups

- Add citations/footnotes to slides and documentation for regulatory approval rates, banking relationship metrics, and comparable valuation data prior to investor circulation.
- Capture a Series A readiness checklist (target KPIs, compliance milestones, technology audits) in this documentation once leadership confirms the timetable.
- Document technology partner naming, audit owners, and SOC 2 / ISO 27001 roadmap when NDA constraints allow disclosure.
- Refresh slide-by-slide descriptions and byte-size references earlier in this file after the next copy-edit pass.

## 9. SERIES A READINESS CHECKLIST (DRAFT)

| Workstream | Milestone | Owner | Target |
|------------|-----------|-------|--------|
| Performance Track Record | 12-month audited performance for core strategies | Investments | Q2 2027 |
| Compliance & Governance | FINMA change-of-control approval; CSSF compartment transfer letters; SOC 2 Type I initiated | Legal & Compliance | Q1 2026 (FINMA), Q2 2026 (CSSF), Q4 2026 (SOC 2 kickoff) |
| Technology & Operations | Independent latency audit; technology partner SLA refresh; disaster recovery tabletop | CTO / Ops | Q1 2026 audit; Q2 2026 SLA; Q3 2026 DR test |
| Commercial Traction | $100M+ AUM under management; ≥3 external compartment clients live; churn &lt;5% | BD / Client Success | Q2 2027 |
| Capital Planning | Series A data room (financial model, board deck, customer references); short list of lead investors | CFO / CEO | Q2 2027 preparation |
| Team & Governance | Independent board member identified; key-person insurance in place; option pool refresh | People / Legal | Q1 2027 |

**Next Steps:**
- Confirm KPIs and owners with leadership, then integrate milestones into OKR tracking.
- Add references to supporting evidence (audit reports, SLA PDFs) in the internal data room.
- Revisit this checklist quarterly to update status and adjust timelines.

### Contact and Support

For questions or issues with this project:
1. Check this documentation
2. Review error messages in browser console
3. Search GitHub issues (if applicable)
4. Consult framework documentation

### Changelog

**Version 1.1.0** (October 14, 2025)
- Expanded to 13 slides (added Market Opportunity, Competitive Landscape, Regulatory Risk)
- Added source citations to all data-heavy slides
- Reconciled Series A messaging (Q2-Q3 2027 target)
- Updated financial model with benchmarks
- Responsive design with print optimization
- Navigation and zoom controls

**Version 1.0.0** (October 2025)
- Initial release with 10 slides
- Core Mira Labs pitch content
- Responsive design
- Navigation and zoom controls
- Print-optimized styles

---

*End of Documentation*

**Document Version:** 1.0
**Last Updated:** October 14, 2025
**Project:** Mira Labs Pitch Deck
**Maintained By:** Development Team
