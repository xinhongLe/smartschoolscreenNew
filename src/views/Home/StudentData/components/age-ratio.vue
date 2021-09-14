<template>
    <div style="width: 100%">
        <module-header title="学生年龄比例(园区)"
            ><div class="ageRatio">
                <div class="echart" id="ageRatioCharts"></div>
                <div class="fraction">
                    <div>100%</div>
                </div>
                <div class="ageRatioContent">
                    <div class="ageRatioContentItem" v-for="(item, index) in list" :key="index">
                        <div class="span" :style="item.style"></div>
                        <p>{{ item.font }}</p>
                        <Progress :proDta="item"></Progress>
                    </div>
                </div>
            </div>
        </module-header>
    </div>
</template>
<script>
import * as echarts from "echarts";
import moduleHeader from "@/components/moduleHeader";
import Progress from "@/components/ProgressC";
export default {
    data() {
        return {
            list: [
                {
                    style: "background-color:#0DFFFF",
                    font: "3-6岁",
                    name: "37.5%",
                    progressNum: "43205",
                    id: 43205
                },
                {
                    style: "background-color:#B921D0",
                    font: "7-12岁",
                    name: "25%",
                    progressNum: "30408",
                    id: 30408
                },
                {
                    style: "background-color:#DBB001",
                    font: "13-15岁",
                    name: "12.5%",
                    progressNum: "27203",
                    id: 27203
                },
                {
                    style: "background-color:#376CCB",
                    font: "16-18岁",
                    name: "25%",
                    progressNum: "30406",
                    id: 30406
                }
            ]
        };
    },
    components: { moduleHeader, Progress },
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
                    radius: [50, 90],
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
    padding-top: 0.125rem;
    .echart {
        width: 200px;
        height: 200px;
        animation: rotation 5s linear infinite;
    }
    .ageRatioContent {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0px 0.2rem 0.31rem 1px;
        .ageRatioContentItem {
            display: flex;
            align-items: center;
            height: 0.375rem;
            .span {
                display: block;
                width:0.141rem !important;
                height:0.1rem;
                border-radius: 100%;
                margin: -1px 0.1rem 0 0;
            }
            p {
                font-size: 0.15rem;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #96acc3;
                white-space: nowrap;
                width: 0.75rem;
                margin: -1px 0.225rem 0 0;
            }
        }
    }
}
.fraction {
    position: absolute;
    top: 10px;
    left: 0;
    color: #dfffdf;
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    div {
        width: 60px;
        height: 60px;
        border: 1px solid #142e52;
        border-radius: 100%;
        font-size: 14px;
        font-family: Bahnschrift_SemiBold;
        color: #ffffff;
        line-height: 60px;
        text-align: center;
    }
}
@keyframes rotation {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>
