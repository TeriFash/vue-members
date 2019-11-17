import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'create',
    meta: { transitionName: 'slide' },
    component: () => import('../views/AppCreate.vue')
  },
  {
    path: '/list',
    name: 'list',
    meta: { transitionName: 'slide' },
    component: () => import('../views/AppList.vue')
  },
  {
    path: `/task/:id`,
    name: 'task',
    meta: { transitionName: 'slide' },
    component: () => import('../views/AppTask.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
