<template>
    <div class="china-box">
        <echart :options="options" width="100%" height="100%"></echart>
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
    西藏: [91.11, 29.97]
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
    "宁夏"
];
const lineColor = "#47F5FC";
export default {
    components: { Echart },
    data() {
        return {
            options: {}
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
                            color: "#47F5FC" //hover颜色
                        }
                    }
                },
                geo: {
                    show: true,
                    map: "china",
                    center: [106.83531246, 34.0267395887],
                    label: {
                        emphasis: {
                            show: false
                        }
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
                                        color: "rgba(71, 245, 252, 0)" // 0% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: "rgba(71, 245, 252, .2)" // 100% 处的颜色
                                    }
                                ],
                                globalCoord: false // 缺省为 false
                            },
                            shadowColor: "rgba(71, 245, 252, 1)",
                            shadowOffsetX: -2,
                            shadowOffsetY: 2,
                            shadowBlur: 20
                        },
                        emphasis: {
                            areaColor: "#47F5FC",
                            borderWidth: 0
                        }
                    }
                },
                xAxis: {
                    type: "value",
                    min: 0,
                    boundaryGap: false,
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false,
                        margin: 1,
                        textStyle: {
                            color: "#aaa"
                        }
                    }
                },
                yAxis: {
                    type: "category",
                    nameGap: 16,
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    }
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
                            symbolSize: 6 //图标大小
                        },
                        lineStyle: {
                            normal: {
                                color: lineColor,
                                width: 1, //尾迹线条宽度
                                opacity: 0.2, //尾迹线条透明度
                                curveness: 0.3 //尾迹线条曲直度
                            }
                        },
                        data: this.convertToLineData(geoGpsMap)
                    }
                ]
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
                            coord: toCoord
                        },
                        {
                            coord: fromCoord
                        }
                    ]);
                }
            }
            return res;
        }
    }
};
</script>

<style scoped>
.china-box {
    position: relative;
    height: 100%;
}
</style>