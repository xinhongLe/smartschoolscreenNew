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
      <div v-for="item in progressList" :key="item.id">
        <ProgressB :proDta="item"></ProgressB>
      </div>
    </div>
  </moduleHeader>
</template>
<script>
import moduleHeader from "@/components/moduleHeader";
import ProgressB from "./ProgressB.vue";
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
          progressNum: 78,
          id: 4,
        },
        {
          name: "小学",
          progressNum: 233,
          id: 5,
        },
        {
          name: "幼儿园",
          progressNum: 456,
          id: 6,
        },
      ],
    };
  },
  mounted() {
    window.setInterval(() => {
      setTimeout(() => {
        this.$refs.example1.start();
        this.$refs.example2.start();
      }, 0);
    }, 20000);
  },
};
</script>
<style lang="scss" scoped>
.personnelBox {
  width: 60%;
  margin-top: 0.2rem;
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
  padding-left: 0.3rem;
  box-sizing: border-box;
  margin-top: 0.3rem;
  .progressBox {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
      transition: width 3s 1s;
      //   animation: linear 2s 1 normal forwards running moveProfress;
    }
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