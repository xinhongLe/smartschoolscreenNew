<template>
    <module-header title="科目分布">
        <div class="ani_moudles_box">
            <img
                class="outside_border"
                src="../img/pic_bg_yuan@2x.png"
                alt=""
            />
            <div class="chart_bg">
                <echart class="chart-box" :options="options" height="40%" ref="echart"></echart>
                <div class="circle-bg"></div>
                <div class="rate-box">
                    <div
                        v-for="(item, index) in list"
                        :key="index"
                        :class="{ active: activeIndex == index ? true : false }"
                        class="circle"
                    >
                        <span>{{ item.count }}</span>
                        <span>{{ item.name }}</span>
                    </div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        class="svg-box"
                    >
                        <line
                        v-for="(item, index) in coordinateList" :key="index"
                            :x1="item.x"
                            :y1="item.y"
                            :x2="item.x1"
                            :y2="item.y1"
                            style="stroke: rgba(56, 110, 205, 1); stroke-width: 2"
                        />
                    </svg>
                </div>
            </div>
        </div>
    </module-header>
</template>
<script>
import moduleHeader from "@/components/moduleHeader.vue";
import Echart from "@/components/echart";
import * as echarts from "echarts";
export default {
    components: { moduleHeader, Echart },
    data() {
        return {
            options: {},
            list: [
                { name: "语文", count: 201982 },
                { name: "数学", count: 209867 },
                { name: "英语", count: 172043 },
                { name: "政治", count: 135645 },
                { name: "其他", count: 178944 },
                { name: "生物", count: 108962 },
                { name: "物理", count: 109841 },
                { name: "化学", count: 229845 },
                { name: "地理", count: 398770 },
                { name: "历史", count: 41354 }
            ],
            activeIndex: "",
            timer: null,
            coordinateList: []
        };
    },
    created() {
        this.$nextTick(() => {
            let doms = document.querySelectorAll(".circle");
            let x =
                document.querySelector(".rate-box").clientWidth / 2;
            let y =
                document.querySelector(".rate-box").clientHeight / 2;
                console.log(x,y)
            for (var i = 0; i < doms.length; i++) {
                console.log(doms[i])
                let y1 = doms[i].offsetTop + doms[i].offsetHeight / 2;
                let x1 = doms[i].offsetLeft + doms[i].offsetWidth / 2;
                console.log(doms[i].offsetTop,doms[i].offsetLeft)
                console.log(x1,y1)
                this.coordinateList.push({
                    x,
                    y,
                    x1,
                    y1
                })
            }
        });
    },
    mounted() {
        const options = {
            series: [
                {
                    name: "访问来源",
                    type: "pie",
                    radius: ["50%", "70%"],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            // normal 是图形在默认状态下的样式
                            show: true,
                            position: "center",
                            color: "#FFFFFF",
                            fontSize: 14,
                            formatter: "{c}\n{b}", // {b}:数据名； {c}：数据值； {d}：百分比，可以自定义显示内容，
                            rich: {
                                b: {
                                    fontSize: "14",
                                    fontWeight: "400",
                                    color: "#EDF2F8",
                                    lineHeight: "50"
                                },
                                C: {
                                    color: "#FFFFFF",
                                    fontSize: 14
                                }
                            }
                        }
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: "40",
                            fontWeight: "bold"
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        {
                            value: 1143,
                            name: "总量",
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0,
                                        0,
                                        0,
                                        1,
                                        [
                                            { offset: 0, color: "#70BFFF" },
                                            { offset: 0.8, color: "#0DFFFF" },
                                            { offset: 1, color: "#0DFFFF" }
                                        ]
                                    )
                                }
                            }
                        }
                    ]
                }
            ]
        };
        this.options = options;
    }
};
</script>
<style lang="scss" scoped>
.rate-box {
    width: 55%;
    height: 100%;
    // border: 1px solid rgba(25, 52, 88, 0.8);
    margin: auto;
    position: absolute;
    > div {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-radius: 50%;
        filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.35));
        width: 0.7rem;
        height: 0.7rem;
        background: linear-gradient(-135deg, #30a2fd 0%, #376ccb 100%);
        .num {
            margin: 0;
            color: #fff;
            text-align: center;
            display: block;
            font-size: 0.24rem;
            span:last-of-type {
                margin-left: -0.08rem;
            }
        }
        > span {
            color: #fff;
            display: block;
            text-align: center;
            font-size: 0.12rem;
        }
    }
    > div:nth-of-type(1) {
        left: 0rem;
        top: 1.3rem;
    }
    > div:nth-of-type(2) {
        left: 1.4rem;
        top: 0.8rem;
    }
    > div:nth-of-type(3) {
        left: 0.7rem;
        top: 2.6rem;
    }
    > div:nth-of-type(4) {
        left: 0.05rem;
        top: 3.5rem;
    }
    > div:nth-of-type(5) {
        left: 1.3rem;
        top: 4rem;
    }
    > div:nth-of-type(6) {
        right: 2.7rem;
        top: 0.8rem;
    }
    > div:nth-of-type(7) {
        right: 1rem;
        top: 1.1rem;
    }
    > div:nth-of-type(8) {
        right: 0.15rem;
        top: 2.2rem;
    }
    > div:nth-of-type(9) {
        right: 0.6rem;
        top: 3.5rem;
    }
    > div:nth-of-type(10) {
        right: 1.7rem;
        top: 4.2rem;
    }
    .active {
        filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.55));
    }
}
.ani_moudles_box {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.outside_border {
    height: 120%;
    position: absolute;
}
.chart_bg {
    width: 6.5rem;
    height: 100%;
    background: url("../img/pic_bg_yuan1@2x.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.svg-box {
    width: 100%;
    height: 100%;
}
.chart-box {
    position: relative;
    z-index: 2;
}
.circle-bg {
    width: 1.2rem;
    height: 1.2rem;
    background: rgb(12, 46, 60);
    position: absolute;
    border-radius: 1rem;
    top: 50%;
    transform: translateY(-30%);
    z-index: 1;
}
</style>