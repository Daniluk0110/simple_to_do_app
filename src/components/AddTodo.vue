<template>
 <div class="container">
   <div class="input-group">
     <div class="input-group mb-4">
       <input type="text"
              class="form-control"
              placeholder="Write todo here"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              v-model="title">
       <button v-on:click="onSubmit" class="btn btn-primary" type="button">Create</button>
     </div>
   </div>
 </div>
</template>

<script>
export default {
  data() {
    return {
      title: ''
    }
  },
  methods: {
    onSubmit() {
      console.log('add new todo', this.title)
      if (this.title.trim()) {
        const newTodo = {
          id: Date.now(),
          title: this.title,
          completed: false
        }

        this.$emit('add-todo', newTodo)
        this.title = ''
      }
    }
  }
}
</script>