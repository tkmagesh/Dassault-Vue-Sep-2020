<template>
  <div>
    <h1>Bug Tracker</h1>
    <hr />
    <BugStats :data="list" />
    <BugSort />
    <BugEdit @newBug="onNewBugAdded" />
    <section class="list">
      <ol>
        <BugCard v-for="bug in list" :key="bug.id" :bug="bug" @remove="onRemove" />
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
      list: [
        {
          id: 1,
          name: "Server communication failure",
          desc:
            "Aliqua non aliquip id anim labore culpa eiusmod magna voluptate exercitation excepteur mollit. Consequat ipsum consectetur tempor cupidatat non enim ex. Amet non excepteur eu laboris id dolor ad magna ut sit adipisicing duis. Magna ad velit nulla laboris proident in. Cillum ea dolor occaecat sunt ullamco anim consectetur qui elit minim qui officia officia. Labore in aliqua veniam est ex minim excepteur ut culpa nulla exercitation laboris do eiusmod. Officia velit dolore Lorem culpa fugiat mollit dolor voluptate eu non tempor.",
          isClosed: true,
          createdAt: new Date()
        },
        {
          id: 2,
          name: "User actions not recognized",
          desc:
            "Sint adipisicing officia laboris nulla qui elit dolore adipisicing occaecat ut. Aute commodo laboris exercitation qui irure magna et pariatur occaecat anim aute. Lorem occaecat non irure culpa laboris aliquip nulla sit anim dolor. Adipisicing commodo culpa aliquip dolore do. Ipsum quis fugiat laboris magna qui reprehenderit nisi amet commodo voluptate consequat duis. Ullamco exercitation eu id mollit velit eiusmod occaecat velit veniam non nisi sit.",
          isClosed: true,
          createdAt: new Date()
        }
      ]
    };
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