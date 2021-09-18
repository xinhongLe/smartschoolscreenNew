<template>
    <moduleHeader title="巡查任务统计">
        <div class="header-title">
            <div
                class="header-list-item"
                v-for="(item, index) in headerList"
                :key="index"
            >
                <p :style="item.color" class="num">{{ item.number }}</p>
                <p class="font">{{ item.font }}</p>
            </div>
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
            options: {},
            headerList: [
                {
                    number: 198,
                    font: "日常巡查(次)",
                    color: "color: #0DFFFF;"
                },
                {
                    number: 135,
                    font: "设备巡检(次)",
                    color: "color: #C127D1;"
                },
                {
                    number: 45,
                    font: "安全督导(次)",
                    color: "color: #07E99A;"
                }
            ]
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
                top: 10
            },
            title: [
                {
                    text: "{name|" + "巡查任务" + "}",
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
                    // roseType: "angle",
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
                            value: 20,
                            name: "安全督导",
                            label: {
                                color: "#07E99A"
                            },
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0,
                                        0,
                                        0,
                                        1,
                                        [
                                            { offset: 0, color: "#31F0B3" },
                                            { offset: 0.8, color: "#31F0B3" },
                                            { offset: 1, color: "#00D88C" }
                                        ]
                                    )
                                }
                            }
                        },
                        {
                            value: 50,
                            name: "日常巡查",
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
                                            { offset: 1, color: "#70BFFF" }
                                        ]
                                    )
                                }
                            }
                        },
                        {
                            value: 30,
                            name: "设备巡检",
                            label: {
                                color: "#C128D0"
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
                                            { offset: 0.2, color: "#FC5AD3" },
                                            { offset: 1, color: "#B921D0" }
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
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .header-list-item {
        text-align: center;
        margin: 0.2rem 0.3rem 0 0.3rem;
        p {
            margin: 0;
            padding: 0;
        }
        .font {
            font-size: 0.15rem;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #96acc3;
        }
        .num {
            font-size: 0.4rem;
            font-family: Bahnschrift_SemiBold;
            color: #0dffff;
        }
    }
}
</style>
