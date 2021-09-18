<template>
    <module-header title="知识点覆盖率">
        <p class="title">校综合覆盖率： <span> 63%</span></p>
        <p></p>
        <div class="circle">
            <echart :options="options" width="100%" height="100%"></echart>
            <div class="text">
                <span>{{ list[activeIndex].num }}<i>%</i></span>
                <span>覆盖率</span>
            </div>
        </div>
        <div class="tools">
            <div
                class="item"
                :class="activeIndex === index ? 'active' : ''"
                @click="change(index)"
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
import Echart from "@/components/echart";
export default {
    components: {
        ModuleHeader,
        Echart
    },
    data() {
        return {
            options: {},
            activeIndex: 0,
            list: [
                { name: "一年级", num: 57 },
                { name: "二年级", num: 34 },
                { name: "三年级", num: 56 },
                { name: "四年级", num: 49 },
                { name: "五年级", num: 76 },
                { name: "六年级", num: 64 }
            ]
        };
    },
    mounted() {
        const options = {
            tooltip: {
                trigger: "item"
            },
            series: [
                {
                    type: "pie",
                    color: ["rgba(20,46,82,0.4)"],
                    selectedMode: "single",
                    radius: ["47%", "50%"],
                    label: {
                        position: "center",
                        fontSize: 14
                    },
                    itemStyle: {
                        borderColor: "rgba(25, 52, 88, 0.1)",
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
                    data: [
                        {
                            value: this.list[this.activeIndex].num,
                            label: {
                                color: "#fff",
                                shadowColor: "rgba(3, 86, 176, 0.1)"
                            },
                            itemStyle: {
                                borderColor: "rgba(25, 52, 88, 0.1)",
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
                            }
                        },
                        {
                            value: 100 - this.list[this.activeIndex].num,
                            label: {
                                color: "#fff",
                                shadowColor: "rgba(3, 86, 176, 0.1)"
                            },
                            itemStyle: {
                                borderColor: "rgba(25, 52, 88, 0.1)",
                                color: {
                                    type: "linear",
                                    x: 0,
                                    y: 0,
                                    x2: 1, //从左到右
                                    y2: 0,
                                    colorStops: [
                                        {
                                            offset: 0,
                                            color: "rgba(0,0,0,0)" // 0% 处的颜色
                                        },
                                        {
                                            offset: 1,
                                            color: "rgba(0,0,0,0)" // 100% 处的颜色
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
        this.options = options;
    },
    methods: {
        change(index) {
            this.activeIndex = index;
            this.options.series[0].data[0].value = this.list[index].num
            this.options.series[0].data[1].value = 100 - this.list[index].num
            this.options = JSON.parse(JSON.stringify(this.options))
        }
    }
};
</script>

<style scoped lang="scss">
.title {
    font-size: 12px;
    color: #96acc3;
    span {
        color: #0dffff;
        font-size: 0.25rem;
    }
}
.circle {
    position: absolute;
    width: 2.7rem;
    height: 2.7rem;
    background: url("./img/pic_bg@2x.png");
    background-size: cover;
    left: 0;
    right: 0;
    top: 1.2rem;
    margin: auto;
}
.text {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        margin: auto;
        width: 1rem;
        height: 1rem;
        bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        span:nth-of-type(1) {
            font-size: 0.4rem;
            i {
                font-style: normal;
                font-size: .2rem;
            }
        }
        &:after {
            content: "";
            left: 0;
            top: 0;
            bottom: 0;
            right: 0;
            margin: auto;
            z-index: -1;
            width: .6rem;
            height: .6rem;
            position: absolute;
            background: #142E52;
            filter: blur(14.4px);
        }
        span:nth-of-type(2) {
            font-size: 12px;
        }
    }
.tools {
    margin-top: 3.3rem;
    width: 100%;
    margin-bottom: 0.2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .item {
        flex: 0 0 25.01%;
        height: 0.4rem;
        margin-bottom: 0.25rem;
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