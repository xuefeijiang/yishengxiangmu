import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import Home from '../pages/Home'
import Doctor from '../pages/Doctor'
import List from '../pages/List'
import Zixun from '../pages/Zixun'
 import Fuwu from '../pages/Fuwu'
import Error from '../components/Error'
import Login from '../pages/Login'
import Reg from '../pages/Reg'

let routes=[
    {path:'/home',component:Home},
    {path:'/Login',component:Login},
    {path:'/Reg',component:Reg},
    {path:'/Doctor',component:Doctor},
    {path:'/List',component:List},
     {path:'/Fuwu',component:Fuwu},
    {path:'/Zixun',component:Zixun},
    // {name:'detail', path:'/detail/:id',component:Detail},
    {path:'/',redirect:'/home'},
    {path:'*',component:Error},
];

let router= new VueRouter({routes});

export default router;