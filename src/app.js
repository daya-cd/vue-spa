import Vue from 'vue'
import store from './vuex/index.js'
import AppLayout from './theme/Layout.vue'
import router from './router'

console.log(AppLayout)
const app = new Vue({
    router,
//  render: h => h(AppLayout) replace with ES6 spread syntax
 ...AppLayout,
    store
})

export { app, router, store }
