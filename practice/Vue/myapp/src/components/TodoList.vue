<template>
  <section>
    <ul>
      <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem" class="shadow"> 
        <i class="checkBtn fas fa-check" aria-hidden="true">v</i>
        {{ todoItem }}
        <span class="removeBtn" type="button" @click="removeTodo(todoItem, index)">
        <!-- <span class="removeBtn" type="button" @click="removeTodo"> -->
          <i class="far fa-trash-alt" aria-hidden="true">X</i>
        </span>
      </li>
      <!-- <li>할일 1</li>
      <li>할일 2</li>
      <li>할일 3</li> -->
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      todoItems: []
    }
  },
  created() {
    console.log(localStorage.length);
    //라이프 사이클 = 인스턴스 생성 즉시 뷰 데이터 접근
    if(localStorage.length > 0) {
      for(let i = 0; i < localStorage.length; i++) {
        this.todoItems.push(localStorage.key(i));
      }
    } 
  },
  methods: {
    removeTodo(todoItem, index) {
      // console.log("clicked");
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
      console.log(todoItem, index);
    }
  }
}
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
  }
  
  li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
  }

  .checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
  }

  .removeBtn {
    margin-left: auto;
    color: #de4343;
  }
</style>