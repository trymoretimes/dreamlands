import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import VueMaterial from 'vue-material';

import App from '@/App';
import components from '@/components';
import router from '@/router';
import store from '@/store';
import apolloMixin from '@/apollo';
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import solid from '@fortawesome/fontawesome-free-solid';

import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import '@/style/index.scss';

Vue.config.productionTip = false;

sync(store, router);
router.afterEach(() => {
  store.commit('pickIcon');
  const focused = document.querySelector(':focus');
  if (focused) {
    focused.blur();
  }
});

Object.keys(components).forEach(key => Vue.component(key, components[key]));
Vue.use(VueMaterial);

fontawesome.library.add(brands, solid);
window.v = new Vue(Object.assign({
  el: '#app',
  router,
  store,
  render: h => h(App),
}, apolloMixin));
