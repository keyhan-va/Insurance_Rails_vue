import Vue from 'vue'
import VueRouter from 'vue-router';


import Navigation from '../components/shared/Navigation.vue';
import Header from '../components/shared/Header.vue';
import Home from '../Pages/Home.vue';
import ThirdPartyInsurance from '../Pages/ThirdPartyInsurance.vue';
import CarBodyInsurance from '../Pages/CarBodyInsurance.vue';
import MotorcycleInsurance from '../Pages/MotorcycleInsurance.vue';
import AddInsurance from '../Pages/AddInsurance.vue';
import Login from '../Pages/Login.vue';
import Register from '../Pages/Register.vue';



Vue.use(VueRouter);

export default new VueRouter({
    // mode: 'history',
    routes: [

        {
            path: '/',
            name: 'home',
            component: Home
        },

        {
            path: '/header',
            name: 'header',
            component: Header
        },

        {
            path: '/ThirdPartyInsurance',
            name: 'ThirdPartyInsurance',
            component: ThirdPartyInsurance
        },

        {
            path: '/CarBodyInsurance',
            name: 'CarBodyInsurance',
            component: CarBodyInsurance
        },

        {
            path: '/MotorcycleInsurance',
            name: 'MotorcycleInsurance',
            component: MotorcycleInsurance
        },

        {
            path: '/AddInsurance',
            name: 'AddInsurance',
            component: AddInsurance,
            
        },

        {
            path: '/Login',
            name: 'Login',
            component: Login
        },

        {
            path: '/Register',
            name: 'Register',
            component: Register
        },

        
        
    ],
     
})

