import Vue from "vue";
import VueRouter from "vue-router";
import Ludus from "../views/Ludus.vue";
import Emperor from "../views/Emperor.vue";
import axios from "axios";

Vue.use(VueRouter);

const base = axios.create({
  baseURL: 'http://localhost:8080/api/gladiators'
});

Vue.prototype.$http = base;

const routes = [
  {
    path: "/",
    name: "Ludus",
    component: Ludus
  },
  {
    path: "/Emperor",
    name: "Emperor",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Emperor
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
