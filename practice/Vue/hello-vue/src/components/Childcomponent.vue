<template>
  <div>
    {{ propsdata }}

    <!-- {{ }} -->
  </div>
</template>

<script>
import { EventBus } from "../components/EventBus.js"

export default {
  props: ['propsdata'],
  data() {
    return {
    }
  },
  created() {
    EventBus.$on('triggerTest', function(value) {
      console.log("another value: ", value);
    })
  },
}
</script>

<style>

</style>