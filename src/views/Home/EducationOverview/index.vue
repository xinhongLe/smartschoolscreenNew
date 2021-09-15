<template>
    <div class="content">
        <div class="h-line"></div>
        <Flex :flex="1" column>
            <countScroll
                :schoolSum="schoolSum"
                :studentSum="studentSum"
                :teacherSum="teacherSum"
                :workerSum="workerSum"
            ></countScroll>
            <div class="v-line"></div>
            <Flex :flex="5"> 
                <SchoolType></SchoolType>
            </Flex>
            <div class="v-line"></div>
            <Flex :flex="5">
                <SchoolArea></SchoolArea>
            </Flex>
            <div class="v-line"></div>
        </Flex>
        <div class="h-line"></div>
        <Flex :flex="2" column>
            <Flex :flex="1">
                <Map />
            </Flex>
        </Flex>
        <div class="h-line"></div>
        <Flex :flex="1" column>
            <right-satisfaction></right-satisfaction>
            <div class="v-line"></div>
            <Flex :flex="5">
                <right-line></right-line>
            </Flex>
            <div class="v-line"></div>
            <Flex :flex="5">
                <right-table></right-table>
            </Flex>
            <div class="v-line"></div>
        </Flex>
        <div class="h-line"></div>
    </div>
</template>

<script>
import countScroll from "@/components/countScroll"
import SchoolType from "./components/schoolType"
import SchoolArea from "./components/schoolArea"
import Flex from "@/components/flex";
import Map from "./components/map";
import RightLine from "./components/rightLine";
import RightSatisfaction from "./components/rightSatisfaction";
import RightTable from "./components/rightTable";
export default {
    components: {
        RightTable,
        RightSatisfaction,
        RightLine,
        Flex,
        countScroll,
        Map,
        SchoolType,
        SchoolArea
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
    min-height: 0;
    display: flex;
    overflow: hidden;
}
.v-line {
    height: 0.4rem;
}
.h-line {
    width: 0.4rem;
}
</style>