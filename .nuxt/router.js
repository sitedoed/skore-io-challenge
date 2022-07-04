import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _547cbbe4 = () => interopDefault(import('../pages/desafio.vue' /* webpackChunkName: "pages/desafio" */))
const _8569a5e2 = () => interopDefault(import('../pages/saiba_mais/index.vue' /* webpackChunkName: "pages/saiba_mais/index" */))
const _748f2737 = () => interopDefault(import('../pages/saiba_mais/_id.vue' /* webpackChunkName: "pages/saiba_mais/_id" */))
const _3b2992d9 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/desafio",
    component: _547cbbe4,
    name: "desafio"
  }, {
    path: "/saiba_mais",
    component: _8569a5e2,
    name: "saiba_mais"
  }, {
    path: "/saiba_mais/:id",
    component: _748f2737,
    name: "saiba_mais-id"
  }, {
    path: "/",
    component: _3b2992d9,
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
