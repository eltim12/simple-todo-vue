<template>
  <v-list dense>
    <TodoItem 
      v-for="todo in store.todos" 
      :key="todo.id" 
      :todo="todo" 
      @toggle="store.toggle"
    />
  </v-list>
</template>

<script setup>
import { useTodoStore } from '@/stores/todoStore'
import TodoItem from './TodoItem.vue'

const store = useTodoStore()
</script>
