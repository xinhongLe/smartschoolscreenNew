<template>
  <div class="content">
    <div class="h-line"></div>
    <Flex :flex="1" column>
      <div class="v-line"></div>
      <Flex :flex="1">
        <exam-radar></exam-radar>
      </Flex>
      <Flex :flex="1">
        2
      </Flex>
      <div class="v-line"></div>
      <div class="v-line"></div>
    </Flex>
    <div class="h-line"></div>
    <Flex :flex="3" column>
      <div class="v-line"></div>
      <Flex :flex="1">
        <Flex :flex="2" column>
          <Flex :flex="1">
            4
          </Flex>
          <div class="v-line"></div>
          <Flex :flex="1">
            5
          </Flex>
        </Flex>
        <div class="h-line"></div>
        <Flex :flex="1" column>
          <Flex :flex="1">
            6
          </Flex>
          <div class="v-line"></div>
          <Flex :flex="1">
            7
          </Flex>
          <div class="v-line"></div>
          <Flex :flex="1">
            8
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
export default {
  name: "index",
  components: {
    ExamRadar,
    Flex
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