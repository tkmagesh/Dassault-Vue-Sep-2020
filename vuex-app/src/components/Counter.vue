<template>
  <div>
    <label>Delta : </label>
    <input type="number" v-model.number="delta" />
    <br />
    <input type="button" value="Decrement" @click="decrementAction(delta)" />
    <span> [{{ value }}] </span>
    <input type="button" value="Increment" @click="incrementAction(delta)" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Counter",
  data: function() {
    return {
      delta: 0
    };
  },
  computed: mapState({
    value: state => state.counter
  }),
  methods: {
    ...mapActions(["incrementAction", "decrementAction"])
  }
};
</script>

<style></style>
