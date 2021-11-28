import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../components/Test.vue'
import About from '../components/About-Ammna.vue'
import Symptoms from '../components/Symptoms-Mkhamer.vue'
import Prevention from '../components/Prevention-Yousef.vue'
import Treatment from '../components/Treatment-Barghot.vue'
import FandQ from '../components/FandQ-Samka.vue'
import News from '../components/News-Salama.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Test',
    name: 'Test',
    component: Test
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/Symptoms',
    name: 'Symptoms',
    component: Symptoms
  },
  {
    path: '/Prevention',
    name: 'Prevention',
    component: Prevention
  },
  {
    path: '/Treatment',
    name: 'Treatment',
    component: Treatment
  },
  {
    path: '/FandQ',
    name: 'FandQ',
    component: FandQ
  },
  {
    path: '/News',
    name: 'News',
    component: News
  }
]

const router = new VueRouter({
  routes
})

export default router
