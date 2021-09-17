<template>
    <ModuleHeader title="学生日常行为">
        <div class="behavior-box">
            <div class="title-box">
                <div
                    @click="activeIndex = index"
                    :class="[
                        'title',
                        activeIndex === index ? 'title-active' : ''
                    ]"
                    v-for="(item, index) in titleList"
                    :key="index"
                >
                    {{ item.name }}
                </div>
            </div>
            <div class="behavior-content">
                <echart
                    :options="options"
                    height="100%"
                    width="100%"
                    ref="echart"
                ></echart>
            </div>
            <div class="v-line"></div>
        </div>
    </ModuleHeader>
</template>

<script>
import ModuleHeader from "@/components/moduleHeader";
import Echart from "@/components/echart";
export default {
    components: {
        ModuleHeader,
        Echart
    },

    data() {
        return {
            activeIndex: 0,
            titleList: [
                { name: "学习态度" },
                { name: "课堂表现" },
                { name: "作业完成情况" },
                { name: "自我管控能力" }
            ],
            options: {}
        };
    },

    mounted() {
        this.options = {
            tooltip: {
                trigger: "axis"
            },
            grid: {
                left: "50",
                right: "0%",
                bottom: "50"
            },
            xAxis: {
                data: [
                    "第10周 \n 2021年上学期",
                    "第11周 \n 2021年上学期",
                    "第12周 \n 2021年上学期",
                    "第13周 \n 2021年上学期",
                    "第14周 \n 2021年上学期"
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
                nameTextStyle: {
                    padding: [0, 0, 30, -10]
                },
                axisLine: {
                    lineStyle: {
                        color: "#96ACC3"
                    }
                },
                axisLabel: {
                    margin: 20
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255, 255, 255, .1)"
                    }
                },
                max: 100,
                min: 0,
                splitNumber: 5
            },
            series: [
                {
                    type: "line",
                    data: [70, 20, 82, 49, 60],
                    symbol: "none",
                    lineStyle: {
                        width: 2,
                        color: {
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 1, //从左到右
                            y2: 0,
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
                            globalCoord: false // 缺省为 false
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: {
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: "rgba(13, 255, 255, .3)" // 0% 处的颜色
                                    },
                                    {
                                        offset: .8,
                                        color: "rgba(13, 255, 255, 0)" // 100% 处的颜色
                                    }
                                ],
                                globalCoord: false // 缺省为 false
                            }
                        }
                    }
                }
            ]
        };
    }
};
</script>

<style scoped>
.v-line {
    height: 0.4rem;
}

.title-box {
    display: flex;
    justify-content: flex-start;
    margin: 0.2rem 0.1rem;
}

.title-box .title {
    color: #fff;
    padding: 0.08rem 0.15rem;
    border: 1px solid rgba(16, 163, 190, 0.23);
    margin-right: 0.2rem;
    cursor: pointer;
}

.title-active {
    background: rgba(3, 86, 176, 0.31);
}

.behavior-box {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.behavior-content {
    flex: 1;
    min-height: 0;
}
</style>