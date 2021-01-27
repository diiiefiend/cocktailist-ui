import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Browse from "../views/Browse.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Browse", // make the default view "browse"
    component: Browse
  },
  {
    path: "/login",
    name: "Log In",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/LogIn.vue")
  },
  {
    path: "/cocktail/:id",
    props: true,
    name: "Cocktail",
    component: () =>
      import(/* webpackChunkName: "cocktail" */ "../views/Cocktail.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
