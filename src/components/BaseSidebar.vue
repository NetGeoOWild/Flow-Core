<script setup lang="ts">
import { computed, h } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import type { MenuOption } from 'naive-ui'
import { NLayoutSider, NMenu } from 'naive-ui'
import { useRenderIcon } from '@/composable/useRenderIcon'

const route = useRoute()
const renderIcon = useRenderIcon()

const props = defineProps<{
  collapsed: boolean
}>()

const emit = defineEmits<{
  (e: 'update:collapsed', value: boolean): void
}>()

const activeKey = computed((): string => {
  return route.name as string
})

const menuOptions: MenuOption[] = [
  {
    label: () => h(RouterLink, { to: '/dashboard' }, { default: () => 'Dashboard' }),
    key: 'dashboard',
    icon: renderIcon.renderIcon(
      'M3 11h8V3H3v8zm2-6h4v4H5V5zm8-2v8h8V3h-8zm6 6h-4V5h4v4zM3 21h8v-8H3v8zm2-6h4v4H5v-4zm13-2h-2v3h-3v2h3v3h2v-3h3v-2h-3z',
    ),
  },
  {
    label: () => h(RouterLink, { to: '/tasks' }, { default: () => 'Tasks' }),
    key: 'tasks',
    icon: renderIcon.renderIcon(
      'M22 5.18L10.59 16.6l-4.24-4.24l1.41-1.41l2.83 2.83l10-10L22 5.18zM12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8c1.57 0 3.04.46 4.28 1.25l1.45-1.45A10.02 10.02 0 0 0 12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.73 0 3.36-.44 4.78-1.22l-1.5-1.5c-1 .46-2.11.72-3.28.72zm7-5h-3v2h3v3h2v-3h3v-2h-3v-3h-2v3z',
    ),
  },
]

const handleCollapse = () => emit('update:collapsed', true)
const handleExpand = () => emit('update:collapsed', false)
</script>

<template>
  <n-layout-sider
    bordered
    collapse-mode="width"
    :collapsed-width="64"
    :width="240"
    :collapsed="props.collapsed"
    show-trigger
    @collapse="handleCollapse"
    @expand="handleExpand"
  >
    <div class="flex items-center align-middle" v-if="!props.collapsed">
      <img class="block w-full max-w-20" src="../assets/images/logo.png" alt="logo" />
      <h6 class="text-xl font-bold text-[#14b8a6] border-b-2">FlowCore</h6>
    </div>
    <n-menu
      class="sidebar-menu"
      :value="activeKey"
      :collapsed-width="64"
      :collapsed-icon-size="22"
      :options="menuOptions"
      @update:value="handleCollapse"
    />
  </n-layout-sider>
</template>

<style scoped>
.sidebar-menu {
  font-size: 18px;
  font-weight: bold;
}
</style>
