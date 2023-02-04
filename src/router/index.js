import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import nProgress from 'nprogress'
import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/example',
    name: 'example',
    component: () => import(/* webpackChunkName: "example" */ '../views/ExampleView.vue'),
    // props: true, // if you want to pass route params to the component 
    beforeEnter: (to, from, next) => {
      nProgress.start();
      store.dispatch('getDatas').then(() => {
        nProgress.done()
        next()
      });
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  nProgress.start()
  next()
})

router.afterEach(() => {
  nProgress.done()
})

export default router
