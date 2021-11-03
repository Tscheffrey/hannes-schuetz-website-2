export const state = () => ({
  themeName: 'DARK',
})

export const mutations = {
  toggleTheme(state) {
    if (state.themeName === 'DARK') {
      state.themeName = 'LIGHT'
      document.body.classList.remove('dark')
    } else {
      state.themeName = 'DARK'
      document.body.classList.add('dark')
    }
  },
}
