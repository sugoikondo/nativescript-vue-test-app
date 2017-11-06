import Vue from 'nativescript-vue'
import App from './components/App.vue'
import http from 'http'

Vue.prototype.$http = http
new Vue({
  render: h => h('app'),

  components: {
    App
  }
}).$start()
