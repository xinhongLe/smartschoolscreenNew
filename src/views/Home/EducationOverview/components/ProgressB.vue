<template>
  <div class="progressBox">
    <span class="progress_name">{{ proDta.name }}</span>
    <div class="progress_border">
      <div
        :id="`pregress_${proDta.id}`"
        class="progress_cont"
        v-bind:class="{ progress_active: isActive }"
      ></div>
    </div>
    <span class="progress_number">{{ proDta.progressNum }}</span>
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
        setInterval(() => {
          dompro.style.width = 0 + "%";
          this.isActive = false;
          setTimeout(() => {
            this.isActive = true;
            dompro.style.width = num.toFixed(0) + "%";
          }, 100);
        }, 5000);
        setTimeout(() => {
          dompro.style.width = num.toFixed(0) + "%";
        }, 200);
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.progressBox {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.3rem auto;
  .progress_name {
    width: 0.5rem;
  }
  .progress_number {
    width: 0.5rem;
  }
  span {
    color: ghostwhite;
  }
  .progress_border {
    flex: 1;
    height: 0.1rem;
    margin: 0 0.2rem;
    background: rgba(255, 255, 255, 0.1);
  }
  .progress_cont {
    width: 0px;
    height: 100%;
    background: linear-gradient(90deg, #70bfff 0%, #0dffff 100%);
  }
  .progress_active {
    transition: width 2s;
  }
}
</style>