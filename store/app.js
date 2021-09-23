import {apiAdd, apiDelete, apiGet, apiPatch} from "../api/methods";

export const state = () => ({
  todos: [],
})

  // Getters
export const getters = {
  getByStatus: (state) => (filter='all') => filter === 'all' ? state.todos : state.todos.filter(todo => todo.completed === filter),
  getTodos: (state) => state.todos,
}

  // Actions
export const actions = {
  async setTodos({commit}) {
    await apiGet().then(result => commit("setTodos", result))
  },

  async addTodo({commit}, newTodo) {
    await apiAdd(newTodo).then(result => commit("addTodo", result))
  },

  async patchTodo({commit}, todo) {
    await apiPatch(todo).then(r => commit("toggleStatus", todo))
  },

  async deleteTodo({commit}, id) {
    await apiDelete(id).then(r => commit("deleteTodo", id))
  }
}

  // Mutations
export const mutations = {
  setTodos(state, payload) {
    state.todos = payload
  },

  addTodo(state, payload){
    state.todos.push(payload)
  },

  toggleStatus(state, payload) {
    payload.completed = !payload.completed
  },

  deleteTodo(state, payload) {
    state.todos = state.todos.filter(todo => todo.id !== payload)
  }

}
