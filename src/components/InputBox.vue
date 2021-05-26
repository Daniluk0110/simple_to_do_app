<template>
  <div class="container mb-4 mt-4">
    <div class="col-12">
      <form v-on:submit.prevent="onSubmit(text)">
        <div class="form-group">
          <input type="text"
                 class="form-control"
                 placeholder="Enter your todo"
                 v-model="text">
        </div>
        <div class="form-group mt-4">
          <button class="btn btn-success">Add new todo</button>
        </div>
      </form>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      text: ''
    }
  },
  computed: {

  },
  methods: {
    onSubmit(x) {
      this.$store.dispatch('addTodoActions', x);
      this.text = '';
    }
  }
}
</script>