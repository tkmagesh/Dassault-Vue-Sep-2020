import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import BugTracker from "./screens/bugs";
import BugEdit from "./screens/bugs/components/BugEdit.vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    name: "bugs",
    path: "/bugs",
    component: BugTracker
  },
  {
    name: "default",
    path: "/",
    redirect: "/bugs"
  },
  {
    name: "bugEdit",
    path: "/new",
    component: BugEdit
  }
];

const router = new VueRouter({
  routes
});

Vue.filter("trimText", function(text, maxLength = 40) {
  return text.length <= maxLength ? text : text.substr(0, maxLength) + "...";
});

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
