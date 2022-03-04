import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import Chartick from 'vue-chartkick'
import { VueSpinners } from '@saeris/vue-spinners'
import Chart from 'chart.js'

import router from '@/router'
import { dollarFilter, percentFilter } from '@/filters'

Vue.use(VueSpinners)
Vue.use(Chartick.use(Chart))
Vue.filter('dollar', dollarFilter) //funcion filter de vue me permite usar una funcion para filtrar, el filtro le pongo un nombre que es el pprimer argumento
Vue.filter('percent', percentFilter)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
