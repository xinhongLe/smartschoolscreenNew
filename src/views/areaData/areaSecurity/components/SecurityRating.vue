<template>
  <module-header title="区域安全评分">
    <div class="rating_box">
      <div
        class="rating_item"
        v-for="(item, index) in ratingDataList"
        :key="index"
      >
        <span class="rating_lable" :style="{ color: item.color }">No.{{++index}}</span>
        <div class="progress_item">
          <div class="rating_info">
            <span class="school_name">{{item.schoolName}}</span>
            <span class="rating_num">{{item.progressNum}}分</span>
          </div>
          <progress-b
            :proData="item"
            :ratioNum="100"
            :islable="false"
            :isNum="false"
            :styleObject="item.styleObject"
          ></progress-b>
        </div>
      </div>
    </div>
  </module-header>
</template>
<script>
import moduleHeader from "@/components/moduleHeader.vue";
import ProgressB from "@/components/ProgressB.vue";
export default {
  components: { moduleHeader, ProgressB },
  data() {
    return {
      ratingDataList: [
        {
          schoolName: "敬文实验小学",
          progressNum: 98,
          id: 1,
          styleObject: {
            background: "linear-gradient(270deg, #FF8465 0%, #FF1700 100%)",
          },
          color: "#FA4A4F",
        },
        {
          schoolName: "中心实验小学",
          progressNum: 95,
          id: 2,
          styleObject: {
            background: 'linear-gradient(270deg, #FFC584 0%, #FF9200 100%)',
          },
            color: '#FFD01D'
        },
        {
          schoolName: "外国语小学",
          progressNum: 92,
          id: 3,
          styleObject: {
            background: 'linear-gradient(270deg, #FFF387 0%, #FFB200 100%)',
          },
          color: '#0DFFFF'
        },
        {
          schoolName: "****小学",
          progressNum: 89,
          id: 4,
          color: '#70BFFF'
        },
        {
          schoolName: "****小学",
          progressNum: 85,
          id: 5,
          color: '#70BFFF'
        },
        {
          schoolName: "****小学",
          progressNum: 82,
          id: 6,
          color: '#70BFFF'
        },
         {
          schoolName: "****小学",
          progressNum: 80,
          id: 7,
          color: '#70BFFF'
        },
        {
          schoolName: "****小学",
          progressNum: 79,
          id: 8,
          color: '#70BFFF'
        },
        {
          schoolName: "****小学",
          progressNum: 76,
          id: 9,
          color: '#70BFFF'
        },
         {
          schoolName: "****小学",
          progressNum: 72,
          id: 10,
          color: '#70BFFF'
        },
        {
          schoolName: "****小学",
          progressNum: 69,
          id: 11,
          color: '#70BFFF'
        },
        {
          schoolName: "****小学",
          progressNum: 66,
          id: 12,
          color: '#70BFFF'
        },
         {
          schoolName: "****小学",
          progressNum: 60,
          id: 13,
          color: '#70BFFF'
        },
        {
          schoolName: "****小学",
          progressNum: 60,
          id: 14,
          color: '#70BFFF'
        },
      ]
    };
  },
};
</script>
<style scoped>
.rating_box {
  width: 100%;
  height: 100%;
}
.rating_item {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.15rem 0;
}
.rating_lable {
  width: 0.7rem;
  font-size: 0.2rem;
  font-family: Bahnschrift_SemiBold;
  color: #fa4a4f;
  line-height: 19px;
}
.progress_item {
  flex: 1;
}
.rating_info {
  width: 100%;
  padding: 0.1rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.school_name {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.2;
}
.rating_num {
  font-size: 0.15rem;
  font-family: Bahnschrift;
  color: #a3bcdf;
  line-height: 1.2;
}
</style>