import Vue from 'vue'
import axios from 'axios'
import services from './services'

Vue.use(axios)

const http = Vue.http

http.options.root = 'https://guarded-headland-11685.herokuapp.com/'

Object.keys(services).map(service =>{
    services[service] = Vue.resource('',{},services[service])
})
export {http}
export default services


