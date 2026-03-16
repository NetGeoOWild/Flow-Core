<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from '@/composable/useTheme'
import VueApexCharts from 'vue3-apexcharts'
import { type ApexOptions } from 'apexcharts'
import type { Tasks } from '@/stores/taskStore'

const { isDark } = useTheme()

const props = defineProps<{
  seriesData: Tasks[]
  title?: string
  year: number
}>()

const selectedYearNumber = computed(() => new Date(props.year).getFullYear())

const series = computed(() => {
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  const yearGrid = monthNames.map((month) => {
    return {
      name: month,
      data: Array.from({ length: 31 }, (_, i) => {
        return {
          x: (i + 1).toString(),
          y: 0,
        }
      }),
    }
  })

  props.seriesData.forEach((task) => {
    const date = new Date(task.createdAt)

    if (date.getFullYear() === selectedYearNumber.value) {
      const monthIdx = date.getMonth()
      const dayIdx = date.getDate() - 1

      if (yearGrid[monthIdx] && yearGrid[monthIdx].data[dayIdx]) {
        yearGrid[monthIdx].data[dayIdx].y += 1
      }
    }
  })

  return yearGrid.reverse()
})

const chartOptions = computed<ApexOptions>(() => {
  return {
    chart: {
      type: 'heatmap',
      background: isDark.value ? '#222222' : '#848E99',
      toolbar: {
        offsetX: -10,
        offsetY: 10,
        tools: {
          download: `
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32">
        <circle cx="8" cy="16" r="2" fill="#ffffff">
        </circle><circle cx="16" cy="16" r="2" fill="#ffffff"></circle>
        <circle cx="24" cy="16" r="2" fill="#ffffff"></circle>
        </svg>
        `,
        },
      },
    },

    tooltip: {
      enabled: true,
      theme: isDark.value ? 'dark' : '',
    },

    title: {
      text: `${props.title} - ${selectedYearNumber.value}`,
      align: 'center',
      style: {
        fontSize: '20px',
        fontWeight: 700,
        color: '#ffffff',
      },
      offsetY: 5,
    },

    stroke: {
      show: true,
      width: 2,
      colors: ['#B6C0C9'],
    },

    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'center',
      offsetY: 10,
      labels: {
        colors: '#ffffff',
      },
      markers: {
        size: 7,
        strokeWidth: 0,
        shape: 'circle',
        offsetX: -5,
      },
      itemMargin: {
        horizontal: 15,
        vertical: 5,
      },
    },

    plotOptions: {
      heatmap: {
        radius: 4,
        colorScale: {
          ranges: [
            { from: 0, to: 0, color: '#303030', name: 'No tasks' },
            { from: 1, to: 3, color: '#28e0bb', name: '1-3 tasks' },
            { from: 4, to: 6, color: '#20bf9f', name: '4-6 tasks' },
            { from: 7, to: 99, color: '#11846d', name: '7+ tasks' },
          ],
        },
      },
    },

    dataLabels: {
      enabled: true,
      style: {
        colors: ['#ffffff'],
        fontSize: '12px',
        fontWeight: 'bold',
      },
    },

    xaxis: {
      labels: {
        style: { colors: '#ffffff', fontSize: '12px', fontWeight: 700 },
      },
    },

    yaxis: {
      labels: {
        style: { colors: '#ffffff', fontSize: '12px', fontWeight: 700 },
      },
    },
  }
})
</script>

<template>
  <div class="heatmap-chart-wrapper overflow-x-auto pb-2.5 rounded-[15px]">
    <div class="min-w-250">
      <VueApexCharts :height="400" :options="chartOptions" :series="series" />
    </div>
  </div>
</template>
