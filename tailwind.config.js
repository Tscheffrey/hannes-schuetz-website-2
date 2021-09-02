module.exports = {
  purge: [],
  mode: 'jit',
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          100: 'var(--color-primary-100)',
        },
        secondary: {
          100: 'var(--color-secondary-100)',
        },
        instagram: '#da2e76',
        twitter: '#00ACEE',
        github: '#7DBBE6',
        bitspeicher: '#F6A477',
        linkedin: '#70B5F9',
      },
      borderWidth: {
        3: '3px',
      },
      borderColor: { DEFAULT: 'currentColor' },
      keyframes: {
        logoScroll: {
          '0%': { transform: 'translateY(-50%)' },
          '100%': { transform: 'translateY(0)' },
        },
        logoScrollMobile1: {
          '0%': { transform: 'translatex(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        logoScroll: 'logoScroll 14s linear infinite',
        logoScrollMobile1: 'logoScrollMobile1 5s linear infinite',
        logoScrollMobile2: 'logoScrollMobile1 5s linear infinite reverse',
      },
      spacing: {
        18: '4.5rem',
        viewportY: 'fill-available',
      },
      lineHeight: {
        tighter: '0.9',
      },
      fontFamily: {
        sans: ['Work Sans', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
