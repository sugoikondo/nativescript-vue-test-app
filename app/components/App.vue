<template>
<page>
  <action-bar title="Todoリスト"></action-bar>
  <stack-layout>
    <todo></todo>
  </stack-layout>
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
