<template>
    <div class="content">
        <div class="h-line"></div>
        <Flex :flex="1" column>
            <div class="v-line"></div>
            <SchoolMessage />
            <div class="v-line"></div>
            <PeopleLog />
            <div class="v-line"></div>
            <Device />
            <div class="v-line"></div>
        </Flex>
        <div class="h-line"></div>
        <Flex :flex="2" column>
            <div class="v-line"></div>
            <SecurityArea />
            <Flex :flex="1"> <StudyTime></StudyTime> </Flex>
            <div class="v-line"></div>
        </Flex>
        <div class="h-line"></div>
        <Flex :flex="1" column>
            <div class="v-line"></div>
            <Flex :flex="1">
                <AnomalyStatistics />
            </Flex>
            <div class="v-line"></div>
            <Flex :flex="2">
                <AnomalyTimeLine />
            </Flex>
            <div class="v-line"></div>
        </Flex>
        <div class="h-line"></div>
    </div>
</template>

<script>
import Flex from "@/components/flex";
import SchoolMessage from "./components/schoolMessage";
import PeopleLog from "./components/peopleLog";
import Device from "./components/device";
import SecurityArea from "./components/securityArea";
import StudyTime from "./components/studyTime.vue";
import AnomalyStatistics from "./components/anomalyStatistics";
import AnomalyTimeLine from "./components/anomalyTimeLine";
export default {
    components: {
        SchoolMessage,
        PeopleLog,
        Device,
        SecurityArea,
        Flex,
        StudyTime,
        AnomalyStatistics,
        AnomalyTimeLine
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