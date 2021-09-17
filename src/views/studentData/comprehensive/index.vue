<template>
  <div class="content">
    <div class="h-line"></div>
    <Flex :flex="1" column>
      <div class="v-line"></div>
      <left-title></left-title>
      <Flex :flex="5">
       <left-thought></left-thought>
      </Flex>
      <div class="v-line"></div>
      <Flex :flex="4">
        <left-activity></left-activity>
      </Flex>
      <div class="v-line"></div>
    </Flex>
    <div class="h-line"></div>
    <Flex :flex="3" column>
      <div class="v-line"></div>
      <Flex :flex="1">
        <Flex :flex="2" column>
         <Flex :flex="1">
           <comprehensive-radar></comprehensive-radar>
         </Flex>
         <div class="v-line"></div>
         <Flex :flex="1">
          <comprehensive></comprehensive>
         </Flex>
       </Flex>
        <div class="h-line"></div>
        <Flex :flex="1" column>
          <Flex :flex="1">
            <right-academic></right-academic>
          </Flex>
          <div class="v-line"></div>
          <Flex :flex="1">
            <right-health></right-health>
          </Flex>
          <div class="v-line"></div>
          <Flex :flex="1">
            <right-activity></right-activity>
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
import ComprehensiveRadar from "./components/comprehensiveRadar";
import RightAcademic from "./components/rightAcademic";
import RightHealth from "./components/rightHealth";
import RightActivity from "./components/rightActivity";
import LeftThought from "./components/leftThought";
import LeftActivity from "./components/leftActivity";
import LeftTitle from "./components/leftTitle";
import Comprehensive from "./components/comprehensive";
export default {
  name: "index",
  components: {
    Comprehensive,
    LeftTitle,
    LeftActivity,
    LeftThought,
    RightActivity,
    RightHealth,
    RightAcademic,
    ComprehensiveRadar,
    Flex
  },
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