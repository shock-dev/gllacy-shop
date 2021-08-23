import Vue from 'vue'
import VueMeta from 'vue-meta'
import App from './App'
import router from './router'
import store from './store'
import './styles/index.scss'

Vue.use(VueMeta)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
