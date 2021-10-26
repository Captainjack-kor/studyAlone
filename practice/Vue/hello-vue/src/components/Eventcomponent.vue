<template>
  <div>
    <button v-on:click="showLog">Event Test</button>

    <p> </p>
    <button v-on:click="mainTrigger"> New Button </button>    
    <p> </p>

    <button v-on:click="allClear"> clear button </button>
    
  </div>
</template>

<script>
import { EventBus } from "../components/EventBus.js";
export default {
  data() {
    return {
      addValue: 0
    }
  },
  methods: {
    showLog() {
      this.$emit('show-log');
    },

    mainTrigger() {
      EventBus.$emit('triggerTest', this.addValue = this.addValue + 100);
    },

    allClear() {
      EventBus.$emit('triggerTest', this.addValue = 0);
    },
  },
}
</script>

<style>

</style>