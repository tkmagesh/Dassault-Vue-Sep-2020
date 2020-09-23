<template>
  <div>
    <h1>Bug Tracker</h1>
    <hr />
    <section class="stats">
      <span class="closed">1</span>
      <span>/</span>
      <span>2</span>
    </section>
    <section class="sort">
      <label for>Order By :</label>
      <select name id>
        <option value></option>
        <option value></option>
        <option value></option>
      </select>
      <label for>descending ? :</label>
      <input type="checkbox" name id />
    </section>
    <section class="edit">
      <div class="field">
        <label for>Bug Name :</label>
        <input type="text" name id />
      </div>
      <div class="field">
        <label for>Description :</label>
        <textarea rows="5" cols="80"></textarea>
      </div>
      <input type="button" value="Add New" />
    </section>
    <section class="list">
      <ol>
        <li>
          <span class="bugname closed">[This is bug - 1]</span>
          <p>
            Minim sint officia officia sit officia enim commodo non nostrud duis.
            Qui dolore Lorem labore nisi. Nostrud exercitation nisi aute laborum
            nulla nostrud eiusmod dolore duis et.
          </p>
          <div class="datetime">[Created At]</div>
          <input type="button" value="Remove" />
        </li>
        <li>
          <span class="bugname">[This is bug - 2]</span>
          <p>
            Minim sint officia officia sit officia enim commodo non nostrud duis.
            Qui dolore Lorem labore nisi. Nostrud exercitation nisi aute laborum
            nulla nostrud eiusmod dolore duis et.
          </p>
          <div class="datetime">[Created At]</div>
          <input type="button" value="Remove" />
        </li>
      </ol>
      <input type="button" value="Remove Closed" />
    </section>
  </div>
</template>

<script>
export default {
  name: "BugTracker"
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