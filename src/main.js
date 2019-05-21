import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// import './mock.js'
//url编码方式向后端发送数据
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$http = axios;
//在vue里面挂载一个$http 方法 等于导入过来的axios；

Vue.config.productionTip = false
//导入css
import './assets/css/normalize.css'
import './assets/css/mi.css'
//导入js
import './assets/js/flex.js'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
