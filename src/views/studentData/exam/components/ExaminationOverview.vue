<template>
    <ModuleHeader title="考试概况信息">
        <div class="exam-content">
            <div class="exam-list">
                <div
                    class="exam-list-item"
                    v-for="(item, index) in examList"
                    :key="index"
                >
                    <p :style="item.color" class="num">{{ item.number }}</p>
                    <p class="font">{{ item.font }}</p>
                </div>
            </div>
        </div>
    </ModuleHeader>
</template>

<script>
import ModuleHeader from "@/components/moduleHeader";
// import Echart from "@/components/echart";
// import * as echarts from "echarts";
export default {
    components: {
        ModuleHeader
        // Echart
    },

    data() {
        return {
            options: {},
            examList: [
                {
                    number: 0.69,
                    font: "难度系数",
                    color: "color:#0DFFFF;"
                },
                {
                    number: "1:1:3.5",
                    font: "难度比例(难-中-易)",
                    color: "color:#07E99A;"
                },
                {
                    number: 0.79,
                    font: "可信度",
                    color: "color:#FA4A4F;"
                },
                {
                    number: 0.67,
                    font: "区分度",
                    color: "color:#733EFA;"
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.exam-content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
}
.exam-list {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .exam-list-item {
        width: 2.2rem;
        background: rgba(3, 86, 176, 0.1);
        border: 1px solid #10a3be3b;
        text-align: center;
        padding: 0.2rem 0 ;
        p {
            margin: 0;
            padding: 0;
        }
        .num {
            font-size: 0.43rem;
            font-family: Bahnschrift_SemiBold;
        }
        .font {
            font-size: 0.175rem;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #96acc3;
            white-space: nowrap;
        }
    }
}
</style>