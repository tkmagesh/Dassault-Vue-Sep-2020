import Vue from "vue";
import Vuex from "vuex";
import bugApi from "../screens/bugs/services/bugApi";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: function() {
    return {
      list: []
    };
  },
  mutations: {
    initBugs: function(state, bugs) {
      state.list = bugs;
    }
  },
  actions: {
    loadBugs: async function(context) {
      const bugs = await bugApi.getAll();
      context.commit("initBugs", bugs);
    }
  }
});

export default store;
