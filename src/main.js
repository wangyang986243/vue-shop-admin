import Vue from 'vue'
import App from './App.vue'
import router from './router'
//这两个引入根据文档来引
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './assets/css/index.css'

//抄文档
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
