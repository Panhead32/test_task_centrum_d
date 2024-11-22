import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ChangedRateView from '@/views/ChangedRateView.vue'
import SearchView from '@/views/SearchView.vue'
import ExchangeRateView from '@/views/ExchangeRateView.vue'

const headerRoutes = [
  {
    path: '/',
    component: HomeView,
    name: 'home-page',
    text: 'Home',
  },
  {
    path: '/changed-rate',
    component: ChangedRateView,
    name: 'changed-exchange-rate',
    text: 'Changed Rates',
  },
  {
    path: '/search',
    component: SearchView,
    name: 'search-page',
    text: 'Search',
  },

]

const restRoutes = [
  {
    path: '/exchange-rate',
    component: ExchangeRateView,
    name: 'exchange-rate',
    text: 'Exchange Rate',
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...headerRoutes, ...restRoutes],
})

export { router, headerRoutes }
