<template>
    <module-header title="活跃度">
        <echart :options="options" height="100%" width="100%"></echart>
    </module-header>
</template>

<script>
import Echart from "@/components/echart";
import ModuleHeader from "@/components/moduleHeader";
export default {
    name: "activity",
    components: { ModuleHeader, Echart },
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
                bottom: "24"
            },
            xAxis: {
                data: this.echartsData.map((item) => item[0]),
                axisLabel: {
                    interval: 2,
                    lineHeight: 20
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
