<template>
  <div class="container">
    <div class="calc-div"><Calculator/></div>
    <div><History/></div>
  </div>
</template>

<script>
import Calculator from './components/Calculator.vue'
import History from './components/History.vue'

export default {
  name: 'App',
  components: {
    Calculator,
    History
  },
}
</script>

<style>
html{
    box-sizing: border-box;
    height: 100%;
}

body{
    align-items: center;
    background: rgb(49, 45, 45);
    display: flex;
    height: inherit;
    justify-content: center;
}

.container{
  display: flex;
}

.calc-div{
  padding-right: 40px;
}
</style>
