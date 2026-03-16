<script setup lang="ts">
import { computed } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import { type ApexOptions } from 'apexcharts'

const props = defineProps<{
  labels: string[]
  colors: string[]
  seriesData: number[]
  title?: string
  year: number
}>()

const selectedYearNumber = computed(() => new Date(props.year).getFullYear())

const chartOptions = computed<ApexOptions>(() => {
  return {
    labels: props.labels,
    colors: props.colors,

    chart: {
      type: 'donut',
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

    legend: {
      show: true,
      position: 'bottom',
      fontWeight: 700,
      fontSize: '12px',
      itemMargin: {
        horizontal: 9,
      },

      labels: {
        colors: '#ffffff',
      },

      markers: {
        strokeWidth: 0,
        offsetX: -3,
      },
    },

    stroke: {
      show: false,
    },

    dataLabels: {
      enabled: true,
      style: {
        fontSize: '18px',
        fontWeight: 700,
      },
      background: {
        borderWidth: 0,
        dropShadow: {
          enabled: false,
        },
      },
    },

    noData: {
      text: 'No tasks available',
      style: {
        fontSize: '18px',
      },
    },

    responsive: [
      {
        breakpoint: 481,
        options: {
          title: {
            style: {
              fontSize: '16px',
            },
          },
          dataLabels: {
            enabled: true,
            style: {
              fontSize: '16px',
            },
          },
        },
      },
      {
        breakpoint: 361,
        options: {
          title: {
            style: {
              fontSize: '14px',
            },
          },
          dataLabels: {
            enabled: true,
            style: {
              fontSize: '14px',
            },
          },
        },
      },
    ],
  }
})
</script>

<template>
  <div class="donut-chart-wrapper">
    <VueApexCharts :options="chartOptions" :series="props.seriesData" />
  </div>
</template>
