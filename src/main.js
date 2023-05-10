import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store'
import router from './routes/router'

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.loggedIn) {
      next({
        name: 'login'
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

createApp(App).use(store).use(router).mount('#app')
