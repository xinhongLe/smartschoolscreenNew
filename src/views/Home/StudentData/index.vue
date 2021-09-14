<template>
    <div class="content">
        <div class="h-line"></div>
        <Flex :flex="1" column>
            <!-- <countScroll></countScroll> -->
            <div class="v-line"></div>
            <Flex :flex="5"> 
                <!-- <SchoolType></SchoolType> -->
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
            <Regional></Regional>
            <div class="v-line"></div>
            <Flex :flex="1">
                <Flex :flex="2" column>
                    <!-- 苏州工业园区 -->
                    <!-- <Instructions></Instructions> -->
                    <div class="v-line"></div>
                    <Flex :flex="1">
                        <!-- 地图部分 -->
                    </Flex>
                </Flex>
                <div class="h-line"></div>
                <Flex :flex="1" column>
                    <Flex :flex="1">
                        <AgeRatio></AgeRatio>
                    </Flex>
                    <div class="v-line"></div>
                    <Flex :flex="1">
                        
                    </Flex>
                    <div class="v-line"></div>
                    <Flex :flex="1">
                        <ParentInfo></ParentInfo>
                    </Flex>
                </Flex>
            </Flex>
            <div class="v-line"></div>
        </Flex>
        <div class="h-line"></div>
    </div>
</template>

<script>
// import Instructions from './components/instructions.vue'
import Flex from "@/components/flex";
import AgeRatio from './components/age-ratio.vue'
import Regional from './components/regional.vue'
import ParentInfo from  './components/parent-info.vue'
export default {
    components: {
        Flex,Regional,AgeRatio,ParentInfo
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