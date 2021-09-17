<template>
    <ModuleHeader title="教学方法运用">
        <div class="chart-box">
            <echart
                :options="options"
                height="100%"
                width="100%"
                ref="echart"
            ></echart>
        </div>
    </ModuleHeader>
</template>

<script>
import ModuleHeader from "@/components/moduleHeader";
import Echart from "@/components/echart";
import * as echarts from "echarts";
export default {
    components: {
        ModuleHeader,
        Echart
    },

    data() {
        return {
            options: {},
            xData1: [31, 39, 39, 41, 43],
            xData2: [39, 5, 52, 39, 56],
            xData3: [60, 99, 39, 75, 43],
            xData4: [22, 69, 29, 36, 30],
            xData5: [125, 62, 31, 72, 120],
            xData6: [23, 27, 110, 37, 8]
        };
    },

    mounted() {
        this.options = {
            tooltip: {
                show: false
            },
            legend: {
                icon: "diamond",
                textStyle: {
                    color: "#96ACC3"
                },
                selectedMode: false,
                data: [
                    "讲授法",
                    "讨论法",
                    "直观演示法",
                    "现场教学法",
                    "读书指导法",
                    "自主学习法"
                ]
            },
            grid: {
                left: "3%",
                right: "4%",
                bottom: "3%",
                containLabel: true
            },
            xAxis: {
                show: false,
                type: "value",
                splitLine: { show: false },
                max: 300
            },
            yAxis: {
                data: ["语文", "数学", "英语", "音乐", "美术"],
                axisLabel: {
                    textStyle: {
                        color: "#96ACC3"
                    }
                },
                axisLine: {
                    lineStyle: {
                        width: 0
                    }
                },
                axisTick: {
                    show: false
                }
            },
            series: [
                {
                    name: "讲授法",
                    type: "bar",
                    stack: "total",
                    itemStyle: {
                        normal: {
                            // label: {
                            //     show: false
                            // },
                            color: new echarts.graphic.LinearGradient(
                                0,
                                0,
                                1,
                                0,
                                [
                                    { offset: 0, color: "#0DFFFF" },
                                    { offset: 1, color: "#70BFFF" }
                                ]
                            )
                        }
                    },
                    data: this.xData1,
                    barWidth: "30%"
                },
                {
                    name: "讨论法",
                    type: "bar",
                    stack: "total",
                    itemStyle: {
                        normal: {
                            // label: {
                            //     show: false
                            // },
                            color: new echarts.graphic.LinearGradient(
                                0,
                                0,
                                1,
                                0,
                                [
                                    { offset: 0, color: "#30A2FD" },
                                    { offset: 1, color: "#376CCB" }
                                ]
                            )
                        }
                    },
                    data: this.xData2
                },
                {
                    name: "直观演示法",
                    type: "bar",
                    stack: "total",
                    itemStyle: {
                        normal: {
                            // label: {
                            //     show: false
                            // },
                            color: new echarts.graphic.LinearGradient(
                                0,
                                0,
                                1,
                                0,
                                [
                                    { offset: 0, color: "#A962F3" },
                                    { offset: 1, color: "#7833E2" }
                                ]
                            )
                        }
                    },
                    data: this.xData3
                },
                {
                    name: "现场教学法",
                    type: "bar",
                    stack: "total",
                    itemStyle: {
                        normal: {
                            // label: {
                            //     show: false
                            // },
                            color: new echarts.graphic.LinearGradient(
                                0,
                                0,
                                1,
                                0,
                                [
                                    { offset: 0, color: "#FC5AD3" },
                                    { offset: 1, color: "#B921D0" }
                                ]
                            )
                        }
                    },
                    data: this.xData4
                },
                {
                    name: "读书指导法",
                    type: "bar",
                    stack: "total",
                    itemStyle: {
                        normal: {
                            // label: {
                            //     show: false
                            // },
                            color: new echarts.graphic.LinearGradient(
                                0,
                                0,
                                1,
                                0,
                                [
                                    { offset: 0, color: "#96ACC3" },
                                    { offset: 1, color: "#FFFFFF" }
                                ]
                            )
                        }
                    },
                    data: this.xData5
                },
                {
                    name: "自主学习法",
                    type: "bar",
                    stack: "total",
                    itemStyle: {
                        normal: {
                            // label: {
                            //     show: false
                            // },
                            color: new echarts.graphic.LinearGradient(
                                0,
                                0,
                                1,
                                0,
                                [
                                    { offset: 0, color: "#DBB001" },
                                    { offset: 1, color: "#FFFF00" }
                                ]
                            )
                        }
                    },
                    data: this.xData6
                }
            ]
        };
    }
};
</script>

<style scoped>
.chart-box {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 0.4rem 0;
    box-sizing: border-box;
}
</style>