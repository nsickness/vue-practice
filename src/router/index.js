import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Archive from '@/components/Archive'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Main',
            component: Main
        },
        {
            path: '/archive',
            name: 'Archive',
            component: Archive
        }
    ]
})

