<template>
  <div>
    <select v-model="filter">
      <option v-for="option in filterOptions" :value="option">{{option}}</option>
    </select>
    <ul>
      <TodoItem v-for="(todo, index) in filteredTodos"
                :todo="todo"
                :index="index"
                :key="todo.id + index"
      />
    </ul>
    <div v-if="!getTotal">
      <p>No todos found</p>
    </div>

    <div v-else>
      <p>Total: {{getTotal}}</p>
    </div>
  </div>
</template>

<script>
  import TodoItem from "./TodoItem";

  export default  {
    props: ['todos'],
    data() {
      return {
        filterOptions: ['all', 'completed', 'not completed'],
        filter: 'all'
      }
    },
    components: {
      TodoItem
    },
    computed: {
      filteredTodos() {
        let filter
        if (this.filter === 'all') {
          filter = this.todos
        }

        if (this.filter === 'completed') {
          filter = this.todos.filter(t => t.completed)
        }

        if (this.filter === 'not completed') {
          filter = this.todos.filter(t => !t.completed)
        }
        return filter
      },
      getTotal() {
        return this.filteredTodos.length
      }
    }
  }
</script>


<style scoped>
  ul {
    width: 100%;
    padding: 0;
    margin-top: 20px;
  }
</style>
