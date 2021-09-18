<template>
    <div class="content">
        <div class="h-line"></div>
        <Flex :flex="2" column>
            <div class="v-line"></div>
            <Flex :flex="1">
                <Coverage></Coverage>
            </Flex>
            <div class="v-line"></div>
            <Flex :flex="1">
                <JobType></JobType>
            </Flex>
            <div class="v-line"></div>
        </Flex>
        <div class="h-line"></div>
        <Flex :flex="4" column>
            <div class="v-line"></div>
            <Flex :flex="1">
                <Flex :flex="1"> 
                    <Speed></Speed>
                </Flex>
                <div class="h-line"></div>
                <Flex :flex="1">
                  <knowledge></knowledge>
                </Flex>
                <div class="h-line"></div>
            </Flex>
            <div class="v-line"></div>
            <Flex :flex="1"> 
                <PatternDistribution></PatternDistribution>
            </Flex>
            <div class="v-line"></div>
        </Flex>
        <div class="h-line"></div>
        <Flex :flex="3" column>
            <div class="v-line"></div>
            <Flex :flex="3">
              <satisfaction></satisfaction>
            </Flex>
            <div class="v-line"></div>
            <Flex :flex="5">
              <year-evaluation></year-evaluation>
            </Flex>
            <div class="v-line"></div>
            <Flex :flex="5"> 
                <Flex :flex="1"> 
                    <HeatDistribution></HeatDistribution>
                </Flex>
                <div class="h-line"></div>
                <Flex :flex="1"> 
                    <Resources></Resources>
                </Flex>
                <div class="h-line"></div>
            </Flex>
            <div class="v-line"></div>
        </Flex>
        <div class="h-line"></div>
    </div>
</template>

<script>
import Flex from "@/components/flex";
import HeatDistribution from './components/heatDistribution.vue'
import Coverage from "./components/coverage"
import JobType from "./components/jobType.vue"
import Speed from "./components/speed"
import Resources from "./components/resources"
import PatternDistribution from "./components/patternDistribution"
import YearEvaluation from "./components/yearEvaluation";
import Knowledge from "./components/knowledge";
import Satisfaction from "./components/satisfaction";
export default {
    components: {
      Satisfaction,
      Knowledge,
      YearEvaluation,
        Flex,
        HeatDistribution,
        Coverage,
        JobType,
        Speed,
        PatternDistribution,
        Resources
    }
};
</script>

<style scoped>
.content {
    flex: 1;
    display: flex;
    min-height: 0;
    overflow: hidden;
    color: #fff;
}
.v-line {
    height: 0.4rem;
}
.h-line {
    width: 0.4rem;
}
</style>