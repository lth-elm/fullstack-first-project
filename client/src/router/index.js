import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import BrainstormInfo from '../views/BrainstormInfo.vue'
import Csharp from '../views/Csharp.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/brainstorm',
    name: 'BrainstormInfo',
    component: BrainstormInfo
  },
  {
    path: '/csharp',
    name: 'Csharp',
    component: Csharp
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
