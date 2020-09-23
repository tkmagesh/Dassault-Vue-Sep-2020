<template>
  <div>
    <h1>Bug Tracker</h1>
    <hr />
    <BugStats :data="list" />
    <BugSort />
    <BugEdit @newBug="onNewBugAdded" />
    <section class="list">
      <ol>
        <BugCard
          v-for="bug in list"
          :key="bug.id"
          :bug="bug"
          @remove="onRemove"
        />
      </ol>
      <input type="button" value="Remove Closed" @click="onRemoveClosedClick" />
    </section>
  </div>
</template>

<script>
import BugSort from "./components/BugSort.vue";
import BugStats from "./components/BugStats.vue";
import BugEdit from "./components/BugEdit.vue";
import BugCard from "./components/BugCard.vue";
import bugApi from "./services/bugApi";

export default {
  name: "BugTracker",
  components: {
    BugSort,
    BugStats,
    BugEdit,
    BugCard
  },
  data: function() {
    return {
      newBugData: {
        name: "",
        desc: "",
        isClosed: false
      },
      list: []
    };
  },
  mounted: function() {
    bugApi.getAll().then(bugs => (this.list = bugs));
  },
  methods: {
    onBugNameClick: function(bug) {
      bug.isClosed = !bug.isClosed;
    },
    onRemove: function(bugToRemove) {
      //this.list.splice(this.list.indexOf(bugToRemove), 1);
      this.list = this.list.filter(bug => bug.id !== bugToRemove.id);
    },
    onRemoveClosedClick: function() {
      this.list = this.list.filter(bug => !bug.isClosed);
    },
    onNewBugAdded: function(newBugData) {
      const newBugId =
        this.list.reduce(
          (result, bug) => (result > bug.id ? result : bug.id),
          0
        ) + 1;
      const newBug = {
        ...newBugData,
        id: newBugId,
        createdAt: new Date()
      };
      this.list.push(newBug);
    }
  },
  computed: {
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
