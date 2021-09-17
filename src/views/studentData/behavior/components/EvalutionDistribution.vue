<template>
    <moduleHeader title="课堂评价分布">
        <div class="knowledge_title">
        <div>
          <span>进度均值:</span>
          <span>5.2%</span>
        </div>
        <span>本学期教学进度</span>
      </div>
      <div class="schoolData">
        <div class="progressitem" v-for="item in progressList" :key="item.id">
          <ProgressB :proData="item" :ratioNum="100" :ispercent="true"></ProgressB>
        </div>
      </div>
    </moduleHeader>
</template>
<script>
import moduleHeader from "@/components/moduleHeader.vue";
import ProgressB from "@/components/ProgressB.vue";
export default {
    data() {
        return {
            progressList: [
        {
          name: "经常鼓励",
          progressNum: 5,
          id: 1,
        },
        {
          name: "偶尔奖励",
          progressNum: 6.1,
          id: 2,
        },
        {
          name: "几乎不鼓励",
          progressNum: 2.5,
          id: 3,
        }
      ],
        };
    },
    components:{moduleHeader,ProgressB},
    created() {},
    computed: {},
    methods: {}
};
</script>
<style lang="scss" scoped>
.knowledge_box {
  width: 100%;
  height: 100%;
  display: flex;
}
.knowledge_title{
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-top: 0.4rem ;
}
span{
    font-size: 0.125rem;
    font-weight: 400;
    color: #96ACC3;
    line-height: 1.2;
}
.h-line {
  width: 2rem;
}
.schoolData {
  width: 100%;
  height: calc(100% - 1rem);
  padding-left: 0.3rem;
  margin-top: 0.2rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.progressitem{
    flex: 1;
  }
</style>
