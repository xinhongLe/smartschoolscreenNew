<template>
    <ModuleHeader title="学生综合素质评价">
        <div class="v-line"></div>
        <div class="evaluate-box">
            <div class="chart-img-box">
                <img class="tree-img" src="./imgs/pic_sangjitu@2x.png" alt="">
                <div class="circle-box">
                    <img class="bottom-circle" src="./imgs/pic_dayuan@2x.png" alt="">
                    <img class="top-circle" src="./imgs/pic_xiaoyuan@2x.png" alt="">
                </div>
            </div>
            <div class="evaluate-desc">
                遵循国家颁布的《中国学生发展核心素养》要求，结合学校本地化建设实践需求，提出如上的综合评价系统，形成学生个性化能力评价模型。
            </div>
        </div>
        <div class="v-line"></div>
    </ModuleHeader>
</template>

<script>
import ModuleHeader from "@/components/moduleHeader";
export default {
    components: {
        ModuleHeader
    }
};
</script>

<style scoped>
.v-line {
    height: 0.4rem;
}

.evaluate-desc {
    font-size: 0.15rem;
    color: #96ACC3;
    margin-top: .3rem;
}

.chart-img-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.tree-img {
    width: 50%;
    display: block;
}

.circle-box {
    width: 40%;
    position: relative;
}

.bottom-circle {
    width: 100%;
    display: block;
    animation: rotate 10s infinite linear;
}

.top-circle {
    display: block;
    width: 65%;
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