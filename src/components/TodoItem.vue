<template>
  <tr>
    <th scope="row">{{ todo.id }}</th>
    <td>{{ todo.title }}</td>
    <td><input class="form-check-input" type="checkbox"></td>
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