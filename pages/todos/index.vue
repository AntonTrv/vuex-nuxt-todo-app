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
  import {mapGetters, mapActions} from "vuex";

  export default {
    components: {
      TodoList,
      AddTodo,
    },

    computed: {
      ...mapGetters({
        todos: "app/getTodos"
      }),
    },

    methods: {
      ...mapActions({
        setTodos: "app/setTodos"
      })
    },

    mounted() {
      this.setTodos()
    },
  }
</script>
