<script setup lang="ts">
import data from "~/assets/data/skill.json";
import { Radar } from 'vue-chartjs'
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js'

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

const chartOptions = {
  scales: {
    r: {
      angleLines: {
        display: true
      },
      min: 0,
      max: 3,
      ticks: {
        stepSize: 1,
      },
    },
  },
  interaction: {
    intersect: false,
    mode: 'nearest',
    displayColors: false,
  },
  plugins: {
    legend: {
      display: false,
    },
  },
} as any

const raderColor = {
  background: [
    'rgba(127, 0, 0, .25)',
    'rgba(0, 127, 0, .25)',
    'rgba(0, 0, 127, .25)',
  ],
  border: [
    'rgba(127, 0, 0, .5)',
    'rgba(0, 127, 0, .5)',
    'rgba(0, 0, 127, .5)',
  ],
}

function getChartData(index: number) {
  type description = string[]
  const labels: string[] = []
  const chartData: number[] = []
  const description: description[] = []
  const category = data.skill[index]

  category.items.forEach(element => {
    labels.push(element.name)
    chartData.push(element.level)
    description.push(element.description)
  })

  return {
    labels: labels,
    datasets: [
      {
        data: chartData,
        backgroundColor: raderColor.background[index],
        borderColor: raderColor.border[index],
        tooltip: {
          callbacks: {
            label: (context: any) => {
              return description[context.dataIndex]
            },
          }
        }
      },
    ],
  }
}
</script>

<template>
  <SkillLevel :level="data.level"/>

  <div class="skillList">
    <section class="" v-for="block, index in data.skill" :key="index">
      <h2>{{ block.category }}</h2>
      <Radar :data="getChartData(index)" :options="chartOptions"/>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.skillList {
  display: flex;
  justify-content: space-between;
  @include sp {
    flex-direction: column;
    gap: 2em;
  }
}

h2 {
  text-align: center;
  margin-bottom: .5em;
  @include sp {
    font-size: 1.25em;
  }
}

canvas {
  background: $white;
}
</style>
