<template>
    <ModuleHeader title="课程时间占比">
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
            legend: {
                show: false
            },
            series: [
                {
                    name: "面积模式",
                    type: "pie",
                    radius: ["40%", "70%"],
                    center: ["50%", "50%"],
                    roseType: "radius",
                    itemStyle: {
                        borderRadius: 8
                    },
                    label: {
                        formatter: "{b} {c}%"
                    },
                    data: [
                        {
                            value: 35,
                            name: "语文",
                            label: {
                                color: "#0DFFFF"
                            },
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
                            }
                        },
                        {
                            value: 25,
                            name: "数学",
                            label: {
                                color: "#30A2FD"
                            },
                            itemStyle: {
                                normal: {
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
                            }
                        },
                        {
                            value: 25,
                            name: "英语",
                            label: {
                                color: "#A962F3"
                            },
                            itemStyle: {
                                normal: {
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
                            }
                        },
                        {
                            value: 25,
                            name: "体育",
                            label: {
                                color: "#FC5AD3"
                            },
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
                            }
                        },
                        {
                            value: 7.5,
                            name: "音乐",
                            label: {
                                color: "#96ACC3"
                            },
                            itemStyle: {
                                normal: {
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
                            }
                        },
                        {
                            value: 7.5,
                            name: "美术",
                            label: {
                                color: "#DBB001"
                            },
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
                            }
                        }
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