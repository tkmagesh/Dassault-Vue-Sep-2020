<template>
  <div>
    <h3>Calculator - New</h3>
    <nuxt-link to="/">
      Home
    </nuxt-link>
    <input v-model.number="number1" type="number">
    <select v-model="operator">
      <option
        v-for="(op, index) in operators"
        :key="index"
        :value="op.value"
      >
        {{ op.displayText }}
      </option>
    </select>
    <input v-model.number="number2" type="number">
    <br>
    <div v-if="operator === ''">
      [Select the operator]
    </div>
    <span
      v-else
      :class="{
        positive: result >= 0,
        negative: result < 0
      }"
    >{{ resultToDisplay }}</span>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  data () {
    return {
      number1: 0,
      number2: 0,
      operator: '',
      operators: [
        { value: '', displayText: '-- Select --' },
        { value: 'add', displayText: 'Add' },
        { value: 'subtract', displayText: 'Subtract' },
        { value: 'multiply', displayText: 'Multiply' },
        { value: 'divide', displayText: 'Divide' },
        { value: 'power', displayText: 'To Power' }
      ]
    }
  },
  computed: {
    result () {
      switch (this.operator) {
        case 'add':
          return this.number1 + this.number2
        case 'subtract':
          return this.number1 - this.number2
        case 'multiply':
          return this.number1 * this.number2
        case 'divide':
          return this.number1 / this.number2
        case 'power':
          return this.number1 ** this.number2
        default:
          return 0
      }
    },
    resultToDisplay () {
      if (this.result < 0) {
        return `(${this.result})`
      } else {
        return this.result
      }
    }
  }
}
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
