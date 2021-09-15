<template>
  <moduleHeader title="教师职称分布情况">
    <div class="tools">
      <div class="item" v-for="(item, index) in teacherTitle" :key="index">
        <span class="lablenum">{{ item.num }}</span>
        <span class="lableName">{{ item.title }}</span>
      </div>
    </div>
    <div class="schoolData">
      <div class="progressitem" v-for="item in progressList" :key="item.id">
        <ProgressB :proData="item" :max="50000"></ProgressB>
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
      teacherTitle: [
        {
          title: "正高级",
          num: 72,
        },
        {
          title: "高级教师",
          num: 18762,
        },
        {
          title: "一级教师",
          num: 47210,
        },
        {
          title: "二级教师",
          num: 33212,
        },
        {
          title: "三级教师",
          num: 14411,
        },
      ],
      progressList: [
        {
          name: "正高级教师",
          progressNum: 72,
          id: 't1',
        },
        {
          name: "高级教师",
          progressNum: 18762,
          id: 't2',
        },
        {
          name: "一级教师",
          progressNum: 47210,
          id: 't3',
        },
        {
          name: "二级教师",
          progressNum: 33212,
          id: 't4',
        },
        {
          name: "三级教师",
          progressNum: 14411,
          id: 't5',
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.tools {
  width: 100%;
  display: flex;
  margin: 0.2rem 0;
  justify-content: space-between;
  .item {
    width: 1rem;
    height: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .lablenum {
      font-size: 0.175rem;
      color: #0dffff;
      display: block;
      line-height: 2;
    }
    .lableName {
      font-size: 0.125rem;
      color: #96acc3;
    }
  }
}
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
  height: calc(100% - 1rem);
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