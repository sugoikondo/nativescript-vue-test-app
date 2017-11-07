<template>
<page>
  <action-bar title="Todoリスト"></action-bar>
  <todo></todo>
</page>
</template>

<script>
import Todo from './Todo.vue'

export default {
  components: {
    Todo,
  }
}
</script>
