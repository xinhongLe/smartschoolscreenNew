<template>
    <moduleHeader title="作业布置类型">
        <Echart width="100%" height="100%" :options="options"></Echart>
    </moduleHeader>
</template>
<script>
import moduleHeader from "@/components/moduleHeader.vue";
import Echart from "@/components/echart";
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
        const option = {
            legend: {
                data: [
                    {
                        name: "巩固型",
                        textStyle: {
                            fontSize: 10,
                            color: "#12FCFF"
                        }
                    },
                    {
                        name: "创造型",
                        textStyle: {
                            fontSize: 10,
                            color: "#E949D1"
                        }
                    },
                    {
                        name: "实践型",
                        textStyle: {
                            fontSize: 10,
                            color: "#E949D1"
                        }
                    },
                    {
                        name: "综合型",
                        textStyle: {
                            fontSize: 10,
                            color: "#E949D1"
                        }
                    }
                ],
                itemWidth: 15,
                itemHeight: 8,
                left: 0,
                top: 30
            },
            xAxis: {
                type: "category",
                data: data,
                axisTick: {
                    show: false
                },
                axisLabel: {
                    lineHeight: 20,
                    color: "#96ACC3"
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255, 255, 255, .1)"
                    }
                },
            },
            grid: {
                left: "50",
                right: "0%",
                bottom: "50",
                top: "15%"
            },
            yAxis: {
                type: "value",
                min:0,
                max: 80,
                nameTextStyle: {
                    padding: [20, 0, 20, 10]
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255, 255, 255, .1)"
                    }
                },
                axisLabel: {
                    color: "#96ACC3",
                    formatter :(v) => {
                        return v + "min"
                    }
                },
            },
            series: [
                {
                    name: "巩固型",
                    barWidth: 12,
                    data: [38, 30, 24, 39, 18, 22],
                    type: "bar",
                    stack: 'identical',
                    itemStyle: {
                        color: {
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 0, //从左到右
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: "#0DFFFF" // 0% 处的颜色
                                },
                                {
                                    offset: 0.6,
                                    color: "#70BFFF" // 100% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: "#70BFFF" // 100% 处的颜色
                                }
                            ],
                            globalCoord: false // 缺省为 false
                        }
                    },
                },
                {
                    name: "创造型",
                    barWidth: 12,
                    data: [15, 12, 17, 14, 28, 18],
                    type: "bar",
                    stack: 'identical',
                    itemStyle: {
                        color: {
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 0, //从左到右
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: "#30A2FD" // 0% 处的颜色
                                },
                                {
                                    offset: 0.6,
                                    color: "#376CCB" // 100% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: "#376CCB" // 100% 处的颜色
                                }
                            ],
                            globalCoord: false // 缺省为 false
                        }
                    },
                },
                {
                    name: "实践型",
                    barWidth: 12,
                    data: [12, 10, 11, 12, 18, 10],
                    type: "bar",
                    stack: 'identical',
                    itemStyle: {
                        color: {
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 0, //从左到右
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: "#A962F3" // 0% 处的颜色
                                },
                                {
                                    offset: 0.6,
                                    color: "#7833E2" // 100% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: "#7833E2" // 100% 处的颜色
                                }
                            ],
                            globalCoord: false // 缺省为 false
                        }
                    },
                },
                {
                    name: "综合型",
                    barWidth: 12,
                    data: [10, 10, 12, 10, 10, 14],
                    type: "bar",
                    stack: 'identical',
                    itemStyle: {
                        color: {
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 0, //从左到右
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: "#FC5AD3" // 0% 处的颜色
                                },
                                {
                                    offset: 0.6,
                                    color: "#B921D0" // 100% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: "#B921D0" // 100% 处的颜色
                                }
                            ],
                            globalCoord: false // 缺省为 false
                        }
                    },
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
