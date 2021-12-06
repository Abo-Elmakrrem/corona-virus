import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../components/Test.vue'
import Prevetion from '../views/Prevention.vue'
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
    name: 'prevetion',
    path: '/prevention',
    component: Prevetion
  }
]

const router = new VueRouter({
  routes
})

export default router
