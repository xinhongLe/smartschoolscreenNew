<template>
    <ModuleHeader title="学生综合评价">
        <div class="v-line"></div>
        <div class="tools" style="justify-content: start">
            <div
                class="item"
                :class="activeIndex === index ? 'active' : ''"
                @click="changeIndex(index)"
                v-for="(item, index) in tab"
                :key="index"
            >
                <span class="lableName">{{ item.title }}</span>
            </div>
        </div>
        <div class="evaluate-box">
            <div class="chart-img-box">
                <img class="tree-img" src="./imgs/pic_sangjitu@2x.png" alt="">
            </div>
        </div>
        <div class="v-line"></div>
         <div class="tools">
            <div
                class="item"
                :class="activeIndex1 === index ? 'active' : ''"
                @click="changeIndex(index)"
                v-for="(item, index) in teachingHotList"
                :key="index"
            >
                <span class="lableName">{{ item.title }}</span>
            </div>
        </div>
        <div class="schoolData">
            <div
                class="progressitem"
                v-for="item in progressList"
                :key="item.id"
            >
                <ProgressB :proData="item" :ratioNum="5000"></ProgressB>
            </div>
        </div>
        <div class="v-line"></div>
    </ModuleHeader>
</template>

<script>
import ModuleHeader from "@/components/moduleHeader";
import ProgressB from "@/components/ProgressB.vue";
export default {
    components: {
        ModuleHeader,
        ProgressB
    },
    data() {
        return {
            tab: [{title: "综合素质评价体系"},{title: "综合评价指标对比"}],
            activeIndex: 0,
            teachingHotList: [
                {
                    title: "思想品德",
                    progressData: [
                        {
                            name: "*苏区",
                            progressNum: 4323,
                            id: 9
                        },
                        {
                            name: "**园区",
                            progressNum: 4102,
                            id: 10
                        },
                        {
                            name: "*中区",
                            progressNum: 3827,
                            id: 11
                        },
                        {
                            name: "*城区",
                            progressNum: 2112,
                            id: 12
                        }
                    ]
                },
                {
                    title: "学业水平",
                    progressData: [
                       {
                            name: "*苏区",
                            progressNum: 3323,
                            id: 1
                        },
                        {
                            name: "**园区",
                            progressNum: 2102,
                            id: 2
                        },
                        {
                            name: "*中区",
                            progressNum: 1127,
                            id: 3
                        },
                        {
                            name: "*城区",
                            progressNum: 912,
                            id: 4
                        }
                    ]
                },
                {
                    title: "身心健康",
                    progressData: [
                       {
                            name: "*苏区",
                            progressNum: 2323,
                            id: 1
                        },
                        {
                            name: "**园区",
                            progressNum: 2102,
                            id: 2
                        },
                        {
                            name: "*中区",
                            progressNum: 1827,
                            id: 3
                        },
                        {
                            name: "*城区",
                            progressNum: 1112,
                            id: 4
                        }
                    ]
                },
                {
                    title: "艺术素养",
                    progressData: [
                       {
                            name: "*苏区",
                            progressNum: 3323,
                            id: 1
                        },
                        {
                            name: "**园区",
                            progressNum: 2102,
                            id: 2
                        },
                        {
                            name: "*中区",
                            progressNum: 1127,
                            id: 3
                        },
                        {
                            name: "*城区",
                            progressNum: 912,
                            id: 4
                        }
                    ]
                },
                {
                    title: "社会实践",
                    progressData: [
                       {
                            name: "*苏区",
                            progressNum: 2323,
                            id: 1
                        },
                        {
                            name: "**园区",
                            progressNum: 2102,
                            id: 2
                        },
                        {
                            name: "*中区",
                            progressNum: 1827,
                            id: 3
                        },
                        {
                            name: "*城区",
                            progressNum: 1112,
                            id: 4
                        }
                    ]
                }
            ],
            progressList: [],
            activeIndex1: 0,
        }
    },
    mounted() {
        this.progressList = this.teachingHotList[0].progressData;
    },
    methods: {
        changeIndex(index) {
            this.activeIndex1 = index;
            this.progressList = this.teachingHotList[index].progressData;
        }
    }
};
</script>

<style scoped lang="scss">
.tools {
    width: 100%;
    margin-bottom: 0.2rem;
    display: flex;
    justify-content: space-between;
    .item {
        padding: .03rem .12rem;
        height: 0.3rem;
        display: block;
        float: left;
        margin-right: .2rem;
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
    .active {
        background: rgba(3, 86, 176, 0.31);
        border: 1px solid rgba(16, 163, 190, 0.23);
    }
}
.v-line {
    height: 0.4rem;
}

.tree-img {
    width: 90%;
    display: block;
    padding: .2rem 0;
}
.schoolData {
    width: 100%;
    height: calc(100% - 1rem);
    padding-left: 0.3rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    .progressitem {
        margin: 0.12rem 0;
    }
}
@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

@keyframes anti-clockwise-rotate {
    0% {
        transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
        transform: translate(-50%, -50%) rotate(-360deg);
    }
}
</style>