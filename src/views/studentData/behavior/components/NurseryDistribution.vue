<template>
  <moduleHeader title="托管托育课分布">
    <Echart :options="options" height="100%"></Echart>
  </moduleHeader>
</template>
<script>
import moduleHeader from "@/components/moduleHeader.vue";
import Echart from "@/components/echart";
export default {
  data() {
    return {
      options: {},
    };
  },
  components: { moduleHeader, Echart },
  created() {},
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
        right: "1%",
        data: ["作答时间", "时间跨度"],
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
        bottom: "3%",
        top: "5%",
        containLabel: true,
      },
      xAxis: {
        type: "value",
        axisLabel: {
          color: "#96ACC3",
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255, 255, 255, .1)",
          },
        },
      },
      yAxis: {
        type: "category",
        name: "(单位: 人)",
        splitNumber: 5,
        nameLocation: "start",
         nameGap: 8,
        nameTextStyle: {
          color: "#96ACC3",
          align: "right",
          padding: [0, 8, 8, 0]
        },
        data: [
          "科学实验",
          "魔方",
          "数独",
          "国学经典",
          "Scratch编程",
          "卡漫",
          "素描",
          "书法",
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
          show: false,
        },
         axisLine: {
          show: false,
        },
      },
      series: [
        {
          type: "bar",
          data: [23, 23, 29, 70, 44, 30, 29, 70],
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
      ],
    };

    this.options = options;
  },
  computed: {},
  methods: {},
};
</script>
<style lang="scss" scoped>

</style>
