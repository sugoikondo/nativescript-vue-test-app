<template>
<list-view :items="todos" class="list-group">
  <template scope="item">
      <stack-layout orientation="horizontal" class="list-group-item">
        <label class="list-group-item-heading" :text="item.title" textWrap="true"></label>
      </stack-layout>
    </template>
</list-view>
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
      todos: [{
          id: 1,
          title: 'hoge',
          completed: false
        },
        {
          id: 2,
          title: 'fuga',
          completed: true
        }
      ],
      newTodoTitle: '',
    }
  },
  created: function() {
    // TODO: 追加できるようになったらコメントアウトしよう。
    // this.todos = todoLocalStorage.fetch()
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
