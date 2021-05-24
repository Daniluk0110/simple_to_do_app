<template>
  <div id="app">
    <Navbar />
    <h1 class="display-2 mb-4 mt-4">Todo application</h1>
    <AddTodo />
    <TodoList
      v-bind:todos="todos"
      v-on:remove-todo="removeTodo"
    />
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'
import Navbar from "@/components/Navbar"
import AddTodo from "@/components/AddTodo"

export default {
  name: 'App',
  data() {
    return {
      todos: [
        {id: 1, title: 'Купить хлеб', completed: false},
        {id: 2, title: 'Купить шашлык', completed: false},
        {id: 3, title: 'Купить колу', completed: false},
        {id: 4, title: 'Купить угли', completed: false},
        {id: 5, title: 'Купить специи', completed: false}
      ]
    }
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id)
    }
  },
  components: {
    TodoList, Navbar, AddTodo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
