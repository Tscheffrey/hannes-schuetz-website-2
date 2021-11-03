export const state = () => ({
  counter: 0,
  themeName: 'DARK',
})

export const mutations = {
  increment(state) {
    state.counter++
  },
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
