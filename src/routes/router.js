import { createRouter, createWebHashHistory } from 'vue-router'
import PostsScreen from '../pages/PostsScreen.vue'
import CreatePostScreen from '../pages/CreatePostScreen.vue'
import DetailPostScreen from '../pages/DetailPostScreen.vue'

const routes = [
  { path: '/listar-posts', component: PostsScreen },
  { path: '/crear-post', component: CreatePostScreen },
  { path: '/detalle-post', component: DetailPostScreen, name: 'DetailPostScreen' }
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory('http://localhost:5173/'),
  routes // short for `routes: routes`
})

export default router
