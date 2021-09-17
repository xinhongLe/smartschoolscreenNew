<template>
    <moduleHeader title="资源贡献量分布">
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
                top: "10%",
                left: "60%",
                orient: "vertical",
                itemWidth: 10,
                itemHeight: 10,
                // icon: "circle",
                textStyle: {
                    width: 10,
                    height: 10,
                    lineHeight: 10,
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
                    text: "{name|" + "89" + "}\n{val|" + "个" + "}",
                    top: "center",
                    left: "28%",
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
                    roseType: 'angle',
                    radius: [50, 80],
                    center: ["30%", "50%"],
                    itemStyle: {
                        borderRadius: 0,
                        // borderWidth: 5,
                        // borderColor: "#000000"
                    },
                    startAngle: 135,
                    data: [
                        {
                            value: 158,
                            name: "语文",
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
                            value: 138,
                            name: "数学",
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
                            value: 100,
                            name: "英语",
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
                            value: 80,
                            name: "音乐",
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
                            value: 60,
                            name: "美术",
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
                            value: 30,
                            name: "体育",
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0,
                                        0,
                                        0,
                                        1,
                                        [
                                            { offset: 0, color: "#FF4EA3" },
                                            { offset: 0.8, color: "#FF4EA3" },
                                            { offset: 1, color: "#FA4A71" }
                                        ]
                                    )
                                }
                            }
                        },
                        {
                            value: 20,
                            name: "思品",
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0,
                                        0,
                                        0,
                                        1,
                                        [
                                            { offset: 0, color: "#F8F9FB" },
                                            { offset: 1, color: "#9AAFC5" }
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
</style>
