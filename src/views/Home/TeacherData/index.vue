<template>
    <div class="content">
        <div class="h-line"></div>
        <Flex :flex="1" column>
            <div class="v-line"></div>
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
            <div class="v-line"></div>
            <Flex :flex="1">
                <Flex :flex="2" column>
                    <Map />
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
import GenderRatio from './components/gender-ratio.vue'
import Map from "./components/map";
export default {
    components: {
        Flex,CountScroll,TeacherAge,TeacherTitle,GenderRatio,Map,QuantityChange,EducationDistribution
    },
    data() {
        return {
            schoolSum: {
                startval: 0,
                endval: 1646,
                duration: 3000
            },
            studentSum: {
                startval: 0,
                endval: 1767744,
                duration: 3000
            },
            teacherSum: {
                startval: 0,
                endval: 117746,
                duration: 3000,
            },
            workerSum: {
                startval: 0,
                endval: 15266,
                duration: 3000,
            }
        }
    }
};
</script>

<style scoped>
.content {
    flex: 1;
    display: flex;
    min-height: 0;
    overflow: hidden;
}
.v-line {
    height: 0.4rem;
}
.h-line {
    width: 0.4rem;
}
</style>