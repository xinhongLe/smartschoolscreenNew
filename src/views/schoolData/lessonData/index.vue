<template>
    <div class="content">
        <div class="h-line"></div>
        <Flex :flex="1" column>
            <Flex :flex="1">
                <DataAnalyse></DataAnalyse>
            </Flex>
            <div class="v-line"></div>
            <Flex :flex="1">
              <left-radar></left-radar>
            </Flex>
            <div class="v-line"></div>
            <Flex :flex="1">
                <circle-components></circle-components>
            </Flex>
        </Flex>
        <div class="h-line"></div>
        <Flex :flex="2" column>
            <Flex :flex="1"> 4 </Flex>
            <Flex :flex="1"> <StudyTime></StudyTime> </Flex>
        </Flex>
        <div class="h-line"></div>
        <Flex :flex="1" column>
            <Flex :flex="5">
                <Knoledge></Knoledge>
            </Flex>
            <!-- <div class="v-line"></div>
            <Flex :flex="5"> </Flex> -->
            <div class="v-line"></div>
            <Flex :flex="5"> 
                <Homework></Homework>
            </Flex>
            <div class="v-line"></div>
        </Flex>
        <div class="h-line"></div>
    </div>
</template>

<script>
import Flex from "@/components/flex";
import CircleComponents from './components/circle.vue'
import DataAnalyse from "./components/dataAnalyse.vue"
import Knoledge from "./components/knowledge.vue"
import StudyTime from './components/studyTime.vue'
import LeftRadar  from "./components/leftRadar";
import Homework from './components/homework.vue'
export default {
    components: {
      LeftRadar,
      Flex,
      DataAnalyse,
      Knoledge,
      StudyTime,
      CircleComponents,
      Homework
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
