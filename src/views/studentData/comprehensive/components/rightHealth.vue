<template>
  <module-header title="身心健康指数">
    <Flex :flex="1" column>
      <title-common :titleList="titleList"></title-common>
      <Flex :flex="1">
         <echart  width="100%" height="100%" :options="options"></echart>
       </Flex>
    </Flex>
  </module-header>
</template>

<script>
import ModuleHeader from "@/components/moduleHeader";
import TitleCommon from "@/components/titleCommon";
import Echart from "@/components/echart";
import * as echarts from "echarts";
import Flex from "../../../../components/flex";
export default {
  name: "rightHealth",
  components: {Flex, Echart, TitleCommon, ModuleHeader},
  data() {
    return {
      options: {},
      titleList: [
        {name: '体质状况'},
        {name: '健康生活'},
        {name: '心理健康'},
        {name: '安全素养'},
      ]
    }
  },
  mounted() {
    const options = {
      grid: {
        left: "50",
        right: "0%",
        bottom: "50",
        top: "15%"
      },
      xAxis: {
        type: "category",
        data: ["50米跑", "25*2往返", "立定跳远", "掷实心球", "坐立体前屈", "跳绳", "仰卧起坐"],
        axisLabel:{
          interval:0,
          rotate:20,
          margin:8,
        },
      },
      yAxis: {
        type: "value",
        splitLine: {
          lineStyle: {
            color: "rgba(255, 255, 255, .1)"
          }
        },
      },
      series: [
        {
          barWidth:14,
          data: [
            {
              value: 35,
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
              value: 45,
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
              value: 95,
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
              value: 45,
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
              value: 10,
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
              value: 45,
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
              value: 28,
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
          ],
          type: "bar"
        }
      ]
    };
    this.options = options;
  }
}
</script>

<style scoped>

</style>
