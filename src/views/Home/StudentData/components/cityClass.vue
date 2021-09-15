<template>
  <div class="box">
    <moduleHeader title="全市平均班额">
    <div slot="header-right">{{titleNum}}人</div>
    <div class="tabItem">
      <div
        class="item"
        :class="activeIndex === index ? 'active' : ''"
        @click="changeIndex(index)"
        v-for="(item, index) in schoolData"
        :key="index"
      >
        <span class="lablenum">{{ item.number }}</span>
        <span class="lableName">{{ item.lable }}</span>
      </div>
    </div>
    <div class="schoolData">
      <div class="progressitem" v-for="item in progressList" :key="item.id">
        <ProgressA :proData="item"></ProgressA>
      </div>
    </div>
  </moduleHeader>
  </div>
  
</template>
<script>
import moduleHeader from "@/components/moduleHeader";
import ProgressA from "@/components/ProgressA";
export default {
  components: {
    moduleHeader,
    ProgressA,
  },
  data() {
    return {
      schoolData: [
        {
          lable: "幼儿园(人)",
          number: 37,
          dataList: [
            {
              name: "0-30人",
              progressNum: 11,
              id: 1,
            },
            {
              name: "31-40人",
              progressNum: 72,
              id: 2,
            },
            {
              name: "41-45人",
              progressNum: 53,
              id: 3,
            },
            {
              name: "41-50人",
              progressNum: 46,
              id: 4,
            },
            {
              name: "51-55人",
              progressNum: 38,
              id: 5,
            },
            {
              name: "56人以上",
              progressNum: 74,
              id: 6,
            },
          ],
        },
        {
          lable: "小学(人)",
          number: 46,
          dataList: [
            {
              name: "0-30人",
              progressNum: 21,
              id: 1,
            },
            {
              name: "31-40人",
              progressNum: 12,
              id: 2,
            },
            {
              name: "41-45人",
              progressNum: 46,
              id: 3,
            },
            {
              name: "46-50人",
              progressNum: 28,
              id: 4,
            },
            {
              name: "51-55人",
              progressNum: 53,
              id: 5,
            },
            {
              name: "56人以上",
              progressNum: 21,
              id: 6,
            },
          ],
        },
        {
          lable: "初中(人)",
          number: 49,
          dataList: [
            {
              name: "0-30人",
              progressNum:39,
              id: 1,
            },
            {
              name: "31-40人",
              progressNum: 12,
              id: 2,
            },
            {
              name: "41-45人",
              progressNum: 46,
              id: 3,
            },
            {
              name: "46-50人",
              progressNum: 78,
              id: 4,
            },
            {
              name: "51-55人",
              progressNum: 33,
              id: 5,
            },
            {
              name: "56人以上",
              progressNum: 56,
              id: 6,
            },
          ],
        },
        {
          lable: "高中(人)",
          number: 53,
          dataList: [
            {
              name: "0-30人",
              progressNum: 29,
              id: 1,
            },
            {
              name: "31-40人",
              progressNum: 22,
              id: 2,
            },
            {
              name: "41-45人",
              progressNum: 56,
              id: 3,
            },
            {
              name: "46-50人",
              progressNum: 68,
              id: 4,
            },
            {
              name: "51-55人",
              progressNum: 23,
              id: 5,
            },
            {
              name: "56人以上",
              progressNum: 26,
              id: 6,
            },
          ],
        },
      ],
      activeIndex: 0,
      progressList: [],
      titleNum:0
    };
  },
  mounted() {
    this.progressList = this.schoolData[0].dataList;
    this.titleNum = 45
  },
  methods: {
    changeIndex(index) {
      this.activeIndex = index;
      this.progressList = this.schoolData[index].dataList;
       this.titleNum = this.schoolData[index].number
    },
  },
};
</script>
<style lang="scss" scoped>
.box{
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 100;
}
.tabItem {
  width: 100%;
  padding-left: 0.1rem;
  margin-top: 0.2rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .item {
    width: 1rem;
    height: 0.5rem;
    border: 1px solid rgba(16, 163, 190, 0.23);
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
  .active {
    background: rgba(3, 86, 176, 0.31);
    border: 1px solid rgba(16, 163, 190, 0.23);
    color: #6fe5f7;
    white-space: nowrap;
  }
}
.schoolData {
  width: 100%;
  padding-left: 0.3rem;
  box-sizing: border-box;
  margin-top: 0.3rem;
  display: flex;
  .progressitem {
    flex: 1;
  }
}
</style>