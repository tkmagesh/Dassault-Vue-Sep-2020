<template>
  <div>
    <div>Hi {{userName}}!</div>
    <input type="button" value="Change User" />
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: function() {
    return {
      userName: "Magesh"
    };
  },

  props: {
    msg: String
  },
  created: function() {
    /* setTimeout(() => {
      this.userName = "John";
    }, 10000); */
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
