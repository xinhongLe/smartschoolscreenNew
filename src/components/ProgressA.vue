<template>
  <div class="progressBox">
    <span class="progress_number">{{ proDta.progressNum }}</span>
    <div class="progress_border">
      <div
        :id="`pregress_${proDta.id}`"
        class="progress_cont"
        v-bind:class="{ progress_active: isActive }"
      ></div>
    </div>
    <span class="progress_name">{{ proDta.name }}</span>
  </div>
</template>
<script>
export default {
  props: {
    proDta: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      isActive: true,
      Interval: null,
    };
  },
  mounted() {
    this.initProgress();
  },
  watch: {
    proDta: {
      handler(data) {
        console.log("data", data);
        this.initProgress();
      },
      deep: true,
    },
  },
  methods: {
    initProgress() {
      this.$nextTick(() => {
        let dompro = document.getElementById(`pregress_${this.proDta.id}`);
        let num = (this.proDta.progressNum / 1000) * 100;
        let timer = setInterval(() => {
          dompro.style.height = 0 + "%";
          this.isActive = false;
          setTimeout(() => {
            this.isActive = true;
            dompro.style.height = num.toFixed(0) + "%";
          }, 100);
        }, 5000);
        setTimeout(() => {
          dompro.style.height = num.toFixed(0) + "%";
        }, 200);
        this.$once("hook:beforeDestroy", () => {
          clearInterval(timer);
        });
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.progressBox {
  height: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .progress_name {
    width: 0.6rem;
    text-align: center;
  }
  .progress_number {
    width: 0.4rem;
    text-align: center;
  }
  span {
    color: ghostwhite;
  }
  .progress_border {
    flex: 1;
    width: 0.12rem;
    margin: 0.1rem 0;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    background: rgba(255, 255, 255, 0.1);
  }
  .progress_cont {
    height: 0px;
    width: 0.08rem;
    position: relative;
    background: linear-gradient(90deg, #70bfff 0%, #0dffff 100%);
  }
  .progress_cont::after {
    content: " ";
    display: block;
    height: 0.002rem;
    width: 0.12rem;
    position: absolute;
    right: -0.02rem;
    top: 0;
    background: #ffffff;
  }
  .progress_active {
    transition: height 2s;
  }
}
</style>