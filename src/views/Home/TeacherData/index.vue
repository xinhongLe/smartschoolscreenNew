<template>
    <div class="content">
        <div class="h-line"></div>
        <Flex :flex="1" column>
            <countScroll></countScroll>
            <div class="v-line"></div>
            <Flex :flex="5"> 
                <TeacherAge></TeacherAge>
            </Flex>
            <div class="v-line"></div>
            <Flex :flex="5">
                <!-- <SchoolArea></SchoolArea> -->
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
                        <EducationDistribution></EducationDistribution>
                    </Flex>
                    <div class="v-line"></div>
                    <Flex :flex="2">
                        <TeacherTitle></TeacherTitle>
                    </Flex>
                    <div class="v-line"></div>
                    <Flex :flex="2">
                        <QuantityChange></QuantityChange>
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
import QuantityChange from './components/quantityChange'
import EducationDistribution from './components/educationDistribution'

export default {
    components: {
        Flex,CountScroll,TeacherAge,TeacherTitle,QuantityChange,EducationDistribution
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