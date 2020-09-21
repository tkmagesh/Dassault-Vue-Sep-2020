import Vue from "vue";
import App from "./App.vue";

/* 
import * as calc from './calculator';
console.log(calc); 
*/

/* 
import * as calc from './calculator';
//const add = calc.add;
const { add } = calc; 
*/

/* 
import { add } from './calculator'; 
*/

//Importing the default exported object

/* import calc from './calculator';
console.log(calc); */

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
