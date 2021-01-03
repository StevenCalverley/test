import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Mistify from "mistify";

import "./assets/css/tailwind.css";

Vue.config.productionTip = false;

Vue.use(Mistify);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
