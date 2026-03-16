<script setup lang="ts">
import { ref, useTemplateRef, watchEffect } from 'vue'
import { useSortable, type UseSortableOptions } from '@vueuse/integrations/useSortable'
import { storeToRefs } from 'pinia'
import { useTaskStore, type Tasks } from '@/stores/taskStore'
import { useTheme } from '@/composable/useTheme'
import { NDropdown, NButton } from 'naive-ui'
import BaseModal from './BaseModal.vue'

const showTask = ref<boolean>(false)
const selectedTask = ref<Tasks | null>(null)
const editTaskInput = ref<string>('')
const isEditTask = ref<boolean>(false)
const editDisableBtn = ref<boolean>(false)

const { tasks, filteredTasks, currentFilter } = storeToRefs(useTaskStore())
const { editTask, taskDone, taskNotDone, removeTask } = useTaskStore()
const { isDark } = useTheme()
const el = useTemplateRef<HTMLElement>('el')

useSortable(el, tasks, {
  animation: 200,
  ghostClass: 'opacity-20',
  dragClass: 'shadow-2xl',
  handle: 'li',

  disabled: currentFilter.value !== 'all',
} as UseSortableOptions)

const options = [
  {
    label: 'Edit',
    key: 'edit',
  },
  {
    label: 'Done',
    key: 'done',
  },
  {
    label: 'Not done',
    key: 'not-done',
  },
  {
    label: 'Delete',
    key: 'delete',
  },
]

function showTaskHandler(task: Tasks) {
  selectedTask.value = task
  showTask.value = true
}

function handlerEdit(task: Tasks) {
  isEditTask.value = true
  showTask.value = true
  selectedTask.value = task
}

function editBtnHandler(id: Tasks['id']) {
  editTask(id, editTaskInput.value)
  isEditTask.value = false
  showTask.value = false
  selectedTask.value = null
  editTaskInput.value = ''
}

function cancelBtnHandler() {
  showTask.value = false
  isEditTask.value = false
  selectedTask.value = null
  editTaskInput.value = ''
}

const handleSelect = (key: string, task: Tasks) => {
  switch (key) {
    case 'edit':
      handlerEdit(task)
      break
    case 'done':
      taskDone(task.id)
      break
    case 'not-done':
      taskNotDone(task.id)
      break
    case 'delete':
      removeTask(task.id)
      break
  }
}

watchEffect(() => {
  let isDisabled = false

  if (editTaskInput.value.length === 0) {
    isDisabled = true
  }

  editDisableBtn.value = isDisabled
})
</script>

<template>
  <ul ref="el">
    <li
      class="border-b border-gray-400 py-2.5 font-bold text-lg cursor-grab"
      v-for="task in filteredTasks"
      :key="task.id"
    >
      <div class="flex justify-between items-center align-middle">
        <n-button :bordered="false" @click="showTaskHandler(task)">
          <template #icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
            >
              <circle cx="256" cy="256" r="64" fill="currentColor"></circle>
              <path
                d="M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11c-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72c38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 0 0-.1-34.76zM256 352a96 96 0 1 1 96-96a96.11 96.11 0 0 1-96 96z"
                fill="currentColor"
              ></path>
            </svg>
          </template>
        </n-button>

        <p class="overflow-hidden max-w-150 mr-3.75">
          {{ task.text }}
        </p>

        <n-dropdown trigger="click" :options="options" @select="(key) => handleSelect(key, task)">
          <n-button :bordered="false" text>
            <template #icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="5" cy="12" r="1"></circle>
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="19" cy="12" r="1"></circle>
                </g>
              </svg>
            </template>
          </n-button>
        </n-dropdown>
      </div>

      <div class="flex justify-between items-center pt-2.5">
        <span
          class="text-sm"
          :class="task.completed ? 'status-task-completed' : 'status-task-notcompleted'"
          >Status: {{ task.completed ? 'Completed' : 'Not Completed' }}</span
        >
        <span
          class="text-sm border border-black border-dashed p-1.25 text-black/75"
          :class="isDark ? 'dark-tasklist-created-at' : ''"
        >
          Task added: {{ task.createdAt.slice(0, 10).replaceAll('-', '/') }}
        </span>
      </div>
    </li>

    <li v-if="filteredTasks.length === 0">
      <p class="text-center font-bold text-xl pt-2.5" v-if="currentFilter === 'all'">
        The task list is empty, add the first one!
      </p>
      <p class="text-center font-bold text-xl pt-2.5" v-else-if="currentFilter === 'completed'">
        The list of completed tasks is empty!
      </p>
      <p class="text-center font-bold text-xl pt-2.5" v-else-if="currentFilter === 'not-completed'">
        The list of unfinished tasks is empty!
      </p>
    </li>
  </ul>

  <base-modal
    :title="isEditTask ? `Edit Task` : `Current Task`"
    v-model="showTask"
    @close="cancelBtnHandler"
  >
    <div class="border-b border-gray-400 mb-5"></div>
    <div v-if="!isEditTask">
      <p class="font-bold text-xl text-center">
        {{ selectedTask?.text }}
      </p>
    </div>
    <div v-else>
      <div class="border-b border-gray-400 pb-5 mb-5">
        <p class="font-bold text-xl text-center">
          {{ selectedTask?.text }}
        </p>
      </div>
      <input
        id="task-input"
        class="block w-full border-2 border-[#14b8a6] outline-0 p-2 rounded-lg font-medium text-2xl mb-5"
        type="text"
        placeholder="Change Task"
        v-model.trim="editTaskInput"
      />
      <div class="flex justify-end items-center gap-1.25">
        <n-button
          class="cancel-btn"
          strong
          secondary
          :focusable="false"
          :bordered="false"
          @click="cancelBtnHandler"
        >
          Cancel
        </n-button>
        <n-button
          class="create-btn"
          strong
          type="primary"
          :focusable="false"
          :bordered="false"
          :disabled="editDisableBtn"
          @click="editBtnHandler(selectedTask!.id)"
        >
          Edit Task
        </n-button>
      </div>
    </div>
  </base-modal>
</template>
