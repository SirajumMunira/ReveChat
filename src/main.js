import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import VueClipboard from 'vue-clipboard2'

Vue.use(VueClipboard)
Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  render: h => h(App)
})
