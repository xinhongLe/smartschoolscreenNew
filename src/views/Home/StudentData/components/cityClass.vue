<template>
  <moduleHeader title="全市平均班额">
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
          number: "1279",
          dataList: [
            {
              name: "500人以下",
              progressNum: 1000,
              id: 1,
            },
            {
              name: "500-1000人",
              progressNum: 712,
              id: 2,
            },
            {
              name: "1001-2000人",
              progressNum: 646,
              id: 3,
            },
            {
              name: "2001-3000人",
              progressNum: 378,
              id: 4,
            },
            {
              name: "3001-4000人",
              progressNum: 533,
              id: 5,
            },
            {
              name: "4001人以上",
              progressNum: 794,
              id: 6,
            },
          ],
        },
        {
          lable: "小学(人)",
          number: "1379",
          dataList: [
            {
              name: "高职",
              progressNum: 1000,
              id: 1,
            },
            {
              name: "中职",
              progressNum: 312,
              id: 2,
            },
            {
              name: "高中",
              progressNum: 646,
              id: 3,
            },
            {
              name: "初中",
              progressNum: 278,
              id: 4,
            },
            {
              name: "小学",
              progressNum: 533,
              id: 5,
            },
            {
              name: "幼儿园",
              progressNum: 1000,
              id: 6,
            },
          ],
        },
        {
          lable: "初中(人)",
          number: "989",
          dataList: [
            {
              name: "高职",
              progressNum:839,
              id: 1,
            },
            {
              name: "中职",
              progressNum: 312,
              id: 2,
            },
            {
              name: "高中",
              progressNum: 646,
              id: 3,
            },
            {
              name: "初中",
              progressNum: 678,
              id: 4,
            },
            {
              name: "小学",
              progressNum: 433,
              id: 5,
            },
            {
              name: "幼儿园",
              progressNum: 656,
              id: 6,
            },
          ],
        },
        {
          lable: "高中(人)",
          number: "1139",
          dataList: [
            {
              name: "高职",
              progressNum: 439,
              id: 1,
            },
            {
              name: "中职",
              progressNum: 512,
              id: 2,
            },
            {
              name: "高中",
              progressNum: 446,
              id: 3,
            },
            {
              name: "初中",
              progressNum: 678,
              id: 4,
            },
            {
              name: "小学",
              progressNum: 833,
              id: 5,
            },
            {
              name: "幼儿园",
              progressNum: 756,
              id: 6,
            },
          ],
        },
      ],
      activeIndex: 0,
      progressList: [
        {
          name: "高职",
          progressNum: 399,
          id: 1,
        },
        {
          name: "中职",
          progressNum: 112,
          id: 2,
        },
        {
          name: "高中",
          progressNum: 446,
          id: 3,
        },
        {
          name: "初中",
          progressNum: 6278,
          id: 4,
        },
        {
          name: "小学",
          progressNum: 533,
          id: 5,
        },
        {
          name: "幼儿园",
          progressNum: 256,
          id: 6,
        },
      ],
    };
  },
  mounted() {
    this.progressList = this.schoolData[0].dataList;
  },
  methods: {
    changeIndex(index) {
      this.activeIndex = index;
      this.progressList = this.schoolData[index].dataList;
    },
  },
};
</script>
<style lang="scss" scoped>
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