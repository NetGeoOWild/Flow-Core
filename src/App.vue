<script setup lang="ts">
import { computed } from 'vue'
import { darkTheme, NConfigProvider, NGlobalStyle } from 'naive-ui'
import { useTheme } from '@/composable/useTheme'
import { lightThemeOverrides, darkThemeOverrides } from './configs/appConfig'
import AppMain from './layout/AppMain.vue'

const { isDark } = useTheme()
const currentOverrides = computed(() => {
  return isDark.value ? darkThemeOverrides : lightThemeOverrides
})
</script>

<template>
  <n-config-provider :theme-overrides="currentOverrides" :theme="isDark ? darkTheme : null">
    <n-global-style />
    <AppMain />
  </n-config-provider>
</template>
