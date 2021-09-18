<template>
    <moduleHeader title="隐患统计">
        <div class="header-title">
            全市校园安全隐患总数 <span>2811 <font>项</font></span>
        </div>
        <Echart
            class="echart"
            width="100%"
            height="100%"
            :options="options"
        ></Echart>
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
        let option = {
            toolbox: {
                show: false,
                feature: {
                    mark: { show: true },
                    dataView: { show: false, readOnly: false },
                    restore: { show: false },
                    saveAsImage: { show: false }
                }
            },
            grid: {
                left: "-10%",
                right: 10,
                bottom: 10,
                top:10,
            },
            title: [
                {
                    text: "{name|" + "100%" + "}",
                    top: "center",
                    left: "center",
                    borderRadius: 50,
                    textStyle: {
                        rich: {
                            name: {
                                // width: 100,
                                height: 60,
                                lineHeight: 20,
                                fontSize: 20,
                                fontWeight: "normal",
                                color: "#ffff",
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
                    label: {
                        // 线上文字的样式
                        normal: {
                            formatter: "{a|{b}}\n{value|{d}}%\r\r", // 线上文字
                            borderWidth: 0,
                            borderRadius: 0,
                            // padding: [0, -80],
                            rich: {
                                a: {
                                    color: "#fff",
                                    fontSize: 12,
                                    lineHeight: 20
                                },
                                b: {
                                    color: "#fff",
                                    fontSize: 12,
                                    lineHeight: 20
                                },
                                c: {
                                    color: "#fff",
                                    fontSize: 12,
                                    lineHeight: 20
                                },
                                d: {
                                    color: "#fff",
                                    fontSize: 12,
                                    lineHeight: 20
                                }
                            }
                        }
                    },
                    animation: true,
                    hoverAnimation: false,
                    name: "面积模式",
                    type: "pie",
                    roseType: "angle",
                    radius: [70, 110],
                    center: ["50%", "50%"],
                    itemStyle: {
                        borderRadius: 0
                        // borderWidth: 5,
                        // borderColor: "#000000"
                    },
                    startAngle: 135,
                    data: [
                        {
                            value: 35,
                            name: "校舍、设施、设备",
                            label: {
                                color: "#0DFFFF"
                            },
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0,
                                        0,
                                        0,
                                        1,
                                        [
                                            { offset: 0, color: "#0DFFFF" },
                                            { offset: 0.8, color: "#0DFFFF" },
                                            { offset: 1, color: "#70BFFF" }
                                        ]
                                    )
                                }
                            }
                        },
                        {
                            value: 25,
                            name: "人身安全",
                            label: {
                                color: "#CD32D1"
                            },
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0,
                                        0,
                                        0,
                                        1,
                                        [
                                            { offset: 0, color: "#FC5AD3" },
                                            { offset: 1, color: "#FC5AD3" }
                                        ]
                                    )
                                }
                            }
                        },
                        {
                            value: 16,
                            name: "水电消防器材",
                            label: {
                                color: "#F6EB01"
                            },
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0,
                                        0,
                                        0,
                                        1,
                                        [
                                            { offset: 0, color: "#FFFF00" },
                                            { offset: 0.2, color: "#FFFF00" },
                                            { offset: 1, color: "#DBB001" }
                                        ]
                                    )
                                }
                            }
                        },
                        {
                            value: 12,
                            name: "食品卫生",
                            label: {
                                color: "#2F9FF9"
                            },
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0,
                                        0,
                                        0,
                                        1,
                                        [
                                            { offset: 0, color: "#30A3FD" },
                                            { offset: 0.2, color: "#30A3FD" },
                                            { offset: 1, color: "#376DCC" }
                                        ]
                                    )
                                }
                            }
                        },
                        {
                            value: 12,
                            name: "防震、防灾",
                            label: {
                                color: "#A25BF0"
                            },
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0,
                                        0.4,
                                        0.8,
                                        1,
                                        [
                                            { offset: 0, color: "#A962F3" },
                                            { offset: 0.9, color: "#A962F3" },
                                            { offset: 1, color: "#7833E2" }
                                        ]
                                    )
                                }
                            }
                        }
                    ]
                }
            ]
        };
        this.options = option;
    },
    methods: {}
};
</script>
<style lang="scss" scoped>
.header-title {
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 0.2rem;
    line-height: 0.65rem;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #edf2f8;
    span {
        font-size: 0.3rem;
        font-family: Bahnschrift_SemiBold;
        color: #0dffff;
        font {
            font-size: 0.12rem;
        }
    }
}
</style>
