<template>
<grid-layout rows="*,80">
  <scroll-view row="0">
    <list-view :items="todos" class="list-group">
      <template scope="todo">
          <grid-layout row="1" columns="*, 60">
            <label :text="todo.title" textWrap="true" class="todo"></label>
            <button col="1" text="削除" @tap="deleteTodo(todo)"></button>
          </grid-layout>
        </template>
    </list-view>
  </scroll-view>
  <grid-layout row="1" columns="*, 60" class="footer">
    <text-field col="0" hint="今日は何をしますか？" v-model="newTodoTitle" return-key-type="done" @return-press="addTodo()"></text-field>
    <button col="1" text="追加" @tap="addTodo()"></button>
  </grid-layout>
</grid-layout>
</template>

<script>
import localStorage from 'nativescript-localstorage'

const LOCAL_STORAGE_KEY = 'todos-localstorage'

const todoLocalStorage = {
  fetch: () => {
    let todos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]')
    // todos.forEach((todo, index) => {
    //   todo.id = index
    // })
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
    this.todos = todoLocalStorage.fetch()
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
      if (!this.newTodoTitle) return
      this.todos.push({
        id: this.todos.length + 1,
        title: this.newTodoTitle,
        completed: false
      })
      this.newTodoTitle = ''
    },
    deleteTodo: function(targetTodo) {
      this.todos.splice(this.todos.findIndex(function(todo) {
        return todo.id == targetTodo.id
      }), 1)
    },
  }
}
</script>

<style lang="scss" scoped>
.bg {
    background-color: #555555;
}
.todo {
    padding: 40px;
}
.footer {
    padding: 40px;
    background-color: #fafafa;
}
</style>
