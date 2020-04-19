// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

// require("@rails/ujs").start()
// require("@rails/activestorage").start()
// require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

import Vue from 'vue'
import App from '../app.vue'
import router from '../router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import PDatePicker from 'vue2-persian-datepicker'
Vue.component('pdatepicker', PDatePicker)

// import '../styles/style.css'


Vue.use(ElementUI);

document.addEventListener('DOMContentLoaded', () => {
// document.body.appendChild(document.createElement('app'))
const app = new Vue({
App,
router,
render: createEl => createEl(App),
}).$mount('#app')

console.log("")
})