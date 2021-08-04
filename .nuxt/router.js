import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _19ff0795 = () => interopDefault(import('../pages/artwork/index.vue' /* webpackChunkName: "pages/artwork/index" */))
const _33157413 = () => interopDefault(import('../pages/calendar/index.vue' /* webpackChunkName: "pages/calendar/index" */))
const _d4700786 = () => interopDefault(import('../pages/child/index.vue' /* webpackChunkName: "pages/child/index" */))
const _5e206a17 = () => interopDefault(import('../pages/oder/index.vue' /* webpackChunkName: "pages/oder/index" */))
const _48532430 = () => interopDefault(import('../pages/portrait/index.vue' /* webpackChunkName: "pages/portrait/index" */))
const _9d92da9c = () => interopDefault(import('../pages/votive/index.vue' /* webpackChunkName: "pages/votive/index" */))
const _7fd731f0 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/artwork",
    component: _19ff0795,
    name: "artwork"
  }, {
    path: "/calendar",
    component: _33157413,
    name: "calendar"
  }, {
    path: "/child",
    component: _d4700786,
    name: "child"
  }, {
    path: "/oder",
    component: _5e206a17,
    name: "oder"
  }, {
    path: "/portrait",
    component: _48532430,
    name: "portrait"
  }, {
    path: "/votive",
    component: _9d92da9c,
    name: "votive"
  }, {
    path: "/",
    component: _7fd731f0,
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
