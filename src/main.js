import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import echarts from 'echarts';

/*
**  @description 防止切换导航是报没有用的错误
**  @param {} 
**  @return 
**  @author shipingan
*/
import Router from 'vue-router';
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.prototype.$echarts = echarts;
Vue.prototype.$axios = axios;
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
