<template>
  <div class="content">
    <div class="h-line"></div>
    <Flex :flex="1" column>
      <div class="v-line"></div>
      <Flex :flex="1">
        <exam-radar></exam-radar>
      </Flex>
      <Flex :flex="1">
        <KnowledgeCoverage></KnowledgeCoverage>
      </Flex>
      <div class="v-line"></div>
      <div class="v-line"></div>
    </Flex>
    <div class="h-line"></div>
    <Flex :flex="3" column>
      <div class="v-line"></div>
      <Flex :flex="1">
        <Flex :flex="2" column>
          <Flex :flex="3">
            <ExaminationOverview></ExaminationOverview>
          </Flex>
          <div class="v-line" style="height:0.2rem"></div>
          <Flex :flex="4">
            <GradeScores></GradeScores>
          </Flex>
          <div class="v-line"></div>
          <Flex :flex="4">
             <CriticalDistribution></CriticalDistribution>
          </Flex>
        </Flex>
        <div class="h-line"></div>
        <Flex :flex="1" column>
          
          <Flex :flex="1">
            <ResultsContrast></ResultsContrast>
          </Flex>
          <div class="v-line"></div>
          <Flex :flex="1">
             <AcademicDistribution></AcademicDistribution>
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
import ExamRadar from "./components/examRadar";
import KnowledgeCoverage from './components/knowledgeCoverage.vue'
import GradeScores from './components/gradeScores.vue'
import ExaminationOverview from './components/ExaminationOverview.vue'
import CriticalDistribution from './components/CriticalDistribution.vue'
import ResultsContrast from './components/resultsContrast.vue'
import AcademicDistribution from './components/AcademicDistribution.vue'
export default {
  name: "index",
  components: {
    ExamRadar,
    Flex,
    KnowledgeCoverage,
    GradeScores,
    ExaminationOverview,
    CriticalDistribution,
    ResultsContrast,
    AcademicDistribution
  }
}
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