import Vue from 'vue';
import App from './App.vue';
import 'normalize.css';
import './utils/element';
Vue.config.productionTip = false;

Vue.prototype.$ELEMENT = { size: 'small' };
new Vue({
  render: (h) => h(App),
}).$mount('#app');
