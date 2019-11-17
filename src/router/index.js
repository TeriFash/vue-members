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
  },
  {
    path: '/404',
    name: '404',
    meta: { transitionName: 'slide' },
    component: () => import('../views/AppNotFound.vue')
  }, {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
