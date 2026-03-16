<script setup lang="ts">
import BaseCheckBox from './BaseCheckBox.vue'
import type { AiError, RoadmapResponse } from '@/composable/useAi'

const selectedTopics = defineModel<string[]>({ default: [] })

defineProps<{
  aiResponse: RoadmapResponse
  error: AiError
}>()
</script>

<template>
  <div v-if="error?.isError">
    <p v-if="error.status" class="text-center font-bold text-lg text-red-500/90">
      Error: {{ error.status }}
    </p>
    <p class="text-center font-bold text-lg text-red-500/90">{{ error.message }}</p>
  </div>

  <ul v-else>
    <li v-for="step in aiResponse.roadmap" :key="step.step">
      <h6 class="text-[16px] font-bold mb-2.5">{{ step.name }}</h6>
      <ul>
        <li class="mb-2.5" v-for="topic in step.topics" :key="topic">
          <base-check-box class="flex gap-2 items-center" v-model="selectedTopics" :value="topic">
            <p class="max-w-50 text-[14px]">{{ topic }}</p>
          </base-check-box>
        </li>
      </ul>
    </li>
  </ul>
</template>
