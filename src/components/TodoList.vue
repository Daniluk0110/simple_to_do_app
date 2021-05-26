<template>
  <div class="container">
    <h1>All Todos</h1>
    <div class="row">
      <div class="col-6">
        <table class="table">
          <thead>
          <tr>
            <th>Todo name</th>
            <th>#</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="todo in todos" :key="todo.id">
            <th>{{ todo.content }}</th>
            <th><span class="btn btn-danger" @click="deleteTodoFun(todo)">Delete</span></th>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="col-6">
        <table class="table">
          <thead>
          <tr>
            <th>Todo name</th>
            <th>#</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="todo in todos" :key="todo.id">
            <th>{{ todo.content }}</th>
            <th><span class="btn btn-danger" @click="deleteTodoFun(todo)">Delete</span></th>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: ''
    }
  },
  computed: {
    todos() {
      return this.$store.getters.getAllTodoDetails;
    }
  },
  methods: {
    deleteTodoFun(todo) {
      this.$store.commit('deleteTodo', todo);
    }
  }
}
</script>