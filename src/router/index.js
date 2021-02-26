import Vue from 'vue'
import VueRouter from 'vue-router'

import Default from '@/views/Default.vue'
import Results from '@/views/Results.vue'
import NotFound from '@/views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Default',
        component: Default,
    },
    {
        path: '/results/:result',
        name: 'Results',
        component: Results,
        props: true,
    },
    {
        path: '/404',
        name: '404',
        component: NotFound,
    },
    {
        path: '*',
        redirect: '/404',
    },
]

const router = new VueRouter({
    routes,
    mode: 'history',
    //mode: 'abstract',
})

//router.replace('/')

export default router
