import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from './router'
import './style.css'

export const createApp = ViteSSG(App, {
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      // vue-router ignora lo scroll-padding-top CSS: bisogna passare l'offset
      // esplicitamente, misurando l'header fisso (altezza diversa tra desktop e mobile)
      const header = document.querySelector('.site-header')
      const offset = header ? header.getBoundingClientRect().height : 0
      return { el: to.hash, top: offset, behavior: 'smooth' }
    }
    return { top: 0 }
  }
})
