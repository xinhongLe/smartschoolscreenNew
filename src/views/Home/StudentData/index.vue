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
            <!-- <Regional></Regional> -->
            <div class="v-line"></div>
            <Flex :flex="1">
                <Flex :flex="2" column>
                    <!-- 苏州工业园区 -->
                    <!-- <Instructions></Instructions> -->
                    <div class="v-line"></div>
                    <Flex :flex="1">
                        <module-header
                            :title="['学生居住地', '学生户口(户籍)来源']"
                            :selected="mapSelected"
                            @change="(i) => (mapSelected = i)"
                        >
                            <Map v-if="mapSelected == 0" />
                            <China v-if="mapSelected == 1" />
                        </module-header>
                    </Flex>
                </Flex>
                <div class="h-line"></div>
                <Flex :flex="1" column>
                    <Flex :flex="1">
                        <AgeRatio></AgeRatio>
                    </Flex>
                    <div class="v-line"></div>
                    <Flex :flex="1">
                        <GenderRatio></GenderRatio>
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
// import Regional from './components/regional.vue'
import ModuleHeader from "@/components/moduleHeader";
import Map from "./components/map";
import China from "./components/china";
import ParentInfo from  './components/parent-info.vue'
import GenderRatio from './components/gender-ratio.vue'
export default {
    components: {
        Flex,
        ModuleHeader,
        Map,
        China,
        AgeRatio,
        ParentInfo,
        GenderRatio
    },
    data() {
        return {
            mapSelected: 1
        };
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