<template>
  <div id="app">
    <Childcomponent v-bind:propsdata="message"> </Childcomponent>
  </div>
</template>

<script>
import Childcomponent from './components/Childcomponent.vue';
//import HelloWorld from './components/HelloWorld.vue'
// import Child-component from '@/components/Child-component.vue';

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
    Childcomponent

  },
  methods: {
    
  }
}
</script>

<style>

</style>
