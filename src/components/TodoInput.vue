<template>
  <v-text-field
    v-model="todoInput"
    label="New Todo"
    outlined
    dense
    @keyup.enter="submitTodo"
    append-inner-icon="mdi-plus"
    @click:append-inner="submitTodo"
  />
</template>

<script setup>
import { ref } from 'vue'
import { useTodoStore } from '@/stores/todoStore'
const todoInput = ref('')
const store = useTodoStore()

const submitTodo = () => {
  if (todoInput.value) {
    store.add(todoInput.value)
    todoInput.value = ''
  }
}
</script>
