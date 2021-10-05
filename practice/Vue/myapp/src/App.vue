<template>
  <div id="app">
    <TodoHeader></TodoHeader>
   
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>

  </div>
</template>

<script>
// import Header from '../../test/src/components/layout/Header.vue';
// import HelloWorld from './components/HelloWorld.vue'
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
  
  components: {
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoFooter': TodoFooter,
    'TodoList': TodoList,
    // Header,
  }
}
</script>

<style >
  body {
      text-align: center;
      background-color: #F6F6F8;
  }
  
  input {
    border-style: groove;
    width: 200px;
  }

  button {
    border-style: groove;
  }

  .shadow {
    box-shadow: 5px 10px 10px rgba(0,0,0,0.03);
  }

  /* .hehe {
    margin-top: 1.5rem;
    margin-left: 2rem;
  }


  .hehe > button {
    margin-left: 0.5rem;
  } */

  /* span {
    font-size: 1.5em;
  } */

</style>
