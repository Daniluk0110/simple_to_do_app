export default {
    // является объектом
    actions: {
        async fetchTodos(ctx) {
            const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
            const todos = await res.json()

            ctx.commit('updateTodos', todos)
            this.loading = false
        },
        removeTodo(id) {
            this.todos = this.todos.filter(t => t.id !== id)
        },
        addTodo(todo) {
            this.todos.push(todo)
        }
    },

    // Содержит функции, которые напрямую изменяют store
    mutations: {
        updateTodos(state, todos) {
            state.todos = todos
        },
        loadingStatus(state, loading) {
            state.loading = loading
        },
        filterStatus(state, filter) {
            state.filter = filter
        }
    },

    // Определяем изначальные данные
    state: {
        todos: [],
        loading: true,
        filter: 'all'
    },

    // Трансформировать данные и получать из store
    getters: {
        allTodos(state) {
            return state.todos
        },
        filteredTodos() {
            if (this.filter === 'all') {
                return this.todos
            }

            if (this.filter === 'completed') {
                return this.todos.filter(t => t.completed)
            }

            if (this.filter === 'not-completed') {
                return this.todos.filter(t => !t.completed)
            }
            return 'all'
        },
        loading(state) {
            return state.loading
        },
        filter(state) {
            return state.filter
        }
    },
}