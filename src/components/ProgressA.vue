<template>
  <div class="progressBox">
    <span class="progress_number">{{ progressData.progressNum }}</span>
    <div class="progress_border">
      <div
        :id="`progress${progressData.id}`"
        class="progress_cont"
        v-bind:class="{ progress_active: isActive }"
      ></div>
    </div>
    <span class="progress_name">{{ progressData.name }}</span>
  </div>
</template>
<script>
export default {
  name: "progressA",
  props: {
    proData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      isActive: true,
      timer: null,
      progressData: this.proData,
    };
  },
  mounted() {
    this.initProgress();
  },
  watch: {
    proData: {
      handler(newData) {
        clearInterval(this.timer);
        this.progressData = newData;
        this.initProgress();
      },
      deep: true,
    },
  },
  methods: {
    initProgress() {
      this.$nextTick(() => {
        let myprogress = document.getElementById(
          `progress${this.progressData.id}`
        );
        let num = (this.progressData.progressNum / 100) * 100;
        this.timer = setInterval(() => {
          myprogress.style.height = 0 + "%";
          this.isActive = false;
          setTimeout(() => {
            this.isActive = true;
            myprogress.style.height = num.toFixed(0) + "%";
          }, 100);
        }, 5000);
        setTimeout(() => {
          myprogress.style.height = num.toFixed(0) + "%";
        }, 200);
      });
    },
  },
  beforeDestroy() {
    clearInterval(this.timer);
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
    text-align: center;
  }
  .progress_number {
    text-align: center;
  }
  span {
    color: ghostwhite;
  }
  .progress_border {
    flex: 1;
    width: 50%;
    max-width: 0.25rem;
    margin: 0.1rem 0;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    background: rgba(255, 255, 255, 0.1);
  }
  .progress_cont {
    height: 0px;
    width: 80%;
    position: relative;
    background: linear-gradient(90deg, #70bfff 0%, #0dffff 100%);
  }
  .progress_cont::after {
    content: " ";
    display: block;
    height: 0.002rem;
    width: 115%;
    position: absolute;
    right: -0.015rem;
    top: 0;
    background: #ffffff;
  }
  .progress_active {
    transition: height 2s;
  }
}
</style>