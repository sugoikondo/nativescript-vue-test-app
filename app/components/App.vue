<template>
<page>
  <action-bar title="Todoリスト"></action-bar>
  <stack-layout>
    <test-component style="margin-top: 40;"></test-component>
    <todo />
  </stack-layout>
</page>
</template>

<script>
import TestComponent from './TestComponent.vue'
import Todo from './Todo.vue'

export default {

  data() {},

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
