<template>
    <div>
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
    </div>
</template>

<script>
import ProgressB from "@/components/ProgressB.vue";
export default {
    components: {
        ProgressB
    },
    data() {
        return {
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
            activeIndex1: 0
        };
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
        padding: 0.03rem 0.12rem;
        height: 0.3rem;
        display: block;
        float: left;
        margin-right: 0.2rem;
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
    width: 70%;
    display: block;
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
.circle-box {
    width: 100%;
    height: 4rem;
    position: relative;
    .content {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        color: #fff;
        text-align: center;
        margin-top: 0.3rem;
        span {
            color: #0dffff;
            font-size: 0.25rem;
        }
        span:nth-of-type(2) {
            margin-left: -0.05rem;
        }
        p {
            color: #96acc3;
            font-size: 12px;
            margin: 0;
        }
    }
    > p {
        margin: auto;
        margin-top: 3.3rem;
        width: 4.1rem;
        text-align: center;
        height: 0.4rem;
        font-size: 10px;
        color: #96acc3;
    }
}
.bottom-circle {
    width: 55%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    display: block;
    animation: rotate 10s infinite linear;
}

.top-circle {
    display: block;
    width: 38%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: anti-clockwise-rotate 10s infinite linear;
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