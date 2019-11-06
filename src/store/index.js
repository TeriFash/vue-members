import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]'),
    themes: JSON.parse(localStorage.getItem('themes') || false)
  },
  mutations: {
    createTask(state, task) {
      state.tasks.push(task)

      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    setThemeStatus(state, theme) {
      state.themes = theme

      localStorage.setItem('themes', JSON.stringify(state.themes))
    }
  },
  actions: {
    createTask({commit}, task) {
      commit('createTask', task)
    },
    setThemeStatus({commit}, theme) {
      commit('setThemeStatus', theme)
    }
  },
  getters: {
    tasks: s => s.tasks,
    themeStatus: s => s.themes
  },
  modules: {
  }
})
