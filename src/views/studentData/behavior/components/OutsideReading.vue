<template>
    <Echart width="100%" height="100%" :options="options"></Echart>
</template>
<script>
import Echart from "@/components/echart";
export default {
    data() {
        return {
            options: {}
        };
    },
    components: { Echart },
    created() {},
    computed: {},
    mounted() {
        const data = [
            "5本以下",
            "5-15本",
            "16-20本",
            "20-30本",
            "30-50本",
            "50本以上"
        ];
        const option = {
            xAxis: {
                type: "category",
                data: data,
                axisTick: {
                    show: false
                },
                axisLabel: {
                    lineHeight: 20,
                    color: "#96ACC3"
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255, 255, 255, .1)"
                    }
                },
            },
            grid: {
                left: "50",
                right: "0%",
                bottom: "30",
                top: "15%"
            },
            yAxis: {
                type: "value",
                min: 0,
                max: 1000,
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255, 255, 255, .1)"
                    }
                },
                axisLabel: {
                    color: "#96ACC3"
                },
            },
            series: [
                {
                    name: "综合型",
                    barWidth: 12,
                    data: [351, 444, 956, 712, 392, 59],
                    type: "pictorialBar",
                    symbol: "triangle",
                    itemStyle: {
                        color: {
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 0, //从左到右
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: "#FC5AD3" // 0% 处的颜色
                                },
                                {
                                    offset: 0.6,
                                    color: "#B921D0" // 100% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: "#B921D0" // 100% 处的颜色
                                }
                            ],
                            globalCoord: false // 缺省为 false
                        }
                    },
                }
            ]
        };
        this.options = option;
    },
    methods: {}
};
</script>
<style lang="scss" scoped>
</style>
