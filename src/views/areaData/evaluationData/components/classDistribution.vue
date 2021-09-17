<template>
    <moduleHeader title="家庭书面作业监控">
        <Echart width="100%" height="100%" :options="options"></Echart>
    </moduleHeader>
</template>
<script>
import moduleHeader from "@/components/moduleHeader.vue";
import Echart from "@/components/echart";
export default {
    data() {
        return {
            options: {}
        };
    },
    components: { moduleHeader, Echart },
    created() {},
    computed: {},
    mounted() {
        const data = [
            "一年级",
            "二年级",
            "三年级",
            "四年级",
            "五年级",
            "六年级",
            "七年级",
            "八年级",
            "九年级"
        ];
        // const itemStyle =
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
                bottom: "50",
                top: "15%"
            },
            yAxis: {
                name: "单位：min",
                type: "value",
                min:0,
                max: 80,
                nameTextStyle: {
                    padding: [20, 0, 20, 10]
                },
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
                    barWidth: 12,
                    data: [2, 3, 43, 52, 56, 58, 67, 72, 75],
                    type: "bar",
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
                                    color: "#0DFFFF" // 0% 处的颜色
                                },
                                {
                                    offset: 0.6,
                                    color: "#70BFFF" // 100% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: "#70BFFF" // 100% 处的颜色
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
