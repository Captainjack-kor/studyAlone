<template>
  <div id="app">
    <Header />
    <About />
    <div id="content" class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
//코드옮기기
import Header from './components/layout/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
