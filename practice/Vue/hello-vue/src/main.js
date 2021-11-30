import Vue from 'vue'
import App from './App.vue'
import store from "../src/store/store.js";
import vuetify from "./plugins/vuetify.js";
import router from "../src/router/router";
import VueMq from "vue-mq";
import BootstrapVue from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


Vue.use(BootstrapVue);
Vue.config.productionTip = false
Vue.use(VueMq, {
  breakpoints: {
    sm: 960,
    md: 1920,
    lg: Infinity
  },  
  defaultBreakpoint: "lg"
});

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
