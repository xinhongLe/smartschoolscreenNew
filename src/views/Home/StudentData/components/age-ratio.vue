<template>
    <div style="width:100%">
        <module-header title="学生年龄比例(园区)"
            ><div class="ageRatio">
                <div class="echart" id="ageRatioCharts"></div>
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
        let chartDom = document.getElementById("ageRatioCharts");
        let myChart = echarts.init(chartDom);
        let option;
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
                    label: { show: false },
                    animation: false,
                    hoverAnimation: false,
                    name: "面积模式",
                    type: "pie",
                    radius: [40, 80],
                    center: ["50%", "50%"],
                    roseType: "area",
                    itemStyle: {
                        borderRadius: 0
                    },

                    data: [
                        {
                            value: 180,
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
.ageRatio {
    width: 100%;
    display: flex;
    position: relative;
    user-select: none;
    .echart {
        width: 200px;
        height: 200px;
        transform: rotate(-45deg);
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
        width: 50px;
        height: 50px;
        border: 1px solid #142e52;
        border-radius: 100%;
        font-size: 14px;
        font-family: Bahnschrift_SemiBold;
        color: #ffffff;
        line-height: 50px;
        text-align: center;
    }
}
</style>
