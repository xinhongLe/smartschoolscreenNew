<template>
    <moduleHeader title="作业正确率">
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
        const data = [
            "一年级",
            "二年级",
            "三年级",
            "四年级",
            "五年级",
            "六年级"
        ];
        // const itemStyle =
        const option = {
            xAxis: {
                type: "category",
                data: data
            },
            yAxis: {
                type: "value",
                splitLine: {
                    lineStyle: {
                        color: "rgba(255, 255, 255, .1)"
                    }
                }
                // min: 20,
                // max: 60,
                // axisLabel: {
                //     formatter: function (value) {
                //         var texts = [];
                //         if (value <= 20) {
                //             texts.push("20");
                //         } else if (value <= 30) {
                //             texts.push("30");
                //         } else if (value <= 40) {
                //             texts.push("40");
                //         } else if (value <= 50) {
                //             texts.push("50");
                //         } else if (value <= 60) {
                //             texts.push("60");
                //         }
                //         return texts;
                //     }
                // }
            },
            series: [
                {
                    barWidth: 12,
                    data: [
                        {
                            value: 95,
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
                            value: 92,
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
                            value: 80,
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
                            value: 87,
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
                            value: 79,
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
                            value: 75,
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
                        }
                    ],
                    type: "bar",
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                position: "top",
                                formatter: function (a) {
                                    return a.value + "%";
                                },
                                textStyle: {
                                    color: "#0DFFFF",
                                    fontSize: 16
                                }
                            }
                        }
                    }
                }
            ]
        };
        this.options = option;
    },
    methods: {}
};
</script>
<style lang="scss" scoped>
</style>
