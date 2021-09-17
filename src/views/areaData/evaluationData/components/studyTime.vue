<template>
    <module-header title="人均学习时间监控">
        <echart :options="options" height="100%" width="100%"></echart>
    </module-header>
</template>

<script>
import ModuleHeader from "@/components/moduleHeader";
import Echart from "@/components/echart";
export default {
    components: {
        ModuleHeader,
        Echart
    },
    data() {
        return {
            options: {}
        };
    },
    mounted() {
        const options = {
            color: ["#12FCFF", "#E949D1"],
            tooltip: {
                trigger: "axis"
            },
            legend: {
                data: [
                    {
                        name: "家庭作业用时",
                        textStyle: {
                            fontSize: 10,
                            color: "#12FCFF"
                        }
                    },
                    {
                        name: "托管托育",
                        textStyle: {
                            fontSize: 10,
                            color: "#E949D1"
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
                bottom: "30",
                top: '80'
            },
            xAxis: {
                data: [
                    "09-06",
                    "09-07",
                    "09-08",
                    "09-09",
                    "09-10",
                    "09-11"
                ],
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
                name: "单位：min",
                nameTextStyle: {
                    padding: [10, 0, 30, -10]
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
                max: 90,
                min: 0,
                splitNumber: 3
            },
            series: [
                {
                    name: "家庭作业用时",
                    type: "line",
                    data: [40, 48, 40, 35, 50, 50],
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
                    name: "托管托育",
                    type: "line",
                    data: [13, 16, 52, 46, 70, 75],
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