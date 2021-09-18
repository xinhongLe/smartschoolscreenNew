<template>
  <moduleHeader title="课堂练习完成情况">
    <div class="title_info">
      <ul class="nav_ul">
        <li class="zonghe_box">
          <span class="zonghe">综合情况</span>
        </li>
        <li>
          <span class="very_activity">83%</span>
          <span>顺利完成</span>
        </li>
        <li>
          <span class="_activity">17%</span>
          <span>不能完成</span>
        </li>
      </ul>
    </div>
    <div class="echart_box">
      <Echart width="100%" height="100%" :options="options"></Echart>
    </div>
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
        bottom: "1%",
        data: ["顺利完成", "不能完成"],
        icon: "diamond",
        itemWidth: 8, // 图例标记的图形宽度。
        itemHeight: 8, //  图例标记的图形高度。
        itemGap: 20, // 图例每项之间的间隔。
        textStyle: {
          color: "#96ACC3",
          fontSize: 12, // 文字的字体大小。
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "1%",
        top: "5%",
        containLabel: true,
      },
      xAxis: {
        type: "value",
        show: false,
      },
      yAxis: {
        type: "category",
        data: ["一年级", "二年级", "三年级", "四年级", "五年级", "六年级"],
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
          name: "顺利完成",
          type: "bar",
          stack: "总量",
          data: [70, 72, 72, 73, 75, 73],
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
          name: "不能完成",
          type: "bar",
          stack: "总量",
          data: [30, 28, 28, 27, 25, 27],
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
      ],
    };
    this.options = options;
  },
  computed: {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.title_info {
  width: 95%;
  height: 1rem;
  margin: 0.2rem auto 0;
  background: rgba(3, 86, 176, 0.1);
  border: 1px solid rgba(16, 163, 190, 0.23);
}
ul,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}
li {
  height: 100%;
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.nav_ul {
  width: 100%;
  height: 100%;
  display: flex;
}
span {
  font-size: 0.125rem;
  font-weight: 400;
  color: rgba(150, 172, 195, .7);
  line-height: 1.5;
}
.very_activity {
  color: #0dffff;
}
._activity {
  color: #f655d2;
}

.zonghe_box {
  flex: 1.5;
  background: rgba(3, 86, 176, 0.13);
}
.zonghe {
  font-size: 16px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #ffffff;
  line-height: 22px;
}
.echart_box {
  width: 100%;
  height: calc(100% - 1rem);
}
</style>
