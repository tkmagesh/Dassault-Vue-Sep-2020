<template>
  <section class="stats">
    <span class="closed">{{closedCount}}</span>
    <span>/</span>
    <span>{{data.length}}</span>
  </section>
</template>

<script>
export default {
  name: "BugStats",
  props: {
    data: Array
  },
  computed: {
    closedCount: function() {
      //return this.list.filter(bug => bug.isClosed).length;
      return this.data.reduce(
        (result, bug) => (bug.isClosed ? result + 1 : result),
        0
      );
    }
  }
};
</script>

<style>
</style>