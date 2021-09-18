<template>
  <module-header title="听评课（年度）">
    <echart width="100%" height="100%" :options="options"></echart>
  </module-header>

</template>

<script>
import Echart from "@/components/echart";
import ModuleHeader from "../../../../components/moduleHeader";
import * as echarts from "echarts";
export default {
  name: "listenLesson",
  components: {ModuleHeader, Echart},
  data() {
    return {
      options: {}
    };
  },
  mounted() {
    let options = {
      toolbox: {
        feature: {
          dataView: { show: false, readOnly: false },
          magicType: { show: false, type: ["line", "bar"] },
          restore: { show: false },
          saveAsImage: { show: false }
        }
      },
      legend: {
        data: ["听课", '评课', "课程评级"],
        left: "left",
        textStyle: {
          color: "#fff"
        }
      },
      xAxis: [
        {
          type: "category",
          data: [
            "一年级",
            "二年级",
            "三年级",
            "四年级",
            "五年级",
            "六年级"
          ],
          axisPointer: {
            type: "shadow"
          }
        }
      ],
      yAxis: [
        {
          type: "value",
          name: "单位：次",
          min: 0,
          max: 400,
          axisLabel: {
            formatter: "{value}"
          },
          splitLine: {
            lineStyle: {
              color: "rgba(255, 255, 255, .1)"
            }
          }
        },
        {
          type: "value",
          name: "单位：次",
          min: 1,
          max: 5,
          axisLabel: {
            formatter: "{value}"
          },
          splitLine: {
            lineStyle: {
              color: "rgba(255, 255, 255, .1)"
            }
          }
        }
      ],
      series: [
        {
          name: "听课",
          type: "bar",
          barWidth: 12,
          data: [120, 250, 320, 250, 200, 300],
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    { offset: 0, color: "#0DFFFF" },
                    { offset: 0.6, color: "#70BFFF" },
                    { offset: 1, color: "#70BFFF" }
                  ]
              )
            }
          }
        },
        {
          name: "评课",
          type: "bar",
          barWidth: 12,
          data: [220, 200, 250, 280, 150, 350],
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    { offset: 0, color: "#30A2FD" },
                    { offset: 0.6, color: "#30A2FD" },
                    { offset: 1, color: "#376CCB" }
                  ]
              )
            }
          }
        },
        {
          name: "课程评级",
          type: "line",
          yAxisIndex: 1,
          data: [3, 4, 5, 4, 4, 5],
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    { offset: 0, color: "#D7AD01" },
                    { offset: 0.6, color: "#D7AD01" },
                    { offset: 1, color: "#FFFE00" }
                  ]
              )
            }
          }
        }
      ]
    };
    this.options = options;
  },
}
</script>

<style scoped>

</style>