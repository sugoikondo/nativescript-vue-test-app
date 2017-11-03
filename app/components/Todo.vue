<template lang="html">

</template>

<script>
import localStorage from 'nativescript-localstorage'

const LOCAL_STORAGE_KEY = 'todos'

const todoLocalStorage = {
  fetch: () => {
    let todos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]')
    todos.forEach((todo, index) => {
      todo.id = index
    })
    return todos
  },
  store: (todos) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  },
}

export default {
  data() {
    return {
      todos: [],
      newTodoTitle: '',
    }
  },
  created: function() {
    this.todos = todoLocalStorage.fetchTodos()
  },
  watch: {
    todos: {
      handler: function(todos) {
        todoLocalStorage.store(todos)
      },
      deep: true
    }
  },
  methods: {
    addTodo: function() {
      if (!this.newTodo) return
      this.todos.push({
        id: this.todos.length + 1,
        title: newTodoTitle,
        completed: false
      })
      this.newTodoTitle = ''
    },
    deleteTodo: function(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1)
    },
  }
}
</script>

<style lang="css">
</style>
