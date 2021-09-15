<template>
    <div class="participation-box">
        <module-header autoHeight title="教师教研参与情况">
            <div class="inner">
                <div class="v-line"></div>
                <Flex column>
                    <Flex :flex="1">
                        <div>
                            <CountTo
                                ref="example2"
                                class="num"
                                :start-val="0"
                                :end-val="2342"
                                :duration="3000"
                            ></CountTo>
                            <span>教研参与人数</span>
                        </div>
                        <Flex :flex="1"></Flex>
                        <div>
                            <CountTo
                                ref="example2"
                                class="num"
                                :start-val="0"
                                :end-val="233"
                                :duration="3000"
                            ></CountTo>
                            <span>教研参与次数</span>
                        </div>
                        <Flex :flex="1"></Flex>
                        <Ring type="1" count="35">
                            <p>教师满意度</p>
                        </Ring>
                    </Flex>
                    <div class="v-line"></div>
                    <Flex :flex="1">
                        <div>
                            <CountTo
                                ref="example2"
                                class="num"
                                :start-val="0"
                                :end-val="2342"
                                :duration="3000"
                            ></CountTo>
                            <span>教师开课次数</span>
                        </div>
                        <Flex :flex="1"></Flex>
                        <div>
                            <CountTo
                                ref="example2"
                                class="num"
                                :start-val="0"
                                :end-val="233"
                                :duration="3000"
                            ></CountTo>
                            <span>工作室成员人数</span>
                        </div>
                        <Flex :flex="1"></Flex>
                        <Ring type="2" count="56">
                            <p>教师参与率</p>
                        </Ring>
                    </Flex>
                </Flex>
            </div>
        </module-header>
    </div>
</template>

<script>
import Flex from "@/components/flex";
import ModuleHeader from "../../../../components/moduleHeader";
import Ring from "./ring.vue";
import CountTo from "vue-count-to";
export default {
    name: "participation",
    components: { ModuleHeader, Flex, CountTo, Ring },
    data() {
        return {
            echartsData: [
                ["2021-01-01", 18],
                ["2021-02-01", 41],
                ["2021-03-01", 26],
                ["2021-04-01", 55],
                ["2021-05-01", 32],
                ["2021-06-01", 52],
                ["2021-07-01", 35]
            ],
            options: {}
        };
    },
    mounted() {
        // setInterval(() => {
        //   this.options.xAxis.data = this.echartsData.map(item => item[0])
        //   this.options.series.data = this.echartsData.map(item => item[1])
        // },5000)
        const options = {
            // animationDuration: 10000,
            tooltip: {
                trigger: "axis"
            },
            grid: {
                left: "5%",
                right: "0%",
                bottom: "10%"
            },
            xAxis: {
                data: this.echartsData.map((item) => item[0]),
                axisLabel: {
                    interval: 2
                },
                axisLine: {
                    lineStyle: {
                        color: "#96ACC3"
                    }
                },
                axisTick: {
                    show: false
                }
            },
            yAxis: {
                axisLine: {
                    lineStyle: {
                        color: "#96ACC3"
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255, 255, 255, .1)"
                    }
                },
                interval: 20
            },
            series: {
                name: "活跃度",
                type: "line",
                data: this.echartsData.map((item) => item[1]),
                symbol: "none",
                lineStyle: {
                    width: 3,
                    color: {
                        type: "linear",
                        x: 0,
                        y: 0,
                        x2: 1, //从左到右
                        y2: 0,
                        colorStops: [
                            {
                                offset: 0,
                                color: "#70BFFF" // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: "#0DFFFF" // 100% 处的颜色
                            }
                        ],
                        globalCoord: false // 缺省为 false
                    }
                }
            }
        };
        // this.options.xAxis.data = this.echartsData.map(item => item[0])
        // this.options.series.data = this.echartsData.map(item => item[1])
        this.options = options;
    }
};
</script>

<style scoped lang="scss">
.participation-box {
    width: 100%;
    .inner {
        width: 100%;
        padding: 0.15rem;
        box-sizing: border-box;
    }
    .num {
        font-size: 0.25rem;
        color: #70bfff;
        line-height: 0.3rem;
    }
    span {
        display: block;
        margin-top: 0.0625rem;
        font-size: 0.125rem;
        color: #96acc3;
        line-height: 0.175rem;
    }
    .v-line {
        height: 0.3rem;
    }
    .h-line {
        width: 0.4rem;
    }
}
</style>