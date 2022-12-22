import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d2cf8a6c = () => interopDefault(import('..\\pages\\blogs\\index.vue' /* webpackChunkName: "pages/blogs/index" */))
const _1e8f0c1b = () => interopDefault(import('..\\pages\\contact\\index.vue' /* webpackChunkName: "pages/contact/index" */))
const _f671b88e = () => interopDefault(import('..\\pages\\works\\index.vue' /* webpackChunkName: "pages/works/index" */))
const _5b05fa59 = () => interopDefault(import('..\\pages\\contact\\test.vue' /* webpackChunkName: "pages/contact/test" */))
const _d63cccfc = () => interopDefault(import('..\\pages\\blogs\\_slug.vue' /* webpackChunkName: "pages/blogs/_slug" */))
const _f9defb1e = () => interopDefault(import('..\\pages\\works\\_slug.vue' /* webpackChunkName: "pages/works/_slug" */))
const _d4ca940e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _d2cf8a6c,
    name: "blogs"
  }, {
    path: "/contact",
    component: _1e8f0c1b,
    name: "contact"
  }, {
    path: "/works",
    component: _f671b88e,
    name: "works"
  }, {
    path: "/contact/test",
    component: _5b05fa59,
    name: "contact-test"
  }, {
    path: "/blogs/:slug",
    component: _d63cccfc,
    name: "blogs-slug"
  }, {
    path: "/works/:slug",
    component: _f9defb1e,
    name: "works-slug"
  }, {
    path: "/",
    component: _d4ca940e,
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
