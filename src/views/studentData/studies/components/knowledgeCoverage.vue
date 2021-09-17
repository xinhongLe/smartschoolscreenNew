<template>
    <ModuleHeader title="知识点覆盖率">
        <div class="coverage-box">
            <div class="chart-box">
                <echart
                    :options="options"
                    height="100%"
                    width="100%"
                    :animation="false"
                ></echart>
            </div>
            <div class="coverage-list">
                <div
                    class="coverage-item"
                    :class="selected == index && 'active'"
                    v-for="(item, index) in list"
                    :key="index"
                    @click="selectCoverage(index)"
                >
                    {{ item.name }} <span>{{ item.value }}%</span>
                </div>
            </div>
        </div>
    </ModuleHeader>
</template>

<script>
import ModuleHeader from "@/components/moduleHeader";
import Echart from "@/components/echart";
// import * as echarts from "echarts";
export default {
    components: {
        ModuleHeader,
        Echart
    },

    data() {
        return {
            options: {},
            selected: 0,
            timer: null,
            list: [
                {
                    name: "综合覆盖率",
                    value: 43
                },

                {
                    name: "一年级",
                    value: 68
                },

                {
                    name: "二年级",
                    value: 63
                },

                {
                    name: "三年级",
                    value: 58
                },

                {
                    name: "四年级",
                    value: 24
                },

                {
                    name: "五年级",
                    value: 39
                },

                {
                    name: "六年级",
                    value: 56
                },

                {
                    name: "七年级",
                    value: 48
                },

                {
                    name: "八年级",
                    value: 23
                },

                {
                    name: "九年级",
                    value: 34
                }
            ]
        };
    },

    mounted() {
        this.selectCoverage(0);

        this.timer = setInterval(() => {
            this.selectCoverage(this.selected < this.list.length - 1 ? this.selected + 1 : 0);
        }, 6000);
    },

    beforeDestroy() {
        clearInterval(this.timer);
    },

    methods: {
        selectCoverage(i) {
            this.selected = i;
            const obj = this.list[i];
            this.options = {
                series: [
                    {
                        type: "pie",
                        radius: ["45%", "55%"],
                        selectedMode: false,
                        label: {
                            normal: {
                                show: true,
                                position: "center",
                                color: "#ffffff",
                                formatter: function (params) {
                                    return (
                                        "{value|" +
                                        (params.name == "value"
                                            ? params.value
                                            : 100 - params.value) +
                                        "%}" +
                                        "\n\r\n\r" +
                                        "{text|" + obj.name + "}"
                                    );
                                },
                                rich: {
                                    text: {
                                        fontSize: 18,
                                        color: "#ffffff"
                                    },
                                    value: {
                                        fontSize: 38,
                                        color: "#0DFFFF",
                                        fontWeight: 600
                                    }
                                }
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        itemStyle: {
                            borderColor: "rgba(25, 52, 88, 0.8)"
                        },
                        data: [
                            {
                                value: obj.value,
                                name: "value",
                                itemStyle: { color: "#0DFFFF" }
                            },
                            {
                                value: 100 - obj.value,
                                itemStyle: {
                                    color: "transparent",
                                    borderColor: "transparent"
                                }
                            }
                        ]
                    }
                ]
            };
        }
    }
};
</script>

<style scoped>
.v-line {
    height: 0.4rem;
}

.coverage-box {
    display: flex;
    height: 100%;
}

.chart-box {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 0.4rem 0.2rem;
    box-sizing: border-box;
}

.coverage-list {
    width: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0.1rem 0;
}

.coverage-item {
    box-sizing: border-box;
    border: 0.0175rem solid rgba(16, 163, 190, 0.23);
    padding: 0.06rem 0.1rem;
    color: rgba(150, 172, 195, 1);
    font-style: 0.175rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    position: relative;
}

.coverage-item.active {
    border-color: rgba(13, 255, 255, 1);
}

.coverage-item.active:before,
.coverage-item.active:after {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}

.coverage-item.active:before {
    border: 0.05rem solid;
    border-color: transparent #0dffff transparent transparent;
    left: -0.12rem;
}

.coverage-item.active:after {
    border: 0.12rem solid;
    border-color: transparent #0dffff transparent transparent;
    opacity: 0.5;
    left: -0.25rem;
}

.coverage-item span {
    font-size: 0.2rem;
    font-weight: 600;
    color: rgba(112, 191, 255, 1);
}
</style>