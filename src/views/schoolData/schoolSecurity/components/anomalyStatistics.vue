<template>
    <moduleHeader title="异常记录统计">
        <Echart class="echart" width="100%" height="100%" :options="options"></Echart>
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
            legend: {
                top: "center",
                right: 0,
                orient: "vertical",
                itemWidth: 6,
                itemHeight: 6,
                icon: "circle",
                textStyle: {
                    width: 10,
                    height: 10,
                    lineHeight: 10,
                    color: "#96ACC3",
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
                    top: "center",
                    left: "35%",
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
                        formatter: "{b} {c}"
                    },
                    animation: true,
                    hoverAnimation: false,
                    name: "面积模式",
                    type: "pie",
                    roseType: 'area',
                    radius: [50, 80],
                    center: ["40%", "50%"],
                    itemStyle: {
                        borderRadius: 5
                    },
                    data: [
                        {
                            value: 382,
                            name: "已处理",
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
                            value: 351,
                            name: "普通",
                            label: {
                                color: "#A962F3s"
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
                        },
                        {
                            value: 57,
                            name: "重要",
                            label: {
                                color: "#30A3FD"
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
                            value: 38,
                            name: "未处理",
                            label: {
                                color: "#FC5AD3"
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
                                            { offset: 1, color: "#B921D0" }
                                        ]
                                    )
                                }
                            }
                        },
                        {
                            value: 12,
                            name: "严重",
                            label: {
                                color: "#FFFF00"
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
                        }
                    ]
                }
            ]
        };
        this.options = option;
    }
};
</script>
