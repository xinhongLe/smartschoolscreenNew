<template>
    <moduleHeader title="S-T教学模式分析">
        <Echart width="100%" height="100%" :options="options"></Echart>
    </moduleHeader>
</template>
<script>
import moduleHeader from "@/components/moduleHeader.vue";
import * as echarts from "echarts";
import Echart from "@/components/echart";
export default {
    data() {
        return {
            options: {}
        };
    },
    components: { moduleHeader,Echart },
    created() {},
    computed: {},
    mounted() {
        let title = "S-T";
        let total = "教学分析";
        let option = {
            title: [
                {
                    text: "{name|" + title + "}\n{val|" + total + "}",
                    top: "center",
                    left: "center",
                    borderWidth: 1,
                    borderColor: "rgba(20, 46, 82, 1)",
                    // backgroundColor:'rgba(20, 46, 82, 0.7)',
                    padding: [0, 10, 22, 10],
                    borderRadius: 50,
                    textStyle: {
                        rich: {
                            name: {
                                // width: 100,
                                height: 60,
                                lineHeight: 20,
                                fontSize: 14,
                                fontWeight: "normal",
                                color: "#fff",
                                padding: [-10, 5, -10, 5]
                            },
                            val: {
                                width: 100,
                                height: 60,
                                fontSize: 14,
                                fontWeight: "normal",
                                color: "#fff",
                                padding: [-10, 5, -10, 10]
                            }
                        }
                    }
                }
            ],

            series: [
                {
                    name: "面积模式",
                    type: "pie",
                    radius: [50, 70],
                    center: ["50%", "50%"],
                    itemStyle: {
                        borderRadius: 0,
                        borderWidth: 5,
                        borderColor: "#000000"
                    },
                    label: {
                        // 线上文字的样式
                        normal: {
                            formatter: "{a|{b}}{c|{d}}%\r\r", // 线上文字
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
                    data: [
                        {
                            value: 45,
                            name: "讲授型",
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
                            value: 15,
                            name: "练习型",
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
                            name: "混合型",
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0,
                                        0,
                                        0,
                                        1,
                                        [
                                            { offset: 0, color: "#FFFF00FF" },
                                            { offset: 0.2, color: "#FFFF00FF" },
                                            { offset: 1, color: "#DBB001FF" }
                                        ]
                                    )
                                }
                            }
                        },
                        {
                            value: 10,
                            name: "对话型",
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0,
                                        0.4,
                                        0.8,
                                        1,
                                        [
                                            { offset: 0, color: "#FFFFFFFF" },
                                            { offset: 0.9, color: "#96ACC3FF" },
                                            { offset: 1, color: "#96ACC3FF" }
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
