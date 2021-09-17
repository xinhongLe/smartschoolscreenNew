<template>
    <div class="content">
        <div class="h-line"></div>
        <LeftRender />
        <div class="h-line"></div>
        <Flex :flex="1" column>
            <Flex :flex="1">
                <PersonalComposition />
            </Flex>
            <AttentionStudent />
            <div class="v-line"></div>
            <Flex :flex="1"></Flex>
        </Flex>
        <div class="h-line"></div>
        <Flex :flex="2" column>
            <Flex :flex="1"></Flex>
            <Flex :flex="1">
                <Evaluate />
            </Flex>
        </Flex>
        <div class="h-line"></div>

        <Flex :flex="1" column>
            <Flex :flex="1"></Flex>
            <div class="v-line"></div>
            <Flex :flex="1"></Flex>
            <div class="v-line"></div>
            <Flex :flex="1"></Flex>
            <div class="v-line"></div>
            <Flex :flex="1"></Flex>
            <div class="v-line"></div>
        </Flex>
        <div class="h-line"></div>
    </div>
</template>

<script>
import Flex from "@/components/flex";
import LeftRender from "./components/leftRender";
import Evaluate from "./components/evaluate";
import PersonalComposition from "./components/personalComposition";
import AttentionStudent from "./components/attentionStudent";
export default {
    components: {
      Flex,
      LeftRender,
      Evaluate,
      PersonalComposition,
      AttentionStudent
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
