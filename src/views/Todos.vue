<template>
  <div>
    <h2 class="display-2 mb-4 mt-4">Todo application</h2>
    <router-link class="btn btn-dark" to="/">Home</router-link>
    <hr>
    <AddTodo
        v-on:add-todo="addTodo"
    />
    <Loader v-if="loading" />
    <TodoList
        v-else-if="todos.length"
        v-bind:todos="todos"
        v-on:remove-todo="removeTodo"
    />
    <p v-else>No todos!</p>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'
import AddTodo from "@/components/AddTodo"
import Loader from "@/components/Loader"

export default {
  name: 'App',
  data() {
    return {
      todos: [],
      loading: true
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(response => response.json())
        .then(json => {
          this.todos = json
          this.loading = false
        })
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id)
    },
    addTodo(todo) {
      this.todos.push(todo)
    }
  },
  components: {
    TodoList, AddTodo, Loader
  }
}
</script>