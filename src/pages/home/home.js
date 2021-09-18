import Vue from 'vue'
import home from './home.vue'
// 共通API导入
import '@/assets/js/httpUser.js'

Vue.config.productionTip = false
console.log(process.env)

new Vue({
  render: h => h(home)
}).$mount('#app')