<template>
    <ModuleHeader title="临界生分布统计">
        <Echart width="100%" :height="'100%'" :options="options"></Echart>
    </ModuleHeader>
</template>

<script>
import ModuleHeader from "@/components/moduleHeader";
import Echart from "@/components/echart";
import * as echarts from "echarts";
export default {
    components: {
        ModuleHeader,
        Echart
    },

    data() {
        return {
            options: {}
        };
    },
    mounted() {
        var data1 = [12, 16, 8, 6];
        var data2 = [-12, -8, -16, -14];
        let option = {
            xAxis: {
                data: ["一年级", "二年级", "三年级", "四年级"],
                name: "",
                axisLine: { onZero: true },
                splitLine: { show: false },
                splitArea: { show: false }
            },
            yAxis: {
                type: "value",
                min: -20,
                max: 20,
                splitLine: {
                    lineStyle: {
                        color: "rgba(255, 255, 255, .1)"
                    }
                }
            },
            grid: {
                left: 40,
                top: 40,
                right: 40,
                bottom: 40
            },
            series: [
                {
                    name: "bar1",
                    type: "bar",
                    stack: "two",
                    barWidth: 32,
                    data: data1,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0,
                                0,
                                0,
                                1,
                                [
                                    { offset: 0, color: "#7833E2" },
                                    { offset: 0.6, color: "#7833E2" },
                                    { offset: 1, color: "#A962F3" }
                                ]
                            )
                        }
                    }
                },
                {
                    name: "bar2",
                    type: "bar",
                    stack: "two",
                    barWidth: 32,
                    data: data2,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0,
                                0,
                                0,
                                1,
                                [
                                    { offset: 0, color: "#0DFFFF" },
                                    { offset: 0.6, color: "#0DFFFF" },
                                    { offset: 1, color: "#70BFFF" }
                                ]
                            )
                        }
                    }
                }
            ]
        };
        this.options = option;
    }
};
</script>

<style scoped>
</style>