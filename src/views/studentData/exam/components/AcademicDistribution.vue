<template>
    <moduleHeader title="全校作业等级分布">
        <Echart width="100%" height="100%" :options="options"></Echart>
    </moduleHeader>
</template>
<script>
import moduleHeader from "@/components/moduleHeader.vue";
import Echart from "@/components/echart";
import * as echarts from "echarts";
export default {
    data() {
        return {
            options: {}
        };
    },
    components: { moduleHeader, Echart },
    created() {},
    computed: {},
    mounted() {
        let options = {
            toolbox: {
                feature: {
                    dataView: { show: false, readOnly: false },
                    magicType: { show: false, type: ["line", "bar"] },
                    restore: { show: false },
                    saveAsImage: { show: false }
                }
            },
            legend: {
                show:false,
                data: ["作业布置量", "作业完成率"],
                left: "right",
                textStyle: {
                    color: "#fff"
                }
            },
            xAxis: [
                {
                    type: "category",
                    show: false,
                    data: ["一年级", "二年级", "三年级", "四年级", "五年级"],
                    axisPointer: {
                        type: "shadow"
                    }
                }
            ],
            yAxis: [
                {
                    type: "value",
                    name: "单位：人",
                    min: 0,
                    max: 80,
                    axisLabel: {
                        formatter: "{value}"
                    },
                    nameTextStyle: {
                        lineHeight: 40,
                    },
                    splitLine: {
                        lineStyle: {
                            color: "rgba(255, 255, 255, .1)"
                        }
                    }
                },
                {
                    type: "value",
                    name: "",
                    show: false,
                    min: 0,
                    max: 80,
                    axisLabel: {
                        formatter: "{value}%"
                    },
                    splitLine: {
                        lineStyle: {
                            color: "rgba(255, 255, 255, .1)"
                        }
                    }
                }
            ],
            series: [
                {
                    name: "作业布置量",
                    type: "bar",
                    barWidth: 14,
                    data: [
                        {
                            value: 14,
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0,
                                        0,
                                        0,
                                        1,
                                        [
                                            { offset: 0, color: "#0DFFFF" },
                                            { offset: 0.6, color: "#70BFFF" },
                                            { offset: 1, color: "#70BFFF" }
                                        ]
                                    )
                                }
                            }
                        },
                        {
                            value: 23,
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0,
                                        0,
                                        0,
                                        1,
                                        [
                                            { offset: 0, color: "#30A2FD" },
                                            { offset: 0.6, color: "#30A2FD" },
                                            { offset: 1, color: "#376CCB" }
                                        ]
                                    )
                                }
                            }
                        },
                        {
                            value: 42,
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0,
                                        0,
                                        0,
                                        1,
                                        [
                                            { offset: 0, color: "#A962F3" },
                                            { offset: 0.6, color: "#A962F3" },
                                            { offset: 1, color: "#7833E2" }
                                        ]
                                    )
                                }
                            }
                        },
                        {
                            value: 67,
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0,
                                        0,
                                        0,
                                        1,
                                        [
                                            { offset: 0, color: "#FC5AD3" },
                                            { offset: 0.6, color: "#FC5AD3" },
                                            { offset: 1, color: "#B921D0" }
                                        ]
                                    )
                                }
                            }
                        },
                        {
                            value: 58,
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0,
                                        0,
                                        0,
                                        1,
                                        [
                                            { offset: 0, color: "#96ACC3" },
                                            { offset: 0.6, color: "#96ACC3" },
                                            { offset: 1, color: "#FFFFFF" }
                                        ]
                                    )
                                }
                            }
                        }
                    ],
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0,
                                0,
                                0,
                                1,
                                [
                                    { offset: 0, color: "#0DFFFF" },
                                    { offset: 0.6, color: "#70BFFF" },
                                    { offset: 1, color: "#70BFFF" }
                                ]
                            )
                        }
                    }
                },
                {
                    name: "作业完成率",
                    type: "line",
                    yAxisIndex: 1,
                    data: [14, 23, 42, 67, 58],
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0,
                                0,
                                0,
                                1,
                                [
                                    { offset: 0, color: "#D7AD01" },
                                    { offset: 0.6, color: "#D7AD01" },
                                    { offset: 1, color: "#FFFE00" }
                                ]
                            )
                        }
                    }
                }
            ]
        };
        this.options = options;
    },
    methods: {}
};
</script>
<style lang="scss" scoped>
</style>
