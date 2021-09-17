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
            color: ["#4DD5FF", "#E949D1", "#EBD401", "#376CCB", "#A962F3"],
            tooltip: {
                trigger: "axis"
            },
            legend: {
                data: [
                    {
                        name: "校舍，设施，设备",
                        textStyle: {
                            fontSize: 10,
                            color: "#4DD5FF"
                        }
                    },
                    {
                        name: "托管托育",
                        textStyle: {
                            fontSize: 10,
                            color: "#E949D1"
                        }
                    },
                    {
                        name: "水电消防器材",
                        textStyle: {
                            fontSize: 10,
                            color: "#EBD401"
                        }
                    },
                    {
                        name: "食品卫生",
                        textStyle: {
                            fontSize: 10,
                            color: "#376CCB"
                        }
                    },
                    {
                        name: "防震，防灾",
                        textStyle: {
                            fontSize: 10,
                            color: "#A962F3"
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
                data: [
                    "2021-02",
                    "2021-03",
                    "2021-04",
                    "2021-05",
                    "2021-06",
                    "2021-07",
                    "2021-08",
                    "2021-09"
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
                name: "数量/单位（项）",
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
                max: 90,
                min: 0,
                splitNumber: 3
            },
            series: [
                {
                    name: "校舍，设施，设备",
                    type: "line",
                    data: [64, 62, 74, 79, 65, 84, 12, 34, 56],
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
                    data: [34, 45, 54, 46, 58, 47, 45, 65, 32],
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
                    name: "水电消防器材",
                    type: "line",
                    data: [14, 25, 34, 46, 58, 47, 65, 12, 34],
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
                                    color: "#EBD401" // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: "#EBD401" // 100% 处的颜色
                                }
                            ],
                            globalCoord: false // 缺省为 false
                        }
                    }
                },
                {
                    name: "食品卫生",
                    type: "line",
                    data: [44, 45, 44, 46, 28, 57, 34, 23, 12],
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
                    name: "防震，防灾",
                    type: "line",
                    data: [14, 15, 14, 16, 58, 17, 34, 34, 23],
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
                                    color: "#7833E2" // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: "#A962F3" // 100% 处的颜色
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