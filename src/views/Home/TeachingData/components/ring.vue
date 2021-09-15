<template>
    <div class="ring-box">
        <echart :options="options" width="0.6rem" height="0.6rem"></echart>
        <echart :options="options1" width="0.4rem" height="0.4rem" style="margin-top: 0.1rem; margin-left: -.5rem"></echart>
        <div class="num-box">
            <CountTo
                ref="example2"
                class="num"
                :style="{color: color}"
                :start-val="0"
                :end-val="count"
                :duration="3000"
            ></CountTo>
            <span :style="{color: color}">%</span>
            <slot></slot>
        </div>
    </div>
</template>

<script>
import Echart from "../../../../components/echart";
import CountTo from "vue-count-to";
export default {
    name: "ring",
    props: {
        type: {},
        count: {}
    },
    components: {
        Echart,
        CountTo
    },
    data() {
        return {
            options: {},
            options1: {},
            color: ""
        };
    },
    mounted() {
        // setInterval(() => {
        //   this.options.xAxis.data = this.echartsData.map(item => item[0])
        //   this.options.series.data = this.echartsData.map(item => item[1])
        // },5000)
        let color = "";
        let lightColor = "";
        let mColor = "";
        if(this.type == 1) {
            color = "rgba(6, 236, 154, .1)";
            mColor = "rgba(6, 236, 154, .2)";
            lightColor = "rgba(6, 236, 154, 1)";
            this.color = lightColor;
        }else{
            color = "rgba(250, 74, 79, .1)";
            mColor = "rgba(250, 74, 79, .2)";
            lightColor = "rgba(250, 74, 79, 1)"
            this.color = lightColor;
        }
        const options = {
            // animationDuration: 10000,
            series: [
                {
                    type: "pie",
                    radius: ["63%", "70%"],
                    avoidLabelOverlap: false,
                    label: {
                        show: false
                    },
                    markLine: {
                        show: false
                    },
                    hoverAnimation: false,
                    data: [
                        {
                            value: 100 - this.count,
                            itemStyle: {
                                color: color
                            }
                        },
                        {
                            value: this.count,
                            itemStyle: {
                                color: {
                                    type: "linear",
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [
                                        {
                                            offset: 0,
                                            color: lightColor // 0% 处的颜色
                                        },
                                        {
                                            offset: 1,
                                            color: color // 100% 处的颜色
                                        }
                                    ],
                                    globalCoord: false // 缺省为 false
                                }
                            }
                        }
                    ]
                }
            ]
        };
        const options1 = {
            // animationDuration: 10000,
            series: [
                {
                    type: "pie",
                    avoidLabelOverlap: false,
                    label: {
                        show: false
                    },
                    markLine: {
                        show: false
                    },
                    hoverAnimation: false,
                    data: [
                        {
                            value: 100 - this.count,
                            itemStyle: {
                                color: color
                            }
                        },
                        {
                            value: this.count,
                            itemStyle: {
                                color: mColor
                            }
                        }
                    ]
                }
            ]
        };
        // this.options.xAxis.data = this.echartsData.map(item => item[0])
        // this.options.series.data = this.echartsData.map(item => item[1])
        this.options = options;
        this.options1 = options1;
    }
};
</script>

<style scoped lang="scss">
.ring-box {
    height: 0.6rem;
    display: flex;
    .num-box {
        margin-left: 0.175rem;
        margin-top: 0.0625rem;
        .num, span {
            font-size: .25rem;
            color: #07E99A;
            line-height: .3rem;
        }
        span:nth-of-type(2) {
            margin-left: -.06rem;
        }
        >p {
            font-size: 0.125rem;
            color: #96ACC3;
            line-height: 0.25rem;
            margin: 0;
        }
    }
}
</style>