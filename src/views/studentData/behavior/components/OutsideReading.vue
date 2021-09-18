<template>
  <div style="width: 100%; height: 100%">
    <Echart width="100%" height="100%" :options="options"></Echart>
  </div>
</template>
<script>
import Echart from "@/components/echart";
export default {
  data() {
    return {
      options: {},
    };
  },
  components: { Echart },
  created() {},
  mounted() {
    const options = {
      grid: {
        left: "3%",
        right: "4%",
        bottom: "1%",
        top: "10%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        data: [
          "5本以下",
          "5-15本",
          "16-20本",
          "20-30本",
          "30-50本",
          "50本以上",
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
      },
      yAxis: {
        type: "value",
        splitLine: {
          lineStyle: {
            color: "rgba(255, 255, 255, .1)",
          },
        },
      },
      series: [
        {
          data: [360, 410, 980, 670, 390, 100],
          type: "bar",
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
          barWidth:24
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
