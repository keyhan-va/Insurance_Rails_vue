<template>
    <div>
        <h1>This is a Home.vue</h1>
        <h1> {{ welcome }} </h1>
    </div>
</template>




<script>
export default {
    // name: 'app-header'
    data () {
        return {
            
        }
    },
    computed: {
        welcome(){
            // return this.$store.getters.welcome
        }
    }
}
</script>