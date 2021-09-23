import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:3005"
})

const END_POINT = '/todos-items'; //single endpoint

export async function apiGet() {
    try {
        const { data } = await apiClient.get(END_POINT);
        return data
    } catch (error) {
        console.error(error)
    }
}

export async function apiAdd(newTodo) {
    try {
        const { data } = await apiClient.post(END_POINT, newTodo);
        return data
    } catch (error) {
      console.error(error)
    }
}

export async function apiDelete(id) {
    try {
        await apiClient.delete(`${END_POINT}/${id}`);
        return '200'
    } catch (error) {
        console.error(error)
    }
}

export async function apiPatch(todo) {
    try {
        await apiClient.put(`${END_POINT}/${todo.id}`, {"id":todo.id,"title": todo.title, "completed": !todo.completed});
      return '200'
    } catch (error) {
        console.error(error)
    }
}



