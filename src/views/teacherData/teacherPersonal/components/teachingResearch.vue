<template>
  <module-header title="教学研讨 (年度)">
    <div class="schoolData">
      <div class="progressitem" v-for="item in progressList" :key="item.id">
        <ProgressB
          :proData="item"
          :ratioNum="1000"
          :ispercent="true"
          unit="次"
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
          progressNum: 442,
          id: 1,
        },
        {
          name: "二年级",
          progressNum: 201,
          id: 2,
        },
        {
          name: "三年级",
          progressNum: 363,
          id: 3,
        },
        {
          name: "四年级",
          progressNum: 456,
          id: 4,
        },
        {
          name: "五年级",
          progressNum: 432,
          id: 5,
        },
        {
          name: "六年级",
          progressNum: 663,
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