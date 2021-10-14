<template>
    <moduleHeader title="全校使用分布情况">
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
import { selectAxsSchoolUsageView } from "./../api";
export default {
    data() {
        return {
            options: {}
        };
    },
    components: { moduleHeader, Echart },
    mounted() {
        this.getData();
    },
    methods: {
        getData() {
            selectAxsSchoolUsageView().then((res) => {
                if (res.data.success) {
                    const seriesData = [];
                    const color = [
                        "#12FCFF",
                        "#E949D1",
                        "#EFDC00",
                        "#30A2FD",
                        "#FFFFFF"
                    ];
                    const color1 = [
                        "#70BFFF",
                        "#FB59D2",
                        "#FFFF00",
                        "#376CCB",
                        "#96ACC3"
                    ];
                    const color2 = [
                        "#0DFFFF",
                        "#B921D0",
                        "#DBB001",
                        "#30A2FD",
                        "#FFFFFF"
                    ];
                    res.data.result.map((v, i) => {
                        seriesData.push({
                            value: v.distributionRate.split("%")[0],
                            name: v.functionalModule,
                            label: {
                                color: color[i]
                            },
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0,
                                        0,
                                        0,
                                        1,
                                        [
                                            { offset: 0, color: color1[i] },
                                            { offset: 0.8, color: color2[i] },
                                            { offset: 1, color: color2[i] }
                                        ]
                                    )
                                }
                            }
                        });
                    });
                    this.setOption(seriesData);
                }
            });
        },
        setOption(seriesData) {
            let option = {
                series: [
                    {
                        type: 'pie',
                        radius: [49, 50],
                        center: ["40%", "50%"],
                        label: {
                            show: false,
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            {value: 32, itemStyle: { color: "rgba(20, 46, 82, .66)" }},
                        ]
                    },
                    {
                        label: {
                            formatter: "{b} {c}%"
                        },
                        animation: true,
                        hoverAnimation: false,
                        type: "pie",
                        roseType: "area",
                        radius: [60, 100],
                        center: ["40%", "50%"],
                        data: seriesData
                    }
                ]
            };
            this.options = option;
        }
    }
};
</script>

<style scoped>
</style>
