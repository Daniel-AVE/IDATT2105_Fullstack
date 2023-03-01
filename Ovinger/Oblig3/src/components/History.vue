<template>
    <div id="history">
    <section class="historybox">
      <ul>
        <h1>History</h1>
        <li v-for="instance in storage.history" :key="instance" id="historylist">
            {{ instance }}
        </li>
        <button class="resetbutton" id="resetbutton" @click="resetHistory">Reset history</button>
      </ul>
    </section>
    
    
  </div>
  </template>
  
  <script>
    import { storage } from '../store/index'
  
  export default {
    name: 'HistoryBox',
    data() {
        return {
            storage
        }
    },

    methods: {
        resetHistory() {
            storage.history = [];
        }
    }
  }
  </script>

<style scoped>

.historybox{
    position: relative;
    background: grey;
    border-radius: 32px;
    color: white;
    font-size: 20px;
    overflow: auto;
    width: 356px;
    height: auto;
    overflow: scroll;
    max-height: 675px;
}

li{
    list-style-type: none;
    font-size: 18px;
}


h1{
    font-size: 40px;
    color: white;
}

.resetbutton {
    background: orange;
    border: 1px solid rgba(255,255,255,0.01);
    border-radius: 40px;
    color: white;
    flex-basis: 20%;
    font-size: 20px;
    height: 30px;
    margin-bottom: 10px;
}

.resetbutton:hover {
    opacity: 0.6;
}
</style>
