import Vue from "vue";
import Vuex from "vuex";
import bugActions from "../screens/bugs/actions";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: function() {
    return {
      list: [],
      bug: {}
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
    },
    loadBug: function(state, bug) {
      state.bug = bug;
    }
  },
  actions: bugActions
});

export default store;
