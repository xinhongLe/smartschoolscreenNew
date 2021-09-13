<template>
    <div class="title-header">
        <div class="title-bg" ref="ani"></div>
        <div class="title">{{ title }}</div>
    </div>
</template>

<script>
import lottie from "lottie-web";
export default {
    props: {
        title: {
            type: String,
            default: ""
        }
    },

    mounted() {
        this.$nextTick(() => {
            const animationData = require(`/public/jsonAnimation/header/data.json`);
            this.animation = lottie.loadAnimation({
                container: this.$refs.ani,
                renderer: "svg",
                loop: true,
                autoplay: true,
                animationData: animationData
            });
        });
    }
};
</script>

<style scoped>
.title-header {
    position: relative;
}
.title {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 0.35rem;
    font-weight: 600;
    letter-spacing: 1px;
    background: linear-gradient(to bottom, #6aa8de 0%, #dff9ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>