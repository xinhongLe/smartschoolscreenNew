<template>
    <div class="content">
        <div class="h-line"></div>
        <Flex :flex="2" column>
            <Flex :flex="1"> </Flex>
            <div class="v-line"></div>
            <Flex :flex="1"> </Flex>
            <div class="v-line"></div>
        </Flex>
        <div class="h-line"></div>
        <Flex :flex="4" column>
            <Flex :flex="1">
                <Flex :flex="1"> </Flex>
                <div class="h-line"></div>
                <Flex :flex="1"> </Flex>
                <div class="h-line"></div>
            </Flex>
            <div class="v-line"></div>
            <Flex :flex="1"> 8 </Flex>
            <div class="v-line"></div>
        </Flex>
        <div class="h-line"></div>
        <Flex :flex="3" column>
            <Flex :flex="3"> 7 </Flex>
            <div class="v-line"></div>
            <Flex :flex="5"> 8 </Flex>
            <div class="v-line"></div>
            <Flex :flex="5"> 
                <Flex :flex="1"> 
                    <HeatDistribution></HeatDistribution>
                </Flex>
                <div class="h-line"></div>
                <Flex :flex="1"> </Flex>
                <div class="h-line"></div>
            </Flex>
            <div class="v-line"></div>
        </Flex>
        <div class="h-line"></div>
    </div>
</template>

<script>
import Flex from "@/components/flex";
import HeatDistribution from './components/heatDistribution.vue'
export default {
    components: {
        Flex,
        HeatDistribution
    }
};
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