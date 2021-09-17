<template>
    <div class="img-content">
        <div class="h-line"></div>
        <Flex :flex="1" column>
            <Flex :flex="1"> <CorrectRate /> </Flex>
            <div class="v-line"></div>
            <Flex :flex="1"> <Seriousness /></Flex>
            <div class="v-line"></div>
        </Flex>
        <div class="h-line"></div>
        <Flex :flex="1" column>
            <Flex :flex="1"> <CompletionStatus/></Flex>
            <div class="v-line"></div>
            <Flex :flex="1"> <TimeUse/></Flex>
            <div class="v-line"></div>
        </Flex>
        <div class="h-line"></div>
        <Flex :flex="1" column>
            <Flex :flex="1"><Coverage/> </Flex>
            <div class="v-line"></div>
            <Flex :flex="1"><HomeworkType/> </Flex>
            <div class="v-line"></div>
        </Flex>
        <div class="h-line"></div>
    </div>
</template>
<script>
import Flex from "@/components/flex";
import CorrectRate from "./components/CorrectRate.vue";
import HomeworkType from './components/HomeWorkType.vue';
import Seriousness from "./components/Seriousness.vue";
import CompletionStatus from './components/CompletionStatus.vue'
import TimeUse from './components/TimeUse.vue'
import Coverage from './components/Coverage.vue'
export default {
    data() {
        return {};
    },
    components: {
        Flex,
        CorrectRate,
        Seriousness,
        CompletionStatus,
        TimeUse,
        Coverage,HomeworkType
    },
    methods: {}
};
</script>

<style scoped>
.img-content {
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