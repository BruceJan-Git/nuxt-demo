import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _625735ab = () => interopDefault(import('..\\pages\\404.vue' /* webpackChunkName: "pages_404" */))
const _89aca700 = () => interopDefault(import('..\\pages\\demo.vue' /* webpackChunkName: "pages_demo" */))
const _78386668 = () => interopDefault(import('..\\pages\\user.vue' /* webpackChunkName: "pages_user" */))
const _3f1efd0c = () => interopDefault(import('..\\pages\\user\\test.vue' /* webpackChunkName: "pages_user_test" */))
const _429eea02 = () => interopDefault(import('..\\pages\\user\\_id.vue' /* webpackChunkName: "pages_user__id" */))
const _4d162d85 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/404",
      component: _625735ab,
      name: "404"
    }, {
      path: "/demo",
      component: _89aca700,
      name: "demo"
    }, {
      path: "/user",
      component: _78386668,
      name: "user",
      children: [{
        path: "test",
        component: _3f1efd0c,
        name: "user-test"
      }, {
        path: ":id?",
        component: _429eea02,
        name: "user-id"
      }]
    }, {
      path: "/",
      component: _4d162d85,
      name: "index"
    }, {
      path: "*",
      component: _625735ab,
      name: "custom"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
