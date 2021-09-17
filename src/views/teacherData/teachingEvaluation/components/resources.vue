<template>
    <moduleHeader title="在线资源评价分布">
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
        const option = {
            grid: {
                left: "50",
                right: "0%",
                bottom: "50",
                top: "15%"
            },
            radar: {
                // shape: 'circle',
                indicator: [
                    { name: '5星', max: 1000},
                    { name: '4星', max: 1000},
                    { name: '3星', max: 1000},
                    { name: '2星', max: 1000},
                    { name: '1星', max: 1000}
                ],
                name: {
                    color: "#96ACC3"
                },
                splitLine: {
                    lineStyle: {
                        color: "#96ACC3"
                    }
                },
                splitArea: {
                    areaStyle: {
                        color: "red"
                    }
                }
            },
            series: [
                {
                    barWidth: 12,
                    data: [{value:[500, 378, 39, 375, 899]}],
                    type: "radar",
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
