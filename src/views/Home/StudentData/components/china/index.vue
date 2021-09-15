<template>
  <div class="china-box">
    <div class="footer-box">
      <div class="sort-box">
        <div class="sort-item" v-for="(item, index) in schoolList" :key="index">
          <div class="sort-num" :class="['red', 'yellow', 'blue'][index]">
            No.{{ index + 1 }}
          </div>
          <div class="sort-address">{{ item.address }}</div>
        </div>
      </div>
    </div>
    <div class="treatment">
      <div class="treatment-proportion">88.67%</div>
      <div class="treatment-desc">随迁学生享受同等待遇</div>
    </div>
    <echart :options="options" width="100%" height="100%"></echart>
    <div class="lineone"></div>
    <div class="linetow"></div>
    <div class="suzhou">*州总部</div>
  </div>
</template>

<script>
import Echart from "@/components/echart";
const geoGpsMap = [120.6, 31.3];
const geoCoordMap = {
  江苏: [118.8062, 31.9208],
  黑龙江: [127.9688, 45.368],
  内蒙古: [110.3467, 41.4899],
  吉林: [125.8154, 44.2584],
  北京市: [116.4551, 40.2539],
  辽宁: [123.1238, 42.1216],
  河北: [114.4995, 38.1006],
  天津: [117.4219, 39.4189],
  山西: [112.3352, 37.9413],
  陕西: [109.1162, 34.2004],
  甘肃: [103.5901, 36.3043],
  宁夏: [106.3586, 38.1775],
  青海: [101.4038, 36.8207],
  新疆: [87.9236, 43.5883],
  四川: [103.9526, 30.7617],
  重庆: [108.384366, 30.439702],
  山东: [117.1582, 36.8701],
  河南: [113.4668, 34.6234],
  安徽: [117.29, 32.0581],
  湖北: [114.3896, 30.6628],
  浙江: [119.5313, 29.8773],
  福建: [119.4543, 25.9222],
  江西: [116.0046, 28.6633],
  湖南: [113.0823, 28.2568],
  贵州: [106.6992, 26.7682],
  云南: [102.9199, 25.4663],
  广东: [113.12244, 23.009505],
  广西: [108.479, 23.1152],
  海南: [110.3893, 19.8516],
  上海: [121.4648, 31.2891],
  西藏: [91.11, 29.97],
};
const geoJson = require("./data.json");
const mapData = [
  "西藏",
  "北京市",
  "湖南",
  "湖北",
  "海南",
  "江西",
  "安徽",
  "山东",
  "宁夏",
  "新疆",
  "黑龙江",
  "吉林",
  "内蒙古",
  "四川",
  "贵州",
  "云南",
  "广东",
  "福建",
];
const lineColor = "#47F5FC";
export default {
  components: { Echart },
  data() {
    return {
      schoolList: [
        {
          lng: 120.619585,
          lat: 31.259379,
          num: 8876,
          address: "*区",
        },
        {
          lng: 120.61585,
          lat: 31.300379,
          num: 6876,
          address: "*园区",
        },
        {
          lng: 120.629585,
          lat: 31.294379,
          num: 5676,
          address: "*区",
        },
      ],
      options: {},
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      this.$echarts.registerMap("china", geoJson);
      this.options = {
        animation: true,
        animationDuration: 1000,
        animationEasing: "cubicInOut",
        animationDurationUpdate: 1000,
        animationEasingUpdate: "cubicInOut",
        grid: {
          // width: "10%",
          // height: "20%"
        },
        tooltip: {
          trigger: "axis", // hover触发器
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
            shadowStyle: {
              color: "#47F5FC", //hover颜色
            },
          },
        },
        geo: {
          show: true,
          map: "china",
          center: [106.83531246, 34.0267395887],
          label: {
            emphasis: {
              show: false,
            },
          },
          itemStyle: {
            normal: {
              borderColor: "#47F5FC",
              borderWidth: 1,
              areaColor: {
                type: "radial",
                x: 0.5,
                y: 0.5,
                r: 0.8,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(71, 245, 252, 0)", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(71, 245, 252, .2)", // 100% 处的颜色
                  },
                ],
                globalCoord: false, // 缺省为 false
              },
              shadowColor: "rgba(71, 245, 252, 1)",
              shadowOffsetX: -2,
              shadowOffsetY: 2,
              shadowBlur: 20,
            },
            emphasis: {
              areaColor: "#47F5FC",
              borderWidth: 0,
            },
          },
        },
        xAxis: {
          type: "value",
          min: 0,
          boundaryGap: false,
          splitLine: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: false,
            margin: 1,
            textStyle: {
              color: "#aaa",
            },
          },
        },
        yAxis: {
          type: "category",
          nameGap: 16,
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
        },

        series: [
          //地图线的动画效果
          {
            type: "lines",
            zlevel: 2,
            effect: {
              show: true,
              period: 5, //箭头指向速度，值越小速度越快
              trailLength: 0.2, //特效尾迹长度[0,1]值越大，尾迹越长重
              symbol: "arrow", //箭头图标
              symbolSize: 6, //图标大小
            },
            lineStyle: {
              normal: {
                color: lineColor,
                width: 1, //尾迹线条宽度
                opacity: 0.2, //尾迹线条透明度
                curveness: 0.3, //尾迹线条曲直度
              },
            },
            data: this.convertToLineData(geoGpsMap),
          },
        ],
      };
    },

    convertToLineData(gps) {
      const res = [];
      for (let i = 0; i < mapData.length; i++) {
        let name = mapData[i];
        let toCoord = geoCoordMap[name];
        let fromCoord = gps;
        if (fromCoord && toCoord) {
          res.push([
            {
              coord: toCoord,
            },
            {
              coord: fromCoord,
            },
          ]);
        }
      }
      return res;
    },
  },
};
</script>

<style scoped>
.china-box {
  position: relative;
  width: 12rem;
  height: 8.275rem;
}
.lineone {
  width: 0.4rem;
  height: 1px;
  background: #47f5fc;
  position: absolute;
  top: 4.48rem;
  right: 3.75rem;
  transform: rotate(-45deg);
}
.linetow {
  width: 0.33rem;
  height: 1px;
  background: #47f5fc;
  position: absolute;
  top: 4.34rem;
  right: 3.5rem;
}
.suzhou {
  width: 1.6rem;
  height: 0.6rem;
  position: absolute;
  top: 4rem;
  right: 2rem;
  background: url("../../images/pic_suzhou_bg@2x.png") no-repeat;
  background-size: 100% 100%;
  font-size: 0.175rem;
  font-weight: 600;
  color: #0dffff;
  line-height: 0.65rem;
  text-align: center;
}

.footer-box {
  position: absolute;
  top: 0.3rem;
  left: 0.3rem;
  display: flex;
  z-index: 100;
  justify-content: space-between;
  align-items: center;
}

.sort-box {
  display: flex;
}

.sort-item {
  padding: 0.2rem;
  width: 1.5rem;
  box-sizing: border-box;
  background-color: rgba(3, 86, 176, 0.13);
  border: 0.0125rem solid rgba(16, 163, 190, 0.23);
  margin-right: 0.2rem;
}

.sort-num {
  color: #ffffff;
  font-size: 0.175rem;
}

.sort-num.red {
  color: #fa4a4f;
}

.sort-num.yellow {
  color: #ffd01d;
}

.sort-num.blue {
  color: #0dffff;
}

.sort-address {
  color: #ffffff;
  font-size: 0.175rem;
  margin-top: 0.05rem;
  font-weight: 600;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.treatment {
  position: absolute;
  bottom: 0.85rem;
  left: 0.3rem;
  z-index: 100;
  text-align: left;
}

.treatment-proportion {
  font-size: 0.225rem;
  color: #ffffff;
  font-weight: 600;
}

.treatment-desc {
  font-size: 0.15rem;
  color: #96acc3;
}
</style>