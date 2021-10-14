import Vue from 'vue'
import App from './App.vue'
import store from "../src/store/store.js";
import vuetify from "./plugins/vuetify.js";

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
