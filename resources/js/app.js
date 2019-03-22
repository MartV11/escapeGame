import Vue from 'vue'
import VueRouter from 'vue-router'
import $ from 'jquery'

Vue.use(VueRouter)

import test from "./components/test.vue";
import pageun from "./components/pageun.vue";
import pagedeux from "./components/pagedeux.vue"
import pagetrois from "./components/pagetrois.vue"
import pagequatre from "./components/pagequatre.vue"
import pagecinq from "./components/pagecinq.vue"


const router= new VueRouter({
  mode: 'history',
  routes: [
    {
      path:'/escapeGame/public/',
      name: 'home',
      component: test
    },
    {
      path:'/escapeGame/public/1',
      name: 'un',
      component: pageun
    },
    {
      path:'/escapeGame/public/2',
      name: 'deux',
      component: pagedeux
    },
    {
      path:'/escapeGame/public/3',
      name: 'trois',
      component: pagetrois
    },
    {
      path:'/escapeGame/public/4',
      name: 'quatre',
      component: pagequatre
    },
    {
      path:'/escapeGame/public/5',
      name: 'cinq',
      component: pagecinq
    },
  ]
});

const app = new Vue({
  el: '#app',
  compononent:{},
  router,
});
