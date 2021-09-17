<template>
    <div class="img-content">
        <div class="h-line"></div>
        <Flex :flex="1" column>
            <Flex :flex="1"> <ClassDistribution></ClassDistribution> </Flex>
            <div class="v-line"></div>
            <Flex :flex="1"> </Flex>
            <div class="v-line"></div>
        </Flex>
        <div class="h-line"></div>
        <Flex :flex="1" column>
            <Flex :flex="1"> </Flex>
            <div class="v-line"></div>
            <Flex :flex="1"> </Flex>
            <div class="v-line"></div>
            <Flex :flex="1"> </Flex>
            <div class="v-line"></div>
        </Flex>
        <div class="h-line"></div>
        <Flex :flex="1" column>
            <Flex :flex="5"> </Flex>
            <div class="v-line"></div>
            <Flex :flex="5"> </Flex>
            <div class="v-line"></div>
        </Flex>
        <div class="h-line"></div>
        <Flex :flex="1" column>
            <Flex :flex="5"> </Flex>
            <div class="v-line"></div>
            <Flex :flex="5"> </Flex>
            <div class="v-line"></div>
        </Flex>
        <div class="h-line"></div>
    </div>
</template>
<script>
import Flex from "@/components/flex";
import ClassDistribution from "./components/ClassDistribution.vue";
export default {
    data() {
        return {
            style: {}
        };
    },
    components: { Flex,ClassDistribution },
    methods: {
        imgLoad() {
            const imgScale =
                this.$refs.img.clientWidth / this.$refs.img.clientHeight;
            const scale =
                this.$refs.content.clientWidth /
                this.$refs.content.clientHeight;
            if (imgScale > scale) {
                this.style = { width: "100%" };
            } else {
                this.style = { height: "100%" };
            }
        }
    }
};
</script>

<style scoped>
/* .img-content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.img-content img {
    display: block;
} */
.img-content {
    flex: 1;
    display: flex;
    min-height: 0;
}
.v-line {
    height: 0.4rem;
}
.h-line {
    width: 0.4rem;
}
</style>