import Vue from 'vue'
import VueRouter from 'vue-router'
import type { Route } from 'vue-router'

declare module 'vue/types/vue' {
  interface Vue {
    $router: VueRouter
    $route: Route
    $hs: any
  }
}