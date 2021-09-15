<template>
  <moduleHeader title="各区学校分布">
    <Echart :options="options" height="100%"></Echart>
  </moduleHeader>
</template>
<script>
import Echart from "@/components/echart";
import moduleHeader from "@/components/moduleHeader";
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
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
        },
      },
      legend: {
        data: ["幼儿园", "小学", "初中", "高中", "中职", "高职"],
        icon: "diamond",
         top: 15,
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
        containLabel: true,
      },
      yAxis: {
        type: "value",
      },
      xAxis: {
        type: "category",
        data: [
          "吴*区",
          "姑*区",
          "高*区",
          "*区",
          "相*区",
          "吴*区",
          "昆*市",
          "常*市",
          "张*市",
          "太*市",
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
      series: [
        {
          name: "幼儿园",
          type: "bar",
          stack: "总量",
          data: [32, 30, 31, 34, 39, 30, 32, 29, 33, 32],
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                  offset: 0, color: '#0DFFFF' // 0% 处的颜色
              }, {
                  offset: 1, color: '#70BFFF' // 100% 处的颜色
              }],
              global: false // 缺省为 false
            },
          },
          barWidth: 12, //柱图宽度
        },
        {
          name: "小学",
          type: "bar",
          stack: "总量",
          data: [20, 32, 11, 14, 90, 30, 20, 20, 30, 20],
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                  offset: 0, color: '#30A2FD' // 0% 处的颜色
              }, {
                  offset: 1, color: '#376CCB' // 100% 处的颜色
              }],
              global: false // 缺省为 false
            },
          },
          barWidth: 12, //柱图宽度
        },
        {
          name: "初中",
          type: "bar",
          stack: "总量",
          data: [22, 12, 11, 24, 29, 33, 31, 29, 13, 13],
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                  offset: 0, color: '#A962F3' // 0% 处的颜色
              }, {
                  offset: 1, color: '#7833E2' // 100% 处的颜色
              }],
              global: false // 缺省为 false
            },
          },
          barWidth: 12, //柱图宽度
        },
        {
          name: "高中",
          type: "bar",
          stack: "总量",
          data: [12, 21, 21, 14, 19, 33, 41, 29, 33, 12],
         itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                  offset: 0, color: '#FC5AD3' // 0% 处的颜色
              }, {
                  offset: 1, color: '#B921D0' // 100% 处的颜色
              }],
              global: false // 缺省为 false
            },
          },
          barWidth: 12, //柱图宽度
        },
        {
          name: "中职",
          type: "bar",
          stack: "总量",
          data: [20, 32, 91, 34, 29, 33, 20, 20, 33, 30],
         itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                  offset: 0, color: '#96ACC3' // 0% 处的颜色
              }, {
                  offset: 1, color: '#FFFFFF' // 100% 处的颜色
              }],
              global: false // 缺省为 false
            },
          },
          barWidth: 12, //柱图宽度
        },
        {
          name: "高职",
          type: "bar",
          stack: "总量",
          data: [20, 32, 91, 34, 29, 30, 32, 20, 33, 32],
         itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                  offset: 0, color: '#FFFF00' // 0% 处的颜色
              }, {
                  offset: 1, color: '#DBB001' // 100% 处的颜色
              }],
              global: false // 缺省为 false
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