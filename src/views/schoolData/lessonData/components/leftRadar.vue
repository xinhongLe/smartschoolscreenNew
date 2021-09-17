<template>
   <module-header title="课堂互动表现分布">
     <echart class="echart-box" :options="options"  width="100%" height="100%"></echart>
   </module-header>
</template>

<script>
import ModuleHeader from "@/components/moduleHeader";
import Echart from "@/components/echart";
export default {
  name: "leftRadar",
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
        data: ['实际值', '参考值'],
        icon: "diamond",
        orient: 'vertical',
        left: 10,
        top: 5,
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
          { name: '学生专注度', max: 65000 },
          { name: '学生举手/次', max: 65000 },
          { name: '学生上台/次', max: 65000 },
          { name: '学生回答/次', max: 65000 },
          { name: '教师入场/次', max: 65000 },
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
            value: [43000, 52000, 30000, 30000, 25000],
            name: '参考值',
            itemStyle: {
              color: '#ad8526',
            },
            lineStyle:{
              type: 'dashed'
            },
            areaStyle: {
              color: 'rgba(173 133 38)',
              opacity: 0.5
            },
          },
          {
            value: [45000, 50000, 15000, 30000, 45000],
            name: '实际值',
            itemStyle: {
              color: '#5bffff',
            },
            areaStyle: {
              color: 'rgba(99 255 255)',
              opacity: 0.6
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