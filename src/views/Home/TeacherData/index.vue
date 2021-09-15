<template>
    <div class="content">
        <div class="h-line"></div>
        <Flex :flex="1" column>
            <countScroll></countScroll>
            <div class="v-line"></div>
            <Flex :flex="4"> 
                <TeacherAge></TeacherAge>
            </Flex>
            <div class="v-line"></div>
            <Flex :flex="5">
                <GenderRatio></GenderRatio>
            </Flex>
            <div class="v-line"></div>
        </Flex>
        <div class="h-line"></div>
        <Flex :flex="3" column>
            <!-- tab 写在这里 -->
            <div class="v-line"></div>
            <Flex :flex="1">
                <Flex :flex="2" column>
                    <Flex :flex="2">
                        <!-- 地图部分 -->
                    </Flex>
                    <div class="v-line"></div>
                    <Flex :flex="1">
                        <!-- 教师数据量变化趋势 -->
                    </Flex>
                </Flex>
                <div class="h-line"></div>
                <Flex :flex="1" column>
                    <Flex :flex="1">
                        
                    </Flex>
                    <div class="v-line"></div>
                    <Flex :flex="2">
                        <TeacherTitle></TeacherTitle>
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
import CountScroll from '@/components/countScroll.vue'
import TeacherAge from './components/teacherAge'
import TeacherTitle from './components/teacherTitle'
import GenderRatio from './components/gender-ratio.vue'
export default {
    components: {
        Flex,CountScroll,TeacherAge,TeacherTitle,GenderRatio
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