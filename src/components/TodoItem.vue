<style scoped>
.lineThrough {
  text-decoration: line-through;
}
</style>

<template>
  <tr :class="{'table-success': todo.completed}">
    <th scope="row">{{ todo.id }}</th>
    <td :class="{'lineThrough': todo.completed}">{{ todo.title }}</td>
    <td>
      <input
          class="form-check-input"
          type="checkbox"
      v-on:change="todo.completed = !todo.completed">
    </td>
    <td><button class="btn btn-danger" type="button">Delete</button></td>
  </tr>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      require: true
    }
  }
}
</script>