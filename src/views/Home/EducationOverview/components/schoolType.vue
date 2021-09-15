<template>
  <moduleHeader title="学校类型分布">
    <div class="personnelBox">
      <div class="personnel">
        <CountTo
          ref="example1"
          class="personnel_sum"
          :start-val="0"
          :end-val="73"
          :duration="3000"
        ></CountTo>
        <span class="personnel_text">民办学校</span>
      </div>
      <div class="personnel">
        <CountTo
          ref="example2"
          class="personnel_sum"
          :start-val="0"
          :end-val="905"
          :duration="3000"
        ></CountTo>
        <span class="personnel_text">公办学校</span>
      </div>
    </div>
    <div class="schoolData">
      <div class="progressitem" v-for="item in progressList" :key="item.id">
        <ProgressB :proData="item"></ProgressB>
      </div>
    </div>
  </moduleHeader>
</template>
<script>
import moduleHeader from "@/components/moduleHeader";
import ProgressB from "@/components/ProgressB.vue";
import CountTo from "vue-count-to";
export default {
  components: {
    moduleHeader,
    CountTo,
    ProgressB,
  },
  data() {
    return {
      progressList: [
        {
          name: "高职",
          progressNum: 39,
          id: 1,
        },
        {
          name: "中职",
          progressNum: 12,
          id: 2,
        },
        {
          name: "高中",
          progressNum: 46,
          id: 3,
        },
        {
          name: "初中",
          progressNum: 77,
          id: 4,
        },
        {
          name: "小学",
          progressNum: 230,
          id: 5,
        },
        {
          name: "幼儿园",
          progressNum: 458,
          id: 6,
        },
      ],
    };
  },
  mounted() {
    let timer = setInterval(() => {
      setTimeout(() => {
        this.$refs.example1.start();
        this.$refs.example2.start();
      }, 0);
    }, 20000);
    this.$once("hook:beforeDestroy", () => {
      clearInterval(timer);
    });
  },
};
</script>
<style lang="scss" scoped>
.personnelBox {
  width: 60%;
  margin: 0.2rem 0;
  display: flex;
  .personnel:first-child {
    border-right: 1px solid rgba(255, 255, 255, 0.1);
  }
  .personnel {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-left: 0.3rem;
    .personnel_sum {
      font-size: 0.3rem;
      font-family: Bahnschrift_SemiBold;
      color: #0dffff;
      margin-bottom: 0.05rem;
      line-height: 0.3625rem;
    }
    .personnel_text {
      font-size: 0.15rem;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #edf2f8;
      line-height: 0.2125rem;
    }
  }
}

.schoolData {
  width: 100%;
  height: calc(100% - 1.3rem);
  padding-left: 0.3rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .progressitem{
    flex: 1;
  }
}

@keyframes moveProfress {
  0% {
    width: 0;
  }
  100% {
    width: 10%;
  }
}
</style>