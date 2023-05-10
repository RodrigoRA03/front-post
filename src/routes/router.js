import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../pages/Login.vue'
import PostsScreen from '../pages/PostsScreen.vue'
import CreatePostScreen from '../pages/CreatePostScreen.vue'
import DetailPostScreen from '../pages/DetailPostScreen.vue'
import Admin from '../pages/Admin.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/inicio',
    name: 'Admin',
    component: Admin,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/listar-posts',
    component: PostsScreen,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/crear-post',
    component: CreatePostScreen,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/detalle-post/:id',
    component: DetailPostScreen,
    name: 'DetailPostScreen',
    props: true,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory('http://localhost:5173/'),
  routes // short for `routes: routes`
})

export default router
