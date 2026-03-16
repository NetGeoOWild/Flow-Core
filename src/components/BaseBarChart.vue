<script setup lang="ts">
import { computed } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import { type ApexOptions } from 'apexcharts'
import type { Tasks } from '@/stores/taskStore'

const props = defineProps<{
  seriesData: Tasks[]
  title?: string
  year: number
}>()

const selectedYearNumber = computed(() => new Date(props.year).getFullYear())

const chartOptions = computed<ApexOptions>(() => {
  return {
    chart: {
      type: 'bar',
      stacked: false,
      toolbar: { show: false },
    },

    plotOptions: {
      bar: {
        columnWidth: '80%',
        borderRadius: 4,
        dataLabels: {
          position: 'top',
        },
      },
    },

    xaxis: {
      categories: ['Year Activity'],
      labels: {
        style: {
          colors: '#ffffff',
          fontSize: '14px',
          fontWeight: 700,
        },
      },

      axisBorder: {
        show: true,
        color: '#ffffff',
        height: 2,
      },
    },

    yaxis: {
      labels: {
        style: {
          colors: '#ffffff',
          fontSize: '14px',
          fontWeight: 700,
        },

        formatter: (val) => val.toFixed(0),
      },

      title: {
        text: 'Tasks Count',
        style: {
          color: '#ffffff',
          fontWeight: 700,
        },
      },
    },

    legend: {
      show: true,
      position: 'bottom',
      labels: {
        colors: '#ffffff',
        useSeriesColors: false,
      },

      itemMargin: {
        horizontal: 10,
        vertical: 5,
      },
    },

    title: {
      text: `${props.title} - ${selectedYearNumber.value}`,
      align: 'center',
      style: {
        fontSize: '20px',
        fontWeight: 700,
        color: '#ffffff',
      },
    },

    dataLabels: {
      enabled: true,
      offsetY: -30,
      style: {
        fontSize: '12px',
        colors: ['#ffffff'],
      },
    },
  }
})

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

  return monthNames.map((month, index) => {
    const count = props.seriesData.filter((task) => {
      const d = new Date(task.createdAt)
      return d.getMonth() === index && d.getFullYear() === selectedYearNumber.value
    }).length

    return {
      name: month,
      data: [count],
    }
  })
})
</script>

<template>
  <VueApexCharts :options="chartOptions" :series="series" />
</template>
