<template>
  <moduleHeader title="教学进度监控">
    <div class="schoolData">
        <p>进度均值：<span>32.6%</span></p>
        <div class="progress-box">
            <div class="progressitem" v-for="item in progressList" :key="item.id">
                <ProgressB :proData="item" :ratioNum="100" :hasPercentage="true"></ProgressB>
            </div>
        </div>
    </div>
  </moduleHeader>
</template>
<script>
import moduleHeader from "@/components/moduleHeader";
import ProgressB from "@/components/ProgressB.vue";
export default {
    components: {
        moduleHeader,
        ProgressB
    },
    data() {
        return {
            activeIndex: 0,
            progressList: [
                {
                    name: "一年级",
                    progressNum: 24,
                    id: 1
                },
                {
                    name: "二年级",
                    progressNum: 28,
                    id: 2
                },
                {
                    name: "三年级",
                    progressNum: 39,
                    id: 3
                },
                {
                    name: "四年级",
                    progressNum: 36,
                    id: 4
                }
            ]
        };
    }
};
</script>
<style lang="scss" scoped>
.progress-box {
    display: flex;
    flex: 1;
    flex-direction: column;
    >div {
        flex: 1;
    }
}

.schoolData {
    width: 100%;
    height: 100%;
    padding-left: 0.3rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    .progressitem {
        margin: 0.12rem 0;
    }
    >p {
        font-size: 12px;
        color: #96ACC3;
        span {
            color: #0DFFFF;
        }
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