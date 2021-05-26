export default {
  // Трансформировать данные и получать из store
  getters: {
    allTodos(state) {
      return state.todos
    },
    todosCount(state, getters) {
      return getters.allTodos.length
    }
  },
  // является объектом
  actions: {
    async fetchTodos(context, limit = 4) {
      // задержка для имитации загрузки с сервера
      setTimeout(function () {
        const res = fetch('https://jsonplaceholder.typicode.com/todos?_limit=' + limit)
        const todos = res.json()

        context.commit('UpdateTodos', todos)
        this.state.loading = false
      }, 2000)
    }
  },

  // Содержит функции, которые напрямую изменяют store
  mutations: {
    updateTodos(state, todos) {
      console.log('update todos')
      state.todos = todos
    },
    createTodos(state, newTodo) {
      console.log('create todos')
      state.todos.unshift(newTodo)
    },
    deleteTodos(state, todos) {
      console.log('delete todos')
      state.todos = todos.filter(t => t.id !== todos.id)
    }
  },

  // Определяем изначальные данные
  state: {
    todos: [],
    loading: true
  }
}