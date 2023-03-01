<script setup>
import Calculator from '../components/Calculator.vue'
import History from '../components/History.vue'
</script>

<template>
  <div class="container">
    <div class="calc-div"><Calculator/></div>
    <div class="history-div"><History/></div>
  </div>
  <main>
  </main>
</template>

<style>
html{
    box-sizing: border-box;
    height: 100%;
}

body{
    align-items: center;
    background: rgb(49, 45, 45);
    display: flex;

    justify-content: center;
}

.container{
  display: inherit;
}

.calc-div {
  padding-top: 40px;
}

.history-div {
  padding-top: 40px;
  align-self: center;
  justify-self: center;
}


</style>

