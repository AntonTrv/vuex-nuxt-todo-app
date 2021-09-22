<template>
  <li @click.self="toggleStatus(todo)" >
    <strong>{{index + 1}}</strong>
    <a href="#" :class="{done: todo.completed}" @click.prevent="openTodo(todo.id)" >
      {{todo.title}}
    </a>
    <button class="btn remove" @click.stop="removeTodo(todo.id)">&times;</button>
  </li>
</template>

<script>
  import {apiDelete, apiPatch} from "../api/methods";

  export default {

    props: {
      todo: {
        type: Object,
        require: true
      },
      index: Number
    },

    methods: {
      toggleStatus(todo) {
        apiPatch(todo).then(r =>  {
          this.$store.commit('toggleStatus', todo)
        })
      },

      removeTodo(id) {
        apiDelete(id).then(r => this.$store.commit('removeTodo', id))
      },

      openTodo(id) {
        this.$router.push(`/todos/${id}`)
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
