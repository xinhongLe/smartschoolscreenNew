<template>
    <Flex>
        <Flex :flex="1">
            <module-header title="安防基础建设">
                <Flex :flex="1" :column="true">
                    <Flex :flex="1">
                        <echart
                            :options="options"
                            width="100%"
                            height="100%"
                        ></echart>
                    </Flex>
                    <div class="footer">
                        <div>
                            <p>
                                达标学校(所) <span class="text-blue">1629</span>
                            </p>
                            <p>未达标(所) <span class="text-pink">89</span></p>
                        </div>
                    </div>
                </Flex>
            </module-header>
        </Flex>
        <div class="h-line"></div>
        <Flex :flex="1">
            <module-header title="应急演练情况">
                <Flex :flex="1" :column="true">
                    <Flex :flex="1">
                        <echart
                            :options="option"
                            width="100%"
                            height="100%"
                        ></echart>
                    </Flex>
                    <div class="footer">
                        <div>
                            <p>
                                达标学校(所) <span class="text-blue">1718</span>
                            </p>
                            <p>
                                演练学校(所) <span class="text-gree">89</span>
                            </p>
                            <p>
                                演练总数(次) <span class="text-pink">172</span>
                            </p>
                        </div>
                    </div>
                </Flex>
            </module-header>
        </Flex>
    </Flex>
</template>

<script>
import Flex from "@/components/flex";
import ModuleHeader from "@/components/moduleHeader";
import Echart from "@/components/echart";
export default {
    name: "rightSchool",
    components: {
        Echart,
        ModuleHeader,
        Flex
    },
    data() {
        return {
            options: {},
            option: {}
        };
    },
    mounted() {
        const options = {
            tooltip: {
                trigger: "axis"
            },
            radar: {
                name: {
                    textStyle: {
                        color: "#96ACC3",
                        fontSize: 12
                    },
                    lineHeight: -10,
                     padding:[0,0,0,10]
                },
                indicator: [
                    {
                        name: "报警",
                        max: 1000,
                        axisLabel: { show: true, fontSize: 12 }
                    },
                    { name: "人防", max: 1000 },
                    { name: "物防", max: 1000 },
                    { name: "广播次数", max: 1000 },
                    { name: "监控", max: 1000 }
                ],
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 1,
                        color: ["rgba(25, 52, 88, 0.8)"]
                    }
                },
                splitArea: {
                    show: true,
                    areaStyle: {
                        color: ["#000916"]
                        // 图表背景网格的颜色
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        width: 1,
                        color: ["rgba(25, 52, 88, 0.8)"]
                        // 图表背景网格线的颜色
                    }
                }
            },
            series: [
                {
                    name: "",
                    type: "radar",
                    tooltip: {
                        trigger: "item"
                    },
                    data: [
                        {
                            value: [500, 150, 50, 400, 1000],
                            name: "实际值",
                            itemStyle: {
                                color: "#5bffff"
                            },
                            areaStyle: {
                                color: "rgba(99 255 255)",
                                opacity: 0.6
                            }
                        }
                    ]
                }
            ]
        };

        this.options = options;
        const option = {
            // title: [
            //     {
            //         text: "{name|" + "42%" + "}",
            //         top: "center",
            //         left: "center",
            //         borderWidth: 1,
            //         borderColor: "#142e52",
            //         // backgroundColor:'rgba(20, 46, 82, 0.7)',
            //         padding: [38, 20, 33, 16],
            //         borderRadius: 50,
            //         textStyle: {
            //             rich: {
            //                 name: {
            //                     width: 100,
            //                     height: 200,
            //                     fontSize: 30,
            //                     marginLeftL:'10px',
            //                     fontWeight: "bold",
            //                     color: "#ffffff"
            //                 }
            //             }
            //         }
            //     }
            // ],
            series: [
              {
                type: 'pie',
                animation: false,
                color: ["rgba(20,46,82,0.4)"],
                selectedMode: 'single',
                radius: [0, '50%'],
                label: {
                  position: 'center',
                  fontSize: 14,
                },
                labelLine: {
                  show: true
                },
                itemStyle:{
                  borderColor: 'rgba(25, 52, 88, 0.8)'
                },
                data: [
                  {value: 1548, name: '42%', label:{color: '#fff'}},
                ]
              },
                {
                    name: "访问来源",
                    type: "pie",
                    radius: ["60%", "75%"],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: "center"
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
                            value: 58,
                            itemStyle: { color: "rgba(38, 215, 255, 0.3)" }
                        },
                        {
                            value: 42,
                            itemStyle: { color: "rgba(13, 255, 255, 1)" }
                        }
                    ]
                }
            ]
        };
        this.option = option;
    }
};
</script>

<style scoped lang="scss">
.h-line {
    width: 0.4rem;
}
.footer {
    display: flex;
    justify-content: center;
    width: 100%;
    color: #96acc3;
    text-align: center;
    padding-top: 0.2rem;
    p {
        margin: 0 0 0.1rem;
        text-align: left;
    }
    .text-blue {
        margin-left: 0.2rem;
        color: #0dffff;
    }
    .text-gree {
        margin-left: 0.2rem;
        color: #07e99a;
    }
    .text-pink {
        margin-left: 0.15rem;
        color: #c127d1;
    }
}
</style>