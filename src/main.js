import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import fa from './components/globals/Fa.vue';
import VueLodash from 'vue-lodash';
import lodash from 'lodash';
import VueSweetalert2 from 'vue-sweetalert2';

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';
//import '@sweetalert2/themes/dark/dark.css';

Vue.use(VueSweetalert2);


Vue.use(VueLodash, { name: 'custom', lodash: lodash });

Vue.config.productionTip = false;

Vue.component('fa', fa);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');