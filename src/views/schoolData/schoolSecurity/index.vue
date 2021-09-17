<template>
    <div class="content">
        <div class="h-line"></div>
        <Flex :flex="1" column>
            <!-- <Flex :flex="3"> </Flex>
            <div class="v-line"></div>
            <Flex :flex="5"> </Flex>
            <div class="v-line"></div>
            <Flex :flex="5"> 3 </Flex>
            <div class="v-line"></div> -->
            <security-rating></security-rating>
            <div class="v-line"></div>
        </Flex>
        <div class="h-line"></div>
        <Flex :flex="2" column>
            <Flex :flex="1"> 
                <Flex :flex="1"> </Flex>
                <Flex :flex="1"> </Flex>
            </Flex>
            <Flex :flex="1"> <StudyTime></StudyTime> </Flex>
        </Flex>
        <div class="h-line"></div>
        <Flex :flex="1" column>
            <Flex :flex="3">
              <right-dynamic></right-dynamic>
            </Flex>
            <div class="v-line"></div>
            <Flex :flex="5">
              <right-center></right-center>
            </Flex>
            <div class="v-line"></div>
            <Flex :flex="5">
              <right-situation></right-situation>
            </Flex>
            <div class="v-line"></div>
        </Flex>
        <div class="h-line"></div>
    </div>
</template>

<script>
import Flex from "@/components/flex";
import StudyTime from './components/studyTime.vue'
import SecurityRating from './components/SecurityRating.vue';
import RightDynamic from "./components/rightDynamic";
import RightCenter from "./components/rightSchool";
import RightSituation from "./components/rightSituation";
export default {
    components: {
      RightSituation,
      RightCenter,
      RightDynamic,
        Flex,
        StudyTime,
        SecurityRating
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