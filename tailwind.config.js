/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Mira Labs Custom Brand Colors
        'mira': {
          'navy': '#0E1F3A',      // Midnight Navy - Primary dark (headers, authority)
          'blue': '#1C7ED6',      // Alpine Blue - Primary brand (financial metrics)
          'teal': '#15AABF',      // Glacier Teal - Accent (highlights)
          'gold': '#F59E0B',      // Amber Gold - Key metrics and CTAs
          'silver': '#94A3B8',    // Supporting text
          'success': '#51CF66',   // Evergreen - Positive indicators
          'warning': '#FF922B',   // Amber - Alerts
          'danger': '#C92A2A',    // Merlot - Risks
          'snow': '#F8F9FA',      // Snow White - Backgrounds
        },
      },
      fontFamily: {
        'display': ['Inter', 'sans-serif'],
        'body': ['Source Sans Pro', 'sans-serif'],
        'mono': ['IBM Plex Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-in-right': 'slideInRight 0.4s ease-out',
        'slide-in-left': 'slideInLeft 0.4s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
