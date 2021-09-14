<template>
  <module-header title="满意度变化趋势">
      <echart :options="options" width="100%" height="100%"></echart>
  </module-header>
</template>

<script>
import Echart from "../../../../components/echart";
import ModuleHeader from "../../../../components/moduleHeader";
export default {
  name: "rightLine",
  components: {ModuleHeader, Echart},
  data() {
    return {
      echartsData: [
          ["2019-01", 20],
          ["2019-02", 10],
          ["2019-03", 25],
          ["2019-04", 35],
          ["2019-05", 45],
          ["2019-06", 80],
          ["2019-07", 89],
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
        markLine: {
          // silent: true,
          symbol: ["none", "none"],
          lineStyle: {
            color: '#fff'
          },
          data: [{
            yAxis: 20
          }, {
            yAxis: 40
          }, {
            yAxis: 60
          }, {
            yAxis: 80
          }, {
            yAxis: 100
          }]
        }
      }
    }
    // this.options.xAxis.data = this.echartsData.map(item => item[0])
    // this.options.series.data = this.echartsData.map(item => item[1])
    this.options = options
    // setInterval(() => {
    //   this.options = {...this.options}
    // },5000)
  }
}
</script>

<style scoped lang="scss">
</style>