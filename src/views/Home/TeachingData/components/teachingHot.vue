<template>
  <moduleHeader title="教研热词">
    <slot></slot>
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
      <div class="progressitem" v-for="item in progressList" :key="item.id">
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
          progressData: [
            {
              name: "疫情",
              progressNum: 139,
              id: 1,
            },
            {
              name: "开学",
              progressNum: 112,
              id: 2,
            },
            {
              name: "爱学仕",
              progressNum: 146,
              id: 3,
            },
            {
              name: "上课",
              progressNum: 178,
              id: 4,
            },
            {
              name: "作业",
              progressNum: 233,
              id: 5,
            },
            {
              name: "在线学习",
              progressNum: 139,
              id: 6,
            },
            {
              name: "线上线下",
              progressNum: 112,
              id: 7,
            },
            {
              name: "白班",
              progressNum: 146,
              id: 8,
            },
            {
              name: "互动",
              progressNum: 178,
              id: 9,
            },
            {
              name: "教材",
              progressNum: 233,
              id: 10,
            },
          ],
        },
        {
          title: "本周热词",
          progressData: [
            {
              name: "疫情",
              progressNum: 239,
              id: 1,
            },
            {
              name: "开学",
              progressNum: 312,
              id: 2,
            },
            {
              name: "爱学士",
              progressNum: 246,
              id: 3,
            },
            {
              name: "上课",
              progressNum: 278,
              id: 4,
            },
            {
              name: "作业",
              progressNum: 233,
              id: 5,
            },
             {
              name: "白班",
              progressNum: 139,
              id: 6,
            },
            {
              name: "在线学习",
              progressNum: 112,
              id: 7,
            },
            {
              name: "互动",
              progressNum: 146,
              id: 8,
            },
            {
              name: "教材",
              progressNum: 178,
              id: 9,
            },
            {
              name: "线上线下",
              progressNum: 233,
              id: 10,
            },
          ],
        },
        {
          title: "本月热词",
          progressData: [
            {
              name: "疫情",
              progressNum: 239,
              id: 1,
            },
            {
              name: "爱学士",
              progressNum: 312,
              id: 2,
            },
            {
              name: "开学",
              progressNum: 346,
              id: 3,
            },
            {
              name: "上课",
              progressNum: 378,
              id: 4,
            },
            {
              name: "白班",
              progressNum: 633,
              id: 5,
            },
             {
              name: "线上线下",
              progressNum: 139,
              id: 6,
            },
            {
              name: "教材",
              progressNum: 112,
              id: 7,
            },
            {
              name: "在线学习",
              progressNum: 146,
              id: 8,
            },
            {
              name: "作业",
              progressNum: 178,
              id: 9,
            },
            {
              name: "互动",
              progressNum: 233,
              id: 10,
            },
          ],
        },
      ],
      progressList: [],
    };
  },
  mounted() {
    this.progressList = this.teachingHotList[0].progressData;
  },
  methods: {
    changeIndex(index) {
      this.activeIndex = index;
      this.progressList = this.teachingHotList[index].progressData;
    },
  },
};
</script>
<style lang="scss" scoped>
.tools {
  width: 70%;
  margin-bottom: 0.2rem;
  margin-left: 0.15rem;
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
  height: calc(100% - 1rem);
  padding-left: 0.3rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .progressitem {
    margin: 0.12rem 0;
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