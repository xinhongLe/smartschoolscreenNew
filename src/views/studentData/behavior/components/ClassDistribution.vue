<template>
  <moduleHeader title="家庭书面作业监控">
    <Echart width="100%" height="100%" :options="options"></Echart>
  </moduleHeader>
</template>
<script>
import moduleHeader from "@/components/moduleHeader.vue";
import Echart from "@/components/echart";
import * as echarts from "echarts";
export default {
  data() {
    return {
      options: {},
    };
  },
  components: { moduleHeader, Echart },
  created() {},
  computed: {},
  mounted() {
    const data = [
      "语文",
      "数学",
      "英语",
      "政治",
      "历史",
      "地理",
      "化学",
      "物理",
      "生物",
    ];
    const option = {
      grid: {
        left: "3%",
        right: "4%",
        bottom: "1%",
        top:"15%",
        containLabel: true,
      },  
      xAxis: {
        type: "category",
        data: data,
        axisTick: {
          show: false,
        },
      },
      yAxis: {
        type: "value",
        min: 20,
        max: 60,
        splitLine: {
          lineStyle: {
            color: "rgba(255, 255, 255, .1)",
          },
        },
        axisLabel: {
          formatter: function (value) {
            var texts = [];
            if (value <= 20) {
              texts.push("20");
            } else if (value <= 30) {
              texts.push("30");
            } else if (value <= 40) {
              texts.push("40");
            } else if (value <= 50) {
              texts.push("50");
            } else if (value <= 60) {
              texts.push("60");
            }
            return texts;
          },
        },
      },
      series: [
        {
          barWidth: 12,
          data: [
            {
              value: 60,
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: "#0DFFFF" },
                    { offset: 0.6, color: "#70BFFF" },
                    { offset: 1, color: "#70BFFF" },
                  ]),
                },
              },
            },
            {
              value: 60,
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: "#0DFFFF" },
                    { offset: 0.6, color: "#70BFFF" },
                    { offset: 1, color: "#70BFFF" },
                  ]),
                },
              },
            },
            {
              value: 42,
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: "#0DFFFF" },
                    { offset: 0.6, color: "#70BFFF" },
                    { offset: 1, color: "#70BFFF" },
                  ]),
                },
              },
            },
            {
              value: 33,
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: "#0DFFFF" },
                    { offset: 0.6, color: "#70BFFF" },
                    { offset: 1, color: "#70BFFF" },
                  ]),
                },
              },
            },
            {
              value: 35,
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: "#0DFFFF" },
                    { offset: 0.6, color: "#70BFFF" },
                    { offset: 1, color: "#70BFFF" },
                  ]),
                },
              },
            },
            {
              value: 34,
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: "#0DFFFF" },
                    { offset: 0.6, color: "#70BFFF" },
                    { offset: 1, color: "#70BFFF" },
                  ]),
                },
              },
            },
            {
              value: 36,
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: "#0DFFFF" },
                    { offset: 0.6, color: "#70BFFF" },
                    { offset: 1, color: "#70BFFF" },
                  ]),
                },
              },
            },
            {
              value: 38,
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: "#0DFFFF" },
                    { offset: 0.6, color: "#70BFFF" },
                    { offset: 1, color: "#70BFFF" },
                  ]),
                },
              },
            },
            {
              value: 37,
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: "#0DFFFF" },
                    { offset: 0.6, color: "#70BFFF" },
                    { offset: 1, color: "#70BFFF" },
                  ]),
                },
              },
            },
          ],
          type: "bar",
        },
      ],
    };
    this.options = option;
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
</style>
