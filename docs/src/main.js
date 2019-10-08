/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
//import FuiVue from '../../dist/main.js'
import FuiVue from '../..'
//let FuiVue = require('../../dist/main.js')

console.log('----------------- TEST -----------------'); // eslint-disable-line no-console
console.log(FuiVue); // eslint-disable-line no-console

Vue.config.productionTip = false

FuiVue.registerAll(Vue)

new Vue({
  render: h => h(App),
}).$mount('#app')
