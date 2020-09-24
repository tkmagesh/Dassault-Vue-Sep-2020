<template>
  <div id="app">
    <h1>Bug Tracker - [ {{ bug.name }} ]</h1>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "App",
  computed: mapState({
    bug: state => state.bug
  }),
  components: {}
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
