import Vue from 'vue';
import VueRouter from 'vue-router';
import Painel from '@/views/Painel';
import Importacao from '@/views/Importacao'

Vue.use(VueRouter)


const router = new VueRouter({
    mode: 'hash',
    routes: [{
            path: '/',
            name: 'painel',
            component: Painel,
        },
        {
            path: '/Importacao',
            name: 'importacao',
            component: Importacao,
        },
       
    ]
})


export default router