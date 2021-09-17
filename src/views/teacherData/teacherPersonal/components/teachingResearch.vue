<template>
  <module-header title="知识点教学进度">
    <div class="schoolData">
      <div class="progressitem" v-for="item in progressList" :key="item.id">
        <ProgressB
          :proData="item"
          :ratioNum="100"
          :ispercent="true"
        ></ProgressB>
      </div>
    </div>
  </module-header>
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
    };
  },
};
</script>
<style scoped>
.schoolData {
  width: 100%;
  height: 100%;
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