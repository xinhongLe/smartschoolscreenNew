<template>
  <module-header title="教学督导评分">
    <echart :options="options" height="100%" width="100%"></echart>
  </module-header>
</template>

<script>
import ModuleHeader from "@/components/moduleHeader";
import Echart from "@/components/echart";
export default {
  name: "teachEvaluation",
  components: {Echart, ModuleHeader},
  data() {
    return {
      options: {}
    };
  },
  mounted() {
    const options = {
      color: ["#12FCFF", "#30A2FD", "#A962F3", "#E949D1", "#FFFFFF", "#FFFF00"],
      tooltip: {
        trigger: "axis"
      },
      legend: {
        data: [
          {
            name: "一年级",
            textStyle: {
              fontSize: 10,
              color: "#12FCFF"
            }
          },
          {
            name: "二年级",
            textStyle: {
              fontSize: 10,
              color: "#30A2FD"
            }
          },
          {
            name: "三年级",
            textStyle: {
              fontSize: 10,
              color: "#A962F3"
            }
          },
          {
            name: "四年级",
            textStyle: {
              fontSize: 10,
              color: "#E949D1"
            }
          },
          {
            name: "五年级",
            textStyle: {
              fontSize: 10,
              color: "#FFFFFF"
            }
          },
          {
            name: "六年级",
            textStyle: {
              fontSize: 10,
              color: "#FFFF00"
            }
          }
        ],
        itemWidth: 8,
        itemHeight: 2,
        icon: "rect",
        right: 0,
        top: 30
      },
      grid: {
        left: "50",
        right: "0%",
        bottom: "50",
        top: "26%"
      },
      xAxis: {
        data: ["一般", "中等", "良好","优秀"],
        axisLabel: {
          lineHeight: 20,
          color: "#96ACC3"
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255, 255, 255, .1)"
          }
        },
        axisTick: {
          show: false
        }
      },
      yAxis: {
        name: "单位：人",
        nameTextStyle: {
          padding: [0, 0, 30, -10]
        },
        axisLine: {
          lineStyle: {
            color: "#96ACC3"
          }
        },
        axisLabel: {
          margin: 20
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "rgba(255, 255, 255, .1)"
          }
        },
        max: 300,
        min: 0,
        splitNumber: 3
      },
      series: [
        {
          name: "一年级",
          type: "line",
          data: [200, 200, 300, 300],
          symbol: "none",
          lineStyle: {
            width: 2,
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1, //从左到右
              y2: 0,
              colorStops: [
                {
                  offset: 0,
                  color: "#70BFFF" // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#0DFFFF" // 100% 处的颜色
                }
              ],
              globalCoord: false // 缺省为 false
            }
          }
        },
        {
          name: "二年级",
          type: "line",
          data: [100, 250, 250, 280],
          symbol: "none",
          lineStyle: {
            width: 2,
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1, //从左到右
              y2: 0,
              colorStops: [
                {
                  offset: 0,
                  color: "#376CCB" // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#30A2FD" // 100% 处的颜色
                }
              ],
              globalCoord: false // 缺省为 false
            }
          }
        },
        {
          name: "三年级",
          type: "line",
          data: [80, 130, 110, 250],
          symbol: "none",
          lineStyle: {
            width: 2,
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1, //从左到右
              y2: 0,
              colorStops: [
                {
                  offset: 0,
                  color: "#A962F3" // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#7833E2" // 100% 处的颜色
                }
              ],
              globalCoord: false // 缺省为 false
            }
          }
        },
        {
          name: "四年级",
          type: "line",
          data: [50, 110, 200, 130],
          symbol: "none",
          lineStyle: {
            width: 2,
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1, //从左到右
              y2: 0,
              colorStops: [
                {
                  offset: 0,
                  color: "#B921D0" // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#FB59D2" // 100% 处的颜色
                }
              ],
              globalCoord: false // 缺省为 false
            }
          }
        },
        {
          name: "五年级",
          type: "line",
          data: [90, 200, 180, 320],
          symbol: "none",
          lineStyle: {
            width: 2,
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1, //从左到右
              y2: 0,
              colorStops: [
                {
                  offset: 0,
                  color: "#96ACC3" // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#FFFFFF" // 100% 处的颜色
                }
              ],
              globalCoord: false // 缺省为 false
            }
          }
        },
        {
          name: "六年级",
          type: "line",
          data: [100, 190, 260, 250],
          symbol: "none",
          lineStyle: {
            width: 2,
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1, //从左到右
              y2: 0,
              colorStops: [
                {
                  offset: 0,
                  color: "#FFFF00" // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#DBB001" // 100% 处的颜色
                }
              ],
              globalCoord: false // 缺省为 false
            }
          }
        }
      ]
    };
    this.options = options;
  }
}
</script>

<style scoped>

</style>