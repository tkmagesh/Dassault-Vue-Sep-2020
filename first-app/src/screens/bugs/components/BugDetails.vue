<template>
  <div>
    <h3>{{ bug.name }}</h3>
    <hr />
    <p>
      {{ bug.desc }}
    </p>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: mapState({
    bug: state => state.bug
  }),
  methods: mapActions(["loadById"]),
  mounted: function() {
    this.loadById(this.$route.params.id);
  }
};
</script>

<style></style>
