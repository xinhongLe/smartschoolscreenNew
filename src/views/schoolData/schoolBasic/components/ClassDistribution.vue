<template>
    <moduleHeader title="学校班级分布">
        <Echart width="100%" height="100%" :options="options"></Echart>
        <div class='header-title'>
            <p class='number'>89</p>
            <p class="class">班级总数(个)</p>
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
            options: {}
        };
    },
    components: { moduleHeader, Echart },
    created() {},
    mounted() {
        let option = {
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
                    radius: [80, 100],
                    center: ["30%", "50%"],
                    itemStyle: {
                        borderRadius: 0,
                        borderWidth: 5,
                        borderColor: "#000000"
                    },
                    startAngle: 135,
                    data: [
                        {
                            value: 8,
                            name: "一年级",
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0,
                                        0,
                                        0,
                                        1,
                                        [
                                            { offset: 0, color: "#E67A2C" },
                                            { offset: 0.8, color: "#E67A2C" },
                                            { offset: 1, color: "#FFB759" }
                                        ]
                                    )
                                }
                            }
                        },
                        {
                            value: 6,
                            name: "二年级",
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
                            value: 10,
                            name: "三年级",
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0,
                                        0,
                                        0,
                                        1,
                                        [
                                            { offset: 0, color: "#2BFFD7" },
                                            { offset: 0.2, color: "#2BFFD7" },
                                            { offset: 1, color: "#07E99A" }
                                        ]
                                    )
                                }
                            }
                        },
                        {
                            value: 10,
                            name: "四年级",
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
                            name: "五年级",
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0,
                                        0.4,
                                        0.8,
                                        1,
                                        [
                                            { offset: 0, color: "#30A2FD" },
                                            { offset: 0.9, color: "#30A2FD" },
                                            { offset: 1, color: "#376CCB" }
                                        ]
                                    )
                                }
                            }
                        },
                        {
                            value: 6,
                            name: "六年级",
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0,
                                        0,
                                        0,
                                        1,
                                        [
                                            { offset: 0, color: "#07E99A" },
                                            { offset: 0.8, color: "#07E99A" },
                                            { offset: 1, color: "#00C17E" }
                                        ]
                                    )
                                }
                            }
                        },
                        {
                            value: 6,
                            name: "七年级",
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0,
                                        0,
                                        0,
                                        1,
                                        [
                                            { offset: 0, color: "#FFFF00" },
                                            { offset: 1, color: "#DBB001" }
                                        ]
                                    )
                                }
                            }
                        },
                        {
                            value: 4,
                            name: "八年级",
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0,
                                        0,
                                        0,
                                        1,
                                        [
                                            { offset: 0, color: "#96ACC3" },
                                            { offset: 0.2, color: "#96ACC3" },
                                            { offset: 1, color: "#FFFFFF" }
                                        ]
                                    )
                                }
                            }
                        },
                        {
                            value: 8,
                            name: "九年级",
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0,
                                        0,
                                        0,
                                        1,
                                        [
                                            { offset: 0, color: "#FF4EA3" },
                                            { offset: 0.2, color: "#FF4EA3" },
                                            { offset: 1, color: "#FA4A71" }
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
    computed: {},
    methods: {}
};
</script>
<style lang="scss" scoped>
.header-title{
    position:absolute;
    top: 100px;
    left: 35px;
    p{
        margin: 0;
        padding: 0;
    }
    .number{
        font-size: 24px;
        font-family: Bahnschrift_SemiBold;
        color: #0DFFFF;
    }
    .class{
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #EDF2F8;
    }
}
</style>
