import { createRouter, createWebHistory } from 'vue-router'

// Exemple de composants (à créer)
import Home from '../views/Homepage.vue'
import choice from '../views/choice.vue'
import register from '../views/register.vue'
import answers from '../views/answer.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/choice', component: choice },
  { path: '/register', component: register },
  { path: '/answers', component: answers },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router