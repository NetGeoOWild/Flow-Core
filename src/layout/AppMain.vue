<script setup lang="ts">
import { ref } from 'vue'
import { NLayout, NLayoutHeader, NLayoutContent } from 'naive-ui'
import AppHeader from './AppHeader.vue'
import BaseSidebar from '../components/BaseSidebar.vue'

const isCollapsed = ref(true)
</script>

<template>
  <n-layout>
    <n-layout-header class="header-container">
      <AppHeader />
    </n-layout-header>

    <n-layout has-sider class="sidebar-wrapper h-screen">
      <BaseSidebar class="h-screen" v-model:collapsed="isCollapsed" />

      <n-layout-content class="content-wrapper">
        <div v-show="isCollapsed">
          <router-view />
        </div>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>
