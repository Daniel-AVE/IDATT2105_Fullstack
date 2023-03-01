<template>
    <div id="history">
    <section class="historybox">
      <ul>
        <h1>History</h1>
        <li v-for="instance in store.history" :key="instance">
            {{ instance }}
        </li>
        <button class="resetbutton" @click="resetHistory">Reset history</button>
      </ul>
    </section>
    
    
  </div>
  </template>
  
  <script>
    import { store } from '@/store.js'
  
  export default {
    name: 'HistoryBox',
    data() {
        return {
            store
        }
    },

    methods: {
        resetHistory() {
            store.history = [];
        }
    }
  }
  </script>

<style scoped>

.historybox{
    position: absolute;
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
}

.resetbutton:hover {
    opacity: 0.6;
}
</style>
