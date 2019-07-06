import Vue from 'vue'
import App from './App.vue'
import Bulma from 'bulma'
import axios from 'axios';
import 'bulma-helpers/css/bulma-helpers.min.css'
import VueBarcode from 'vue-barcode';



Vue.config.productionTip = false

Vue.use(axios);
Vue.use(Bulma);
new Vue({
  render: h => h(App),
}).$mount('#app')
