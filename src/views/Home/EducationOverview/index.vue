<template>
    <div class="content">
        <div class="h-line"></div>
        <Flex :flex="1" column>
            <Flex :flex="3"> </Flex>
            <div class="v-line"></div>
            <Flex :flex="5"> </Flex>
            <div class="v-line"></div>
            <Flex :flex="5"> 3 </Flex>
            <div class="v-line"></div>
        </Flex>
        <div class="h-line"></div>
        <Flex :flex="2" column>
            <Flex :flex="1"> 4 </Flex>
        </Flex>
        <div class="h-line"></div>
        <Flex :flex="1" column>
            <Flex :flex="3">
              <right-satisfaction></right-satisfaction>
            </Flex>
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
import Flex from "@/components/flex";
import RightLine from "./components/rightLine";
import RightSatisfaction from "./components/rightSatisfaction";
import RightTable from "./components/rightTable";
export default {
    components: {
      RightTable,
      RightSatisfaction,
      RightLine,
        Flex
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