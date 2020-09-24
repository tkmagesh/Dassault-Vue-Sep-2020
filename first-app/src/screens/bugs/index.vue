<template>
  <div>
    <router-link to="/new">Create New</router-link>
    <BugStats :data="list" />
    <BugSort />
    <section class="list">
      <ol>
        <BugCard v-for="bug in list" :key="bug.id" :bug="bug" />
      </ol>
      <input type="button" value="Remove Closed" @click="removeClosed" />
    </section>
  </div>
</template>

<script>
import BugSort from "./components/BugSort.vue";
import BugStats from "./components/BugStats.vue";
import BugCard from "./components/BugCard.vue";

import { mapState, mapActions } from "vuex";

export default {
  name: "BugTracker",
  components: {
    BugSort,
    BugStats,
    BugCard
  },
  data: function() {
    return {
      newBugData: {
        name: "",
        desc: "",
        isClosed: false
      }
    };
  },
  mounted: async function() {
    this.loadBugs();
  },
  methods: mapActions(["loadBugs", "removeClosed"]),
  computed: {
    ...mapState({
      list: state => state.list
    }),
    truncatedDesc: function(data) {
      return data.length <= 80 ? data : data.substr(0, 80) + "...";
    }
  }
};
</script>

<style>
body {
  margin: 50px;
}
section {
  margin-bottom: 10px;
}
.stats,
.bugname {
  font-size: 18pt;
}
.bugname {
  cursor: pointer;
}
.closed {
  text-decoration: line-through;
  font-style: italic;
  color: red;
  font-weight: bold;
}
ol {
  width: 500px;
  list-style: none;
  -webkit-padding-start: 0px;
}
li {
  margin-bottom: 10px;
  border: 1px solid gray;
  background-color: #e7e7e7;
  padding: 10px;
  border-radius: 5px;
}
.field > label {
  display: block;
  margin-bottom: 3px;
}
</style>
