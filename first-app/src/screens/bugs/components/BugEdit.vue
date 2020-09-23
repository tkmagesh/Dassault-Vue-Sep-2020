<template>
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
</template>

<script>
export default {
  name: "BugEdit",
  data: function() {
    return {
      newBugData: {
        name: "",
        desc: "",
        isClosed: false
      }
    };
  },
  methods: {
    onAddNewClick: function() {
      this.$emit("newBug", this.newBugData);
    }
  }
};
</script>

<style>
</style>