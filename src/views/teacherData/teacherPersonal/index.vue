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
        <!-- <job-correct></job-correct> -->
      </Flex>
      <div class="v-line"></div>
    </Flex>
    <div class="h-line"></div>
    <Flex :flex="2" column>
      <Flex :flex="1"> 4 </Flex>
      <Flex :flex="1"> 
          <!-- <knowledge></knowledge> -->
      </Flex>
    </Flex>
    <div class="h-line"></div>
    <Flex :flex="1" column>
      <Flex :flex="5">
        <!-- <results-contrast></results-contrast> -->
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
export default {
  components: {
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
