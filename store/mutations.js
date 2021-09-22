
export default {
  setTodos(state,payload) {
    state.todos.push(payload)
  },

  addTodo(state,payload) {
    state.todos.push(payload)
  },

  removeTodo(state,payload) {
    state.todos = state.todos.filter(todo => todo.id != payload)
  },

  toggleStatus(state, payload) {
    payload.completed = !payload.completed
  }
}
