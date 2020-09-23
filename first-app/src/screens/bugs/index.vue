<template>
  <div>
    <h1>Bug Tracker</h1>
    <hr />
    <BugStats :data="list" />
    <BugSort />

    <section class="edit">
      <div class="field">
        <label for>Bug Name :</label>
        <input type="text" v-model="newBugData.name" />
      </div>
      <div class="field">
        <label for>Description :</label>
        <textarea rows="5" cols="80" v-model="newBugData.desc"></textarea>
      </div>
      <div class="field">
        <label for>Closed ? :</label>
        <input type="checkbox" v-model="newBugData.isClosed" />
      </div>
      <input type="button" value="Add New" @click="onAddNewClick" />
    </section>
    <section class="list">
      <ol>
        <li v-for="bug in list" :key="bug.id">
          <span
            class="bugname"
            :class="{closed : bug.isClosed}"
            @click="onBugNameClick(bug)"
          >{{bug.name}}</span>
          <p>{{bug.desc}}</p>
          <div class="datetime">{{bug.createdAt}}</div>
          <input type="button" value="Remove" :disabled="!bug.isClosed" @click="onRemoveClick(bug)" />
        </li>
      </ol>
      <input type="button" value="Remove Closed" @click="onRemoveClosedClick" />
    </section>
  </div>
</template>

<script>
import BugSort from "./components/BugSort.vue";
import BugStats from "./components/BugStats.vue";

export default {
  name: "BugTracker",
  components: {
    BugSort,
    BugStats
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
    onRemoveClick: function(bugToRemove) {
      //this.list.splice(this.list.indexOf(bugToRemove), 1);
      this.list = this.list.filter(bug => bug.id !== bugToRemove.id);
    },
    onRemoveClosedClick: function() {
      this.list = this.list.filter(bug => !bug.isClosed);
    },
    onAddNewClick: function() {
      const newBugId =
        this.list.reduce(
          (result, bug) => (result > bug.id ? result : bug.id),
          0
        ) + 1;
      const newBug = {
        ...this.newBugData,
        id: newBugId,
        createdAt: new Date()
      };
      this.list.push(newBug);
    }
  },
  computed: {
    truncatedDesc: function(data) {
      return data.length <= 80 ? data : data.substr(0, 80) + "...";
    },
    closedCount: function() {
      //return this.list.filter(bug => bug.isClosed).length;
      return this.list.reduce(
        (result, bug) => (bug.isClosed ? result + 1 : result),
        0
      );
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