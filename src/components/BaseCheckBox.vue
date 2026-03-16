<script setup lang="ts">
const model = defineModel<string[]>()
defineProps<{ value: string }>()
</script>

<template>
  <label>
    <input type="checkbox" v-model="model" :value="value" class="w-4 h-4 accent-teal-500" />
    <slot />
  </label>
</template>
