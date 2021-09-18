<template>
  <div class="content">
    <div class="h-line"></div>
    <Flex :flex="1" column>
      <Flex :flex="1">
        <title-distribution></title-distribution>
      </Flex>
      <div class="v-line"></div>
      <Flex :flex="1">
        <school-age-distribution></school-age-distribution>
      </Flex>
      <div class="v-line"></div>
      <Flex :flex="1">
        <teach-evaluation></teach-evaluation>
      </Flex>
      <div class="v-line"></div>
    </Flex>
    <div class="h-line"></div>
    <Flex :flex="2" column>
      <Flex :flex="1">
        <teach-results></teach-results>
      </Flex>
      <Flex :flex="1"> 
          <teach-radar></teach-radar>
      </Flex>
    </Flex>
    <div class="h-line"></div>
    <Flex :flex="1" column>
      <Flex :flex="5">
         <listen-lesson></listen-lesson>
      </Flex>
      <div class="v-line"></div>
        <Flex :flex="5"> 
            <teaching-research></teaching-research>
        </Flex>
      <div class="v-line"></div>
      <Flex :flex="5">
        <teacher-training></teacher-training>
      </Flex>
      <div class="v-line"></div>
    </Flex>
    <div class="h-line"></div>
  </div>
</template>

<script>
import Flex from "@/components/flex";
import TitleDistribution from './components/titleDistribution.vue';
import SchoolAgeDistribution from './components/schoolAgeDistribution.vue';
import TeachingResearch from './components/teachingResearch.vue';
import TeacherTraining from './components/teacherTraining.vue';
import TeachRadar from "./components/teachRadar";
import ListenLesson from "./components/listenLesson";
import TeachResults from "./components/teachResults";
import TeachEvaluation from "./components/teachEvaluation";
export default {
  components: {
    TeachEvaluation,
    TeachResults,
    ListenLesson,
    TeachRadar,
    Flex,
    TitleDistribution,
    SchoolAgeDistribution,
    TeachingResearch,
    TeacherTraining,
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
