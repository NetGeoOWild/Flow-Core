<script setup lang="ts">
import { useTheme } from '@/composable/useTheme'
import { NSwitch } from 'naive-ui'

const { isDark, railStyle } = useTheme()
</script>

<template>
  <n-switch v-model:value="isDark" size="large" :railStyle="railStyle">
    <template #icon>
      <svg
        v-if="!isDark"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 16 16"
      >
        <g fill="none">
          <path
            d="M8 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 8 1zm0 10a3 3 0 1 0 0-6a3 3 0 0 0 0 6zm6.5-2.5a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1h1zM8 13a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 8 13zM2.5 8.5a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1h1zm.646-5.354a.5.5 0 0 1 .708 0l1 1a.5.5 0 1 1-.708.708l-1-1a.5.5 0 0 1 0-.708zm.708 9.708a.5.5 0 1 1-.708-.707l1-1a.5.5 0 0 1 .708.707l-1 1zm9-9.708a.5.5 0 0 0-.708 0l-1 1a.5.5 0 0 0 .708.708l1-1a.5.5 0 0 0 0-.708zm-.708 9.708a.5.5 0 0 0 .708-.707l-1-1a.5.5 0 0 0-.708.707l1 1z"
            fill="orange"
          ></path>
        </g>
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 24 24"
      >
        <path
          d="M12.01 12c0-3.57 2.2-6.62 5.31-7.87c.89-.36.75-1.69-.19-1.9c-1.1-.24-2.27-.3-3.48-.14c-4.51.6-8.12 4.31-8.59 8.83C4.44 16.93 9.13 22 15.01 22c.73 0 1.43-.08 2.12-.23c.95-.21 1.1-1.53.2-1.9A8.46 8.46 0 0 1 12.01 12z"
          fill="purple"
        ></path>
      </svg>
    </template>
  </n-switch>
</template>
