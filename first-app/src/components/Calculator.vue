<template>
  <div>
    <h3>Calculator</h3>
    <input type="number" v-model.number="number1" />
    <select v-model="operator">
      <!-- 
        <option v-for="(value,key) in operators" v-bind:value="value" v-bind:key="key">
          {{key}}
        </option> 
      -->
      <option v-for="(value,key) in operators" :value="value" :key="key">{{key}}</option>
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
      operators: {
        "--Select--": "",
        Add: "add",
        Subtract: "subtract",
        Multiply: "multiply",
        Divide: "divide",
        "To Power": "power"
      }
      /* operators: [
        { value: "", displayText: "-- Select --" },
        { value: "add", displayText: "Add" },
        { value: "subtract", displayText: "Subtract" },
        { value: "multiply", displayText: "Multiply" },
        { value: "divide", displayText: "Divide" },
        { value: "power", displayText: "To Power" }
      ] */
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