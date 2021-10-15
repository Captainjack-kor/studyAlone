import Vue from "vue";
import VueRouter from "vue-router";

import Main from "../views/Main.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "Home",
      component: Main,
    },

    {
      path: "/login",
      name: "Loginpage",
      component: Login
    },

    {
      path: "*",
      component: Main,
    }
  ],
})

export default router;