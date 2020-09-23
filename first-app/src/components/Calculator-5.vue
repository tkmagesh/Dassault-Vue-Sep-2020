<template>
  <div>
    <h3>Calculator</h3>
    <input type="number" v-model.number="number1" />
    <select v-model="operator">
      <option
        v-for="(op,index) in operators"
        v-bind:value="op.value"
        v-bind:key="index"
      >{{op.displayText}}</option>
    </select>
    <input type="number" v-model.number="number2" />
    <br />
    <div v-if="operator === ''">[Select the operator]</div>
    <span
      v-else
      v-bind:class="{ 
        positive : result >= 0, 
        negative : result < 0
      }"
    >{{ resultToDisplay }}</span>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data: function() {
    return {
      number1: 0,
      number2: 0,
      operator: "",
      operators: [
        { value: "", displayText: "-- Select --" },
        { value: "add", displayText: "Add" },
        { value: "subtract", displayText: "Subtract" },
        { value: "multiply", displayText: "Multiply" },
        { value: "divide", displayText: "Divide" },
        { value: "power", displayText: "To Power" }
      ]
    };
  },
  computed: {
    result: function() {
      switch (this.operator) {
        case "add":
          return this.number1 + this.number2;
        case "subtract":
          return this.number1 - this.number2;
        case "multiply":
          return this.number1 * this.number2;
        case "divide":
          return this.number1 / this.number2;
        case "power":
          return this.number1 ** this.number2;
        default:
          return 0;
      }
    },
    resultToDisplay: function() {
      if (this.result < 0) {
        return `(${this.result})`;
      } else {
        return this.result;
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