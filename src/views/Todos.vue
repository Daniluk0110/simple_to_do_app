<template>
  <div class="container">
    <h2 class="display-2 mb-4 mt-4">Todo application</h2>
    <router-link class="btn btn-dark" to="/">Home</router-link>
    <hr>
    <AddTodo
        v-on:add-todo="addTodo"
    />
    <div class="align-items-center">
      <div class="col-4">
        <p>Filter:</p>
        <select v-model="filter" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="not-completed">Not completed</option>
        </select>
      </div>
    </div>


    <Loader v-if="loading" />
    <TodoList
        v-else-if="filteredTodos.length"
        v-bind:todos="filteredTodos"
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
      loading: true,
      filter: 'all'
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(response => response.json())
        .then(json => {
          setTimeout(() => {
            this.todos = json
            this.loading = false
          }, 2000)
          this.todos = json
          this.loading = false
        })
  },
  watch: {
    // наблюдает
  },
  computed: {
    filteredTodos() {
      if (this.filter === 'all') {
        return this.todos
      }

      if (this.filter === 'completed') {
        return this.todos.filter(t => t.completed)
      }

      if (this.filter === 'not-completed') {
        return this.todos.filter(t => !t.completed)
      }
      return 'all'
    }
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