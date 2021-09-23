<template>
  <form @submit.prevent="submitForm">
    <input type="text" placeholder="Add todo" class="form-control" v-model="title">
    <button type="submit" class="btn">Add</button>
  </form>
</template>


<script>
  import { mapActions } from "vuex";

  export default {
    data() {
      return {
        title: ''
      }
    },

    methods: {
        ...mapActions({
          addTodo: "app/addTodo"
        }),

      submitForm() {
        if (this.title.trim()) {
          const newTodo = {
            title: this.title,
            completed: false
          }

          this.addTodo(newTodo)
          this.title = ''
        }
      },
    }
  }
</script>

<style>
  input {
    margin-right: 1rem;
  }

  .btn {
    background-color: cornflowerblue;
    color: white;
    margin: 10px 0;
  }
</style>
