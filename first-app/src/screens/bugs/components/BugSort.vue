<template>
  <section class="sort">
    <label for>Order By :</label>
    <select name id>
      <option>--Select--</option>
      <option value>Id</option>
      <option value>Name</option>
      <option value>Status</option>
      <option value>Created</option>
    </select>
    <label for>Descending ? :</label>
    <input type="checkbox" name id />
  </section>
</template>

<script>
export default {
  name: "BugSort"
};
</script>

<style>
</style>