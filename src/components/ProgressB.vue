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
      Interval: null
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
        this.$once('hook:beforeDestroy', () => {            
            clearInterval(timer);                                    
        })
      });
    },
  }
};
</script>
<style lang="scss" scoped>
.progressBox {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.2rem auto;
  .progress_name {
    width: 0.6rem;
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
    height: 0.12rem;
    margin: 0 0.1rem;
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.1);
  }
  .progress_cont {
    width: 0px;
    height: 0.08rem;
    position: relative;
    background: linear-gradient(90deg, #70bfff 0%, #0dffff 100%);
  }
  .progress_cont::after{
    content: " ";
    display: block;
    width: 0.002rem;
    height: 0.12rem;
    position: absolute;
    right: 0;
    top: -0.015rem;
    background: #FFFFFF;
  }
  .progress_active {
    transition: width 2s;
  }
}
</style>