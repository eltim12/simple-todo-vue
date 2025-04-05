<template>
  <v-app>
    <v-main class="px-4 py-6">
      <v-container class="mx-auto" max-width="600">
        <v-card class="pa-4" elevation="6">
          <v-card-title class="text-h5">📋 Todo List</v-card-title>
          <v-divider class="my-3" />
          <TodoInput />
          <TodoList />
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import TodoInput from '@/components/TodoInput.vue'
import TodoList from '@/components/TodoList.vue'
</script>
