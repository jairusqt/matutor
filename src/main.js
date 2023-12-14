//main.js
import { createApp } from 'vue'

import router from './router'
import "bootstrap/dist/css/bootstrap.css"
import 'bootstrap-icons/font/bootstrap-icons.css'

import App from './App.vue'
import '../src/components/stylesheets/transitions.css'


createApp(App)
.use(router)
.mount('#app')
