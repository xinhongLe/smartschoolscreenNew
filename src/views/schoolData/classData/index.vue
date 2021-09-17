<template>
    <div class="content">
        <div class="h-line"></div>
        <Flex :flex="3" column>
            <ClassRank />
        </Flex>
        <div class="h-line"></div>
        <Flex :flex="5" column>
            <Flex :flex="1">
                <StudentBehavior />
            </Flex>
            <Flex :flex="1"> 
                <Flex :flex="1"> 
                    <LessonTime />
                </Flex>
                <Flex :flex="1"> 
                    <LearningSituation />
                </Flex>
            </Flex>
        </Flex>
        <div class="h-line"></div>
        <Flex :flex="2" column>
            <Flex :flex="1">
                <TeachingMethod />
            </Flex>
            <div class="v-line"></div>
            <Flex :flex="1">
                <StudentList />
            </Flex>
            <div class="v-line"></div>
        </Flex>
        <div class="h-line"></div>
    </div>
</template>

<script>
import Flex from "@/components/flex";
import ClassRank from "./components/classRank";
import StudentBehavior from "./components/studentBehavior";
import LessonTime from "./components/lessonTime";
import LearningSituation from "./components/learningSituation";
import TeachingMethod from "./components/teachingMethod";
import StudentList from "./components/studentList";
export default {
    components: {
        Flex,
        ClassRank,
        StudentBehavior,
        LessonTime,
        LearningSituation,
        TeachingMethod,
        StudentList
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
