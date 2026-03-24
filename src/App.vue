<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { darkTheme, NConfigProvider, NGlobalStyle } from 'naive-ui'
import { useTheme } from '@/composable/useTheme'
import { useTaskStore } from './stores/taskStore'
import { lightThemeOverrides, darkThemeOverrides } from './configs/appConfig'
import AppMain from './layout/AppMain.vue'

const { isDark } = useTheme()
const taskStore = useTaskStore()

const currentOverrides = computed(() => {
  return isDark.value ? darkThemeOverrides : lightThemeOverrides
})

// Для примера что-бы список туду не был пустым
onMounted(() => {
  // Проверяем наличие данных в localStorage
  const storedTasks = localStorage.getItem('user-tasks')
  
  if (!storedTasks || JSON.parse(storedTasks).length === 0) {
    taskStore.addTask("Покормить кота")
    taskStore.addTask("Посмотреть мультфильм Шрек")
    taskStore.addTask("Сходить в спортивный зал")
  }
})
</script>

<template>
  <n-config-provider :theme-overrides="currentOverrides" :theme="isDark ? darkTheme : null">
    <n-global-style />
    <AppMain />
  </n-config-provider>
</template>
