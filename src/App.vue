<template>
  <div id="app">
    <Navbar />
    <app-input-box></app-input-box>
    <app-todo-list></app-todo-list>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar"
import InputBox from './components/InputBox';
import TodoList from './components/TodoList';

export default {
  components: {
    Navbar,
    'app-input-box': InputBox,
    'app-todo-list': TodoList
  },
  data () {
    return {}
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
