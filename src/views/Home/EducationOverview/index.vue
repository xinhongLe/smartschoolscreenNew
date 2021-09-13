<template>
    <div class="content">
        <div class="h-line"></div>
        <Flex :flex="1" column>
            <!-- <Flex :flex="3"> -->
            <countScroll></countScroll>
            <!-- </Flex> -->
            <div class="v-line"></div>
            <Flex :flex="5"> </Flex>
            <div class="v-line"></div>
            <Flex :flex="5"> 3 </Flex>
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
import countScroll from "./components/countScroll";
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
        Map
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