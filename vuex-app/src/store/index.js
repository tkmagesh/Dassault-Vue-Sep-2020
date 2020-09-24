import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: () => {
    return {
      counter: 0
    };
  },
  mutations: {
    increment(state, delta) {
      state.counter += delta;
    },
    decrement(state, delta) {
      state.counter -= delta;
    }
  },
  actions: {
    incrementAction(context, delta) {
      context.commit("increment", delta);
    },
    decrementAction(context, delta) {
      context.commit("decrement", delta);
    }
  }
});

export default store;
