<template>
    <div class="content">
        <div class="h-line"></div>
        <Flex :flex="1" column>
            <div class="v-line"></div>
            <countScroll cityNmae="**市教育资源概览" :istrnum="false"></countScroll>
            <div class="v-line"></div>
            <Flex :flex="5"> 
                <Ranking></Ranking>
            </Flex>
            <div class="v-line"></div>
            <Flex :flex="5">  
                <EffectiveRanking></EffectiveRanking>
            </Flex>
            <div class="v-line"></div>
        </Flex>
        <div class="h-line"></div>
        <Flex :flex="2" column>
            <div class="v-line"></div>
            <Flex :flex="1">  
                <subject-class></subject-class>
            </Flex>
            <Flex :flex="1">
                <module-header
                    :title="['学生居住地', '学生户口(户籍)来源']"
                    :selected="trendSelected"
                    @change="(i) => (trendSelected = i)"
                >
                    <Trend :trendSelected="trendSelected" />
                </module-header>
            </Flex>
        </Flex>
        <div class="h-line"></div>
        <Flex :flex="1" column>
            <div class="v-line"></div>
            <Flex :flex="5">
                <Rate></Rate>
            </Flex>
            <div class="v-line"></div>
            <Flex :flex="3">
                <type-distribution></type-distribution>
            </Flex>
            <div class="v-line"></div>
            <Flex :flex="5">  
                <growth-ranking></growth-ranking>
            </Flex>
            <div class="v-line"></div>
        </Flex>
        <div class="h-line"></div>
    </div>
</template>

<script>
import Flex from "@/components/flex";
import Trend from "./components/trend.vue";
import Rate from "./components/rate.vue";
import countScroll from "@/components/countScroll.vue"
import Ranking from './components/Ranking'
import EffectiveRanking from './components/EffectiveRanking'
import GrowthRanking from './components/growthRanking.vue';
import TypeDistribution from './components/TypeDistribution.vue'
import ModuleHeader from "@/components/moduleHeader";
import SubjectClass from './components/subjectClass.vue';
export default {
    components: {
        Flex,
        countScroll,
        Ranking,
        EffectiveRanking,
        GrowthRanking,
        TypeDistribution,
        ModuleHeader,
        Trend,
        Rate,
        SubjectClass
    },
    data() {
        return {
            trendSelected: 0
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