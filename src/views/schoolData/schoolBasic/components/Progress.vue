<template>
  <div class="progressBox">
    <span class="progress_name">{{ progressData.name }}</span>
    <div class="progress_border">
      <div
        :id="`pregress_${progressData.id}`"
        class="progress_cont"
        v-bind:class="{ progress_active: isActive }"
      ></div>
    </div>
    <span class="progress_number">{{ progressData.progressNum }}</span>
  </div>
</template>
<script>
export default {
  name:'progressB',
  props: {
    proData: {
      type: Object,
      default: () => {},
    },
    max: {
      type: Number,
      default: 10000
    }
  },
  data() {
    return {
      isActive: true,
      Interval: null,
      progressData:this.proData
    };
  },
  mounted() {
    this.initProgress();
  },
  watch: {
    proData: {
      handler(data) {
        console.log(data)
        this.progressData = data
        this.Interval = null
        clearInterval(this.Interval)
        this.initProgress();
      },
      deep: true,
    },
  },
  methods: {
    initProgress() {
      this.$nextTick(() => {
        let dompro = document.getElementById(`pregress_${this.progressData.id}`);
        let num = (this.progressData.progressNum / this.max) * 100;
        this.Interval = setInterval(() => {
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
  beforeDestroy(){
    this.Interval = null
    clearInterval(this.Interval)
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
    font-size: 0.15rem;
    color: #96ACC3;
  }
  .progress_number {
    width: 0.4rem;
    text-align: center;
    font-size: 0.15rem;
    color: #7AB3E2;
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