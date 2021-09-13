<template>
  <div>
    <module-header title="满意度变化趋势">
      <echart :options="options" width="4.85rem"></echart>
    </module-header>
  </div>
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
      options: {
        xAxis: {
          type: 'category',
          // data: this.echartsData.map(item => item[0])
        },
        yAxis: {
          type: 'value'
        },
        visualMap: {
          top: 100,
          right: 10,
          pieces: [{
            gt: 0,
            lte: 20,
            color: '#93CE07'
          }, {
            gt: 20,
            lte: 40,
            color: '#FBDB0F'
          }, {
            gt: 40,
            lte: 60,
            color: '#FC7D02'
          }, {
            gt: 60,
            lte: 80,
            color: '#FD0100'
          }, {
            gt: 80,
            lte:100,
            color: '#AA069F'
          }],
          outOfRange: {
            color: '#999'
          }
        },
        series: {
          type: 'line',
          data: [],
          markLine: {
            silent: true,
            lineStyle: {
              color: '#333'
            },
            data: [{
              yAxis: 0
            }, {
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
    }
  },
  mounted() {
    this.options.xAxis.data = this.echartsData.map(item => item[0])
    this.options.series.data = this.echartsData.map(item => item[1])
  }
}
</script>

<style scoped>

</style>