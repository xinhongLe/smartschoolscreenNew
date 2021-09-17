<template>
  <moduleHeader title="作业类型">
    <Echart :options="options" height="100%"></Echart>
  </moduleHeader>
</template>
<script>
import moduleHeader from "@/components/moduleHeader.vue";
import Echart from "@/components/echart";
export default {
  components: {
    moduleHeader,
    Echart,
  },
  data() {
    return {
      options: {},
    };
  },
  mounted() {
    const options = {
      legend: {
        type: "scroll",
        left: "center",
        data: ["巩固型作业", "创造型作业", "实践型作业", "综合性作业"],
        icon: "diamond",
        top: 70,
        itemWidth: 8, // 图例标记的图形宽度。
        itemGap: 20, // 图例每项之间的间隔。
        itemHeight: 8, //  图例标记的图形高度。
        textStyle: {
          color: "#96ACC3",
          fontSize: 12, // 文字的字体大小。
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        top: "30%",
        containLabel: true,
      },
      yAxis: {
        type: "value",
        name: "单位: %",
        nameTextStyle: {
          align: "right",
          lineHeight:86,
          padding:[-20,0,0,0]
        },
        splitNumber:4,
        axisLabel: {
          // formatter:'{value}min',
          color: "#96ACC3",
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255, 255, 255, .1)",
          }
        },
      },
      xAxis: {
        type: "category",
        data: [
          "一年级",
          "二年级",
          "三年级",
          "四年级",
          "五年级",
          "六年级"
        ],
        axisLabel: {
          show: true,
          textStyle: {
            color: "#96ACC3",
          },
          fontSize: 12,
          interval: 0,
          margin: 12,
        },
        axisTick: {
          show: false
        },
      },
      series: [
        {
          name: "巩固型作业",
          type: "bar",
          stack: "总量",
          data: [7.4, 14.5, 20, 5.14, 11.7, 8.2],
          itemStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "#0DFFFF", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#70BFFF", // 100% 处的颜色
                },
              ],
              global: false, // 缺省为 false
            },
          },
          barWidth: 12, //柱图宽度
        },
        {
          name: "创造型作业",
          type: "bar",
          stack: "总量",
          data: [3.1, 6.2, 12.5, 8.8, 10.2, 7.4],
          itemStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "#30A2FD", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#376CCB", // 100% 处的颜色
                },
              ],
              global: false, // 缺省为 false
            },
          },
          barWidth: 12, //柱图宽度
        },
        {
          name: "实践型作业",
          type: "bar",
          stack: "总量",
          data: [2.5, 4.8, 9.1, 5.4, 5.7, 5.7],
          itemStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "#A962F3", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#7833E2", // 100% 处的颜色
                },
              ],
              global: false, // 缺省为 false
            },
          },
          barWidth: 12, //柱图宽度
        },
        {
          name: "综合性作业",
          type: "bar",
          stack: "总量",
          data: [2, 4, 17, 3, 9, 4.5],
          itemStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "#FC5AD3", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#B921D0", // 100% 处的颜色
                },
              ],
              global: false, // 缺省为 false
            },
          },
          barWidth: 12, //柱图宽度
        }
      ],
    };

    this.options = options;
  },
};
</script>
<style scoped>
</style>