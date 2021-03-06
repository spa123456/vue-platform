import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      name: "login",
      redirect: "/login",
    },
    {
      path: "/login",
      name: "login",
      component: () => import('./views/Login.vue')
    },
    {
      path: "/navigationMenu",
      name: "navigationMenu",
      redirect: 'businesspandect',
      component: () => import('./views/NavigationMenu.vue'),
      children: [{
          path: '/businesspandect',
          name: 'businesspandect',
          component: () => import('./components/reportquery/Businesspandect.vue')
        },
        {
          path: '/carmessage',
          name: 'carmessage',
          component: () => import('./components/carmanagment/Carmessage.vue')
        },
        {
          path: '/peoplemessage',
          name: 'peoplemessage',
          component: () => import('./components/carmanagment/Peoplemessage.vue')
        },
        {
          path: '/channelmessage',
          name: 'channelmessage',
          component: () => import('./components/carmanagment/Channelmessage.vue')
        },
        {
          path: '/includecar',
          name: 'includecar',
          component: () => import('./components/carmanagment/Includecar.vue')
        },
        {
          path: '/freecar',
          name: 'freecar',
          component: () => import('./components/carmanagment/Freecar.vue')
        },
        {
          path: '/blacklistcar',
          name: 'blacklistcar',
          component: () => import('./components/carmanagment/Blacklistcar.vue')
        },
        {
          path: '/stopcarcrcode',
          name: 'stopcarcrcode',
          component: () => import('./components/carmanagment/Stopcarcrcode.vue')
        },
        {
          path: '/cartype',
          name: 'cartype',
          component: () => import('./components/carmanagment/Cartype.vue')
        },
        {
          path: '/pallibleplatenumber',
          name: 'pallibleplatenumber',
          component: () => import('./components/carmanagment/Pallibleplatenumber.vue')
        },
        {
          path: '/parkstopcar',
          name: 'parkstopcar',
          component: () => import('./components/carmanagment/Parkstopcar.vue')
        },
        {
          path: '/includerule',
          name: 'includerule',
          component: () => import('./components/carmanagment/Includerule.vue')
        },
        {
          path: '/exceptionrecord',
          name: 'exceptionrecord',
          component: () => import('./components/carmanagment/Exceptionrecord.vue')
        },
        {
          path: '/businessinformation',
          name: 'businessinformation',
          component: () => import('./components/businessapplication/Businessinformation.vue')
        },
        {
          path: '/payrank',
          name: 'payrank',
          component: () => import('./components/businessapplication/Payrank.vue')
        },
        {
          path: '/presenter',
          name: 'presenter',
          component: () => import('./components/businessapplication/Presenter.vue')
        },
        {
          path: '/givingrecords',
          name: 'givingrecords',
          component: () => import('./components/businessapplication/Givingrecords.vue')
        },
        {
          path: '/rulesset',
          name: 'rulesset',
          component: () => import('./components/businessapplication/Rulesset.vue')
        },
        {
          path: '/incomestatistics',
          name: 'incomestatistics',
          component: () => import('./components/reportquery/Incomestatistics.vue')
        },
        {
          path: '/monthlystatistics',
          name: 'monthlystatistics',
          component: () => import('./components/reportquery/Monthlystatistics.vue')
        },
        {
          path: '/parkstatistics',
          name: 'parkstatistics',
          component: () => import('./components/reportquery/Parkstatistics.vue')
        },
        {
          path: '/watchrecords',
          name: 'watchrecords',
          component: () => import('./components/reportquery/Watchrecords.vue')
        },
        {
          path: '/refundmanagement',
          name: 'refundmanagement',
          component: () => import('./components/transactionmanagement/Refundmanagement.vue')
        },
        {
          path: '/savinginformation',
          name: 'savinginformation',
          component: () => import('./components/savingmanagement/Savinginformation.vue')
        },
        {
          path: '/rechargerecord',
          name: 'rechargerecord',
          component: () => import('./components/savingmanagement/Rechargerecord.vue')
        },
        {
          path: '/expensecalendar',
          name: 'expensecalendar',
          component: () => import('./components/savingmanagement/Expensecalendar.vue')
        },
        {
          path: '/operationlog',
          name: 'operationlog',
          component: () => import('./components/logquery/Operationlog.vue')
        },
        {
          path: '/loginlog',
          name: 'loginlog',
          component: () => import('./components/logquery/Loginlog.vue')
        },
        {
          path: '/sentrysystem',
          name: 'sentrysystem',
          component: () => import('./components/sentry-system/Sentrysystem.vue')
        },
        {
          path: '/carquery',
          name: 'carquery',
          component: () => import('./components/sentry-system/Carquery.vue')
        },
        {
          path: '/brandmanagement',
          name: 'brandmanagement',
          component: () => import('./components/permissions-management/institutional-framework/Brandmanagement.vue')
        },
        {
          path: '/unitmanagement',
          name: 'unitmanagement',
          component: () => import('./components/permissions-management/institutional-framework/Unitmanagement.vue')
        },
        {
          path: '/rolemanagement',
          name: 'rolemanagement',
          component: () => import('./components/permissions-management/institutional-framework/Rolemanagement.vue')
        },
        {
          path: '/unitrolemanagement',
          name: 'unitrolemanagement',
          component: () => import('./components/permissions-management/institutional-framework/Unitrolemanagement.vue')
        },
        {
          path: '/personnermanagement',
          name: 'personnermanagement',
          component: () => import('./components/permissions-management/institutional-framework/Personnermanagement.vue')
        },
        {
          path: '/sidemanagement',
          name: 'sidemanagement',
          component: () => import('./components/permissions-management/base-data-management/Sidemanagement.vue')
        },
        {
          path: '/functionmenu',
          name: 'functionmenu',
          component: () => import('./components/permissions-management/base-data-management/Functionmenu.vue')
        },
        {
          path: '/configurationparameter',
          name: 'configurationparameter',
          component: () => import('./components/permissions-management/base-data-management/Configurationparameter.vue')
        },
        {
          path: '/loginlogtwo',
          name: 'loginlogtwo',
          component: () => import('./components/permissions-management/base-data-management/Loginlog.vue')
        },
        {
          path: '/datalog',
          name: 'datalog',
          component: () => import('./components/permissions-management/base-data-management/Datalog.vue')
        },
        {
          path: '/stopcarpark',
          name: 'stopcarpark',
          component: () => import('./components/engineering-operations/engineering-management-sys/Stopcarpark.vue')
        },
        {
          path: '/channesettings',
          name: 'channesettings',
          component: () => import('./components/engineering-operations/engineering-management-sys/Channesettings.vue')
        },
        {
          path: '/hardwaresetup',
          name: 'hardwaresetup',
          component: () => import('./components/engineering-operations/engineering-management-sys/Hardwaresetup.vue')
        },
        {
          path: '/hardwarecheck',
          name: 'hardwarecheck',
          component: () => import('./components/engineering-operations/engineering-management-sys/Hardwarecheck.vue')
        },
        {
          path: '/boxmaintenance',
          name: 'boxmaintenance',
          component: () => import('./components/engineering-operations/engineering-management-sys/Boxmaintenance.vue')
        },
        {
          path: '/payparameters',
          name: 'payparameters',
          component: () => import('./components/engineering-operations/engineering-management-sys/Payparameters.vue')
        },
        {
          path: '/alipayBrandmanagement',
          name: 'alipayBrandmanagement',
          component: () => import('./components/engineering-operations/alipay-platform/Brandmanagement.vue')
        },
        {
          path: '/alipayUnitmanagement',
          name: 'alipayUnitmanagement',
          component: () => import('./components/engineering-operations/alipay-platform/Unitmanagement.vue')
        },
        {
          path: '/alipayCarmanagment',
          name: 'alipayCarmanagment',
          component: () => import('./components/engineering-operations/alipay-platform/Carmanagment.vue')
        },
        {
          path: '/suspicioncar',
          name: 'suspicioncar',
          component: () => import('./components/safetychengdu/Suspicioncar.vue')
        },
        {
          path: '/cartrack',
          name: 'cartrack',
          component: () => import('./components/safetychengdu/Cartrack.vue')
        },
        {
          path: '/realtimemonitoring',
          name: 'realtimemonitoring',
          component: () => import('./components/safetychengdu/Realtimemonitoring.vue')
        },
      ]

    }
  ]
});