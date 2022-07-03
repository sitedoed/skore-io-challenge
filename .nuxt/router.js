import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5d46e66a = () => interopDefault(import('../pages/challenge.vue' /* webpackChunkName: "pages/challenge" */))
const _19c9a3a8 = () => interopDefault(import('../pages/read_more/index.vue' /* webpackChunkName: "pages/read_more/index" */))
const _71871fe0 = () => interopDefault(import('../pages/read_more/_id.vue' /* webpackChunkName: "pages/read_more/_id" */))
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
    path: "/challenge",
    component: _5d46e66a,
    name: "challenge"
  }, {
    path: "/read_more",
    component: _19c9a3a8,
    name: "read_more"
  }, {
    path: "/read_more/:id",
    component: _71871fe0,
    name: "read_more-id"
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
