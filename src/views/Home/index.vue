<template>
    <div class="container">
        <div class="header"></div>
        <div class="content">
            <div class="h-line"></div>
            <Flex :flex="2" column>
                <Flex :flex="2">
                    1
                </Flex>
                <div class="v-line"></div>
                <Flex :flex="6">
                    2
                </Flex>
                <div class="v-line"></div>
                <Flex :flex="4">
                    3
                </Flex>
                <div class="v-line"></div>
            </Flex>
            <div class="h-line"></div>
            <Flex :flex="3" column>
                <Flex :flex="4">
                    4
                </Flex>
                <div class="v-line"></div>
                <Flex :flex="5">
                    5
                </Flex>
                <div class="v-line"></div>
                <Flex :flex="4">
                    6
                </Flex>
                <div class="v-line"></div>
            </Flex>
            <div class="h-line"></div>
            <Flex :flex="2" column>
                <Flex :flex="4">
                    7
                </Flex>
                <div class="v-line"></div>
                <Flex :flex="5">
                    8
                </Flex>
                <div class="v-line"></div>
            </Flex>
            <div class="h-line"></div>
        </div>
    </div>
</template>

<script>
import Flex from "@/components/flex";

export default {
    name: "home",
    components: {
        Flex
    }
};
</script>

<style scoped>
.container {
    overflow: hidden;
    height: 100vh;
    display: flex;
    flex-direction: column;
}
.header {
}
.content {
    flex: 1;
    display: flex;
}
.v-line {
    height: 0.2rem;
}
.h-line {
    width: 0.2rem;
}
</style>
