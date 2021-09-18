<template>
    <div class="activity_box">
      <div class="title_info">
          <ul class="nav_ul">
              <li class="zonghe_box">
                <span class="zonghe">综合活跃度</span>
              </li>
              <li>
                  <span class="very_activity">18%</span>
                  <span>非常活跃</span>
              </li>
              <li>
                  <span class="_activity">25%</span>
                  <span>活跃</span>
              </li>
              <li>
                  <span class="general">40%</span>
                  <span>一般</span>
              </li>
              <li>
                  <span class="no_activity">27%</span>
                  <span>不活跃</span>
              </li>
          </ul>
      </div>
    <div class="echart_box">
      <Echart width="100%" height="100%" :options="options"></Echart>
    </div>
    </div>
    
</template>
<script>
import Echart from "@/components/echart";
export default {
  data() {
    return {
     options:{},

    };
  },
  components: { Echart },
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
        left:"1%",
        data: ["非常活跃", "活跃", "一般", "不活跃"],
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
        top:"5%",
        containLabel: true,
      },
      xAxis: {
        type: "value",
        show: false,
      },
      yAxis: {
        type: "category",
        data: ["一年级", "二年级", "三年级", "四年级", "五年级", "六年级", "七年级", "八年级", "九年级"],
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
          name: "非常活跃",
          type: "bar",
          stack: "总量",
          // data: [30, 32, 29, 33,30, 32, 29, 33,66],
           data:  [38, 30, 24, 39, 18, 22, 22,24,24],
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
          name: "活跃",
          type: "bar",
          stack: "总量",
          // data: [20, 32, 11, 14, 20, 32, 11, 14, 56],
           data: [22, 20, 22, 12, 38, 20, 32,16,26],
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
                  color: "#30A2FD", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#376CCB", // 100% 处的颜色
                },
              ],
              global: false, // 缺省为 false
            },
          },
          barWidth: 12, //柱图宽度
        },
        {
          name: "一般",
          type: "bar",
          stack: "总量",
          // data: [33, 31, 29, 13, 33, 31, 29, 13,36],
          data: [18, 33, 29, 33, 14, 32, 18,33,14],
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
                  color: "#A962F3", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#7833E2", // 100% 处的颜色
                },
              ],
              global: false, // 缺省为 false
            },
          },
          barWidth: 12, //柱图宽度
        },
        {
          name: "不活跃",
          type: "bar",
          stack: "总量",
          // data: [33, 41, 29, 33, 33, 41, 29, 33, 15],
          data:  [22, 17, 25, 16, 30, 26, 28,27,36],
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
.activity_box{
  width: 100%;
  height: 100%;
}
.title_info{
    width: 100%;
    height: 1rem;
    margin-top: 0.2rem;
    background: rgba(3, 86, 176, 0.1);
    border: 1px solid rgba(16, 163, 190, 0.23);
}
ul,li{ padding:0;margin:0;list-style:none;}
li{
    height:100%;flex:1;display: flex; flex-direction: column; justify-content: center;align-items: center;
}
.nav_ul{
    width: 100%;
    height: 100%;
    display: flex;
}
span{
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #96ACC3;
    line-height: 17px;
}
.very_activity{
    color: #0DFFFF;
}
._activity{
    color: #3199F5;
}
.general{
    color: #924CEB;
}
.no_activity{
    color: #F655D2;
}

.zonghe_box{
    flex: 1.2;
    background: rgba(3, 86, 176, 0.13);
}
.zonghe{
    font-size: 16px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    line-height: 22px;
}
.echart_box{
    width: 100%;
    height: calc(100% - 1rem);
}
</style>
