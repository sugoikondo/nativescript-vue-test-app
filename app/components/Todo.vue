<template>
<grid-layout rows="*, 80">
  <scroll-view row="0">
    <stack-layout>
      <list-view :items="todos">
        <template scope="item">
          <stack-layout>
            <label :text="item.title" textWrap="true"></label>
          </stack-layout>
        </template>
      </list-view>
    </stack-layout>
  </scroll-view>
  <grid-layout row="1" columns="*, 60" orientation="horizontal" class="footer">
    <text-field col="0" hint="今日は何をしますか？" v-model="newTodoTitle"></text-field>
    <button col="1" text="追加"></button>
  </grid-layout>
</grid-layout>
</template>

<script>
import localStorage from 'nativescript-localstorage'

const LOCAL_STORAGE_KEY = 'todos-localstorage'

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

<style lang="scss" scoped>
.footer {
    margin: 24px 40px;
}
</style>
