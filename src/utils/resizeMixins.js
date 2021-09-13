// import { debounce } from "@/utils";

export default {
    data() {
        // 在组件内部将图表 init 的引用映射到 chart 属性上
        return {
            chart: null
        };
    },
    created() {
        window.addEventListener("resize", this.resizeChart, false);
    },
    activated() {
        // 防止 keep-alive 之后图表变形
        if (this.chart) {
            this.chart.resize();
        }
    },
    beforeDestroy() {
        window.removeEventListener("reisze", this.resizeChart);
    },
    methods: {
        // 防抖函数来控制 resize 的频率
        // resizeChart: debounce(function () {
        //     if (this.chart) {
        //         this.chart.resize();
        //     }
        // }, 300),
        resizeChart: (function () {
            if (this.chart) {
                this.chart.resize();
            }
        }, 300)
    }
};
