<template>
  <div class="container">
    <div class="col">
      <table class="table table-hover">
        <thead>
        <tr>
          <th scope="col">#id</th>
          <th scope="col">Todo</th>
          <th scope="col">Done</th>
          <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
        <TodoItem
            v-for="todo in todos" :key="todo.id"
            v-bind:todo="todo"
        />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";
export default {
  props: ['todos'],
  components: {
    TodoItem
  }
}
</script>