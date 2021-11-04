module.exports = {
  purge: [],
  mode: 'jit',
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'hover-hover': { raw: '(hover: hover)' },
      },
      colors: {
        primary: {
          100: 'var(--color-primary-100)',
        },
        secondary: {
          100: 'var(--color-secondary-100)',
        },
        instagram: '#da2e76',
        twitter: '#00ACEE',
        github: 'var(--color-github)',
        bitspeicher: 'var(--color-bitspeicher)',
        linkedin: '#70B5F9',
        unsplash: 'var(--color-unsplash)',
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
        logoScrollMobile: {
          '0%': { transform: 'translatex(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        logoScroll: 'logoScroll 18s linear infinite',
        logoScrollMobile1: 'logoScrollMobile 10s linear infinite',
        logoScrollMobile2: 'logoScrollMobile 10s linear infinite reverse',
      },
      spacing: {
        18: '4.5rem',
        viewportY: 'fill-available',
      },
      lineHeight: {
        tighter: '0.9',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
