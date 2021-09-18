<template>
    <moduleHeader title="课堂评价分布">
        <div class="knowledge_title">
        <div>
          <span>评价覆盖率:</span>
          <span class="proNum">73%</span>
        </div>
      </div>
      <div class="schoolData">
        <div class="progressitem" v-for="item in progressList" :key="item.id">
          <ProgressB :proData="item" :ratioNum="100" :isNum="false"></ProgressB>
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
          progressNum: 45,
          id: 1,
        },
        {
          name: "偶尔奖励",
          progressNum:56,
          id: 2,
        },
        {
          name: "几乎不鼓励",
          progressNum: 35,
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
    color: rgba(150, 172, 195, .7);
    line-height: 1.2;
}
.proNum{
  color: #0DFFFF;
  margin-left: 0.1rem;
}
.h-line {
  width: 2rem;
}
.schoolData {
  width: 100%;
  height: calc(100% - 0.6rem);
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
