<template>
    <echart :options="options" height="100%" width="100%" ref="echart"></echart>
</template>

<script>
import Echart from "@/components/echart";
export default {
    components: {
        Echart
    },
    props: {
        trendSelected: {}
    },
    data() {
        return {
            options: {},
            data: [
                1264, 3362, 2274, 2233, 4444, 5555, 2222, 3333, 2222, 111, 2579,
                3265, 1384
            ]
        };
    },
    watch: {
        trendSelected(v) {
            if (v == 1) {
                this.data = [
                    2264, 1362, 1274, 3579, 1265, 2384, 4412, 1334, 2356, 3321,
                    3456, 1234, 1384
                ];
            } else {
                this.data = [
                    1264, 3362, 2274, 2233, 4444, 5555, 2222, 3333, 2222, 111,
                    2579, 3265, 1384
                ];
            }
            this.$set(this.options.series[0], "data", this.data);
            this.$refs.echart.initChart();
        }
    },
    mounted() {
        const options = {
            tooltip: {
                trigger: "axis"
            },
            grid: {
                left: "50",
                right: "0%",
                bottom: "50"
            },
            xAxis: {
                data: [
                    "08-18",
                    "08-20",
                    "08-22",
                    "08-25",
                    "08-27",
                    "08-29",
                    "09-01",
                    "09-03",
                    "09-05",
                    "09-08",
                    "09-10",
                    "09-12",
                    "09-15"
                ],
                axisLabel: {
                    interval: 2,
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
                max: 6000,
                min: 0,
                splitNumber: 5
            },
            series: [
                {
                    name: "校舍，设施，设备",
                    type: "line",
                    data: this.data,
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
                }
            ]
        };
        // this.options.xAxis.data = this.echartsData.map(item => item[0])
        // this.options.series.data = this.echartsData.map(item => item[1])
        this.options = options;
    }
};
</script>

<style scoped>
</style>