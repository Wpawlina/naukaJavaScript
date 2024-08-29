import { createStore } from 'vuex'
import axios, { Axios } from 'axios';


export default createStore({
  state: {
    counter:0,
    colorCode: 'blue'
  },
  getters: {
  },
  mutations: {
    incrementCounter(state,randomNumber){
      state.counter+=randomNumber;
    },
    decrementCounter(state,randomNumber){
      state.counter-=randomNumber;
    },
    setColorCode(state,color){
      state.colorCode=color;
    }
  },
  actions: {
    incrementCounter({commit}){

      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then((response)=>{commit('incrementCounter',response.data);});
    },
      
   
    decrementCounter({commit}){
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then((response)=>{commit('decrementCounter',response.data);});
    },
    setColorCode({commit},color){
      commit('setColorCode',color);
    }
  },
  getters: {
    counterSquared(state){
      return state.counter*state.counter;
    }
  },
  modules: {
  }
})
