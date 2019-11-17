import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]'),
    settings: JSON.parse(localStorage.getItem('settings') || '{}'),
    themes: JSON.parse(localStorage.getItem('themes') || false)
  },
  mutations: {
    createTask(state, task) {
      state.tasks.push(task)

      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    setThemeStatus(state, theme) {
      state.settings.theme = theme

      localStorage.setItem('settings', JSON.stringify(state.settings))
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
    taskById: s => id => s.tasks.find(t => t.id === id),
    themeStatus: s => s.settings.theme
  },
  modules: {
  }
})
