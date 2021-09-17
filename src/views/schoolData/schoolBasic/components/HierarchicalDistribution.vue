<template>
    <moduleHeader title="学生层级分布">
        <div style="height: 40%">
            <Echart width="100%" :options="options"></Echart>
        </div>
        <div style="height: 60%">
            <Echart width="100%" :options="option"></Echart>
        </div>
    </moduleHeader>
</template>
<script>
import moduleHeader from "@/components/moduleHeader.vue";
import Echart from "@/components/echart";
import * as echarts from "echarts";
export default {
    data() {
        return {
            options: {},
            option: {}
        };
    },
    components: { moduleHeader, Echart },
    created() {},
    computed: {},
    mounted() {
        let options = {
            legend: {
                top: "20%",
                left: "70%",
                orient: "vertical",
                // itemWidth: 6,
                // itemHeight: 6,
                // icon: "circle",
                textStyle: {
                    width: 10,
                    height: 20,
                    lineHeight: 20,
                    color: "#ffffff",
                    orient: "vertical"
                }
            },
            toolbox: {
                show: false,
                feature: {
                    mark: { show: true },
                    dataView: { show: false, readOnly: false },
                    restore: { show: false },
                    saveAsImage: { show: false }
                }
            },
            title: [
                {
                    text: "{name|" + "100%" + "}",
                    top: "37%",
                    left: "25%",
                    // borderWidth: 1,
                    // borderColor: "#142e52",
                    // backgroundColor:'rgba(20, 46, 82, 0.7)',
                    // padding: [30, 27, 30, 23],
                    borderRadius: 50,
                    textStyle: {
                        rich: {
                            name: {
                                // width: 100,
                                height: 60,
                                lineHeight: 20,
                                fontSize: 20,
                                fontWeight: "normal",
                                color: "rgba(13, 255, 255, 1)",
                                padding: [10, 0, 0, -6]
                            },
                            val: {
                                width: 100,
                                height: 60,
                                fontSize: 14,
                                fontWeight: "normal",
                                color: "#fff",
                                padding: [-10, 0, -10, 0]
                            }
                        }
                    }
                }
            ],
            series: [
                {
                    label: { show: false },
                    animation: true,
                    hoverAnimation: false,
                    name: "面积模式",
                    type: "pie",
                    radius: [70, 90],
                    center: ["30%", "45%"],
                    itemStyle: {
                        borderRadius: 0,
                        borderWidth: 5,
                        borderColor: "#000000"
                    },
                    startAngle: 135,
                    data: [
                        {
                            value: 45,
                            name: "平均优秀率",
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0,
                                        0,
                                        0,
                                        1,
                                        [
                                            { offset: 0, color: "#30A2FD" },
                                            { offset: 0.2, color: "#30A2FD" },
                                            { offset: 1, color: "#376CCB" }
                                        ]
                                    )
                                }
                            }
                        },
                        {
                            value: 20,
                            name: "平均优率",
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0,
                                        0,
                                        0,
                                        1,
                                        [
                                            { offset: 0, color: "#FC5AD3" },
                                            { offset: 1, color: "#B921D0" }
                                        ]
                                    )
                                }
                            }
                        },
                        {
                            value: 30,
                            name: "平均良好率",
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0,
                                        0,
                                        0,
                                        1,
                                        [
                                            { offset: 0, color: "#A962F3" },
                                            { offset: 0.2, color: "#A962F3" },
                                            { offset: 1, color: "#7833E2" }
                                        ]
                                    )
                                }
                            }
                        },
                        {
                            value: 10,
                            name: "平均不及格率",
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0,
                                        0,
                                        0,
                                        1,
                                        [
                                            { offset: 0, color: "#0DFFFF" },
                                            { offset: 0.2, color: "#70BFFF" },
                                            { offset: 1, color: "#70BFFF" }
                                        ]
                                    )
                                }
                            }
                        }
                    ]
                }
            ]
        };
        this.options = options;
        const option = {
            
            grid: {
                left: "3%",
                right: "4%",
                bottom: "1%",
                top: "15%",
                containLabel: true
            },
            xAxis: {
                type: "value",
                show: false
            },
            yAxis: {
                type: "category",
                data: ["六年级","五年级","四年级", "三年级", "二年级", "一年级"],
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "#96ACC3"
                    },
                    fontSize: 12,
                    interval: 0,
                    margin: 12
                },
                axisTick: {
                    show: false
                }
            },
            series: [
                {
                    type: "bar",
                    stack: "总量",
                    data: [26,37,24,19,19,26],
                    itemStyle: {
                        color: {
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: "#0DFFFF" // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: "#70BFFF" // 100% 处的颜色
                                }
                            ],
                            global: false // 缺省为 false
                        }
                    },
                    barWidth: 12 //柱图宽度
                },
                {
                    name: "[80,90]",
                    type: "bar",
                    stack: "总量",
                    data: [62,32,17,40,34,34],
                    itemStyle: {
                        color: {
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: "#30A2FD" // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: "#376CCB" // 100% 处的颜色
                                }
                            ],
                            global: false // 缺省为 false
                        }
                    },
                    barWidth: 12 //柱图宽度
                },
                {
                    name: "[70,80]",
                    type: "bar",
                    stack: "总量",
                    data: [30,47,43,53,40,72],
                    itemStyle: {
                        color: {
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: "#A962F3" // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: "#7833E2" // 100% 处的颜色
                                }
                            ],
                            global: false // 缺省为 false
                        }
                    },
                    barWidth: 12 //柱图宽度
                },
                {
                    type: "bar",
                    stack: "总量",
                    data: [28,30,63,34,54,14],
                    itemStyle: {
                        color: {
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: "#FC5AD3" // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: "#B921D0" // 100% 处的颜色
                                }
                            ],
                            global: false // 缺省为 false
                        }
                    },
                    barWidth: 12 //柱图宽度
                }
            ]
        };
        this.option = option;
    },
    methods: {}
};
</script>
<style lang="scss" scoped>
</style>
