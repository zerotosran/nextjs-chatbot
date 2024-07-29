import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        sans: ['VT323', 'monospace', 'var(--font-geist-sans)'],
        mono: ['VT323', 'monospace', 'var(--font-geist-mono)']
      },
      colors: {
        border: '#8b7b8b',
        input: '#c3c3c3',
        ring: '#0000a8',
        background: '#f0e6d2',
        foreground: '#000000',
        primary: {
          DEFAULT: '#0000a8',
          foreground: '#ffffff'
        },
        secondary: {
          DEFAULT: '#c3c3c3',
          foreground: '#000000'
        },
        destructive: {
          DEFAULT: '#a80000',
          foreground: '#ffffff'
        },
        muted: {
          DEFAULT: '#d8c7b8',
          foreground: '#000000'
        },
        accent: {
          DEFAULT: '#00a800',
          foreground: '#ffffff'
        },
        popover: {
          DEFAULT: '#d8c7b8',
          foreground: '#000000'
        },
        card: {
          DEFAULT: '#ffffff',
          foreground: '#000000'
        }
      },
      borderRadius: {
        lg: '0px',
        md: '0px',
        sm: '0px'
      },
      boxShadow: {
        sm: '2px 2px 0 #8b7b8b',
        DEFAULT: '4px 4px 0 #8b7b8b',
        md: '4px 4px 0 #8b7b8b',
        lg: '6px 6px 0 #8b7b8b',
        xl: '8px 8px 0 #8b7b8b',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'blink': 'blink 1s step-start infinite'
      }
    }
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')]
}

export default config
