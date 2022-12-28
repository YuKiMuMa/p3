import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _264e2b15 = () => interopDefault(import('..\\pages\\blogs\\index.vue' /* webpackChunkName: "pages/blogs/index" */))
const _ceebd4b4 = () => interopDefault(import('..\\pages\\contact\\index.vue' /* webpackChunkName: "pages/contact/index" */))
const _147d1404 = () => interopDefault(import('..\\pages\\works\\index.vue' /* webpackChunkName: "pages/works/index" */))
const _249789cd = () => interopDefault(import('..\\pages\\blogs\\_slug.vue' /* webpackChunkName: "pages/blogs/_slug" */))
const _12c672bc = () => interopDefault(import('..\\pages\\works\\_slug.vue' /* webpackChunkName: "pages/works/_slug" */))
const _963897e4 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _264e2b15,
    name: "blogs"
  }, {
    path: "/contact",
    component: _ceebd4b4,
    name: "contact"
  }, {
    path: "/works",
    component: _147d1404,
    name: "works"
  }, {
    path: "/blogs/:slug",
    component: _249789cd,
    name: "blogs-slug"
  }, {
    path: "/works/:slug",
    component: _12c672bc,
    name: "works-slug"
  }, {
    path: "/",
    component: _963897e4,
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
