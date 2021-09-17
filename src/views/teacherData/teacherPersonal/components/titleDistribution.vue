<template>
  <module-header title="职称分布">
    <Echart :options="options" height="100%"></Echart>
  </module-header>
</template>
<script>
import moduleHeader from "@/components/moduleHeader.vue";
import Echart from "@/components/echart";
export default {
  components: { moduleHeader, Echart },
  data() {
    return {
      options: {},
    };
  },
  mounted() {
    const options = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
        },
      },
      legend: {
        type: "scroll",
        left: "1%",
        data: ["正高级", "[80,90]", "[70,80]", "[60,70]", "[0,60]"],
        icon: "diamond",
        top: 10,
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
        bottom: "1%",
        top: "15%",
        containLabel: true,
      },
      xAxis: {
        type: "value",
        show: false,
      },
      yAxis: {
        type: "category",
        data: ["三年级", "四年级", "五年级", "六年级"],
        axisLine: {
          show: false,
        },
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
          show: false,
        },
      },
      series: [
        {
          name: "正高级",
          type: "bar",
          stack: "总量",
          data: [30, 32, 29, 33],
          label: {
            show: true,
            formatter: "{c}人",
            position: "bottom",
            color: "#0DFFFF",
          },
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
          name: "[80,90]",
          type: "bar",
          stack: "总量",
          data: [20, 32, 11, 14],
          label: {
            show: true,
            formatter: "{c}人",
            position: "bottom",
            color: "#30A2FD",
          },
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
          name: "[70,80]",
          type: "bar",
          stack: "总量",
          data: [33, 31, 29, 13],
          label: {
            show: true,
            formatter: "{c}人",
            position: "bottom",
            color: "#A962F3",
          },
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
          name: "[60,70]",
          type: "bar",
          stack: "总量",
          data: [33, 41, 29, 33],
          label: {
            show: true,
            formatter: "{c}人",
            position: "bottom",
            color: "#FC5AD3",
          },
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
        },
        {
          name: "[0,60]",
          type: "bar",
          stack: "总量",
          data: [33, 20, 20, 33],
          label: {
            show: true,
            formatter: "{c}人",
            position: "bottom",
            color: "#96ACC3",
          },
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
                  color: "#96ACC3", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#FFFFFF", // 100% 处的颜色
                },
              ],
              global: false, // 缺省为 false
            },
          },
          barWidth: 12, //柱图宽度
        },
      ],
    };
    this.options = options;
  },
};
</script>
<style scoped>
</style>