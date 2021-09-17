<template>
    <div class="content">
        <div class="h-line"></div>
        <LeftRender />
        <div class="h-line"></div>
        <Flex :flex="1" column>
            <Flex :flex="1">
                <PersonalComposition />
            </Flex>
            <AttentionStudent />
            <div class="v-line"></div>
            <Flex :flex="1">
                <ClassDistribution></ClassDistribution>
            </Flex>
        </Flex>
        <div class="h-line"></div>
        <Flex :flex="2" column>
            <Flex :flex="1">
                <Flex :flex="1">
                    <GenderDistribution></GenderDistribution>
                </Flex>
                <div class="h-line"></div>
                <Flex :flex="1">
                    <HierarchicalDistribution></HierarchicalDistribution>
                </Flex>
            </Flex>
            <Flex :flex="1">
                <Evaluate />
            </Flex>
        </Flex>
        <div class="h-line"></div>

        <Flex :flex="1" column>
            <Flex :flex="1">
                <module-header
                    :title="['教师年龄分布', '教师职称分布']"
                    :selected="mapSelected"
                    @change="(i) => (mapSelected = i)"
                >
                    <AgeDistribution v-if="mapSelected == 0" />
                    <AgeDistribution v-if="mapSelected == 1" />
                </module-header>
            </Flex>
            <div class="v-line"></div>
            <Flex :flex="1">
                <SubjectsAwarded />
            </Flex>
            <div class="v-line"></div>
            <Flex :flex="1">
                <EducationDistribution />
            </Flex>
            <div class="v-line"></div>
            <Flex :flex="1">
                <ContributionDistribution />
            </Flex>
            <div class="v-line"></div>
        </Flex>
        <div class="h-line"></div>
    </div>
</template>

<script>
import moduleHeader from "@/components/moduleHeader.vue";
import Flex from "@/components/flex";
import LeftRender from "./components/leftRender";
import Evaluate from "./components/evaluate";
import ClassDistribution from "./components/ClassDistribution.vue";
import PersonalComposition from "./components/personalComposition";
import AttentionStudent from "./components/attentionStudent";
import GenderDistribution from "./components/GenderDistribution.vue";
import HierarchicalDistribution from "./components/HierarchicalDistribution.vue";
import SubjectsAwarded from "./components/SubjectsAwarded.vue";
import ContributionDistribution from "./components/ContributionDistribution.vue";
import EducationDistribution from "./components/EducationDistribution.vue";
import AgeDistribution from './components/AgeDistribution.vue'
export default {
    components: {
        Flex,
        LeftRender,
        Evaluate,
        ClassDistribution,
        PersonalComposition,
        AttentionStudent,
        GenderDistribution,
        HierarchicalDistribution,
        SubjectsAwarded,
        ContributionDistribution,
        EducationDistribution,
        moduleHeader,
        AgeDistribution
    },
    data() {
        return {
            mapSelected: 0
        };
    }
};
</script>

<style scoped>
.content {
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
