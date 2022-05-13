import Vue from 'vue';
import App from './App.vue';

import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

import 'primevue/resources/themes/lara-light-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

Vue.config.productionTip = false;

Vue.use(PrimeVue, { ripple: true, inputStyle: 'filled' });

Vue.component("InputText", InputText);
Vue.component("Button", Button);

new Vue({
  render: h => h(App),
}).$mount('#app')
