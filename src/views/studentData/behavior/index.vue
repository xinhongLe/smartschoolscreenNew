<template>
    <div class="img-content">
        <div class="h-line"></div>
        <Flex :flex="1" column>
            <div class="v-line"></div>
            <Flex :flex="2">
                <ClassDistribution></ClassDistribution>
            </Flex>
            <div class="v-line"></div>
            <Flex :flex="3">
                 <module-header
                    :title="['课堂活跃度', '课堂专注度']"
                    :selected="trendSelected"
                    @change="(i) => (trendSelected = i)"
                >
                    <class-activity v-if="trendSelected == 0"></class-activity>
                    <ClassFocus v-if="trendSelected == 1"></ClassFocus>
                </module-header>
            </Flex>
            <div class="v-line"></div>
        </Flex>
        <div class="h-line"></div>
        <Flex :flex="1" column>
            <div class="v-line"></div>
            <Flex :flex="3">
                <EvalutionDistribution></EvalutionDistribution>
            </Flex>
            <div class="v-line"></div>
            <Flex :flex="5">
                <PracticeComplete></PracticeComplete>
            </Flex>
            <div class="v-line"></div>
            <Flex :flex="4">
                <TeachingModel></TeachingModel>
            </Flex>
            <div class="v-line"></div>
        </Flex>
        <div class="h-line"></div>
        <Flex :flex="1" column>
            <div class="v-line"></div>
            <Flex :flex="5">
                <NurseryDistribution></NurseryDistribution>
            </Flex>
            <div class="v-line"></div>
            <Flex :flex="5">
                 <module-header
                    :title="['年平均课外阅读概况', '书籍类别喜好度排行']"
                    :selected="selected"
                    @change="(i) => (selected = i)"
                >
                    <OutsideReading v-show="selected == 0" />
                    <Ranking v-show="selected == 1" />
                </module-header>
            </Flex>
            <div class="v-line"></div>
        </Flex>
        <div class="h-line"></div>
        <Flex :flex="1" column>
            <div class="v-line"></div>
            <Flex :flex="5">
                <WrongQuestion></WrongQuestion>
            </Flex>
            <div class="v-line"></div>
            <Flex :flex="5">
                <CreditBank></CreditBank>
            </Flex>
            <div class="v-line"></div>
        </Flex>
        <div class="h-line"></div>
    </div>
</template>
<script>
import Flex from "@/components/flex";
import ModuleHeader from '@/components/moduleHeader.vue';
import ClassDistribution from "./components/ClassDistribution.vue";
import EvalutionDistribution from "./components/EvalutionDistribution.vue";
import NurseryDistribution from "./components/NurseryDistribution.vue";
import OutsideReading from "./components/OutsideReading.vue";
import PracticeComplete from "./components/PracticeComplete.vue";
import TeachingModel from "./components/TeachingModel.vue";
import WrongQuestion from "./components/WrongQuestion.vue";
import ClassActivity from "./components/ClassActivity.vue";
import CreditBank from './components/CreditBank.vue';
import ClassFocus from './components/ClassFocus.vue';
import Ranking from "./components/ranking"
export default {
    data() {
        return {
            style: {},
            trendSelected:0,
            selected: 0
        };
    },
    components: {
        Flex,
        ModuleHeader,
        ClassDistribution,
        EvalutionDistribution,
        NurseryDistribution,
        OutsideReading,
        PracticeComplete,
        TeachingModel,
        WrongQuestion,
        ClassActivity,
        CreditBank,
        ClassFocus,
        Ranking
    },
    methods: {
        imgLoad() {
            const imgScale =
                this.$refs.img.clientWidth / this.$refs.img.clientHeight;
            const scale =
                this.$refs.content.clientWidth /
                this.$refs.content.clientHeight;
            if (imgScale > scale) {
                this.style = { width: "100%" };
            } else {
                this.style = { height: "100%" };
            }
        }
    }
};
</script>

<style scoped>
/* .img-content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.img-content img {
    display: block;
} */
.img-content {
    flex: 1;
    display: flex;
    min-height: 0;
}
.v-line {
    height: 0.4rem;
}
.h-line {
    width: 0.4rem;
}
</style>