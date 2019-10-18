/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import FuiVue from 'fomantic-ui-vue/src'
import VueHighlightJS from 'vue-highlightjs'

Vue.use(VueHighlightJS)
import 'highlight.js/styles/github.css';

Vue.config.productionTip = false

FuiVue.registerAll(Vue)

new Vue({
  render: h => h(App),
}).$mount('#app')
