<template>
    <div class="ranking-box">
        <div class="tools">
            <div
                class="item"
                :class="activeIndex === index ? 'active' : ''"
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
                <ProgressB :proData="item" :ratioNum="3500"></ProgressB>
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
            activeIndex: 0,
            teachingHotList: [
                {
                    title: "教学质量排名",
                    progressData: [
                        {
                            name: "*苏区",
                            progressNum: 3323,
                            id: 5
                        },
                        {
                            name: "**园区",
                            progressNum: 3102,
                            id: 6
                        },
                        {
                            name: "*中区",
                            progressNum: 2827,
                            id: 7
                        },
                        {
                            name: "*城区",
                            progressNum: 2112,
                            id: 8
                        }
                    ]
                },
                {
                    title: "智慧教学排名",
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
                    title: "“双减”落实排名",
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
            progressList: []
        };
    },
    mounted() {
        this.progressList = this.teachingHotList[0].progressData;
    },
    methods: {
        changeIndex(index) {
            this.activeIndex = index;
            this.progressList = this.teachingHotList[index].progressData;
        }
    }
};
</script>
<style lang="scss" scoped>
.ranking-box {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
}
.tools {
    width: 100%;
    margin-bottom: 0.2rem;
    margin-left: 0.15rem;
    display: flex;
    justify-content: start;
    .item {
        padding: .03rem .12rem;
        height: 0.3rem;
        margin-right: .2rem;
        border: 1px solid rgba(16, 163, 190, 0.23);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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

.schoolData {
    width: 100%;
    padding-left: 0.3rem;
    box-sizing: border-box;
    display: flex;
    flex: 1;
    flex-direction: column;
    .progressitem {
        margin: 0.12rem 0;
        flex: 1;
    }
}

@keyframes moveProfress {
    0% {
        width: 0;
    }
    100% {
        width: 10%;
    }
}
</style>