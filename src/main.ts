import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory}  from "vue-router"

import TheNavBar from './components/utils/TheNavBar.vue'
import TheLanding from './components/TheLanding.vue'
import TheAbout from './components/TheAbout.vue'
import TheSkills from './components/TheSkills.vue'
import TheProjects from './components/TheProjects.vue'
import TheWorkInProgress from './components/utils/TheWorkInProgress.vue'
import TheProjectDetail from './components/TheProjectDetail.vue'

const app = createApp(App)

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/about', component: TheAbout },
      { path: '/skills', component: TheSkills },
      { path: '/projects', component: TheProjects },
      { path: '/project/:id', component: TheProjectDetail },
      { path: '/photos', component: TheWorkInProgress },
      { path: '/:pathMatch(.*)*', component: TheLanding }
    ],
  })

app.use(router)

app.mount('#app')

/* TO USE FONTS : 
font-family: 'Roboto', sans-serif;
font-family: 'Ubuntu', sans-serif;
*/