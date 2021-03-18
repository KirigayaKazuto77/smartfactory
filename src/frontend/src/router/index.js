import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'
import About from '../views/About.vue'
import MainScreen from '../views/MainScreen.vue'
import MainMenu from '../views/MainMenu.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: About
  },
  {
    path: '/mainscreen',
    name: 'MainScreen',
    component: MainScreen
  },
  {
    path: '/mainmenu',
    name: 'MainMenu',
    component: MainMenu
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
