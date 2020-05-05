
<template>
  <div id="app">

    <AppNavigation></AppNavigation>
    <router-view></router-view>
    <AppFooter></AppFooter>
  </div>
</template>








<script>


import Navigation from './components/shared/Navigation.vue'
import Header from './components/shared/Header.vue'
import Footer from './components/shared/Footer.vue'



export default {
  name: 'App',


  components: {
    AppNavigation: Navigation,
    AppFooter: Footer,
    
  },



  data () {
    return {
      
    };
  },
  
  

  methods: {
      
    
  }
}; 

</script>





<style scoped>
 




</style>
