import {routes as auth} from '../modules/auth'
import Painel from '@/views/Painel'
import Importacao from '@/views/Importacao'

export default[
    ...auth,
    {
        path: '/',
        name: 'painel',
        component: Painel
    },
    {
        path: '/Importacao',
        name: 'importacao',
        component: Importacao
    },
]