<template>
    <div class="activity-box">
        <module-header title="教师数量变化趋势">
            <div class="inner">
                <echart :options="options" width="100%" height="100%"></echart>
            </div>
        </module-header>
    </div>
</template>

<script>
import Echart from "../../../../components/echart";
import ModuleHeader from "../../../../components/moduleHeader";
export default {
    name: "activity",
    components: { ModuleHeader, Echart },
    data() {
        return {
            options: {}
        };
    },
    mounted() {
        const options = {
            color:['#12FCFF','#E949D1'], 
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: [
                    {
                        name: "教师总人数",
                        textStyle: {
                            fontSize: 10,
                            color: "#12FCFF"
                        }
                    },
                    {
                        name: "新招聘教师",
                        textStyle: {
                            fontSize: 10,
                            color: "#E949D1"
                        }
                    }
                ],
                itemWidth: 8,
                itemHeight: 2,
                icon: "rect",
                left: 0,
                top: "8%"
            },
            grid: {
                left: "50",
                right: "0%",
                bottom: "24",
                top: "26%"
            },
            xAxis: {
                data: [
                    "2016年",
                    "2017年",
                    "2018年",
                    "2019年",
                    "2020年",
                    "2021年"
                ],
                axisLabel: {
                    lineHeight: 20,
                    color: "#96ACC3"
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255, 255, 255, .1)"
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
                max: 60000,
                min: 0,
                splitNumber: 4,
                axisLabel: {
                    formatter: function (v) {
                        if (v == 20000) {
                            return 2000;
                        } else {
                            return v;
                        }
                    }
                }
            },
            series: [
                {
                    name: "教师总人数",
                    type: "line",
                    data: [39000, 55000, 47000, 60060, 55876, 62000],
                    symbol: "none",
                    lineStyle: {
                        width: 2,
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
                },
                {
                    name: "新招聘教师",
                    type: "line",
                    data: [666, 2001, 1678, 35647, 1878, 19980].map((v) => {
                        if (v < 2000) {
                            return v * 10;
                        } else if (v >= 2000 && v < 20000) {
                            console.log(v * 3.8);
                            return v * 3.8;
                        } else {
                            return v;
                        }
                    }),
                    symbol: "none",
                    lineStyle: {
                        width: 2,
                        color: {
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 1, //从左到右
                            y2: 0,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: "#B921D0" // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: "#FB59D2" // 100% 处的颜色
                                }
                            ],
                            globalCoord: false // 缺省为 false
                        }
                    }
                }
            ]
        };
        // this.options.xAxis.data = this.echartsData.map(item => item[0])
        // this.options.series.data = this.echartsData.map(item => item[1])
        this.options = options;
    }
};
</script>

<style scoped lang="scss">
.activity-box {
    width: 100%;
    height: 100%;
    .inner {
        width: 100%;
        height: 100%;
    }
}
</style>