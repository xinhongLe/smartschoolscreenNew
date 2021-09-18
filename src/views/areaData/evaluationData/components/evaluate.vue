<template>
    <ModuleHeader title="学生综合评价">
        <div class="v-line"></div>
        <div class="tools" style="justify-content: start">
            <div
                class="item"
                :class="activeIndex === index ? 'active' : ''"
                @click="activeIndex = index"
                v-for="(item, index) in tab"
                :key="index"
            >
                <span class="lableName">{{ item.title }}</span>
            </div>
        </div>
        <div class="evaluate-box">
            <div class="chart-img-box">
                <img
                    class="tree-img"
                    src="./imgs/pic_sangjitu@2x.png"
                    alt=""
                    v-if="activeIndex == 0"
                />
                <div class="circle-box" v-if="activeIndex == 1">
                    <div class="content">
                        <div>
                            <CountTo
                                ref="example2"
                                class="num num4"
                                :start-val="0"
                                :end-val="4410"
                                :duration="3000"
                            ></CountTo>
                            <p>作业次数</p>
                        </div>
                        <div>
                            <CountTo
                                ref="example2"
                                class="num num4"
                                :start-val="0"
                                :end-val="72"
                                :duration="3000"
                            ></CountTo>
                            <span>%</span>
                            <p>作业次数</p>
                        </div>
                    </div>
                    <img
                        class="bottom-circle"
                        src="./imgs/pic_dayuan@2x.png"
                        alt=""
                    />
                    <img
                        class="top-circle"
                        src="./imgs/pic_xiaoyuan@2x.png"
                        alt=""
                    />
                    <p>
                        遵循国家颁布的《中国学生发展核心素养》要求，结合学校本地化建设实践需求，
                        提出如上的综合评价系统，形成学生个性化能力评价模型。
                    </p>
                </div>
            </div>
        </div>
        <div class="v-line"></div>
    </ModuleHeader>
</template>

<script>
import ModuleHeader from "@/components/moduleHeader";
import CountTo from "vue-count-to";
export default {
    components: {
        ModuleHeader,
        CountTo
    },
    data() {
        return {
            tab: [{ title: "综合素质评价体系" }, { title: "综合评价指标对比" }],
            activeIndex: 0,
        };
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
            white-space: nowrap;
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
    position: absolute;
    top: .6rem;
    bottom: 0;
    left: 0;
    margin: auto;
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
            color: #96ACC3;
            font-size: 12px;
            margin: 0;
        }
    }
    >p {
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