
import Vue from 'vue'
import App from '../app.vue'
import router from '../router'
import StoreData from '../store/store'
import Vuex from 'vuex'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';




import PDatePicker from 'vue2-persian-datepicker'
Vue.component('pdatepicker', PDatePicker)


window.axios=axios;
axios.defaults.baseURL = 'http://localhost:3000/api/v1';



Vue.use(Vuex)
Vue.use(ElementUI);

const store = new Vuex.Store(StoreData);

document.addEventListener('DOMContentLoaded', () => {
// document.body.appendChild(document.createElement('app'))
const app = new Vue({
App,
router,
store,
render: createEl => createEl(App),
}).$mount('#app')

console.log("")
})