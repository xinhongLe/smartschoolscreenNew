<template>
    <moduleHeader title="作业完成情况">
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
                data: ["作业布置量", "作业完成率"],
                left:'right',
                textStyle:{
                    color:'#fff'
                }
            },
            xAxis: [
                {
                    type: "category",
                    data: [
                        "一年级",
                        "二年级",
                        "三年级",
                        "四年级",
                        "五年级",
                        "六年级"
                    ],
                    axisPointer: {
                        type: "shadow"
                    }
                }
            ],
            yAxis: [
                {
                    type: "value",
                    name: "单位：min",
                    min: 0,
                    max: 80,
                    axisLabel: {
                        formatter: "{value}"
                    }
                },
                {
                    type: "value",
                    name: "单位：%",
                    min: 0,
                    max: 80,
                    axisLabel: {
                        formatter: "{value}%"
                    }
                }
            ],
            series: [
                {
                    name: "作业布置量",
                    type: "bar",
                    barWidth: 12,
                    data: [10, 15, 50, 65, 55, 67],
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
                    data: [80, 75, 79, 70, 74, 76],
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0,
                                0,
                                0,
                                1,
                                [
                                    { offset: 0, color: "#B921D0" },
                                    { offset: 0.6, color: "#B921D0" },
                                    { offset: 1, color: "#FB59D2" }
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
