<template>
  <ModuleBorder>
    <div class="countToBox">
      <div class="city_info">
        <span class="city_name" @click="onstart">苏州市</span>
        <div class="schoolsum">
          <CountTo
            ref="example1"
            class="school_count"
            :start-val="CountOne.startval"
            :end-val="998"
            :duration="3000"
          ></CountTo>
          <span class="school_text">学校总数</span>
        </div>
      </div>
      <div class="personnel_info">
        <div class="personnel">
          <CountTo
            ref="example2"
            class="personnel_sum"
            :start-val="0"
            :end-val="1000"
            :duration="3000"
          ></CountTo>
          <span class="personnel_text">总学生人数</span>
        </div>
        <div class="personnel">
          <CountTo
            ref="example3"
            class="personnel_sum"
            :start-val="0"
            :end-val="1000"
            :duration="3000"
          ></CountTo>
          <span class="personnel_text">总教师人数</span>
        </div>
        <div class="personnel">
          <CountTo
            ref="example4"
            class="personnel_sum"
            :start-val="0"
            :end-val="1000000"
            :duration="3000"
          ></CountTo>
          <span class="personnel_text">总职工人数</span>
        </div>
      </div>
    </div>
  </ModuleBorder>
</template>
<script>
import ModuleBorder from "@/components/moduleBorder";
import CountTo from "vue-count-to";
export default {
  components: {
    CountTo,
    ModuleBorder,
  },
  data() {
    return {
      CountOne: {
        startval: 0,
        endval: 1000,
        duration: 3000,
      },
    };
  },
  mounted() {
    window.setInterval(() => {
      setTimeout(() => {
        this.$refs.example1.start();
        this.$refs.example2.start();
        this.$refs.example3.start();
        this.$refs.example4.start();
      }, 0);
    }, 20000);
  },
  methods: {
    onstart() {
      this.$refs.example3.start();
    },
  },
};
</script>
<style lang="scss" scoped>
span {
  display: block;
}
.countToBox {
  // width: 4.8rem;
  // height: 1.7rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .city_info {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.25rem;
    .city_name {
      flex: 2;
      font-size: 0.5rem;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #ffffff;
      line-height: 0.7rem;
      background: linear-gradient(180deg, #6aa8de 0%, #dff9ff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-left: 0.3rem;
    }
    .schoolsum {
      flex: 1;
      margin-left: 0.5rem;
    }
    .school_count {
      font-size: 0.3rem;
      font-family: Bahnschrift_SemiBold;
      color: #0dffff;
      margin-bottom: 0.05rem;
      line-height: 0.3625rem;
    }
    .school_text {
      font-size: 0.15rem;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #edf2f8;
      line-height: 0.2125rem;
    }
  }
  .personnel_info {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .personnel:not(:last-child) {
      border-right: 1px solid rgba(255, 255, 255, 0.1);
    }
    .personnel {
      flex: 1;
      display: flex;
      flex-direction: column;
      margin-left: 0.3rem;
      .personnel_sum {
        font-size: 0.25rem;
        font-family: Bahnschrift;
        color: #70bfff;
        line-height: 0.3rem;
        margin-bottom: 0.1rem;
      }
      .personnel_text {
        font-size: 0.125rem;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #96acc3;
        line-height: 0.175rem;
      }
    }
  }
}
</style>