<template>
  <div>
    <h3>Calculator</h3>
    <input type="number" v-model.number="number1" />
    <select @change="onCalculate($event)">
      <option value>- select -</option>
      <option value="add">Add</option>
      <option value="subtract">Subtract</option>
      <option value="multiply">Multiply</option>
      <option value="divide">Divide</option>
    </select>
    <input type="number" v-model.number="number2" />
    <br />
    <div
      v-bind:class="{ 
        positive : result >= 0, 
        negative : result < 0
      }"
    >{{resultToDisplay}}</div>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data: function() {
    return {
      number1: 0,
      number2: 0,
      result: 0
    };
  },
  computed: {
    resultToDisplay: function() {
      if (this.result < 0) {
        return `(${this.result})`;
      } else {
        return this.result;
      }
    }
  },
  methods: {
    onCalculate: function(evt) {
      switch (evt.target.value) {
        case "add":
          this.result = this.number1 + this.number2;
          break;
        case "subtract":
          this.result = this.number1 - this.number2;
          break;
        case "multiply":
          this.result = this.number1 * this.number2;
          break;
        case "divide":
          this.result = this.number1 / this.number2;
          break;

        default:
          break;
      }
    }
  }
};
</script>

<style>
.positive {
  color: green;
}
.negative {
  color: red;
}
.zero {
  color: yellow;
}
</style>