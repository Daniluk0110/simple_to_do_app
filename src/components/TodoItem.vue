<style scoped>
.lineThrough {
  text-decoration: line-through;
}
</style>

<template>
  <tr :class="{'table-success': todo.completed}">
    <th scope="row">{{ index + 1 }}</th>
    <td :class="{'lineThrough': todo.completed}">{{ todo.title | uppercase }}</td>
    <td>
      <input
          v-if="!todo.completed"
          class="form-check-input"
          type="checkbox"
          v-on:change="todo.completed = !todo.completed">
    </td>
    <td><button
          class="btn btn-danger"
          type="button"
          v-on:click="$emit('remove-todo', todo.id)"  >
        Delete
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      require: true
    },
    index: Number
  },
  filters: {
    uppercase(value) {
      return value.toUpperCase()
    }
  }
}
</script>