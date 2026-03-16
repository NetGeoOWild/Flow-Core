<script setup lang="ts">
import { NButton } from 'naive-ui'
defineEmits(['click-btn'])
</script>

<template>
  <n-button :bordered="false" @click="$emit('click-btn')">
    <template #icon>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 32 32"
      >
        <path d="M17 15V8h-2v7H8v2h7v7h2v-7h7v-2z" fill="currentColor"></path>
      </svg>
    </template>
  </n-button>
</template>
