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
router.beforeEach((to, from, next) => {
  console.log(to, from, next)
  if (to.path === '/login') {
    next()
    return
  }
  if (localStorage.getItem('token')) {
    next()
  } else {
    router.push('/login')
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
