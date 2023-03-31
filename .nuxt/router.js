import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _55c66db0 = () => interopDefault(import('..\\pages\\blogs\\index.vue' /* webpackChunkName: "pages/blogs/index" */))
const _6a07c4fe = () => interopDefault(import('..\\pages\\contact\\index.vue' /* webpackChunkName: "pages/contact/index" */))
const _43f5569f = () => interopDefault(import('..\\pages\\works\\index.vue' /* webpackChunkName: "pages/works/index" */))
const _540fcc68 = () => interopDefault(import('..\\pages\\blogs\\_slug.vue' /* webpackChunkName: "pages/blogs/_slug" */))
const _423eb557 = () => interopDefault(import('..\\pages\\works\\_slug.vue' /* webpackChunkName: "pages/works/_slug" */))
const _69814c5a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _55c66db0,
    name: "blogs"
  }, {
    path: "/contact",
    component: _6a07c4fe,
    name: "contact"
  }, {
    path: "/works",
    component: _43f5569f,
    name: "works"
  }, {
    path: "/blogs/:slug",
    component: _540fcc68,
    name: "blogs-slug"
  }, {
    path: "/works/:slug",
    component: _423eb557,
    name: "works-slug"
  }, {
    path: "/",
    component: _69814c5a,
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
