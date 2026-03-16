<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { storeToRefs } from 'pinia'
import { NDropdown, NButton } from 'naive-ui'
import { useTaskStore } from '@/stores/taskStore'
import { useTheme } from '@/composable/useTheme'
import { useAi } from '@/composable/useAi'
import BaseAddBtn from '@/components/BaseAddBtn.vue'
import BaseModal from '@/components/BaseModal.vue'
import TaskList from '@/components/TaskList.vue'
import BaseAiBlock from '@/components/BaseAiBlock.vue'

const { filterTasksName, filteredTasksCount } = storeToRefs(useTaskStore())
const { addTask, setFilter } = useTaskStore()
const { isLoading, error, aiResponse, aiCall } = useAi()
const { isDark } = useTheme()

const showModal = ref<boolean>(false)
const taskInput = ref<string>('')
const selectedAiTopics = ref<string[]>([])
const createDisabled = ref<boolean>(false)

const options = [
  {
    label: 'All tasks',
    key: 'all',
  },
  {
    label: 'Completed tasks',
    key: 'completed',
  },
  {
    label: 'Not completed tasks',
    key: 'not-completed',
  },
]

const handleSelect = (key: 'all' | 'completed' | 'not-completed') => {
  setFilter(key)
}

function createTaskHandler() {
  if (selectedAiTopics.value.length > 0) {
    selectedAiTopics.value.forEach((topicName) => {
      addTask(topicName)
    })
  } else if (taskInput.value.trim()) {
    addTask(taskInput.value)
  }

  showModal.value = false
  taskInput.value = ''
  selectedAiTopics.value = []
  aiResponse.value.roadmap = []
}

function closeHandler() {
  showModal.value = false
  taskInput.value = ''
  selectedAiTopics.value = []
  aiResponse.value.roadmap = []
}

watchEffect(() => {
  let isDisabled = false

  if (taskInput.value.length === 0 && selectedAiTopics.value.length === 0) {
    isDisabled = true
  }

  createDisabled.value = isDisabled
})
</script>

<template>
  <div class="wrapper">
    <div class="pt-5">
      <div
        class="bg-white/85 rounded-[15px] border border-gray-300"
        :class="isDark ? 'dark-task-table' : ''"
      >
        <div class="p-5">
          <div class="flex justify-between items-center border-b border-gray-400 pb-2.5">
            <h6
              class="text-xl font-bold max-[361px]:text-[18px]"
              :class="{
                'status-task-completed': filterTasksName === 'Completed',
                'status-task-notcompleted': filterTasksName === 'Not Completed',
              }"
            >
              Tasks - {{ filterTasksName }} ({{ filteredTasksCount }})
            </h6>
            <div>
              <BaseAddBtn @click-btn="showModal = !showModal" />
              <n-dropdown trigger="click" :options="options" @select="(key) => handleSelect(key)">
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
          </div>
          <!--list-->
          <TaskList />
        </div>
      </div>
    </div>
  </div>

  <base-modal :title="'Add New Task'" v-model="showModal" @close="closeHandler">
    <div class="border-b border-gray-400 mb-5">
      <input
        id="task-input"
        class="block w-full border-2 border-[#14b8a6] outline-0 p-2 rounded-lg font-medium text-2xl mb-5"
        type="text"
        placeholder="Add new task"
        v-model.trim="taskInput"
      />

      <n-button
        class="ai-btn block w-full bg-[#14b8a6] disabled:bg-[#08564e]"
        strong
        type="primary"
        :focusable="false"
        :bordered="false"
        @click="aiCall(taskInput)"
        :disabled="createDisabled || isLoading"
      >
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
              <path
                d="M17.8 19.817l-2.172 1.138a.392.392 0 0 1-.568-.41l.415-2.411l-1.757-1.707a.389.389 0 0 1 .217-.665l2.428-.352l1.086-2.193a.392.392 0 0 1 .702 0l1.086 2.193l2.428.352a.39.39 0 0 1 .217.665l-1.757 1.707l.414 2.41a.39.39 0 0 1-.567.411L17.8 19.817z"
              ></path>
              <path
                d="M6.2 19.817l-2.172 1.138a.392.392 0 0 1-.568-.41l.415-2.411l-1.757-1.707a.389.389 0 0 1 .217-.665l2.428-.352l1.086-2.193a.392.392 0 0 1 .702 0l1.086 2.193l2.428.352a.39.39 0 0 1 .217.665l-1.757 1.707l.414 2.41a.39.39 0 0 1-.567.411L6.2 19.817z"
              ></path>
              <path
                d="M12 9.817l-2.172 1.138a.392.392 0 0 1-.568-.41l.415-2.411l-1.757-1.707a.389.389 0 0 1 .217-.665l2.428-.352l1.086-2.193a.392.392 0 0 1 .702 0l1.086 2.193l2.428.352a.39.39 0 0 1 .217.665l-1.757 1.707l.414 2.41a.39.39 0 0 1-.567.411L12 9.817z"
              ></path>
            </g>
          </svg>
        </template>
        Split with AI (Beta)
      </n-button>
    </div>

    <div>
      <div v-if="isLoading">
        <div
          class="bg-[#E8F6F7] flex justify-center items-center border border-[#b7f3f7] rounded-lg min-h-10"
        >
          <span class="text-black block mr-1.25">Processing…</span>
          <div class="animate-spin w-3.75 h-3.75 border-l border-black rounded-[50%]"></div>
        </div>
      </div>
      <BaseAiBlock v-else v-model="selectedAiTopics" :ai-response="aiResponse" :error="error" />
    </div>

    <div class="flex justify-end items-center gap-1.25 pt-5">
      <n-button
        class="cancel-btn"
        strong
        secondary
        :focusable="false"
        :bordered="false"
        @click="closeHandler"
      >
        Cancel
      </n-button>
      <n-button
        class="create-btn"
        strong
        type="primary"
        :focusable="false"
        :bordered="false"
        :disabled="createDisabled || isLoading"
        @click="createTaskHandler"
      >
        Create Task
      </n-button>
    </div>
  </base-modal>
</template>

<style scoped>
.create-btn {
  border-radius: 8px;
}

.cancel-btn {
  border-radius: 8px;
}

.create-btn:hover,
.ai-btn:hover {
  transition: all linear 0.3s;
}

.ai-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 8px;
  margin-bottom: 20px;
  font-weight: bold;
}
</style>
