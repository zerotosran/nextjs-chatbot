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
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)']
      },
      colors: {
        border: 'hsl(300, 10%, 50%)',
        input: 'hsl(0, 0%, 80%)',
        ring: 'hsl(240, 100%, 50%)',
        background: 'hsl(40, 50%, 90%)',
        foreground: 'hsl(0, 0%, 0%)',
        primary: {
          DEFAULT: 'hsl(240, 100%, 50%)',
          foreground: 'hsl(0, 0%, 100%)'
        },
        secondary: {
          DEFAULT: 'hsl(0, 0%, 80%)',
          foreground: 'hsl(0, 0%, 0%)'
        },
        destructive: {
          DEFAULT: 'hsl(0, 100%, 50%)',
          foreground: 'hsl(0, 0%, 100%)'
        },
        muted: {
          DEFAULT: 'hsl(30, 20%, 80%)',
          foreground: 'hsl(0, 0%, 0%)'
        },
        accent: {
          DEFAULT: 'hsl(120, 100%, 35%)',
          foreground: 'hsl(0, 0%, 100%)'
        },
        popover: {
          DEFAULT: 'hsl(30, 20%, 80%)',
          foreground: 'hsl(0, 0%, 0%)'
        },
        card: {
          DEFAULT: 'hsl(0, 0%, 100%)',
          foreground: 'hsl(0, 0%, 0%)'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')]
}

export default config
