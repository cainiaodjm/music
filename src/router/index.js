import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path:"/",
            redirect:'/find'
        },
        {
            path:'/find',
            name:"find",
            component:()=>import('../views/find.vue'),

        },
        {
            path:"/my",
            name:"my",
            component:()=>import('../views/my.vue')
        }
    ]
})
