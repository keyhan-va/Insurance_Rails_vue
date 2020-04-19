import Vue from 'vue'
import VueRouter from 'vue-router';


import Navigation from '../components/shared/Navigation.vue';
import Header from '../components/shared/Header.vue';
import Home from '../components/Pages/Home.vue';
import ThirdPartyInsurance from '../components/Pages/ThirdPartyInsurance.vue';
import CarBodyInsurance from '../components/Pages/CarBodyInsurance.vue';
import MotorcycleInsurance from '../components/Pages/MotorcycleInsurance.vue';


// import { Header } from 'element-ui';


Vue.use(VueRouter);

export default new VueRouter({
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


        
    ],
    // mode: 'history'
    
})

