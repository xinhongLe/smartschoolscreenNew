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
            <Flex :flex="3"> 7 </Flex>
            <div class="v-line"></div>
            <Flex :flex="5"> 8 </Flex>
            <div class="v-line"></div>
            <Flex :flex="5"> 8 </Flex>
            <div class="v-line"></div>
        </Flex>
        <div class="h-line"></div>
    </div>
</template>

<script>
import Flex from "@/components/flex";
export default {
    components: {
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