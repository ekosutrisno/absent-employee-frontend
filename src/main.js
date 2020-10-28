import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueMoment from 'vue-moment'
import moment from 'moment-timezone'

Vue.use(VueMoment, {
  moment,
})
import '@/assets/style/main.css'

Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

