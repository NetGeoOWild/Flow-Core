<script setup lang="ts">
import { computed } from 'vue'
import { darkTheme, NConfigProvider, NGlobalStyle } from 'naive-ui'
import { useTheme } from '@/composable/useTheme'
import { useTaskStore } from './stores/taskStore'
import { lightThemeOverrides, darkThemeOverrides } from './configs/appConfig'
import AppMain from './layout/AppMain.vue'

const { isDark } = useTheme()

const currentOverrides = computed(() => {
  return isDark.value ? darkThemeOverrides : lightThemeOverrides
})

// Для примера что-бы список туду не был пустым
const { addTask } = useTaskStore()
addTask("Покормить кота")
addTask("Посмотреть мультфильм Шрек")
addTask("Сходить в спортивный зал")
</script>

<template>
  <n-config-provider :theme-overrides="currentOverrides" :theme="isDark ? darkTheme : null">
    <n-global-style />
    <AppMain />
  </n-config-provider>
</template>
