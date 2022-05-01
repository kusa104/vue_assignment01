<template>
  <v-app id="app"> 
    <HeaderView />     
    <NavView />      
    <MainView />   
  </v-app>
</template>

<script>
import NavView from "./views/layout/NavView.vue";
import HeaderView from "./views/layout/HeaderView.vue";
import MainView from "./views/layout/MainView.vue";
import { mapGetters } from "vuex";

export default {
    name: "App",
    data: () => ({}),
    components: {
        NavView,
        HeaderView,
        MainView,
    },
    computed : {
        ...mapGetters('page',['menuList'])
    },
    // created() {
    //     if(window.location.pathname === '/'){
    //         this.$router.push(this.menuList.home.path)
    //     }
    // }
};
</script>
