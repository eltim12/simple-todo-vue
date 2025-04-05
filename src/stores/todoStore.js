import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: JSON.parse(localStorage.getItem('todos')) || []
  }),
  actions: {
    add(newTodo) {
      this.todos.push({ 
        id: Date.now(), 
        name: newTodo, 
        completed: false 
      })
      this.save()
    },
    edit(id, newTodoName) {
      const currentTodo = this.todos.find(todo => todo.id === id)
      if (currentTodo) currentTodo.name = newTodoName
      this.save()
    },
    toggle(id) {
      const currentTodo = this.todos.find(todo => todo.id === id)
      if (currentTodo) currentTodo.completed = currentTodo.completed === false ? false : true
      this.save()
    },
    remove(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
      this.save()
    },
    save() {
      localStorage.setItem('todos', JSON.stringify(this.todos))
    }
  }
})
