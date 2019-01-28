import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home/Home.vue";
import Menu from "./views/Menu/Menu.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/menu",
      name: "menu",
      component: Menu
    }
  ]
});
