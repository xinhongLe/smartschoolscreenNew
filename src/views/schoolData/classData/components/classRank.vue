<template>
    <ModuleHeader autoHeight title="班级排行">
        <div class="v-line"></div>
        <div class="echart-box">
            <echart :options="options" height="100%" width="100%"></echart>
        </div>
        <div class="v-line"></div>
        <div class="rank-item" v-for="(item, index) in rankList" :key="index"> 
            <div class="rank-sort" :class="['red', 'yellow', 'blue'][index] || ''">
                No.{{index + 1}}
            </div>
            <div class="rank-message">
                <div class="rank-grade">
                    {{item.grade}}
                </div>
                <div class="rank-name">
                    <div class="rank-label">班主任:</div>
                    {{item.name}}
                </div>
                <div class="rank-num">
                    <div class="rank-label">师生人数:</div>
                    {{item.num}}人
                </div>
            </div>
            <div class="rank-score">
                <div class="score-text">
                    {{item.score}}
                </div>
                综合评分（分）
            </div>
        </div>
        <div class="v-line"></div>
    </ModuleHeader>
</template>

<script>
import ModuleHeader from "@/components/moduleHeader";
import Echart from "@/components/echart";
import * as echarts from "echarts";
export default {
    components: {
        Echart,
        ModuleHeader
    },

    data() {
        return {
            options: {},
            rankList: [
                {
                    grade: "一年级三班",
                    name: "李老师",
                    num: 59,
                    score: 98.3
                },

                {
                    grade: "一年级二班",
                    name: "欧阳师",
                    num: 52,
                    score: 97.1
                },

                {
                    grade: "一年级五班",
                    name: "王老师",
                    num: 48,
                    score: 96.9
                },

                {
                    grade: "一年级七班",
                    name: "周老师",
                    num: 48,
                    score: 92.1
                },

                {
                    grade: "一年级一班",
                    name: "吴老师",
                    num: 49,
                    score: 91.2
                }
            ]
        };
    },

    mounted() {
        this.options = {
            legend: {
                selectedMode: false,
                show: true,
                right: 0,
                top: "center",
                width: "60%",
                icon: "circle",
                formatter: function (name) {
                    const arr = name.split("|");
                    return arr[0] + "\n\n" + `{text|${arr[1]}%}`;
                },
                textStyle: {
                    color: "#96ACC3",
                    fontSize: 14,
                    padding: [25, 0, 0, 2],
                    rich: {
                        text: {
                            color: "#ffffff"
                        }
                    }
                }
            },
            series: [
                {
                    name: "面积模式",
                    type: "pie",
                    radius: ["56%", "75%"],
                    center: ["20%", "50%"],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: true,
                            position: "center",
                            color: "#ffffff",
                            formatter:
                                "{text|评价}" + "\n\r\n\r" + "{text|维度}",
                            rich: {
                                text: {
                                    fontSize: 22,
                                    fontFamily: "微软雅黑",
                                    color: "#ffffff"
                                }
                            }
                        },
                        emphasis: {
                            //中间文字显示
                            show: true
                        }
                    },
                    animation: true, //经常动画
                    hoverAnimation: false, //鼠标移入不放大
                    itemStyle: {
                        borderWidth: 5,
                        borderColor: "#000",
                        borderRadius: 0
                    },
                    data: [
                        {
                            value: 30,
                            name: "学业数据|30",
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0.2,
                                        0.4,
                                        0.8,
                                        1,
                                        [
                                            { offset: 0, color: "#70BFFF" },
                                            { offset: 0.8, color: "#0DFFFF" },
                                            { offset: 1, color: "#0DFFFF" }
                                        ]
                                    )
                                }
                            }
                        },
                        {
                            value: 25,
                            name: "教学管理|25",
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0.2,
                                        0.4,
                                        0.8,
                                        1,
                                        [
                                            { offset: 0, color: "#30A2FDFF" },
                                            { offset: 0.6, color: "#376CCBFF" },
                                            { offset: 1, color: "#376CCBFF" }
                                        ]
                                    )
                                }
                            }
                        },
                        {
                            value: 15,
                            name: "班级活动|15",
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0,
                                        0.4,
                                        0.8,
                                        1,
                                        [
                                            { offset: 0, color: "#FC5AD3FF" },
                                            { offset: 0.9, color: "#B921D0FF" },
                                            { offset: 1, color: "#B921D0FF" }
                                        ]
                                    )
                                }
                            }
                        },
                        {
                            value: 15,
                            name: "班级卫生|15",
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0.1,
                                        1,
                                        1,
                                        1,
                                        [
                                            { offset: 0, color: "#FFFF00FF" },
                                            { offset: 0.9, color: "#DBB001FF" },
                                            { offset: 1, color: "#DBB001FF" }
                                        ]
                                    )
                                }
                            }
                        },
                        {
                            value: 15,
                            name: "班级纪律|15",
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0,
                                        0.2,
                                        0.8,
                                        1,
                                        [
                                            { offset: 0, color: "#A962F3FF" },
                                            { offset: 0.9, color: "#A962F3FF" },
                                            { offset: 1, color: "#7833E2FF" }
                                        ]
                                    )
                                }
                            }
                        }
                    ]
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

.echart-box {
    height: 3rem;
}

.rank-item {
    display: flex;
    align-items: center;
    border: 0.0175rem solid rgba(16, 163, 190, 0.23);
    margin-bottom: .1rem;
    height: 1rem;
}

.rank-sort {
    width: 1rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(3, 86, 176, 0.13);
    font-size: .25rem;
    font-weight: 600;
    color: rgba(112, 191, 255, 1);
}

.rank-sort.red {
    color: rgba(250, 74, 79, 1);
}

.rank-sort.yellow {
    color: rgba(255, 208, 29, 1);
}

.rank-sort.blue {
    color: rgba(13, 255, 255, 1);
}

.rank-message {
    flex: 1;
    padding: .1rem .3rem;
}

.rank-grade {
    font-size: .175rem;
    font-weight: 600;
    color: #ffffff;
}

.rank-name, .rank-num {
    color: #ffffff;
    font-size: .15rem;
    display: flex;
    margin-top: .05rem;
}

.rank-label {
    color: rgba(255, 255, 255, 0.5);
    margin-right: .1rem;
}

.score-text {
    font-size: 0.3rem;
    font-weight: 600;
    color: rgba(13, 255, 255, 1);
}

.rank-score {
    color: rgba(255, 255, 255, 1);
    font-size: .15rem;
    text-align: center;
    padding-right: .2rem;
}
</style>