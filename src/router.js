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
        {
          path:'/cartype',
          name:'cartype',
          component:() => import('./components/carmanagment/Cartype.vue')
        },
        {
          path:'/pallibleplatenumber',
          name:'pallibleplatenumber',
          component:() => import('./components/carmanagment/Pallibleplatenumber.vue')
        },
        {
          path:'/parkstopcar',
          name:'parkstopcar',
          component:() => import('./components/carmanagment/Parkstopcar.vue')
        },
        {
          path:'/includerule',
          name:'includerule',
          component:() => import('./components/carmanagment/Includerule.vue')
        },
        {
          path:'/exceptionrecord',
          name:'exceptionrecord',
          component:() => import('./components/carmanagment/Exceptionrecord.vue')
        },
        {
          path:'/businessinformation',
          name:'businessinformation',
          component:() => import('./components/businessapplication/Businessinformation.vue')
        },
        {
          path:'/payrank',
          name:'payrank',
          component:() => import('./components/businessapplication/Payrank.vue')
        },
        {
          path:'/presenter',
          name:'presenter',
          component:() => import('./components/businessapplication/Presenter.vue')
        },
        {
          path:'/givingrecords',
          name:'givingrecords',
          component:() => import('./components/businessapplication/Givingrecords.vue')
        },
        {
          path:'/rulesset',
          name:'rulesset',
          component:() => import('./components/businessapplication/Rulesset.vue')
        },
        {
          path:'/incomestatistics',
          name:'incomestatistics',
          component:() => import('./components/reportquery/Incomestatistics.vue')
        },
        {
          path:'/monthlystatistics',
          name:'monthlystatistics',
          component:() => import('./components/reportquery/Monthlystatistics.vue')
        },
        {
          path:'/parkstatistics',
          name:'parkstatistics',
          component:() => import('./components/reportquery/Parkstatistics.vue')
        },
        {
          path:'/watchrecords',
          name:'watchrecords',
          component:() => import('./components/reportquery/Watchrecords.vue')
        },
        {
          path:'/refundmanagement',
          name:'refundmanagement',
          component:() => import('./components/transactionmanagement/Refundmanagement.vue')
        },
        {
          path:'/savinginformation',
          name:'savinginformation',
          component:() => import('./components/savingmanagement/Savinginformation.vue')
        },
        {
          path:'/rechargerecord',
          name:'rechargerecord',
          component:() => import('./components/savingmanagement/Rechargerecord.vue')
        },
        {
          path:'/expensecalendar',
          name:'expensecalendar',
          component:() => import('./components/savingmanagement/Expensecalendar.vue')
        },
      ]
      
    }
  ]
});
