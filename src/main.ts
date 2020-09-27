import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import request from './utils/request';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/CSS/reset.css';
import VueCompositionAPI from '@vue/composition-api';
Vue.use(ElementUI);
Vue.use(VueCompositionAPI);
Vue.use(request);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
