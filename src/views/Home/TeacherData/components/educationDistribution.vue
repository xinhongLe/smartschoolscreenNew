<template>
    <div class="activity-box">
        <module-header title="教师学历分布情况">
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
            grid: {
                left: "50",
                right: "0%",
                bottom: "24",
                top: "26%"
            },
            tooltip: {},
            xAxis: {
                data: [
                    "中专以下",
                    "中专",
                    "大专",
                    "本科",
                    "硕士",
                    "博士及以上"
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
                max: 80,
                min: 0,
                splitNumber: 5,
                axisLabel: {
                    formatter: function (v) {
                        return v + "%";
                    }
                }
            },
            series: [
                {
                    type: "bar",
                    data: [8, 10, 21, 48, 31, 10],
                    barWidth: 8,
                    itemStyle: {
                        normal: {
                            color: {
                                type: "linear",
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
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
                                global: false // 缺省为 false
                            }
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