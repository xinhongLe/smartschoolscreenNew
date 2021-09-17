<template>
    <module-header title="知识点覆盖率">
        <p class="title">校综合覆盖率： <span> 63%</span><p>
        <div ref="ani" class="circle"></div>
        <!-- <div class="circle circle1">
            <echart :options="options" width="100%" height="100%"></echart>
        </div> -->
        <div class="tools">
            <div
                class="item"
                :class="activeIndex === index ? 'active' : ''"
                @click="changeIndex(index)"
                v-for="(item, index) in list"
                :key="index"
            >
                <span class="lableName">{{ item.name }}</span>
            </div>
        </div>
    </module-header>
</template>

<script>
import ModuleHeader from "@/components/moduleHeader";
// import Echart from "@/components/echart";
import lottie from "lottie-web";
export default {
    components: {
        ModuleHeader,
        // Echart
    },
    data() {
        return {
            options: {},
            activeIndex: 0,
            list: [{name: "一年级", num: 1},{name: "二年级", num: 1},{name: "三年级", num: 1},{name: "四年级", num: 1},{name: "五年级", num: 1},{name: "六年级", num: 1}]
        }
    },
    mounted() {
        this.$nextTick(() => {
            const animationData = require(`/public/jsonAnimation/rightSatisfaction/data.json`);
            this.animation = lottie.loadAnimation({
                container: this.$refs.ani,
                renderer: "svg",
                loop: true,
                autoplay: true,
                animationData: animationData
            });
        });
        const options = {
            // animationDuration: 10000,
            tooltip: {
                trigger: "axis"
            },
            grid: {
                left: "30px",
                right: "0%",
                bottom: "30px"
            },
            xAxis: {
                data: this.echartsData.map((item) => item[0]),
                axisLine: {
                    lineStyle: {
                        color: "#96ACC3"
                    }
                }
            },
            yAxis: {
                name: "百分比",
                axisLine: {
                    lineStyle: {
                        color: "#96ACC3"
                    }
                }
            },
            visualMap: {
                top: 100,
                right: 10,
                pieces: [
                    {
                        gt: 0,
                        lte: 20,
                        color: "#EF3B3B"
                    },
                    {
                        gt: 20,
                        lte: 40,
                        color: "#FEFD00"
                    },
                    {
                        gt: 40,
                        lte: 60,
                        color: "#30A2FD"
                    },
                    {
                        gt: 60,
                        lte: 80,
                        color: "#0DFFFF"
                    },
                    {
                        gt: 80,
                        lte: 100,
                        color: "#0DFF60"
                    }
                ],
                show: false
            },
            series: {
                name: "满意度",
                type: "line",
                data: this.echartsData.map((item) => item[1])
            }
        };
        this.options = options;
    },

    beforeDestroy() {
        this.animation.destroy();
    }
};
</script>

<style scoped lang="scss">
.title {
    font-size: 12px;
    color: #96ACC3;
    span {
        color: #0DFFFF;
        font-size: .25rem;
    }
}
.circle {
    position: absolute;
    width: 2rem;
    left: 0;
    right: 0;
    top: 1rem;
    margin: auto;
}
.circle1 {
    width: 66%;
    background: red;
}
.tools {
    margin-top: 3rem;
    width: 100%;
    margin-bottom: 0.2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .item {
        flex: 0 0 26%;
        height: 0.4rem;
        margin-bottom: .25rem;
        box-sizing: border-box;
        border: 1px solid rgba(16, 163, 190, 0.23);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        .lableName {
            font-size: 0.125rem;
            font-weight: 500;
            color: #70bfff;
        }
    }
    item:nth-of-type(3n) {
        margin-right: 0;
    }
    .active {
        background: rgba(3, 86, 176, 0.31);
        border: 1px solid rgba(16, 163, 190, 0.23);
    }
}
</style>