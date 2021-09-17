<template>
    <div class="TypeDistribution">
        <moduleHeader title="类型分布" autoHeight>
            <Echart :width="'100%'" :options="options"></Echart>
        </moduleHeader>
    </div>
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
                itemWidth: 6,
                itemHeight: 6,
                icon: "circle",
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
                    text: "{name|" + "100" + "}",
                    top: "center",
                    left: "center",
                    borderWidth: 1,
                    borderColor: "#142e52",
                    // backgroundColor:'rgba(20, 46, 82, 0.7)',
                    padding: [30, 27, 30, 23],
                    borderRadius: 50,
                    textStyle: {
                        rich: {
                            name: {
                                width: 100,
                                height: 200,
                                fontSize: 14,
                                fontWeight: "normal",
                                color: "#ffffff"
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
                    radius: [50, 90],
                    center: ["50%", "50%"],
                    roseType: "area",
                    itemStyle: {
                        borderRadius: 0
                    },
                    startAngle: 135,
                    data: [
                        {
                            value: 180,
                            name: "视频",
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0,
                                        0,
                                        0,
                                        1,
                                        [
                                            { offset: 0, color: "#70BFFF" },
                                            { offset: 0.8, color: "#0DFFFF" },
                                            { offset: 1, color: "#0DFFFF" }
                                        ]
                                    )
                                }
                            }
                        },
                        {
                            value: 130,
                            name: "课件",
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
                            value: 110,
                            name: "学案",
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
                            value: 80,
                            name: "电子书",
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0,
                                        0,
                                        0,
                                        1,
                                        [
                                            { offset: 0, color: "#30A2FDFF" },
                                            { offset: 0.2, color: "#30A2FDFF" },
                                            { offset: 1, color: "#376CCBFF" }
                                        ]
                                    )
                                }
                            }
                        },
                        {
                            value: 20,
                            name: "微课",
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
    computed: {},
    methods: {}
};
</script>
<style lang="scss" scoped>
.TypeDistribution {
    width: 100%;
    background: url('../img/pic_gird_bg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
}
</style>
