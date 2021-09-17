<template>
    <moduleHeader title="知识点掌握情况">
        <div class="situation-box">
            <Echart width="100%" height="100%" :options="options"></Echart>
            <slot></slot>
        </div>
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
            "09-01",
            "09-02",
            "09-03",
            "09-04",
            "09-05",
            "09-06"
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
            },
            yAxis: {
                name: "单位：min",
                type: "value",
                min:0,
                max: 90,
                splitNumber: 3,
                nameTextStyle: {
                    padding: [0, 0, 20, 10]
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
                    data: [28, 38, 45, 99, 45, 11],
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
.situation-box {
    width: 100;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}
</style>
