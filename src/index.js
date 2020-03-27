import "babel-polyfill";
import Vue from 'vue';
import App from './App';
import ELEMENT from 'element-ui';
import store from "@/store/index";
import router from "@/router/index";
import api from "@/utils/api";
import createDialog from "@/utils/createDialog";
import 'normalize.css'; // Note this
import "./index.scss";
import "element-ui/lib/theme-chalk/index.css";

Vue.prototype.$api = api;
Vue.use(ELEMENT, {
  size: "small"
})
Vue.use(createDialog);




new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
});

if (module.hot) {
  module.hot.accept();
}