<template>
  <div>
    <select v-model="filter">
      <option v-for="option in filterOptions" :value="option.value">{{option.name}}</option>
    </select>
    <ul>
      <TodoItem v-for="(todo, index) in filteredTodos(this.filter)"
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
  import { mapGetters } from "vuex";
  export default  {
    props: ['todos'],
    data() {
      return {
        filterOptions: [{name:'all', value:'all'},
                        {name:'completed', value: true},
                        {name: 'not completed', value: false}],
        filter: 'all'
      }
    },
    components: {
      TodoItem
    },
    computed: {
      ...mapGetters({
        filteredTodos: 'app/getByStatus'
      })
      ,
      getTotal() {
        return this.filteredTodos().length
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
