import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/projectList',
    name: 'ProjectList',
    component: () =>
      import(
        /* webpackChunkName: 'ProjectList' */
        '../views/projects/projectList.vue'
      ),
  },
  {
    path: '/projectDetail',
    name: 'ProjectDetail',
    component: () =>
      import(
        /* webpackChunkName: 'ProjectDetail' */
        '../views/projects/projectDetail.vue'
      ),
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

export default router;
