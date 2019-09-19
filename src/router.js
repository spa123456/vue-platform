import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "login",
      redirect:"/login",
    },
    {
      path: "/login",
      name: "login",
      component: () => import('./views/Login.vue')
    },
    {
      path: "/navigationMenu",
      name: "navigationMenu",
      redirect:'businesspandect',
      component: () => import('./views/NavigationMenu.vue') ,
      children:[
        {
          path:'/businesspandect',
          name:'businesspandect',
          component:() => import('./components/reportquery/Businesspandect.vue')
        },
        {
          path:'/carmessage',
          name:'carmessage',
          component:() => import('./components/carmanagment/Carmessage.vue')
        },
        {
          path:'/peoplemessage',
          name:'peoplemessage',
          component:() => import('./components/carmanagment/Peoplemessage.vue')
        },
        {
          path:'/channelmessage',
          name:'channelmessage',
          component:() => import('./components/carmanagment/Channelmessage.vue')
        },
        {
          path:'/includecar',
          name:'includecar',
          component:() => import('./components/carmanagment/Includecar.vue')
        },
        {
          path:'/freecar',
          name:'freecar',
          component:() => import('./components/carmanagment/Freecar.vue')
        },
        {
          path:'/blacklistcar',
          name:'blacklistcar',
          component:() => import('./components/carmanagment/Blacklistcar.vue')
        },
        {
          path:'/stopcarcrcode',
          name:'stopcarcrcode',
          component:() => import('./components/carmanagment/Stopcarcrcode.vue')
        },
      ]
      
    }
  ]
});
