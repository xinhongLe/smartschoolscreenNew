<template>
  <moduleHeader title="教师职称分布情况">
    <div class="tools">
      <div class="item" v-for="(item, index) in teacherTitle" :key="index">
        <span class="lablenum">{{ item.num }}</span>
        <span class="lableName">{{ item.title }}</span>
      </div>
    </div>
    <div class="schoolData">
      <div v-for="item in progressList" :key="item.id">
        <ProgressB :proData="item"></ProgressB>
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
          num: 472,
        },
        {
          title: "高级教师",
          num: 1472,
        },
        {
          title: "一级教师",
          num: 7472,
        },
        {
          title: "二级教师",
          num: 10472,
        },
        {
          title: "三级教师",
          num: 4472,
        },
      ],
      progressList: [
        {
          name: "正高级教师",
          progressNum: 39,
          id: 11,
        },
        {
          name: "高级教师",
          progressNum: 12,
          id: 22,
        },
        {
          name: "一级教师",
          progressNum: 46,
          id: 33,
        },
        {
          name: "二级教师",
          progressNum: 78,
          id: 44,
        },
        {
          name: "三级教师",
          progressNum: 233,
          id: 55,
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
  padding-left: 0.3rem;
  box-sizing: border-box;
  margin-top: 0.3rem;
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