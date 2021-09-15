<template>
    <div class="content">
        <div class="h-line"></div>
        <Flex :flex="1" column>
            <!-- 名师工作室 - 区级公开课 - - -  -->
            <TopCount></TopCount>
            <div class="v-line"></div>
            <Flex :flex="1">
                <Flex :flex="1" column>
                    <!-- 教师教研参与情况 -->
                    <Participation></Participation>
                    <div class="v-line"></div>
                    <Flex :flex="1">
                      <left-school-type></left-school-type>
                    </Flex>
                </Flex>
                <div class="h-line"></div>
                <Flex :flex="2" column>
                    <Flex :flex="2">
                        <Map />
                    </Flex>
                    <div class="v-line"></div>
                    <Flex :flex="1"> 
                        <!-- 活跃度 -->
                        <Activity></Activity>
                    </Flex>
                </Flex>
                <div class="h-line"></div>
                <Flex :flex="1" column>
                    <!-- 文字泡 --> 
                    <Flex :flex="1"> 
                        <TeachingHot>
                            <TextBubble></TextBubble>
                        </TeachingHot>
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
import Activity from './components/activity.vue'
import TopCount from './components/topCount.vue'
import TextBubble from './components/textBubble'
import Participation from './components/participation'
import Map from "./components/map";
import LeftSchoolType from "./components/leftSchoolType";
import TeachingHot from './components/teachingHot'
export default {
    components: {
        LeftSchoolType,
        Flex,
        Map,
        TeachingHot,
        Activity,
        TopCount,
        TextBubble,
        Participation
    }
};
</script>

<style scoped>
.content {
    flex: 1;
    display: flex;
}
.v-line {
    height: 0.4rem;
}
.h-line {
    width: 0.4rem;
}
</style>