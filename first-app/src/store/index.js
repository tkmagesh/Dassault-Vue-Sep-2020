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
    },
    addBug: function(state, newBug) {
      state.list.push(newBug);
    }
  },
  actions: {
    loadBugs: async function(context) {
      const bugs = await bugApi.getAll();
      context.commit("initBugs", bugs);
    },
    addNew: async function(context, newBugData) {
      const newBug = await bugApi.save(newBugData);
      context.commit("addBug", newBug);
    }
  }
});

export default store;
