<template>
  <div class="knowledge_box">
    <module-header title="知识点教学进度">
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
    </module-header>
    <div class="h-line"></div>
    <module-header title="知识点掌握率">
      <div class="knowledge_title">
        <div>
          <span>掌握均值:</span>
          <span>87.8%</span>
        </div>
        <span>本学期教学进度</span>
      </div>
       <div class="schoolData">
        <div class="progressitem" v-for="item in MtrProgressList" :key="item.id">
          <ProgressB :proData="item" :styleObject="item.styleObject" :ratioNum="100" :ispercent="true"></ProgressB>
        </div>
      </div>
    </module-header>
  </div>
</template>
<script>
import ModuleHeader from "@/components/moduleHeader.vue";
import ProgressB from "@/components/ProgressB.vue";
export default {
  components: { ModuleHeader, ProgressB },
  data() {
    return {
      progressList: [
        {
          name: "一年级",
          progressNum: 5,
          id: 1,
        },
        {
          name: "二年级",
          progressNum: 6.1,
          id: 2,
        },
        {
          name: "三年级",
          progressNum: 2.5,
          id: 3,
        },
        {
          name: "四年级",
          progressNum: 7.1,
          id: 4,
        },
        {
          name: "五年级",
          progressNum: 6.7,
          id: 5,
        },
        {
          name: "六年级",
          progressNum: 3,
          id: 6,
        },
      ],

      MtrProgressList: [
        {
          name: "一年级",
          progressNum: 85,
          id: 'mtr1',
           styleObject: {
            background: "linear-gradient(270deg, #FC5AD3 0%, #B921D0 100%)",
          },
        },
        {
          name: "二年级",
          progressNum: 86.1,
          id: 'mtr2',
           styleObject: {
            background: "linear-gradient(270deg, #FC5AD3 0%, #B921D0 100%)",
          },
        },
        {
          name: "三年级",
          progressNum: 92.5,
          id: 'mtr3',
           styleObject: {
            background: "linear-gradient(270deg, #FC5AD3 0%, #B921D0 100%)",
          },
        },
        {
          name: "四年级",
          progressNum: 87.1,
          id: 'mtr4',
           styleObject: {
            background: "linear-gradient(270deg, #FC5AD3 0%, #B921D0 100%)",
          },
        },
        {
          name: "五年级",
          progressNum: 86.7,
          id: 'mtr5',
           styleObject: {
            background: "linear-gradient(270deg, #FC5AD3 0%, #B921D0 100%)",
          },
        },
        {
          name: "六年级",
          progressNum: 89.3,
          id: 'mtr6',
           styleObject: {
            background: "linear-gradient(270deg, #FC5AD3 0%, #B921D0 100%)",
          },
        },
      ],
    };
  },
};
</script>
<style scoped>
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
  height: calc(100% - 1.3rem);
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