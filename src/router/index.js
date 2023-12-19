import Login from '../pages/Login.vue'
import Landing from '../pages/Landing.vue'
import RegisterLearner from '../pages/Register/RegisterLearner.vue'
import RegisterTutor from '../pages/Register/RegisterTutor.vue'
import RegisterTutorCenter from '../pages/Register/RegisterTutorCenter.vue'
import adminDashboard from '../pages/admin/admin_dash.vue'

import {createRouter, createWebHistory } from 'vue-router'
import { auth } from '../firebase';

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
    {
        path: '/admin-dashboard',
        name: 'admin_dashboard',
        component: adminDashboard,
        meta: { requiresAuth: true }, // Add meta field to indicate authentication requirement
        beforeEnter: (to, from, next) => {
          // Check if the user is authenticated
          const user = auth.currentUser;
          if (user) {
            next(); // Continue to the route
          } else {
            next('/login'); // Redirect to the login page
          }
        },
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router