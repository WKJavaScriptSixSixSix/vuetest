import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import Login from '../components/Login';
import Error404 from '../components/Error404';
import index from '../components/index.vue';
import mymsg from '../components/mymsg.vue';

let routes=[
    {path:'/Login',component:Login},
    {path:'/index',component:index},
    {path:'/',component:index},
    {path:'/mymsg',component:mymsg},
    {path:'*',component:Error404}
];

let router=new VueRouter({
    routes
})

export default router;