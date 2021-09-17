<template>
  <module-header title="成绩对比">
    <div class="tabItem">
      <div
        class="item"
        :class="activeIndex === index ? 'active' : ''"
        @click="changeIndex(index)"
        v-for="(item, index) in resultsTypeList"
        :key="index"
      >
        <span class="lableName">{{ item.lable }}</span>
      </div>
    </div>
    <div class="echart_box">
        <Echart :options="options" height="100%"></Echart>
    </div>
  </module-header>
</template>
<script>
import moduleHeader from "@/components/moduleHeader.vue";
import Echart from "@/components/echart";
export default {
  components: { moduleHeader, Echart },
  data() {
    return {
        activeIndex:0,
        options:{},
      resultsTypeList: [
        {
          lable: "平均分",
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
          lable: "最低分",
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
          lable: "最高分",
          number: 49,
          dataList: [
            {
              name: "0-30人",
              progressNum: 39,
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
          lable: "中位数",
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
    };
  },
  mounted() {
    const options = {
        grid: {
        left: "3%",
        right: "4%",
        bottom: "2%",
        top:"15%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        data: [ "三年级", "四年级", "五年级", "六年级"],
         axisTick: {
          show: false,
        },
      },
      yAxis: {
        type: "value",
         name: "单位:min",
        nameTextStyle: {
          color: "#96ACC3",
          align: "right",
        },
      },
      series: [
        {
          data: [84, 89, 76, 80],
          type: "bar",
           itemStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "#0DFFFF", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#70BFFF", // 100% 处的颜色
                },
              ],
              global: false, // 缺省为 false
            },
          },
           barWidth: 16, //柱图宽度
        },
      ],
    };
    this.options = options;
  },
  methods:{
      changeIndex(index) {
      this.activeIndex = index;
    //   this.progressList = this.schoolData[index].dataList;
    //    this.titleNum = this.schoolData[index].number
    },
  }
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
  .item {
    width: 1rem;
    height: 0.5rem;
    margin-right: 0.1rem;
    border: 1px solid rgba(16, 163, 190, 0.23);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // .lablenum {
    //   font-size: 0.175rem;
    //   color: #0dffff;
    //   display: block;
    // }
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
.echart_box{
    width: 100%;
    height: calc(100% - 1rem);
    // height: 100%;
    margin-top: 0.2rem;
}
</style>