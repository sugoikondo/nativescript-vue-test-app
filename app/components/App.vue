<template>
<page>
  <action-bar title="Todoリストが出ないんだけど"></action-bar>
  <stack-layout>
    <todo></todo>
  </stack-layout>
</page>
</template>

<script>
import TestComponent from './TestComponent.vue'
import Todo from './Todo.vue'

export default {
  components: {
    TestComponent,
    Todo,
  }
}
</script>

<style scoped>
label {
  text-align: center;
  font-size: 25;
}

Button {
  background-color: #00caab;
}
</style>
