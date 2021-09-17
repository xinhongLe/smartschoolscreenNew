<template>
    <div
        :id="id"
        :class="className"
        :style="{ height: height, width: width }"
    />
</template>

<script>
import resizeMixins from "@/utils/resizeMixins";

export default {
    name: "echart",
    mixins: [resizeMixins],
    props: {
        className: {
            type: String,
            default: "chart"
        },
        id: {
            type: String,
            default: "chart"
        },
        width: {
            type: String,
            default: "100%"
        },
        height: {
            type: String,
            default: "2.5rem"
        },
        options: {
            type: Object,
            default: () => ({})
        },
        animation: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            chart: null,
            timer: null
        };
    },
    watch: {
        options: {
            handler(options) {
                // 设置true清空echart缓存
                this.chart && this.chart.setOption(options, true);
            },
            deep: true
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.initChart();
        })

        if (this.animation) {
            this.timer = setInterval(() => {
                this.initChart(); //你获取echarts数据的方法
            }, 6000);
        }
        
        this.$once("hook:beforeDestroy", () => {
            clearInterval(this.timer);
        });
    },
    methods: {
        initChart() {
            // 初始化echart
            this.chart = this.$echarts.init(this.$el);
            this.chart.clear();
            this.chart.setOption(this.options, true);
        }
    }
};
</script>

<style>
</style>
