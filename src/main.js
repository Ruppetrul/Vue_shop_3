import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import Main from '@/components/Main.vue'
import Cart from '@/components/Cart.vue'
import Detail from '@/components/Detail.vue'
import Order from '@/components/Order.vue'

import 'bootstrap/dist/css/bootstrap.min.css'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Main},
        { path: '/cart', component: Cart},
        { path: '/detail', component: Detail},
        { path: '/order', component: Order}
    ]
})

createApp(App).use(router).mount('#app')
