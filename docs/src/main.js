/* eslint-disable */

import Vue from 'vue'
import App from './App.vue'

import FuiVue from 'fomantic-ui-vue/src'
FuiVue.registerAll(Vue)

import VueRouter from 'vue-router'
Vue.use(VueRouter)

/*
import 'es6-promise/auto'
import Vuex from 'vuex'
Vue.use(Vuex)
*/

import VueHighlightJS from 'vue-highlightjs'
Vue.use(VueHighlightJS)
import 'highlight.js/styles/github.css';

/*
const store = new Vuex.Store({
  state: {
    count: 0, // TODO: to be removed
  },
  mutations: {
    increment (state) { // TODO: to be removed
      state.count++;
    },
  },
})
*/

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
