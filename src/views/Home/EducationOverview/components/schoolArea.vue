<template>
  <moduleHeader title="各区学校分布">
    <Echart :options="options"></Echart>
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
          "吴中",
          "姑苏",
          "高新区",
          "园区",
          "相城",
          "吴江",
          "昆山",
          "常熟",
          "张家港",
          "太仓",
        ],
      },
      series: [
        {
          name: "幼儿园",
          type: "bar",
          stack: "总量",
          label: {
            show: true,
            position: "insideRight",
          },
          data: [320, 302, 301, 334, 390, 330, 320, 1290, 1330, 1320],
        },
        {
          name: "小学",
          type: "bar",
          stack: "总量",
          label: {
            show: true,
            position: "insideRight",
          },
          data: [120, 132, 101, 134, 90, 230, 210, 1290, 1330, 1320],
        },
        {
          name: "初中",
          type: "bar",
          stack: "总量",
          label: {
            show: true,
            position: "insideRight",
          },
          data: [220, 182, 191, 234, 290, 330, 310, 1290, 1330, 1320],
        },
        {
          name: "高中",
          type: "bar",
          stack: "总量",
          label: {
            show: true,
            position: "insideRight",
          },
          data: [150, 212, 201, 154, 190, 330, 410, 1290, 1330, 1320],
        },
        {
          name: "中职",
          type: "bar",
          stack: "总量",
          label: {
            show: true,
            position: "insideRight",
          },
          data: [820, 832, 901, 934, 1290, 1330, 1320, 1290, 1330, 1320],
        },
        {
          name: "高职",
          type: "bar",
          stack: "总量",
          label: {
            show: true,
            position: "insideRight",
          },
          data: [820, 832, 901, 934, 1290, 1330, 1320, 1290, 1330, 1320],
        },
      ],
    };

    this.options = options;
  },
};
</script>