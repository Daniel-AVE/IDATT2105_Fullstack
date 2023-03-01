<template>
  <div class="calculator">
    <section class="display">
      <p>{{ result }}</p>
    </section>
    <section class="buttons">
      <div class="row">
        <button class="calc" @click="clear()">AC</button>
        <button class="calc" @click="addOperator('%')">%</button>
        <button class="calc" @click="addOperator('/')"
        v-bind:style="{
            backgroundColor: activediv ? 'white' : 'orange',
            color: activediv ? 'orange' : 'white',
          }">/</button>
      </div>
      <div class="row">
        <button class="calc" @click="addNumber(7)">7</button>
        <button class="calc" @click="addNumber(8)">8</button>
        <button class="calc" @click="addNumber(9)">9</button>
        <button
          class="calc" 
          @click="addOperator('x')"
          v-bind:style="{
            backgroundColor: activeX ? 'white' : 'orange',
            color: activeX ? 'orange' : 'white',
          }">x</button>
      </div>
      <div class="row">
        <button class="calc" @click="addNumber(4)">4</button>
        <button class="calc" @click="addNumber(5)">5</button>
        <button class="calc" @click="addNumber(6)">6</button>
        <button class="calc" @click="addOperator('-')"
        v-bind:style="{
            backgroundColor: activeM ? 'white' : 'orange',
            color: activeM ? 'orange' : 'white',
          }">-</button>
      </div>
      <div class="row">
        <button class="calc" @click="addNumber(1)">1</button>
        <button class="calc" @click="addNumber(2)">2</button>
        <button class="calc" @click="addNumber(3)">3</button>
        <button class="calc" @click="addOperator('+')"
        v-bind:style="{
            backgroundColor: activeP ? 'white' : 'orange',
            color: activeP ? 'orange' : 'white',
          }">+</button>
      </div>
      <div class="row">
        <button class="calc" @click="addNumber(0)">0</button>
        <button class="calc" @click="calculate()">=</button>
      </div>
    </section>
    
    
  </div>
</template>

<script>
import { store } from '@/store.js'

export default {
  name: 'CalculatorApp',
  data() {
    return {
      store,
      firstNumber: null,
      secondNumber: null,
      operator: null,
      result: 0,
      activediv: false,
      activeX: false,
      activeM: false,
      activeP: false,
    }
  },
  methods: {
    addNumber(number) {
      if (this.operator) {
        this.secondNumber = (this.secondNumber * 10) + number;
        this.result = this.secondNumber;
        this.activediv = false;
        this.activeX = false;
        this.activeP = false;
        this.activeM = false;
      } else {
        this.firstNumber = (this.firstNumber * 10) + number;
        this.result = this.firstNumber;
      }
      //this.result = this.firstNumber || this.secondNumber;
    },

    addOperator(operator) {
      this.operator = operator;
      switch(this.operator) {
        case '/':
          this.activediv = true;
          this.activeX = false;
          this.activeP = false;
          this.activeM = false;
          break;
        case 'x':
          this.activediv = false;
          this.activeX = true;
          this.activeP = false;
          this.activeM = false;
          break;
        case '-':
          this.activediv = false;
          this.activeX = false;
          this.activeP = false;
          this.activeM = true;
          break;
        case '+':
          this.activediv = false;
          this.activeX = false;
          this.activeP = true;
          this.activeM = false;
          break;
      }
      if (this.operator == '%') {
        this.calculate();
      }
    },

    calculate() {
      if (this.firstNumber == null) {
        this.firstNumber = this.result;
      } 
      switch(this.operator) {
        case '/':
          this.result = this.firstNumber / this.secondNumber;
          store.history.push(this.firstNumber + ' ' + this.operator + ' ' + this.secondNumber + ' = ' + this.result);
          break;
        case 'x':
          this.result = this.firstNumber * this.secondNumber;
          store.history.push(this.firstNumber + ' ' + this.operator + ' ' + this.secondNumber + ' = ' + this.result);
          break;
        case '-':
          this.result = this.firstNumber - this.secondNumber;
          store.history.push(this.firstNumber + ' ' + this.operator + ' ' + this.secondNumber + ' = ' + this.result);
          break;  
        case '+':
          this.result = this.firstNumber + this.secondNumber;
          store.history.push(this.firstNumber + ' ' + this.operator + ' ' + this.secondNumber + ' = ' + this.result);
          break;
        case '%':
          this.result = this.firstNumber / 100;
          store.history.push(this.firstNumber + this.operator + ' = ' + this.result); 
          break; 
      }
      //this.$emit("addEquation", this.currEq);
      
      //this.currEq = "";
      this.firstNumber = this.result;
      this.secondNumber = null;
      this.operator = null;
      this.activediv = false;
      this.activeX = false;
      this.activeP = false;
      this.activeM = false;
    },

    clear() {
      this.firstNumber = null;
      this.secondNumber = null;
      this.operator = null;
      this.result = 0;
      this.activediv = false;
      this.activeX = false;
      this.activeP = false;
      this.activeM = false;
    }
  }
}
</script>

<style scoped>

.calculator{
    background: black;
    border-radius: 24px;
    color: #232323;
    height: auto;
    padding: 20px 35px;
    position: relative;
    max-height: 675px;
}
.row{
    display: flex;
    justify-content: space-between;
    margin: 5% 0;
}

.row:first-child .calc {
  background: grey;
  color: black;
}

.row:first-child .calc {
  flex-basis: 30%;
}

.row:first-child .calc:last-child {
  background: orange;
  color: white;
}

.row:last-child .calc {
  flex-basis: 47%;
}
.display{
    background: rgb(72, 72, 72);
    border-radius: 32px;
    color: white;
    font-size: 35px;
    overflow: hidden;
    padding-right: 20px;
    text-align: right;
    width: 356px;
    height: 120px;
    max-height: 120px;
}

.calc{
    background: rgb(67, 67, 67);
    border: 1px solid rgba(255,255,255,0.01);
    border-radius: 32px;
    color: white;
    flex-basis: 20%;
    font-size: 30px;
    height: 80px;
}

.calc:hover {
  opacity: 0.6;
}

.calc:last-child {
  background: orange;
  color: white;
}

.calc-active {
  background: white;
  color: orange;
}

.calc:last-child:click {
  background: white;
  color: orange;
}


</style>
