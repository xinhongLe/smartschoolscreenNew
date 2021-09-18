<template>
    <module-header title="成绩对比">
        <div class="tabItem">
            <div
                class="item"
                :class="activeIndex === index ? 'active' : ''"
                @click="changeIndex(index)"
                v-for="(item, index) in resultsTypeList"
                :key="index"
            >
                <span class="lableName">{{ item.lable }}</span>
            </div>
        </div>
        <div class="echart_box">
            <Echart :options="options" height="100%"></Echart>
        </div>
    </module-header>
</template>
<script>
import moduleHeader from "@/components/moduleHeader.vue";
import Echart from "@/components/echart";
export default {
    components: { moduleHeader, Echart },
    data() {
        return {
            activeIndex: 0,
            options: {},
            data: [],
            resultsTypeList: [
                {
                    lable: "平均分"
                },
                {
                    lable: "最低分"
                },
                {
                    lable: "最高分"
                },
                {
                    lable: "中位数"
                }
            ]
        };
    },
    mounted() {
        this.data = [92.3, 87.6, 80.5, 78.5];
        const options = {
            grid: {
                left: "3%",
                right: "4%",
                bottom: "2%",
                top: "20%",
                containLabel: true
            },
            xAxis: {
                type: "category",
                data: ["三年级", "四年级", "五年级", "六年级"],
                axisTick: {
                    show: false
                }
            },
            yAxis: {
                type: "value",
                name: "单位：分",
                nameTextStyle: {
                    color: "#96ACC3",
                    align: "center",
                    lineHeight: 40
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255, 255, 255, .1)"
                    }
                }
            },
            series: [
                {
                    data: this.data,
                    type: "bar",
                    label: {
                        show: true,
                        position: "top",
                        color: "#0DFFFF",
                        fontSize: 16
                    },
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
                                    color: "#0DFFFF" // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: "#70BFFF" // 100% 处的颜色
                                }
                            ],
                            global: false // 缺省为 false
                        }
                    },
                    barWidth: 24 //柱图宽度
                }
            ]
        };
        this.options = options;
    },
    methods: {
        changeIndex(index) {
            this.activeIndex = index;
            if (index === 0) {
                this.data = [92.3, 87.6, 80.5, 78.5];
            } else if (index === 1) {
                this.data = [87, 87, 45, 67];
            } else if (index === 2) {
                this.data = [56, 76, 86, 68];
            } else {
                this.data = [56, 76, 86, 67];
            }
        }
    }
};
</script>
<style lang="scss" scoped>
.tabItem {
    width: 100%;
    padding-left: 0.1rem;
    margin-top: 0.2rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    .item {
        width: 1rem;
        height: 0.35rem;
        margin-right: 0.1rem;
        border: 1px solid rgba(16, 163, 190, 0.23);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        // .lablenum {
        //   font-size: 0.175rem;
        //   color: #0dffff;
        //   display: block;
        // }
        .lableName {
            font-size: 0.125rem;
            color: #96acc3;
        }
    }
    .active {
        background: rgba(3, 86, 176, 0.31);
        border: 1px solid rgba(16, 163, 190, 0.23);
        color: #6fe5f7;
        white-space: nowrap;
    }
}
.echart_box {
    width: 100%;
    height: calc(100% - 1rem);
    // height: 100%;
    margin-top: 0.2rem;
}
</style>