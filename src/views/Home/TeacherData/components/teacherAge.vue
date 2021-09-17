<template>
  <moduleHeader title="教师教龄分布情况">
    <div class="schoolData">
      <div class="progressitem" v-for="item in progressList" :key="item.id">
        <ProgressB :proData="item" :ratioNum="50000"></ProgressB>
      </div>
    </div>
  </moduleHeader>
</template>
<script>
import moduleHeader from "@/components/moduleHeader";
import ProgressB from "@/components/ProgressB.vue";
export default {
  components: {
    moduleHeader,
    ProgressB,
  },
  data() {
    return {
      progressList: [
        {
          name: "20年以上",
          progressNum: 14322,
          id: 1,
        },
        {
          name: "15-20年",
          progressNum: 10296,
          id: 2,
        },
        {
          name: "10-15年",
          progressNum: 31143,
          id: 3,
        },
        {
          name: "3-10年",
          progressNum: 42856,
          id: 4,
        },
        {
          name: "0-3年",
          progressNum: 19129,
          id: 5,
        }
      ],
    };
  }
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
  height: 100%;
  box-sizing: border-box;
  padding-left: 0.3rem;
  box-sizing: border-box;
  // margin-top: 0.3rem;
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