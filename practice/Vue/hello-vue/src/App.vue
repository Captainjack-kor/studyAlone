<template>
  <div id="app">
    <Childcomponent v-bind:propsdata="message"> </Childcomponent>
    <Eventcomponent v-on:show-log="printText"> </Eventcomponent>

    <p></p>
    <div> {{ count }}</div>
    <button @click="increment"> + </button>
    <button @click="decrement"> - </button>
  </div>
</template>

<script>
import Childcomponent from './components/Childcomponent.vue';
import Eventcomponent from "@/components/Eventcomponent.vue";
import { EventBus } from "./components/EventBus.js";
import store from "../src/store/store.js";

export default {
  name: 'App',
  data() {
    return {
      message: 're-rendering!!!'
    }
  },
  created() {
    //eventBus.$on('triggerTest', 100);
    console.log(EventBus); 
    EventBus.$on('triggerTest', function(value) {
      console.log("received value: ", value);
    })
  }, 
  components: {
    Childcomponent,
    Eventcomponent,

  },
  methods: { 
    printText() {
      console.log("received an event !");
      // alert("mini test");
    },
    increment() {
      store.commit('increment');
    },
    decrement() {
      store.commit('decrement');
    }
  },

  computed: {
    count() {
      return store.state.count;
    }
  }
}
</script>

<style>

</style>
