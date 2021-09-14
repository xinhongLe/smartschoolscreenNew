<template>
    <div class="content">
        <div class="h-line"></div>
        <Flex :flex="1" column>
            <!-- 名师工作室 - 区级公开课 - - -  -->
            <div class="v-line"></div>
            <Flex :flex="1">
                <Flex :flex="1" column>
                    <!-- 教师教研参与情况 -->
                    <div class="v-line"></div>
                    <Flex :flex="1"> </Flex>
                </Flex>
                <div class="h-line"></div>
                <Flex :flex="2" column>
                    <Flex :flex="2">
                        <Map />
                    </Flex>
                    <div class="v-line"></div>
                    <Flex :flex="1"> 
                        <!-- 活跃度 -->
                    </Flex>
                </Flex>
                <div class="h-line"></div>
                <Flex :flex="1" column>
                    <!-- 文字泡 -->
                    <div class="v-line"></div>
                    <Flex :flex="1"> 8 </Flex>
                </Flex>
            </Flex>
            <div class="v-line"></div>
        </Flex>
        <div class="h-line"></div>
    </div>
</template>

<script>
import Flex from "@/components/flex";
import Map from "./components/map";
export default {
    components: {
        Flex,
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