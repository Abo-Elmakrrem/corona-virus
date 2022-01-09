import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../components/Test.vue'
import Treatment from '../views/Treatment.vue'
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
    path: '/Treatment',
    name: 'Treatment',
    component: Treatment
  }
]

const router = new VueRouter({
  routes
})

export default router
