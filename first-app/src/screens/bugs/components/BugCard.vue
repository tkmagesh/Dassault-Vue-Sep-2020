<template>
  <li>
    <span
      class="bugname"
      :class="{ closed: bug.isClosed }"
      @click="toggle(bug)"
      >{{ bug.name | trimText }}</span
    >
    <p>{{ bug.desc | trimText(80) }}</p>
    <div class="datetime">{{ bug.createdAt }}</div>
    <input
      type="button"
      value="Remove"
      :disabled="!bug.isClosed"
      @click="remove(bug)"
    />
    <br />
    <router-link :to="{ name: 'bugDetails', params: { id: bug.id } }">
      More ...
    </router-link>
  </li>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "BugCard",
  props: {
    bug: {
      type: Object,
      required: true
    }
  },
  methods: mapActions(["remove", "toggle"])
};
</script>

<style></style>
