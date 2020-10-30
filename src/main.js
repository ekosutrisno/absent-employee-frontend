import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueMoment from 'vue-moment'
import moment from 'moment-timezone'
import vmodal from 'vue-js-modal'
import '@/assets/style/main.css'
import '@/assets/style/formulate.css'


const VueFormulate = require('@braid/vue-formulate')

Vue.use(VueFormulate.default)

Vue.use(vmodal)

Vue.use(VueMoment, {
  moment,
})

Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

