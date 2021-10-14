<template>
    <module-header title="使用情况总览">
        <div slot="header-right">
            <Date @change="change"></Date>
        </div>
        <echart :options="options" height="100%" width="100%"></echart>
    </module-header>
</template>

<script>
import ModuleHeader from "@/components/moduleHeader";
import Echart from "@/components/echart";
import Date from "./date.vue";
import { selectAxsUsageView } from "./../api"
export default {
    components: {
        ModuleHeader,
        Echart,
        Date
    },
    data() {
        return {
            options: {},
            list: []
        };
    },
    methods: {
        change(date) {
            this.getData(date[0], date[1])
        },
        getData(date1, date2) {
            const data = {
                beginDate: date1,
                endDate: date2
            }
            selectAxsUsageView(data).then(res => {
                if(res.data.success) {
                    this.list = res.data.result;
                    const chineseData = {
                        data: this.list.map(v => v.courseMap.chinese),
                        name: "语文",
                        color: "#30A2FD",
                        color1: "#376CCB",
                        color2: "#30A2FD"
                    }
                    // const chemistryData = {
                    //     data: this.list.map(v => v.courseMap.chemistry),
                    //     name: "化学",
                    //     color: "#EFDC00",
                    //     color1: "#FFFF00",
                    //     color2: "#DBB001"
                    // }
                    const englishData = {
                        data: this.list.map(v => v.courseMap.english),
                        name: "英语",
                        color: "#E949D1",
                        color1: "#B921D0",
                        color2: "#FB59D2"
                    }
                    const mathematicsData = {
                        data: this.list.map(v => v.courseMap.mathematics),
                        name: "数学",
                        color: "#A962F3",
                        color1: "#A962F3",
                        color2: "#7833E2"
                    }
                    // const physicsData = {
                    //     data: this.list.map(v => v.courseMap.physics),
                    //     name: "物理",
                    //     color: "#FFFFFF",
                    //     color1: "#96ACC3",
                    //     color2: "#FFFFFF"
                    // }
                    const allData = {
                        data: this.list.map(v => v.courseMap.chinese + v.courseMap.english + v.courseMap.mathematics),
                        name: "全部",
                        color: "#12FCFF",
                        color1: "#70BFFF",
                        color2: "#0DFFFF"
                    }
                    const seriesData = [allData, chineseData, mathematicsData, englishData]
                    const xData = this.list.map(v => v.courseMap.dataTime)
                    const series = [];
                    const legendData = [];
                    const color = [];
                    seriesData.forEach(v => {
                        color.push(v.color)
                        legendData.push({
                            name: v.name,
                            textStyle: {
                                fontSize: 10,
                                color: v.color
                            }
                        })
                        series.push({
                            name: v.name,
                            type: "line",
                            data: v.data,
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
                                            color: v.color1 // 0% 处的颜色
                                        },
                                        {
                                            offset: 1,
                                            color: v.color2 // 100% 处的颜色
                                        }
                                    ],
                                    globalCoord: false // 缺省为 false
                                }
                            }
                        })
                    })
                    this.setOption(color, legendData, xData, series)
                }
            })
        },
        setOption(color, legendData, xData, series) {
            const options = {
                color,
                tooltip: {
                    trigger: "axis"
                },
                legend: {
                    data: legendData,
                    itemWidth: 8,
                    itemHeight: 4,
                    icon: "rect",
                    left: 3,
                    top: 10
                },
                grid: {
                    left: "50",
                    right: "0%",
                    bottom: "50",
                    top: "80"
                },
                xAxis: {
                    data: xData,
                    axisLabel: {
                        lineHeight: 20,
                        color: "#96ACC3"
                    },
                    splitNumber: 10,
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
                    name: "上线人数",
                    nameTextStyle: {
                        padding: [0, 0, 10, -40],
                        color: "#70BFFF"
                    },
                    axisLine: {
                        lineStyle: {
                            color: "#96ACC3"
                        }
                    },
                    axisLabel: {
                        margin: 20
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: "rgba(255, 255, 255, .1)"
                        }
                    },
                    min: 0,
                    splitNumber: 5
                },
                series: series
            };
            this.options = options;
        }
    }
};
</script>

<style scoped>
</style>