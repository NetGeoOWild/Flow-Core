<script setup lang="ts">
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useTaskStore } from '@/stores/taskStore'
import { useTheme } from '@/composable/useTheme'
import BasePieChart from '@/components/BasePieChart.vue'
import BaseHeatMapChart from '@/components/BaseHeatMapChart.vue'
import BaseBarChart from '@/components/BaseBarChart.vue'
import BaseYearPicker from '@/components/BaseYearPicker.vue'

const { isDark } = useTheme()
const { tasks } = storeToRefs(useTaskStore())
const currentYear = ref<number>(Date.now())

const filteredTasks = computed(() => {
  const selectedYear = new Date(currentYear.value).getFullYear()
  return tasks.value.filter((task) => new Date(task.createdAt).getFullYear() === selectedYear)
})

const allInYear = computed(() => filteredTasks.value.length)
const completedInYear = computed(
  () => filteredTasks.value.filter((t) => t.completed === true).length,
)
const pendingInYear = computed(
  () => filteredTasks.value.filter((t) => t.completed === false).length,
)
</script>

<template>
  <div class="wrapper">
    <div class="pt-5">
      <div class="mb-5">
        <BaseYearPicker v-model="currentYear" />
      </div>

      <div class="flex justify-between items-center align-middle gap-5 max-[1081px]:block">
        <div
          class="max-w-95 bg-gray-600/65 rounded-[15px] py-2.5 flex-1 max-[1081px]:mb-5 max-[1081px]:max-w-112.5 max-[1081px]:mx-auto"
          :class="isDark ? 'dark-donut-chart' : ''"
        >
          <BasePieChart
            :title="allInYear !== 0 ? 'Tasks Donut Chart' : 'No tasks found for year'"
            :year="currentYear"
            :labels="['All', 'Completed', 'Pending']"
            :series-data="[allInYear, completedInYear, pendingInYear]"
            :colors="['#4F7479', '#14b8a6', '#C82828']"
          />
        </div>
        <div
          class="flex-1 shrink-0 bg-gray-600/65 rounded-[15px] py-2.5 max-[1081px]:overflow-x-auto"
          :class="isDark ? 'dark-bar-chart' : ''"
        >
          <div class="max-[1081px]:min-w-250">
            <BaseBarChart
              :title="allInYear !== 0 ? 'Tasks Bar Chart' : 'No tasks found for year'"
              :year="currentYear"
              :series-data="filteredTasks"
            />
          </div>
        </div>
      </div>

      <div class="pt-5">
        <BaseHeatMapChart
          :title="allInYear !== 0 ? 'Tasks Heatmap Chart' : 'No tasks found for year'"
          :year="currentYear"
          :series-data="filteredTasks"
        />
      </div>
    </div>
  </div>
</template>
