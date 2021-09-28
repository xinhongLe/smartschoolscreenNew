<template>
  <module-header title="数学竞赛及荣誉">
    <echart class="echart-box" :options="options"  width="100%" height="100%"></echart>
  </module-header>
</template>

<script>
import ModuleHeader from "@/components/moduleHeader";
import Echart from "@/components/echart";
export default {
  name: "teachRadar",
  components: {Echart, ModuleHeader},
  data() {
    return {
      options: {}
    }
  },
  mounted() {
    const options = {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['一年级', '二年级','三年级', '四年级', '五年级', '六年级'],
        icon: "diamond",
        orient: 'vertical',
        right: 20,
        top: 20,
        itemWidth: 8, // 图例标记的图形宽度。
        itemHeight: 8, //  图例标记的图形高度。
        itemGap: 10, // 图例每项之间的间隔。
        textStyle: {
          color: "#96ACC3",
          fontSize: 12, // 文字的字体大小。
        },
      },
      radar: {
        name: {
          textStyle: {
            color: '#96ACC3',
            fontSize: 12
          },
          lineHeight: -10
        },
        indicator: [
          { name: '市级教学竞赛', max: 65000 },
          { name: '国家级荣誉奖项', max: 65000 },
          { name: '省级荣誉奖项', max: 65000 },
          { name: '市级荣誉奖项', max: 65000 },
          { name: '国家级教学竞赛', max: 65000 },
          { name: '省级教学竞赛', max: 65000 },
        ],
        axisLine : {
          show : true,
          lineStyle : {
            width : 1,
            color : ['rgba(25, 52, 88, 0.8)']
          }
        },
        splitArea : {
          show : true,
          areaStyle : {
            color: ['#000916']
            // 图表背景网格的颜色
          }
        },
        splitLine : {
          show : true,
          lineStyle : {
            width : 1,
            color : ['rgba(25, 52, 88, 0.8)']
            // 图表背景网格线的颜色
          }
        }
      },
      series: [{
        name: '',
        type: 'radar',
        tooltip: {
          trigger: 'item'
        },
        data: [
          {
            value: [40000, 40000, 40000, 30000, 45000, 35000],
            name: '一年级',
            itemStyle: {
              color: '#0BFFFF',
            },
            areaStyle: {
              color: '#0BFFFF',
              opacity: 0.2
            },
          },
          {
            value: [20000, 25000, 45000, 30000, 20000,38000],
            name: '二年级',
            itemStyle: {
              color: '#D337D0',
            },
            areaStyle: {
              color: '#D337D0',
              opacity: 0.2
            },
          },
          {
            value: [45000, 20000, 35000, 45000, 30000, 20000],
            name: '三年级',
            itemStyle: {
              color: '#7AB3E2',
            },
            areaStyle: {
              color: '#7AB3E2',
              opacity: 0.2
            },
          },
          {
            value: [45000, 20000, 35000, 45000, 30000,40000],
            name: '四年级',
            itemStyle: {
              color: '#556CEC',
            },
            areaStyle: {
              color: '#556CEC',
              opacity: 0.2
            },
          },
          {
            value: [35000, 40000, 40000, 30000, 45000, 30000],
            name: '五年级',
            itemStyle: {
              color: '#FFA500',
            },
            areaStyle: {
              color: '#FFA500',
              opacity: 0.2
            },
          },
          {
            value: [30000, 45000, 30000, 30000, 35000, 30000],
            name: '六年级',
            itemStyle: {
              color: '#49E99E',
            },
            areaStyle: {
              color: '#49E99E',
              opacity: 0.2
            },
          },
        ]
      }]
    }

    this.options = options
  }
}
</script>

<style scoped>
.echart-box{
  padding-top: 0.1rem;
  box-sizing: border-box
}
</style>