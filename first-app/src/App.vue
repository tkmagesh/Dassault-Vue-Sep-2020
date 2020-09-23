<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Have a good day!" /> -->
    <!-- <Calculator /> -->
    <BugTracker />
  </div>
</template>

<script>
/* import HelloWorld from "./components/HelloWorld.vue"; */
//import Calculator from "./components/Calculator.vue";
import BugTracker from "./screens/bugs";

export default {
  name: "App",
  components: {
    /* HelloWorld, */
    //Calculator
    BugTracker
  }
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
