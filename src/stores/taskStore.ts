import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export type Tasks = {
  id: string
  text: string
  completed: boolean
  createdAt: string
}

export const useTaskStore = defineStore(
  'task',
  () => {
    // sate
    const tasks = ref<Tasks[]>([])
    const currentFilter = ref<'all' | 'completed' | 'not-completed'>('all')

    const filteredTasks = computed(() => {
      switch (currentFilter.value) {
        case 'all':
          return tasks.value
        case 'completed':
          return tasks.value.filter((t) => t.completed === true)
        case 'not-completed':
          return tasks.value.filter((t) => t.completed === false)
        default:
          return (tasks.value = [
            {
              id: 'null',
              text: 'The task list is empty, add the first one!',
              completed: false,
              createdAt: 'null',
            },
          ])
      }
    })

    const filterTasksName = computed(() => {
      switch (currentFilter.value) {
        case 'all':
          return 'All'
        case 'completed':
          return 'Completed'
        case 'not-completed':
          return 'Not Completed'
        default:
          return 'All'
      }
    })

    const filteredTasksCount = computed(() => {
      switch (currentFilter.value) {
        case 'all':
          return tasks.value.length
        case 'completed':
          return tasks.value.filter((t) => t.completed === true).length
        case 'not-completed':
          return tasks.value.filter((t) => t.completed === false).length
        default:
          return tasks.value.length
      }
    })

    // actions
    function addTask(body: Tasks['text']) {
      if (!body) return

      const newTask: Tasks = {
        id: crypto.randomUUID(),
        text: body,
        completed: false,
        createdAt: new Date().toISOString(),
      }

      tasks.value?.push(newTask)
    }

    function editTask(id: Tasks['id'], body: Tasks['text']) {
      const task = tasks.value?.find((t) => t.id === id)
      if (task) task.text = body
    }

    function taskDone(id: Tasks['id']) {
      const task = tasks.value?.find((t) => t.id === id)
      if (task) task.completed = true
    }

    function taskNotDone(id: Tasks['id']) {
      const task = tasks.value?.find((t) => t.id === id)
      if (task) task.completed = false
    }

    function removeTask(id: Tasks['id']) {
      tasks.value = tasks.value?.filter((t) => t.id !== id)
    }

    function setFilter(filter: 'all' | 'completed' | 'not-completed') {
      currentFilter.value = filter
    }

    return {
      tasks,
      currentFilter,
      filteredTasks,
      filterTasksName,
      filteredTasksCount,
      addTask,
      editTask,
      taskDone,
      taskNotDone,
      removeTask,
      setFilter,
    }
  },
  {
    persist: {
      key: 'user-tasks',
      pick: ['tasks'],
    },
  },
)
