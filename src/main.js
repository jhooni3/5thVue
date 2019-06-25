// import Vue from 'vue'
// import App from './App.vue'
//
// Vue.config.productionTip = false
//
// new Vue({
//   render: h => h(App),
// }).$mount('#app')


import { obj1, str1, constant1} from './es6'
import obj1_copy from './es6'
console.log('main.js 시작')
obj1.method1()
obj1.method2()

console.log(str1)
console.log(constant1)
console.log(obj1_copy.a)
console.log('main.js 종료')
