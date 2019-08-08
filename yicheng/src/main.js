import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
Vue.prototype.$axios=axios;
window.axios = axios;

Vue.config.productionTip = false

import './assets/css/index.css'
import './assets/css/public.css'
import './assets/js/font'

import router from './plugins/router'

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
