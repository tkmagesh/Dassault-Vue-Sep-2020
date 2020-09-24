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
import { mapActions } from "vuex";

export default {
  name: "BugEdit",
  data: function() {
    return {
      newBugData: {
        id: 0,
        name: "",
        desc: "",
        createdAt: new Date(),
        isClosed: false
      }
    };
  },
  methods: {
    ...mapActions(["addNew"]),
    onAddNewClick: async function() {
      this.addNew(this.newBugData);
      this.$router.push({ path: "/bugs" });
    }
  }
};
</script>

<style></style>
