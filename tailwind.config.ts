/** @type {import('tailwindcss').Config} */
module.exports = {
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
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(240, 100%, 50%)',  // Bright blue
          foreground: 'hsl(0, 0%, 100%)'   // White
        },
        secondary: {
          DEFAULT: 'hsl(0, 0%, 80%)',      // Light gray
          foreground: 'hsl(0, 0%, 0%)'     // Black
        },
        destructive: {
          DEFAULT: 'hsl(0, 100%, 50%)',    // Bright red
          foreground: 'hsl(0, 0%, 100%)'   // White
        },
        muted: {
          DEFAULT: 'hsl(30, 20%, 80%)',    // Beige
          foreground: 'hsl(0, 0%, 0%)'     // Black
        },
        accent: {
          DEFAULT: 'hsl(120, 100%, 35%)',  // Bright green
          foreground: 'hsl(0, 0%, 100%)'   // White
        },
        popover: {
          DEFAULT: 'hsl(30, 20%, 80%)',    // Beige
          foreground: 'hsl(0, 0%, 0%)'     // Black
        },
        card: {
          DEFAULT: 'hsl(0, 0%, 100%)',     // White
          foreground: 'hsl(0, 0%, 0%)'     // Black
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
