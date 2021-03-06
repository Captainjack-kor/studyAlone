import Vue from 'vue'
import App from './App.vue'
import store from "../src/store/store.js";
import vuetify from "./plugins/vuetify.js";
import router from "../src/router/router";
import VueMq from "vue-mq";
import BootstrapVue from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import axios from "axios";

Vue.use(BootstrapVue);
// Vue.config.productionTip = false;
Vue.config.productionTip = false;

Vue.use(VueMq, {
  breakpoints: {
    sm: 960,
    md: 1920,
    lg: Infinity
  },  
  defaultBreakpoint: "lg"
});

const vm = new Vue({
  vuetify,
  store,
  router,
  axios,
  render: h => h(App)
}).$mount("#app");

export { vm };