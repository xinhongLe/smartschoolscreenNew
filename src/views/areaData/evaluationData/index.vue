<template>
    <div class="content">
        <div class="h-line"></div>
        <Flex :flex="1" column>
            <TopCount></TopCount>
            <div class="v-line"></div>
            <Flex :flex="1">
                <Flex :flex="3" column>
                    <Flex :flex="1">
                        <Speed></Speed>
                    </Flex>
                    <div class="v-line"></div>
                    <Flex :flex="2" column>
                        <Flex><MasterTheSituation></MasterTheSituation></Flex>
                        <div class="v-line"></div>
                        <Flex><Ranking></Ranking></Flex>
                    </Flex>
                </Flex>
                <div class="h-line"></div>
                <Flex :flex="4" column>
                    <Flex :flex="1">
                        <ClassDistribution></ClassDistribution>
                    </Flex>
                    <div class="v-line"></div>
                    <Flex :flex="1">
                        <StudyTime></StudyTime>
                    </Flex>
                </Flex>
                <div class="h-line"></div>
                <Flex :flex="2" column>
                    <Flex :flex="1" column>
                        <Flex :flex="5">
                            <Evaluate></Evaluate>
                        </Flex>
                        <Flex :flex="2">
                            <RightFooter></RightFooter>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <div class="v-line"></div>
        </Flex>
        <div class="h-line"></div>
    </div>
</template>

<script>
import Flex from "@/components/flex";
import StudyTime from "./components/studyTime.vue";
import TopCount from "./components/topCount.vue";
import ClassDistribution from "./components/classDistribution";
import MasterTheSituation from "./components/masterTheSituation";
import Ranking from "./components/ranking";
import Speed from "./components/speed";
import Evaluate from "./components/evaluate"
import RightFooter from "./components/rightFooter.vue"
export default {
    components: {
        Flex,
        StudyTime,
        TopCount,
        ClassDistribution,
        MasterTheSituation,
        Ranking,
        Speed,
        Evaluate,
        RightFooter
    }
};
</script>

<style scoped>
.content {
    flex: 1;
    display: flex;
    min-height: 0;
    overflow: hidden;
}
.v-line {
    height: 0.4rem;
}
.h-line {
    width: 0.4rem;
}
</style>