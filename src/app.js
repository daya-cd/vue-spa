import Vue from 'vue'
import AppLayout from './theme/Layout.vue'

console.log(AppLayout)
const app = new Vue({
//  render: h => h(AppLayout) replace with ES6 spread syntax
 ...AppLayout
})

export { app }
