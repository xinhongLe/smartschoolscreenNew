<template>
  <moduleHeader title="教研热词">
    <div class="tools">
      <div
        class="item"
        :class="activeIndex === index ? 'active' : ''"
        @click="changeIndex(index)"
        v-for="(item, index) in teachingHotList"
        :key="index"
      >
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
      activeIndex: 0,
      teachingHotList: [
        {
          title: "今日热词",
        },
        {
          title: "本周热词",
        },
        {
          title: "本月热词",
        },
      ],
      progressList: [
        {
          name: "20年以上",
          progressNum: 39,
          id: 1,
        },
        {
          name: "15-20年",
          progressNum: 12,
          id: 2,
        },
        {
          name: "10-15年",
          progressNum: 46,
          id: 3,
        },
        {
          name: "3-10年",
          progressNum: 78,
          id: 4,
        },
        {
          name: "0-3年",
          progressNum: 233,
          id: 5,
        },
      ],
    };
  },
  methods: {
    changeIndex(index) {
      this.activeIndex = index;
    },
  },
};
</script>
<style lang="scss" scoped>
.tools {
  width: 70%;
  display: flex;
  justify-content: space-around;
  .item {
    width: 1rem;
    height: 0.3rem;
    border: 1px solid rgba(16, 163, 190, 0.23);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .lableName {
      font-size: 0.125rem;
      font-weight: 500;
      color: #70bfff;
    }
  }
  .active {
    background: rgba(3, 86, 176, 0.31);
    border: 1px solid rgba(16, 163, 190, 0.23);
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