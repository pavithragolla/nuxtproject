import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _edd5d720 = () => interopDefault(import('..\\pages\\Alltodos.vue' /* webpackChunkName: "pages/Alltodos" */))
const _b43c0dd6 = () => interopDefault(import('..\\pages\\Login.vue' /* webpackChunkName: "pages/Login" */))
const _98536ece = () => interopDefault(import('..\\pages\\Todos.vue' /* webpackChunkName: "pages/Todos" */))
const _64c8361e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Alltodos",
    component: _edd5d720,
    name: "Alltodos"
  }, {
    path: "/Login",
    component: _b43c0dd6,
    name: "Login"
  }, {
    path: "/Todos",
    component: _98536ece,
    name: "Todos"
  }, {
    path: "/",
    component: _64c8361e,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
