<template>
    <div class="ageRatioComp">
        <module-header title="学生年龄比例(园区)"
            ><div class="ageRatio">
                <div class="echart" id="ageRatioCharts"></div>
                <div class="fraction">
                    <div>
                        <p>100%</p>
                    </div>
                </div>
                <div class="ageRatioContent">
                    <div
                        class="ageRatioContentItem"
                        v-for="(item, index) in list"
                        :key="index"
                    >
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
                    name: "17.9%",
                    progressNum: "48406",
                    id: 43205
                },
                {
                    style: "background-color:#B921D0",
                    font: "7-12岁",
                    name: "39.6%",
                    progressNum: "83205",
                    id: 30408
                },
                {
                    style: "background-color:#DBB001",
                    font: "13-15岁",
                    name: "18.5%",
                    progressNum: "51203",
                    id: 27203
                },
                {
                    style: "background-color:#376CCB",
                    font: "16-18岁",
                    name: "24%",
                    progressNum: "67406",
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
                    startAngle:135,
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
.ageRatioComp {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
}
.ageRatio {
    width: 100%;
    height: 100%;
    display: flex;
    user-select: none;
    position: relative;
    align-items: center;
    .echart {
        width: 200px;
        height: 200px;
        // animation: rotation 5s linear infinite;
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
            .span {
                display: block;
                width: 0.141rem !important;
                height: 0.1rem;
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
    top: 0;
    left: 0;
    color: #dfffdf;
    height: 100%;
    width: 200px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    div {
        width: 200px;
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        p {
            width: 60px;
            height: 60px;
            border: 1px solid #142e52;
            border-radius: 100%;
            font-size: 14px;
            font-family: Bahnschrift_SemiBold;
            color: #ffffff;
            line-height: 60px;
            margin: 0;
            padding: 0;
            text-align: center;
        }
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
