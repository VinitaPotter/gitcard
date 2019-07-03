import Vue from 'vue'
import App from './App.vue'
import Bulma from 'bulma'
import 'bulma-helpers/css/bulma-helpers.min.css'



Vue.config.productionTip = false

Vue.use(Bulma);
new Vue({
  render: h => h(App),
}).$mount('#app')
