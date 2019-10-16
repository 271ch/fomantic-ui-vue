/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import FuiVue from 'fomantic-ui-vue/src'

Vue.config.productionTip = false

FuiVue.registerAll(Vue)

new Vue({
  render: h => h(App),
}).$mount('#app')
