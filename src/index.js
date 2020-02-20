import Vue from 'vue';
import App from './App';
import Element from 'element-ui'
import 'normalize.css'; // Note this
import "./index.scss";
import "element-ui/lib/theme-chalk/index.css";


Vue.use(Element, {
  size: "small"
})



new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
});

if (module.hot) {
  module.hot.accept();
}