import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastclick from 'fastclick'

Vue.config.productionTip = false
fastclick.attach(document.body)
import './assets/style/less/index.less';
import './assets/iconfont/iconfont'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
