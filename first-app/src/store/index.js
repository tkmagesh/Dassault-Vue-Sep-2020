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
    },
    removeBug: function(state, bugToRemove) {
      state.list.splice(state.list.indexOf(bugToRemove), 1);
    },
    replaceBug: function(state, updatedBug) {
      state.list = state.list.map(bug =>
        bug.id === updatedBug.id ? updatedBug : bug
      );
    }
  },
  actions: {
    loadBugs: ,
    addNew: ,
    remove: ,
    toggle: ,
    removeClosed: async function(context) {
      const currentBugs = context.state.list;
      currentBugs
        .filter(bug => bug.isClosed)
        .forEach(async closedBug => {
          await bugApi.remove(closedBug);
          context.commit("removeBug", closedBug);
        });
    }
  }
});

export default store;
