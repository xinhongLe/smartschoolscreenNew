<template>
    <div class="content">
        <div class="v-line"></div>
        <Flex
            :flex="1"
            style="
                background: linear-gradient(180deg, rgba(13, 255, 255, 0) 0%, rgba(13, 255, 255, 0.09) 100% );
            "
        >
            <Flex :flex="1">
                <div class="platform">平<br />台</div>
            </Flex>
            <Flex :flex="4">
                <Total></Total>
            </Flex>
            <div class="h-line"></div>
            <div class="h-line"></div>
            <Flex :flex="4">
                <Usage></Usage>
            </Flex>
            <div class="h-line"></div>
            <div class="h-line"></div>
            <Flex :flex="4">
                <Distribution></Distribution>
            </Flex>
            <div class="h-line"></div>
        </Flex>
        <div class="v-line"></div>
        <Flex
            :flex="2"
            style="
                background: linear-gradient(180deg, rgba(54, 157, 243, 0) 0%, rgba(49, 153, 244, 0.21) 100% );
            "
        >
            <Flex :flex="1">
                <div class="platform platform1">教<br />学<br />环<br />节</div>
            </Flex>
            <Flex :flex="12" column>
                <Flex :flex="1">
                    <Flex :flex="4">
                        <LessonPreparation></LessonPreparation>
                    </Flex>
                    <div class="h-line"></div>
                    <div class="h-line"></div>
                    <Flex :flex="4">
                        <ClassSituation></ClassSituation>
                    </Flex>
                    <div class="h-line"></div>
                    <div class="h-line"></div>
                    <Flex :flex="4">
                        <RightBox></RightBox>
                    </Flex>
                    <div class="h-line"></div>
                </Flex>
                <div class="v-line"></div>
                <Flex :flex="1">
                    <Flex :flex="4">
                        <FooterBox1></FooterBox1>
                    </Flex>
                    <div class="h-line"></div>
                    <div class="h-line"></div>
                    <Flex :flex="4">
                        <FooterBox2></FooterBox2>
                    </Flex>
                    <div class="h-line"></div>
                    <div class="h-line"></div>
                    <Flex :flex="4">
                        <FooterBox3></FooterBox3>
                    </Flex>
                    <div class="h-line"></div>
                </Flex>
            </Flex>
        </Flex>
    </div>
</template>

<script>
import Flex from "@/components/flex";
import Total from "./components/total";
import Usage from "./components/usage";
import Distribution from "./components/distribution";
import LessonPreparation from "./components/lessonPreparation";
import FooterBox1 from "./components/footerBox1";
import FooterBox2 from "./components/footerBox2";
import FooterBox3 from "./components/footerBox3";
import ClassSituation from "./components/classSituation";
import RightBox from "./components/rightBox";

export default {
    components: {
        Flex,
        Total,
        Usage,
        Distribution,
        LessonPreparation,
        FooterBox1,
        FooterBox2,
        FooterBox3,
        ClassSituation,
        RightBox
    },
    data() {
        return {};
    }
};
</script>

<style scoped>
.content {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    box-sizing: border-box;
    background: #000916;
    z-index: 101;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.v-line {
    height: 0.4rem;
}
.h-line {
    width: 0.4rem;
}
.platform {
    width: 50px;
    height: 144px;
    margin: auto;
    border: 1px solid rgba(16, 163, 190, 0.4);
    font-size: 24px;
    font-weight: 600;
    color: #0dffff;
    line-height: 33px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}
.platform1 {
    height: 208px;
}
</style>
