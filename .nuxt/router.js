import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5d46e66a = () => interopDefault(import('../pages/challenge.vue' /* webpackChunkName: "pages/challenge" */))
const _3b2992d9 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _26c2cc04 = () => interopDefault(import('../pages/index/_id.vue' /* webpackChunkName: "pages/index/_id" */))

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
    path: "/",
    component: _3b2992d9,
    name: "index",
    children: [{
      path: ":id?",
      component: _26c2cc04,
      name: "index-id"
    }]
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
