<template>
  <div id="app">
    <Childcomponent v-bind:propsdata="message"> </Childcomponent>
    <Eventcomponent v-on:show-log="printText"> </Eventcomponent>
  </div>
</template>

<script>
import Childcomponent from './components/Childcomponent.vue';
import Eventcomponent from "@/components/Eventcomponent.vue";

export default {
  name: 'App',
  data() {
    return {
      message: 're-rendering!!!'
    }
  },
  created() {
    console.log("hi");
  }, 
  components: {
    Childcomponent,
    Eventcomponent,

  },
  methods: { 
    printText() {
      // console.log("received an event !")
      alert("mini test");
    },
  }
}
</script>

<style>

</style>
