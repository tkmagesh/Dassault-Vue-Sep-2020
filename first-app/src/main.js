import Vue from "vue";
import App from "./App.vue";
import store from "./store";

Vue.filter("trimText", function(text, maxLength = 40) {
  return text.length <= maxLength ? text : text.substr(0, maxLength) + "...";
});

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
