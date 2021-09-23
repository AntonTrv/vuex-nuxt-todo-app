<template>
  <li @click.self="toggleStatus(todo)" >
    <strong>{{index + 1}}</strong>
    <a :class="{'done': todo.completed}" @click.prevent="openTodo(todo.id)" >
      {{todo.title}}
    </a>
    <button class="btn remove" @click.stop="removeTodo(todo.id)">&times;</button>
  </li>
</template>

<script>
  import { mapActions } from "vuex";
  export default {

    props: {
      todo: {
        type: Object,
        default: {}
      },
      index: Number
    },

    methods: {
      ...mapActions({
        toggleStatus: 'app/patchTodo',
        removeTodo: 'app/deleteTodo'
      }),

      openTodo(id) {
        this.$router.push({path: `/todos/${id}`})
      }
    }
  }
</script>

<style scoped>
  li {
    border: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .1rem 2rem;
    margin-bottom: 0.5rem;
    cursor: pointer;
  }

  .remove {
    background: red;
    color: #fff;
    border-radius: 50%;
    font-weight: bold;
  }

  .done {
    text-decoration: line-through;
  }
</style>
