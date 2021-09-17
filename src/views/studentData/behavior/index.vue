<template>
    <div class="img-content">
        <div class="h-line"></div>
        <Flex :flex="1" column>
            <Flex :flex="1">
                <ClassDistribution></ClassDistribution>
            </Flex>
            <div class="v-line"></div>
            <Flex :flex="1">
                <class-activity1></class-activity1>
            </Flex>
            <div class="v-line"></div>
        </Flex>
        <div class="h-line"></div>
        <Flex :flex="1" column>
            <Flex :flex="1">
                <EvalutionDistribution></EvalutionDistribution>
            </Flex>
            <div class="v-line"></div>
            <Flex :flex="1">
                <PracticeComplete></PracticeComplete>
            </Flex>
            <div class="v-line"></div>
            <Flex :flex="1">
                <TeachingModel></TeachingModel>
            </Flex>
            <div class="v-line"></div>
        </Flex>
        <div class="h-line"></div>
        <Flex :flex="1" column>
            <Flex :flex="5">
                <NurseryDistribution></NurseryDistribution>
            </Flex>
            <div class="v-line"></div>
            <Flex :flex="5">
                <OutsideReading></OutsideReading>
            </Flex>
            <div class="v-line"></div>
        </Flex>
        <div class="h-line"></div>
        <Flex :flex="1" column>
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
import ClassDistribution from "./components/ClassDistribution.vue";
import EvalutionDistribution from "./components/EvalutionDistribution.vue";
import NurseryDistribution from "./components/NurseryDistribution.vue";
import OutsideReading from "./components/OutsideReading.vue";
import PracticeComplete from "./components/PracticeComplete.vue";
import TeachingModel from "./components/TeachingModel.vue";
import WrongQuestion from "./components/WrongQuestion.vue";
import ClassActivity from "./components/ClassActivity1.vue";
import CreditBank from './components/CreditBank.vue'
export default {
    data() {
        return {
            style: {}
        };
    },
    components: {
        Flex,
        ClassDistribution,
        EvalutionDistribution,
        NurseryDistribution,
        OutsideReading,
        PracticeComplete,
        TeachingModel,
        WrongQuestion,
        ClassActivity,
        CreditBank
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