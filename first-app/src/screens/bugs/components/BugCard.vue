<template>
  <li>
    <span class="bugname" :class="{closed : bug.isClosed}" @click="onBugNameClick()">{{bug.name}}</span>
    <p>{{bug.desc}}</p>
    <div class="datetime">{{bug.createdAt}}</div>
    <input type="button" value="Remove" :disabled="!bug.isClosed" @click="onRemoveClick(bug)" />
  </li>
</template>

<script>
export default {
  name: "BugCard",
  props: {
    bug: Object
  },
  methods: {
    onBugNameClick: function() {
      this.bug.isClosed = !this.bug.isClosed;
    },
    onRemoveClick: function(bug) {
      this.$emit("remove", bug);
    }
  }
};
</script>

<style>
</style>