import Vue from 'vue'
import App from './App.vue'
import Plugin from 'plugin'

Vue.use(Plugin, {
  tooltip: true
})

new Vue({
  el: '#app',
  render: h => h(App)
})
