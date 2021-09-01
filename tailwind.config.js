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
      // eslint-disable-next-line no-undef
      borderColor: { DEFAULT: 'currentColor' },
      keyframes: {
        logoScroll: {
          '0%': { transform: 'translateY(-50%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        logoScroll: 'logoScroll 14s linear infinite',
      },
      spacing: {
        18: '4.5rem',
        viewportY: 'fill-available',
      },
      lineHeight: {
        tighter: '0.9',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
