import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import PersonalWorkout from '../views/PersonalWorkout'
import HeroWorkout from '../views/HeroWorkout'
import Dialog from '../views/Dialog'
import Slots from '../views/Slots'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/personalworkout',
    name: 'PersonalWorkout',
    component: PersonalWorkout
  },
  {
    path: '/heroworkout',
    name: 'HeroWorkout',
    component: HeroWorkout
  },
  {
    path: '/dialog',
    name: 'Dialog',
    component: Dialog
  },
  {
    path: '/slots',
    name: 'Slots',
    component: Slots
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
