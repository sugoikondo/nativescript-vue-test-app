<template lang="html">

</template>

<script>
import localStorage from 'nativescript-localstorage'

const LOCAL_STORAGE_KEY = 'todos'

const ls = {
  fetch: () => {
    let todos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]')
    todos.forEach(function(todo.index) {
      todo.id = index
    })
    return todos
  }
  store: function(todos) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }
}

export default {
  data() {
    return {
      todos: [],
      newTodo: '',
    }
  },
  created: function() {

  },
  methods: {
    addTodo: function() {
      if (!this.newTodo) return

    }
  }
}
</script>

<style lang="css">
</style>
