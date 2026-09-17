// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg:      '#101716',
        surface: '#182522',
        border:  '#30443E',
        muted:   '#9FB0AA',
        fg:      '#F3F7F5',

        primary: {
          DEFAULT: '#43C59E',
          deep:    '#258B73',
          hover:   '#36B38D',
        },

        success: '#82C985',
        warning: '#E5B454',
        error:   '#EF767A',
        info:    '#72B7D9',
        ai:      '#A88BE8',

        light: {
          bg:      '#F7FBF9',
          surface: '#FFFFFF',
          border:  '#D7E3DE',
          muted:   '#5E716A',
          fg:      '#101716',
        },
      },

      backgroundImage: {
        'grad-primary': 'linear-gradient(90deg, #43C59E, #258B73)',
        'grad-ai':      'linear-gradient(90deg, #A88BE8, #7E6AD6)',
        'grad-info':    'linear-gradient(90deg, #72B7D9, #43C59E)',
      },

      fontFamily: {
        display: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        sans:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono:    ['var(--font-mono)', 'monospace'],
      },

      fontSize: {
        xs:    ['0.75rem',  { lineHeight: '1.1rem'  }],
        sm:    ['0.875rem', { lineHeight: '1.35rem' }],
        md:    ['1rem',     { lineHeight: '1.6rem'  }],
        lg:    ['1.25rem',  { lineHeight: '1.85rem' }],
        xl:    ['1.5rem',   { lineHeight: '2.1rem'  }],
        '2xl': ['2rem',     { lineHeight: '2.5rem'  }],
        '3xl': ['3rem',     { lineHeight: '3.4rem'  }],
        '4xl': ['3.75rem',  { lineHeight: '4rem'    }],
      },

      borderRadius: {
        sm: '6px',
        md: '12px',
        lg: '20px',
      },

      boxShadow: {
        sm:       '0 1px 2px rgba(16, 23, 22, 0.06)',
        md:       '0 8px 24px rgba(16, 23, 22, 0.10)',
        glow:     '0 0 40px rgba(67, 197, 158, 0.25)',
        'glow-ai': '0 0 32px rgba(168, 139, 232, 0.28)',
      },

      maxWidth: {
        prose: '720px',
      },

      keyframes: {
        'fade-in-up': {
          '0%':   { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },

      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        shimmer:      'shimmer 2.5s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config