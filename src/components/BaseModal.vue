<script setup lang="ts">
import { NModal } from 'naive-ui'
const model = defineModel({ required: true, default: false })

defineProps<{
  title: string
}>()

const emit = defineEmits(['close'])

const handleClose = () => {
  emit('close')
}
</script>

<template>
  <n-modal
    class="custom-card max-w-150"
    preset="card"
    size="huge"
    :bordered="false"
    :title="title"
    v-model:show="model"
    :auto-focus="false"
    :on-mask-click="handleClose"
    :on-close="handleClose"
    :on-esc="handleClose"
  >
    <slot />
  </n-modal>
</template>
