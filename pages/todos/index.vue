<template>
  <div class="wrapper">
    <div class="container">
      <TodoList :todos="todos"/>
      <AddTodo/>
    </div>
  </div>
</template>

<script>
  import AddTodo from "../../components/AddTodo";
  import TodoList from "../../components/TodoList";
  import {apiGet} from "../../api/methods";

  export default {
    data() {
      return {
        title: ''
      }
    },
    components: {
      TodoList,
      AddTodo,
    },
    computed: {
      todos(){
        return this.$store.state.todos
      }
    },
    mounted() {
      if(this.$store.state.todos.length) {
        return
      }
      apiGet().then(res => {
        res.forEach(r => {
          this.$store.commit("setTodos", r)
        })
      })
    },
  }
</script>
