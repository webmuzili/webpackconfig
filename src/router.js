import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from './component/login.vue'
import List from './component/list.vue'

import Dream from './subme/dream.vue'
import Go from './subme/go.vue'

Vue.use(VueRouter)

var router=new VueRouter({
    routes:[
     {path:"/login",component:Login,
        children:[
            {path:'dream',component:Dream},
            {path:'go',component:Go}
        ]
    },
     {path:"/list",component:List}
    ]
})
export default router