<template>
  <v-list-item>
    <div class="item-content d-flex justify-space-between align-center">
      <v-checkbox
        v-model="todo.completed"
        @change="() => onChangeStatus(todo.id)"
        hide-details
      ></v-checkbox>

      <v-text-field
        v-if="editing"
        v-model="editText"
        dense
        solo
        center-affix
        class="mr-2"
      />

      <v-list-item-title
        v-else
        :class="{ 'text-decoration-line-through text-grey': todo.completed }"
      >
        {{ todo.name }}
      </v-list-item-title>

      <div class="action-button">
        <v-btn icon @click="editing ? save() : (editing = true)" class="mr-3">
          <v-icon>{{ editing ? 'mdi-content-save' : 'mdi-pencil' }}</v-icon>
        </v-btn>
        <v-btn icon @click="store.remove(todo.id)">
          <v-icon color="red">mdi-delete</v-icon>
        </v-btn>
      </div>
  </div>

  </v-list-item>
</template>

<script setup>
import { ref } from 'vue'
import { useTodoStore } from '@/stores/todoStore'
const props = defineProps({ todo: Object })
const emit = defineEmits(['toggle'])
const store = useTodoStore()

const editing = ref(false)
const editText = ref(props.todo.name)

function save() {
  store.edit(props.todo.id, editText.value)
  editing.value = false
}

function onChangeStatus (id) {
  emit('toggle', id)
}
</script>
