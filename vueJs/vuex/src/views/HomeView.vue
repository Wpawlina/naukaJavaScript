<template>
  <div class="home">
    <Counter/>
    <CounterSquared />
    <div class="buttons">
      <button @click="$store.dispatch('decrementCounter')">-</button>
      <button @click="$store.dispatch('incrementCounter')">+</button>
    </div>
    <div>
      <input placeholder="Enter Color Code" type="text" v-model="colorCode">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Counter from '@/components/Counter.vue';
import CounterSquared from '@/components/CounterSquared.vue';

export default {
  name: 'Home',
  computed:{
    colorCode:{
      get(){
        return this.$store.state.colorCode;
      },
      set(value){
        this.$store.dispatch('setColorCode', value);
        
      }
    }
  },
  components: {
    Counter,
    CounterSquared
  }

}
</script>


<style>
  div{
    margin-bottom: 10px;
  }
  .counter{
    font-size: 80px;
    font-weight: bold;
  }
  button {
    font-size: 40px;
    width: 100px;
    margin: 0 10px;
  }
</style>
