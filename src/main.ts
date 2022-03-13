import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory}  from "vue-router"

import TheNavBar from './components/utils/TheNavBar.vue'
import TheLanding from './components/TheLanding.vue'
import TheAbout from './components/TheAbout.vue'

const app = createApp(App)

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/:pathMatch(.*)*', component: TheLanding },
      { path: '/about', component: TheAbout }
    ],
  })

app.use(router)

app.mount('#app')

/* TO USE FONTS : 
font-family: 'Roboto', sans-serif;
font-family: 'Ubuntu', sans-serif;
*/