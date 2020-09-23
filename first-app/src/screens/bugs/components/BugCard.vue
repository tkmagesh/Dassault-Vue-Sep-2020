<template>
  <li>
    <span
      class="bugname"
      :class="{ closed: bug.isClosed }"
      @click="onBugNameClick()"
      >{{ bug.name | trimText }}</span
    >
    <p>{{ bug.desc | trimText(80) }}</p>
    <div class="datetime">{{ bug.createdAt }}</div>
    <input
      type="button"
      value="Remove"
      :disabled="!bug.isClosed"
      @click="onRemoveClick(bug)"
    />
  </li>
</template>

<script>
import bugApi from "../services/bugApi";

export default {
  name: "BugCard",
  props: {
    bug: {
      type: Object,
      required: true
    }
  },
  methods: {
    onBugNameClick: function() {
      this.bug.isClosed = !this.bug.isClosed;
      bugApi.save(this.bug);
    },
    onRemoveClick: function(bug) {
      bugApi.remove(bug).then(() => {
        this.$emit("remove", bug);
      });
    }
  } /* ,
  filters: {
    trimText: function(text, maxLength = 40) {
      return text.length <= maxLength
        ? text
        : text.substr(0, maxLength) + "...";
    }
  } */
};
</script>

<style></style>
