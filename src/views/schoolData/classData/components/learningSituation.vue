<template>
    <ModuleHeader title="学生学情分布">
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
            options: {}
        };
    },

    mounted() {
        this.options = {
            grid: {
                left: "3%",
                right: "2%",
                bottom: "2%",
                containLabel: true
            },
            tooltip: {
                showDelay: 0,
                axisPointer: {
                    show: true,
                    type: "cross",
                    lineStyle: {
                        type: "dashed",
                        width: 1
                    }
                }
            },
            legend: {
                icon: "circle",
                left: "left",
                data: ["男生", "女生"],
                selectedMode: false,
                textStyle: {
                    color: "#96ACC3",
                    fontSize: 14
                }
            },
            xAxis: [
                {
                    type: "value",
                    scale: true,
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: ["rgba(90, 90, 90, .3)"],
                            width: 1
                        }
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    }
                }
            ],
            yAxis: [
                {
                    type: "value",
                    scale: true,
                    axisLabel: {
                        show: false
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: ["rgba(90, 90, 90, .3)"],
                            width: 1
                        }
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    }
                }
            ],
            series: [
                {
                    name: "男生",
                    type: "scatter",
                    itemStyle: {
                        normal: {
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
                    data: [
                        [161.2, 51.6],
                        [159.5, 49.2],
                        [155.8, 53.6],
                        [159.1, 47.6],
                        [166.0, 69.8],
                        [160.2, 75.2],
                        [172.5, 55.2],
                        [172.9, 62.5],
                        [153.4, 42.0],
                        [147.2, 49.8],
                        [175.0, 73.2],
                        [157.0, 47.8],
                        [167.6, 68.8],
                        [159.5, 50.6],
                        [175.0, 82.5],
                        [166.8, 57.2],
                        [176.5, 87.8],
                        [170.2, 72.8],
                        [174.0, 54.5],
                        [173.0, 59.8],
                        [179.9, 67.3],
                        [170.5, 67.8],
                        [160.0, 47.0],
                        [154.4, 46.2],
                        [162.0, 55.0],
                        [176.5, 83.0],
                        [160.0, 54.4],
                        [152.0, 45.8],
                        [162.1, 53.6],
                        [170.0, 73.2],
                        [160.2, 52.1],
                        [161.3, 67.9],
                        [166.4, 56.6],
                        [168.9, 62.3],
                        [163.8, 58.5],
                        [167.6, 54.5],
                        [160.0, 50.2],
                        [161.3, 60.3],
                        [167.6, 58.3],
                        [165.1, 56.2],
                        [160.0, 50.2],
                        [170.0, 72.9],
                        [157.5, 59.8],
                        [167.6, 61.0],
                        [160.7, 69.1],
                        [163.2, 55.9],
                        [152.4, 46.5],
                        [157.5, 54.3],
                        [168.3, 54.8],
                        [180.3, 60.7],
                        [165.5, 60.0],
                        [165.0, 62.0],
                        [164.5, 60.3],
                        [156.0, 52.7],
                        [160.0, 74.3],
                        [163.0, 62.0],
                        [165.7, 73.1],
                        [161.0, 80.0],
                        [162.0, 54.7],
                        [166.0, 53.2],
                        [174.0, 75.7],
                        [172.7, 61.1],
                        [167.6, 55.7],
                        [151.1, 48.7],
                        [164.5, 52.3],
                        [163.5, 50.0],
                        [152.0, 59.3],
                        [169.0, 62.5],
                        [164.0, 55.7],
                        [161.2, 54.8],
                        [155.0, 45.9],
                        [170.0, 70.6],
                        [176.2, 67.2],
                        [170.0, 69.4],
                        [162.5, 58.2],
                        [170.3, 64.8],
                        [164.1, 71.6],
                        [169.5, 52.8],
                        [163.2, 59.8],
                        [154.5, 49.0],
                        [159.8, 50.0],
                        [173.2, 69.2],
                        [170.0, 55.9],
                        [161.4, 63.4],
                        [169.0, 58.2]
                    ]
                },
                {
                    name: "女生",
                    type: "scatter",
                    itemStyle: {
                        normal: {
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
                    data: [
                        [174.0, 65.6],
                        [175.3, 71.8],
                        [193.5, 80.7],
                        [186.5, 72.6],
                        [187.2, 78.8],
                        [181.5, 74.8],
                        [184.0, 86.4],
                        [184.5, 78.4],
                        [175.0, 62.0],
                        [184.0, 81.6],
                        [180.0, 76.6],
                        [177.8, 83.6],
                        [192.0, 90.0],
                        [176.0, 74.6],
                        [174.0, 71.0],
                        [184.0, 79.6],
                        [192.7, 93.8],
                        [171.5, 70.0],
                        [173.0, 72.4],
                        [176.0, 85.9],
                        [176.0, 78.8],
                        [180.5, 77.8],
                        [172.7, 66.2],
                        [176.0, 86.4],
                        [173.5, 81.8],
                        [178.0, 89.6],
                        [180.3, 82.8],
                        [180.3, 76.4],
                        [164.5, 63.2],
                        [173.0, 60.9],
                        [183.5, 74.8],
                        [175.5, 70.0],
                        [188.0, 72.4]
                    ]
                }
            ]
        };
    }
};
</script>

<style scoped>
.v-line {
    height: 0.4rem;
}

.chart-box {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 0.4rem 0;
    box-sizing: border-box;
}
</style>