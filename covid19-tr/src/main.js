import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vSelect from "vue-select";

import {routes} from './routes';

Vue.use(VueRouter);
Vue.component("v-select", vSelect);

const router = new VueRouter({
  routes,
  mode: 'history',
});

new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
