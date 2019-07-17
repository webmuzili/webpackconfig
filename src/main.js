import Vue from 'vue'
import App from './App.vue'
import  router from './router.js'



var vm=new Vue({
    el:'#app',
    state:{
        msg:'123'
    },
    router,
   render:c=>c(App) 
})