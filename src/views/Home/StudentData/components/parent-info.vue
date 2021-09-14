<template>
    <div style="width: 100%">
        <module-header title="家长信息统计(园区)">
            <div class="parentInfo">
                <div
                    class="echart"
                    id="parentInfoCharts"
                    style="width: 200px; height: 200px"
                ></div>
                <div class="fraction">
                    <div>100%</div>
                </div>
                <div class="parentsList">
                    <div class="parentsListItem">
                        <div>
                            <span
                                style="background-color:#96ACC3"
                            ></span>
                            <p>90后家长</p>
                        </div>
                        <div>
                            <span style="background-color:#7833E2"></span>
                            <p>85后/90前家长</p>
                        </div>
                    </div>
                    <div class="parentsListItem">
                        <div>
                            <span></span>
                            <p>9.5%</p>
                        </div>
                        <div>
                            <span></span>
                            <p>12.5</p>
                        </div>
                    </div>
                    <div class="parentsListItem">
                        <div>
                            <span style="background-color:#FFFF00"></span>
                            <p>80后/85前家长</p>
                        </div>
                        <div>
                            <span style="background-color:#FC5AD3"></span>
                            <p>75后/80前家长</p>
                        </div>
                    </div>
                    <div class="parentsListItem">
                        <div>
                            <span></span>
                            <p>15.5%</p>
                        </div>
                        <div>
                            <span></span>
                            <p>18.75%</p>
                        </div>
                    </div>
                    <div class="parentsListItem">
                        <div>
                            <span style="background-color:#30A2FD"></span>
                            <p>70后/75前家长</p>
                        </div>
                        <div>
                            <span style="background-color:#0DFFFF"></span>
                            <p>70前家长</p>
                        </div>
                    </div>
                    <div class="parentsListItem">
                        <div>
                            <span></span>
                            <p>18.75%</p>
                        </div>
                        <div>
                            <span></span>
                            <p>25.5%</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="parent-supervision">
                <div class="parent-supervision-item">
                    <p>无家长监管</p>
                    <p>450 <span>|</span> <font>2%</font></p>
                </div>
                <div class="parent-supervision-item">
                    <p>双家长监管</p>
                    <p>7633 <span>|</span> <font>36%</font></p>
                </div>
                <div class="parent-supervision-item">
                    <p>双家长监管</p>
                    <p>10982 <span>|</span> <font>62%</font></p>
                </div>
                <div class="parent-supervision-item">
                    <p>多家长监管</p>
                    <p>69 <span>|</span> <font>忽略不计</font></p>
                </div>
            </div>
        </module-header>
    </div>
</template>
<script>
import * as echarts from "echarts";
import moduleHeader from "@/components/moduleHeader";
export default {
    data() {
        return {
            list: [
                {
                    style: "background: linear-gradient(180deg, #96ACC3 0%, #FFFFFF 100%);",
                    label: "90后家长"
                },
                {
                    style: "background: linear-gradient(180deg, #A962F3 0%, #7833E2 100%);",
                    label: "85后/90前家长"
                }
            ]
        };
    },
    components: { moduleHeader },
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
        animation: rotation 5s linear infinite;
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
.parentsList {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 10px 10px;
    .parentsListItem {
        flex: 1;
        display: flex;
        justify-content: space-between;
        div {
            display: flex;
            align-items: center;
            span {
                display: block;
                width: 0.1rem;
                height: 0.1rem;
                border-radius: 100%;
                margin-right: 6px;
                white-space: nowrap;
                line-height: 16px;
            }
            p {
                width: 1rem;
                font-size: 12px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                line-height: 16px;
                color: #96acc3;
                white-space: nowrap;
                padding: 0;
                margin: 0;
            }
        }
    }
}
.parent-supervision{
    flex: 1;
    height: 0.8rem;
    display: flex;
    justify-content: space-around;
    .parent-supervision-item{
        p:nth-of-type(1){
            color: #96ACC3;
        }
        p:nth-of-type(2){
            color:#ffffff;
            font{
                color: #0DFFFF;
            }
            span{     
                color: #1A222D;
                padding: 0 6px;
            }
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
