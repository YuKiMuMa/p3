import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3acd2447 = () => interopDefault(import('..\\pages\\blogs\\index.vue' /* webpackChunkName: "pages/blogs/index" */))
const _eda0eb50 = () => interopDefault(import('..\\pages\\contact\\index.vue' /* webpackChunkName: "pages/contact/index" */))
const _28fc0d36 = () => interopDefault(import('..\\pages\\works\\index.vue' /* webpackChunkName: "pages/works/index" */))
const _391682ff = () => interopDefault(import('..\\pages\\blogs\\_slug.vue' /* webpackChunkName: "pages/blogs/_slug" */))
const _27456bee = () => interopDefault(import('..\\pages\\works\\_slug.vue' /* webpackChunkName: "pages/works/_slug" */))
const _19d0cf1c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blogs",
    component: _3acd2447,
    name: "blogs"
  }, {
    path: "/contact",
    component: _eda0eb50,
    name: "contact"
  }, {
    path: "/works",
    component: _28fc0d36,
    name: "works"
  }, {
    path: "/blogs/:slug",
    component: _391682ff,
    name: "blogs-slug"
  }, {
    path: "/works/:slug",
    component: _27456bee,
    name: "works-slug"
  }, {
    path: "/",
    component: _19d0cf1c,
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
