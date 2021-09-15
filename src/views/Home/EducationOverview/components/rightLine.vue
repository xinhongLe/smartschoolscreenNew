<template>
  <module-header title="满意度变化趋势">
      <echart :options="options" width="100%" height="100%"></echart>
  </module-header>
</template>

<script>
import Echart from "@/components/echart";
import ModuleHeader from "@/components/moduleHeader";
export default {
  name: "rightLine",
  components: {ModuleHeader, Echart},
  data() {
    return {
      echartsData: [
          ["2019-01", 71],
          ["2019-02", 73],
          ["2019-03", 79],
          ["2019-04", 81],
          ["2019-05", 84],
          ["2019-06", 85],
          ["2019-07", 90],
          ["2019-08", 93],
          ["2019-09", 94],
          ["2019-10", 90],
          ["2019-11", 91],
          ["2019-12", 92],
          ["2020-01", 89],
          ["2020-02", 89],
          ["2020-03", 88],
          ["2020-04", 90],
          ["2020-05", 88],
          ["2020-06", 89],
          ["2020-07", 92],
          ["2020-08", 93],
          ["2020-09", 91],
          ["2020-10", 90],
          ["2020-11", 89],
          ["2020-12", 90],
          ["2021-01", 91],
          ["2021-02", 91],
          ["2021-03", 90],
          ["2021-04", 80],
          ["2021-05", 93],
          ["2021-06", 88],
          ["2021-07", 89],
          ["2021-08", 90],
          ["2021-09", 88]
      ],
      options: {}
    }
  },
  mounted() {
    const options = {
      // animationDuration: 10000,
      tooltip: {
        trigger: 'axis'
      },
      grid: {
        left: '30px',
        right: '0%',
        bottom: '30px'
      },
      xAxis: {
        data: this.echartsData.map(item => item[0]),
        axisLine: {
          lineStyle: {
            color: '#96ACC3',
          }
        }
      },
      yAxis: {
        name: '百分比',
        axisLine: {
          lineStyle: {
            color: '#96ACC3',
          }
        }
      },
      visualMap: {
        top: 100,
        right: 10,
        pieces: [{
          gt: 0,
          lte: 20,
          color: '#EF3B3B'
        }, {
          gt: 20,
          lte: 40,
          color: '#FEFD00'
        }, {
          gt: 40,
          lte: 60,
          color: '#30A2FD'
        }, {
          gt: 60,
          lte: 80,
          color: '#0DFFFF'
        }, {
          gt: 80,
          lte:100,
          color: '#0DFF60'
        }],
        show: false
      },
      series: {
        name: '满意度',
        type: 'line',
        data: this.echartsData.map(item => item[1]),
      }
    }
    this.options = options
  }
}
</script>

<style scoped lang="scss">
</style>