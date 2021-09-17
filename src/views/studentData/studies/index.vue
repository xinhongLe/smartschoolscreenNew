<template>
  <div class="content">
    <div class="h-line"></div>
    <Flex :flex="1" column>
      <Flex :flex="1">
        <job-type></job-type>
      </Flex>
      <div class="v-line"></div>
      <Flex :flex="1">
        <job-time></job-time>  
      </Flex>
      <div class="v-line"></div>
      <Flex :flex="1">
        <job-correct></job-correct>
      </Flex>
      <div class="v-line"></div>
    </Flex>
    <div class="h-line"></div>
    <Flex :flex="2" column>
      <Flex :flex="3">
        <KnowledgeCoverage />
      </Flex>
      <Flex :flex="2"> 
          <knowledge></knowledge>
      </Flex>
    </Flex>
    <div class="h-line"></div>
    <Flex :flex="1" column>
      <Flex :flex="5">
        <results-contrast></results-contrast>
      </Flex>
      <div class="v-line"></div>
        <Flex :flex="5"> 
            <grade-scores></grade-scores>
        </Flex>
      <div class="v-line"></div>
      <Flex :flex="5">
        <results-layered></results-layered>
      </Flex>
      <div class="v-line"></div>
    </Flex>
    <div class="h-line"></div>
  </div>
</template>

<script>
import Flex from "@/components/flex";
import JobType from "./components/jobType.vue";
import JobTime from './components/jobTime.vue';
import JobCorrect from './components/jobCorrect.vue';
import Knowledge from './components/knowledge.vue';
import ResultsContrast from './components/resultsContrast.vue';
import GradeScores from './components/gradeScores.vue';
import ResultsLayered from './components/resultsLayered.vue';
import KnowledgeCoverage from "./components/knowledgeCoverage";
export default {
  components: {
    Flex,
    JobType,
    JobTime,
    JobCorrect,
    Knowledge,
    ResultsContrast,
    GradeScores,
    ResultsLayered,
    KnowledgeCoverage
  },
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
