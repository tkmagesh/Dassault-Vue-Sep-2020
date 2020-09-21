<template>
  <div>
    <label>User Name :</label>
    <input type="text" v-model="userName" />
    <input type="button" value="Change User" @click="onChangeUser()" />
    <div>Hi {{userName}}!</div>
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
  methods: {
    onChangeUser: function() {
      //console.log("Change user action triggered");
      this.userName = prompt("Enter the user name :");
    }
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
