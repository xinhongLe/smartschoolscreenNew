<template>
    <moduleHeader title="S-T教学模式分布">
        <div class="patter-box">
            <div style="width: 100%; position: relative">
                <Echart width="60%" height="60%" :options="options1"></Echart>
                <div class="text">
                    <span>S-T</span>
                    <span>教学分析</span>
                </div>
            </div>
            <div>
                <Echart width="100%" height="100%" :options="options2"></Echart>
            </div>
        </div>
    </moduleHeader>
</template>
<script>
import moduleHeader from "@/components/moduleHeader.vue";
import Echart from "@/components/echart";
export default {
    data() {
        return {
            options1: {},
            options2: {}
        };
    },
    components: { moduleHeader, Echart },
    created() {},
    computed: {},
    mounted() {
        const option1 = {
            label: {
                show: false
            },
            series: [
                {
                    data: [
                        {
                            value: 10,
                            name: "对话型10%",
                            label : {
                                color: "#fff"
                            },
                            itemStyle: {
                                borderWidth: 3, 
                                borderColor: "rgba(0,0,0,.7)",
                                color: {
                                    type: "radial",
                                    x: 0.5,
                                    y: 0.5,
                                    r: 2,
                                    colorStops: [
                                        {
                                            offset: 0,
                                            color: "#96ACC3" // 0% 处的颜色
                                        },
                                        {
                                            offset: 1,
                                            color: "#FFF" // 100% 处的颜色
                                        }
                                    ],
                                    globalCoord: false // 缺省为 false
                                }
                            }
                        },
                        {
                            value: 45,
                            name: "讲授型45%",
                            label : {
                                color: "#fff"
                            },
                            itemStyle: {
                                borderWidth: 3, 
                                borderColor: "rgba(0,0,0,.7)",
                                color: {
                                    type: "radial",
                                    x: 0.5,
                                    y: 0.5,
                                    r: 2,
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
                                    globalCoord: false // 缺省为 false
                                }
                            }
                        },
                        {
                            value: 15,
                            name: "联系型15%",
                            label : {
                                color: "#fff"
                            },
                            itemStyle: {
                                borderWidth: 3, 
                                borderColor: "rgba(0,0,0,.7)",
                                color: {
                                    type: "radial",
                                    x: 0.5,
                                    y: 0.5,
                                    r: 2,
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
                                    globalCoord: false // 缺省为 false
                                }
                            }
                        },
                        {
                            value: 30,
                            name: "混合型30%",
                            label : {
                                color: "#fff"
                            },
                            itemStyle: {
                                borderWidth: 3, 
                                borderColor: "rgba(0,0,0,.7)",
                                color: {
                                    type: "radial",
                                    x: 0.5,
                                    y: 0.5,
                                    r: 2,
                                    colorStops: [
                                        {
                                            offset: 0,
                                            color: "#FFFF00" // 0% 处的颜色
                                        },
                                        {
                                            offset: 1,
                                            color: "#DBB001" // 100% 处的颜色
                                        }
                                    ],
                                    globalCoord: false // 缺省为 false
                                }
                            }
                        }
                    ],
                    type: "pie",
                    radius: ["50%", "60%"]
                }
            ]
        };
        this.options1 = option1;
        const data = [  "一年级",
            "二年级",
            "三年级",
            "四年级",
            "五年级",
            "六年级",
            "七年级",
            "八年级",
            "九年级"];
        const option2 = {
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
                show: false
            },
            grid: {
                left: "70",
                right: "0%",
                bottom: "50",
                top: "15%"
            },
            yAxis: {
                type: "category",
                data: data,
                splitLine: {
                    show: false
                },
                axisLabel: {
                    color: "#96ACC3",
                    margin: 20,
                    width: 200
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
            },
            series: [
                {
                    name: "巩固型",
                    barWidth: 12,
                    data:  [38, 30, 24, 39, 18, 22, 22,24,24],
                    type: "bar",
                    stack: "identical",
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
                    }
                },
                {
                    name: "创造型",
                    barWidth: 12,
                    data: [22, 20, 22, 12, 38, 20, 32,16,26],
                    type: "bar",
                    stack: "identical",
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
                    }
                },
                {
                    name: "实践型",
                    barWidth: 12,
                    data: [18, 33, 29, 33, 14, 32, 18,33,14],
                    type: "bar",
                    stack: "identical",
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
                    }
                },
                {
                    name: "综合型",
                    barWidth: 12,
                    data:  [22, 17, 25, 16, 30, 26, 28,27,36],
                    type: "bar",
                    stack: "identical",
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
                    }
                }
            ]
        };
        this.options2 = option2;
    },
    methods: {}
};
</script>
<style lang="scss" scoped>
.patter-box {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    >div {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .text {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        margin: auto;
        width: 1rem;
        height: 1rem;
        bottom: 0;
        border: 1px solid #142E52;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        span:nth-of-type(1) {
            font-size: 0.225rem;
        }
        &:after {
            content: "";
            left: 0;
            top: 0;
            bottom: 0;
            right: 0;
            margin: auto;
            z-index: -1;
            width: .6rem;
            height: .6rem;
            position: absolute;
            background: #142E52;
            filter: blur(14.4px);
        }
    }
}
</style>
