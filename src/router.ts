import Vue from 'vue';
import Router from 'vue-router';
import Galleria from './views/Galleria.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/galleria',
      name: 'galleria',
      component: Galleria,
    },
    {
      path: '/blogs',
      name: 'blogs',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Blogs.vue'),
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import('./views/Todo.vue'),
    },
    {
      path: '/',
      redirect: '/galleria',
    },
  ],
});
