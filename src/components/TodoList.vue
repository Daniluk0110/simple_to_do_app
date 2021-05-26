<template>
  <div class="container">
    <h1>All Todos</h1>
    <div class="row">
      <div class="col-6">
        <TodoItem />
      </div>
      <div class="col-6">
        <TodoItem />
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";

export default {
  components: {
    TodoItem
  }
}
</script>