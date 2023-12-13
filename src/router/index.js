import Login from '../pages/Login.vue'
import Landing from '../pages/Landing.vue'
import RegisterLearner from '../pages/Register/RegisterLearner.vue'
import RegisterTutor from '../pages/Register/RegisterTutor.vue'
import RegisterTutorCenter from '../pages/Register/RegisterTutorCenter.vue'

import {createRouter, createWebHistory } from 'vue-router'


const routes = [
    {   
        path: '/', 
        name: 'Landing', 
        component: Landing
    },
    {
        path: '/login', 
        name: 'Login', 
        component: Login
    },
    {
        path: '/register-learner', 
        name: 'RegisterLearner', 
        component: RegisterLearner
    },
    {
        path: '/register-tutor', 
        name: 'RegisterTutor', 
        component: RegisterTutor
    },
    {
        path: '/register-tutorcenter', 
        name: 'RegisterTutorCenter', 
        component: RegisterTutorCenter
    },
]

const router = createRouter({
    history: createWebHistory(),

    routes
    
})

export default router