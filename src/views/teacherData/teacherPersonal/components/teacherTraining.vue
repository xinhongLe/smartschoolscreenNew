<template>
  <moduleHeader title="作业正确率">
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
      grid: {
        left: "3%",
        right: "4%",
        bottom: "2%",
        top: "20%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        data: ["一年级", "二年级", "三年级", "四年级", "五年级", "六年级"],
        axisTick: {
          show: false,
        },
      },
      yAxis: {
        type: "value",
        name: "单位: %",
        nameTextStyle: {
          color: "#96ACC3",
          align: "right",
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255, 255, 255, .1)",
          },
        },
      },
      series: [
        {
          data: [84, 89, 76, 80, 79, 78],
          type: "bar",
          label: {
            show: true,
            position: "top",
            // valueAnimation: true,
            formatter: '{c}%',
            color: '#0DFFFF',
            fontSize: 16
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
          barMaxWidth: "40%",
        },
      ],
    };

    this.options = options;
  },
};
</script>
<style scoped>
</style>