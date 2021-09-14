<template>
    <div style="width:100%">
        <module-header title="家长信息统计(园区)">
            <div class="parentInfo">
                <div class="echart" id="parentInfoCharts"></div>
                <div class="fraction">
                    <div>100%</div>
                </div>
            </div>
        </module-header>
    </div>
</template>
<script>
import * as echarts from "echarts";
import moduleHeader from '@/components/moduleHeader'
export default {
    data() {
        return {};
    },
    components:{moduleHeader},
    created() {},
    mounted() {
        var chartDom = document.getElementById("parentInfoCharts");
        var myChart = echarts.init(chartDom);
        var option;
        option = {
            legend: {
                top: "bottom"
            },
            toolbox: {
                show: true,
                feature: {
                    mark: { show: false },
                    dataView: { show: false, readOnly: false },
                    restore: { show: false },
                    saveAsImage: { show: false }
                }
            },
            series: [
                {
                    name: "面积模式",
                    type: "pie",
                    radius: [60, 80],
                    center: ["50%", "50%"],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: "center"
                    },
                    animation: false, //经常动画
                    hoverAnimation: false, //鼠标移入不放大
                    itemStyle: {
                        borderWidth: 5,
                        borderColor: "#000",
                        borderRadius: 0
                    },
                    data: [
                        {
                            value: 25,
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0.2,
                                        0.4,
                                        0.8,
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
                            value: 18,
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0.2,
                                        0.4,
                                        0.8,
                                        1,
                                        [
                                            { offset: 0, color: "#30A2FDFF" },
                                            { offset: 0.6, color: "#376CCBFF" },
                                            { offset: 1, color: "#376CCBFF" }
                                        ]
                                    )
                                }
                            }
                        },
                        {
                            value: 17,
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0,
                                        0.4,
                                        0.8,
                                        1,
                                        [
                                            { offset: 0, color: "#FC5AD3FF" },
                                            { offset: 0.9, color: "#B921D0FF" },
                                            { offset: 1, color: "#B921D0FF" }
                                        ]
                                    )
                                }
                            }
                        },
                        {
                            value: 12,
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0.1,
                                        1,
                                        1,
                                        1,
                                        [
                                            { offset: 0, color: "#FFFF00FF" },
                                            { offset: 0.9, color: "#DBB001FF" },
                                            { offset: 1, color: "#DBB001FF" }
                                        ]
                                    )
                                }
                            }
                        },
                        {
                            value: 18,
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0,
                                        0.2,
                                        0.8,
                                        1,
                                        [
                                            { offset: 0, color: "#A962F3FF" },
                                            { offset: 0.9, color: "#A962F3FF" },
                                            { offset: 1, color: "#7833E2FF" }
                                        ]
                                    )
                                }
                            }
                        },
                        {
                            value: 10,
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
        option && myChart.setOption(option);
    },
    computed: {},
    methods: {}
};
</script>
<style lang="scss" scoped>
.parentInfo {
    width: 100%;
    display: flex;
    position: relative;
    user-select: none;
    .echart {
        width: 200px;
        height: 200px;
    }
}
.fraction {
    position: absolute;
    top: 0;
    left: 0;
    color: #dfffdf;
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    div {
        width: 88px;
        height: 88px;
        border: 1px solid #142e52;
        border-radius: 100%;
        font-size: 14px;
        font-family: Bahnschrift_SemiBold;
        color: #ffffff;
        line-height: 88px;
        text-align: center;
    }
}
</style>
