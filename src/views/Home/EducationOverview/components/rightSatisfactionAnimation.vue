<template>
  <div>
    <div ref="ani"></div>
  </div>
</template>

<script>
import lottie from "lottie-web";
export default {
  name: "rightSatisfactionAnimation",
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
}
</script>

<style scoped>

</style>