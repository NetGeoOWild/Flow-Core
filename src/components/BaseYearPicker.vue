<script setup lang="ts">
import { NDatePicker } from 'naive-ui'

const model = defineModel({ required: true, default: Date.now() })
</script>

<template>
  <n-date-picker v-model:value="model" type="year" />
</template>
