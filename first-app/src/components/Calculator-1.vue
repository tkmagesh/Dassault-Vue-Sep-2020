<template>
  <div>
    <h3>Calculator</h3>
    <input type="number" v-model.number="number1" />
    <input type="number" v-model.number="number2" />
    <br />
    <input type="button" value="Add" @click="onAdd()" />
    <input type="button" value="Subtract" @click="onSubtract()" />
    <input type="button" value="Multiply" @click="onMultiply()" />
    <input type="button" value="Divide" @click="onDivide()" />
    <div
      v-bind:class="{ 
        positive : result >= 0, 
        negative : result < 0, 
        zero : result === 0 
      }"
    >{{result}}</div>
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
  methods: {
    onAdd: function() {
      this.result = this.number1 + this.number2;
    },
    onSubtract: function() {
      this.result = this.number1 - this.number2;
    },
    onMultiply: function() {
      this.result = this.number1 * this.number2;
    },
    onDivide: function() {
      this.result = this.number1 / this.number2;
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