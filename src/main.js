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
        { path: '/detail/:item_id', component: Detail, props: true, meta: { requiresItemId: true }},
        { path: '/order', component: Order}
    ]
})

router.beforeResolve((to, from, next) => {
    if (to.path === '/detail' && !to.params.item_id) {
        next('/')
    } else {
        next()
    }
})

createApp(App).use(router).mount('#app')
