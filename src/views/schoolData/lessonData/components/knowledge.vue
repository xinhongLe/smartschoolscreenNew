<template>
  <moduleHeader title="知识点教学进度">
    <div class="knowledge_title">
      <div>
        <span>进度均值:</span>
        <span class="proNum">63%</span>
      </div>
      <span>本学期时间进度</span>
    </div>
    <div class="schoolData">
      <div class="progressitem" v-for="item in progressList" :key="item.id">
        <ProgressB :proData="item" :ispercent="true"></ProgressB>
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
          name: "一年级",
          progressNum: 39,
          id: 1,
        },
        {
          name: "二年级",
          progressNum: 12,
          id: 2,
        },
        {
          name: "三年级",
          progressNum: 46,
          id: 3,
        },
        {
          name: "四年级",
          progressNum: 78,
          id: 4,
        },
        {
          name: "五年级",
          progressNum: 233,
          id: 5,
        },
        {
          name: "六年级",
          progressNum: 12,
          id: 6,
        },
        {
          name: "七年级",
          progressNum: 46,
          id: 7,
        },
        {
          name: "八年级",
          progressNum: 78,
          id: 8,
        },
        {
          name: "九年级",
          progressNum: 233,
          id: 9,
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.knowledge_title {
  width: 100%;
  padding-left: 0.3rem;
  margin: 0.2rem 0;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  span{
    font-size: 0.125rem;
    color:rgba(150, 172, 195, .7)
  }
  .proNum{    
    color: #0DFFFF;
    margin-left: 0.1rem;
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
  .progressitem {
    margin: 0.1rem 0;
  }
}
</style>