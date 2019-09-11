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
      ]
      
    }
  ]
});
