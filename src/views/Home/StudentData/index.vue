<template>
    <div class="content">
        <div class="h-line"></div>
        <Flex :flex="1" column>
            <div class="v-line"></div>
            <CountScroll></CountScroll>
            <div class="v-line"></div>
            <Flex :flex="5">
                <CitySchool></CitySchool>
            </Flex>
            <div class="v-line"></div>
            <Flex :flex="5">
               <CityClass></CityClass>
            </Flex>
        </Flex>
        <div class="h-line"></div>
        <Flex :flex="3" column>
            <div class="v-line"></div>
            <Flex :flex="1">
                <Flex :flex="2" column>
                    <Instructions></Instructions>
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
                    <Flex :flex="3">
                        <AgeRatio></AgeRatio>
                    </Flex>
                    <div class="v-line"></div>
                    <GenderRatio></GenderRatio>
                    <div class="v-line"></div>
                    <Flex :flex="4">
                        <ParentInfo></ParentInfo>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
        <div class="h-line"></div>
    </div>
</template>

<script>
import Instructions from './components/instructions.vue'
import Flex from "@/components/flex";
import CountScroll from '@/components/countScroll.vue'
import AgeRatio from './components/age-ratio.vue'
// import Regional from './components/regional.vue'
import ModuleHeader from "@/components/moduleHeader";
import Map from "./components/map";
import China from "./components/china";
import ParentInfo from  './components/parent-info.vue'
import GenderRatio from './components/gender-ratio.vue'
import CitySchool from './components/citySchool.vue'
import CityClass from './components/cityClass.vue'
export default {
    components: {
        Flex,
        ModuleHeader,
        Map,
        China,
        AgeRatio,
        ParentInfo,
        GenderRatio,
        Instructions,
        CountScroll,
        CitySchool,
        CityClass
    },
    data() {
        return {
            mapSelected: 0,
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
        };
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