<template>
    <module-border autoHeight>
        <div class="school-box">
            <div class="school-message">
                <div class="school-name">**中心小学</div>
                <div class="people-box">
                    <div class="people-item">
                        <div class="people-num">968</div>
                        <div class="people-text">总职工</div>
                    </div>
                    <div class="people-border"></div>
                    <div class="people-item">
                        <div class="people-num">792</div>
                        <div class="people-text">总教师</div>
                    </div>
                    <div class="people-border"></div>
                    <div class="people-item">
                        <div class="people-num">4567</div>
                        <div class="people-text">总学生</div>
                    </div>
                </div>
            </div>

            <div class="ani-box">
                <div ref="ani" class="ani"></div>
                <div class="score">
                    <div class="score-text">83</div>
                    <div class="score-desc">综合得分</div>
                </div>
            </div>
        </div>
    </module-border>
</template>

<script>
import ModuleBorder from "@/components/moduleBorder";
import lottie from "lottie-web";

export default {
    components: {
        ModuleBorder
    },
    data() {
        return {
            options: {}
        };
    },
    mounted() {
        this.$nextTick(() => {
            const animationData = require(`/public/jsonAnimation/rightSatisfaction/data.json`);
            this.animation = lottie.loadAnimation({
                container: this.$refs.ani,
                renderer: "svg",
                loop: true,
                autoplay: true,
                animationData: animationData
            });
        });
    },

    beforeDestroy() {
        this.animation.destroy();
    }
};
</script>

<style scoped>
.school-box {
    display: flex;
    align-items: center;
    padding: 0.2rem 0.3rem;
}

.school-message {
    flex: 1;
    min-width: 0;
}

.ani-box {
    position: relative;
    width: 1.5rem;
}

.score {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.score-text {
    font-size: 0.3rem;
    color: #0dffff;
    font-weight: 600;
    margin-top: -0.12rem;
}

.score-text:after {
    content: "分";
    font-size: 0.15rem;
}

.score-desc {
    color: #ffffff;
    font-size: 0.125rem;
}

.school-name {
    font-size: 0.4rem;
    font-weight: 600;
    color: #ffffff;
    background: linear-gradient(180deg, #6aa8de 0%, #dff9ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.people-box {
    display: flex;
    align-items: center;
    margin-left: -.28rem;
}

.people-item {
    flex: 1;
    min-width: 0;
    text-align: center;
}

.people-num {
    font-size: .275rem;
    color: #70BFFF;
    font-weight: 600;
}

.people-num:after {
    content: "人";
    font-size: .15rem;
    font-weight: 400;
    margin-left: .1rem;
}

.people-text {
    font-size: .125rem;
    color: #96ACC3;
}

.people-border {
    height: .3rem;
    border-right: .0175rem solid rgba(255, 255, 255, .1);
}
</style>