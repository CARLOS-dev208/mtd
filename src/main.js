import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from '@/router'
import store from './store'

Vue.config.productionTip = false

//axios.defaults.baseURL = 'http://localhost:8080/'


window._Vue = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
