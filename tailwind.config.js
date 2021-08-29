module.exports = {
  purge: [],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#F7F7F7',
        },
        secondary: {
          100: '#121212',
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
