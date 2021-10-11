<template>
  <div>
    <button v-on:click="showLog">Event Test</button>

    
  </div>
</template>

<script>
export default {
  // data() {
  //   return {

  //   }
  // },
  methods: {
    showLog() {
      this.$emit('show-log');
    },
  },
}
</script>

<style>

</style>