<template>
  <moduleHeader title="市资源排行">
    <div class="schoolData">
      <div class="progressitem" v-for="item in progressList" :key="item.id">
        <ProgressB :proData="item"></ProgressB>
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
          name: "姑苏区",
          progressNum: 39,
          id: 1,
        },
        {
          name: "工业园区",
          progressNum: 12,
          id: 2,
        },
        {
          name: "吴中区",
          progressNum: 46,
          id: 3,
        },
        {
          name: "相城区",
          progressNum: 78,
          id: 4,
        },
        {
          name: "昆山市",
          progressNum: 233,
          id: 5,
        },
         {
          name: "常熟市",
          progressNum: 12,
          id: 6,
        },
        {
          name: "吴江区",
          progressNum: 46,
          id: 7,
        },
        {
          name: "虎丘区",
          progressNum: 78,
          id: 8,
        },
        {
          name: "太仓市",
          progressNum: 233,
          id: 9,
        },
        {
          name: "张家港市",
          progressNum: 233,
          id: 10,
        }
      ],
    };
  }
};
</script>
<style lang="scss" scoped>
.personnelBox {
  width: 60%;
  margin-top: 0.2rem;
  display: flex;
  .personnel:first-child {
    border-right: 1px solid rgba(255, 255, 255, 0.1);
  }
  .personnel {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-left: 0.3rem;
    .personnel_sum {
      font-size: 0.3rem;
      font-family: Bahnschrift_SemiBold;
      color: #0dffff;
      margin-bottom: 0.05rem;
      line-height: 0.3625rem;
    }
    .personnel_text {
      font-size: 0.15rem;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #edf2f8;
      line-height: 0.2125rem;
    }
  }
}

.schoolData {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-left: 0.3rem;
  box-sizing: border-box;
  // margin-top: 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .progressitem{
    flex: 1;
  }
}

@keyframes moveProfress {
  0% {
    width: 0;
  }
  100% {
    width: 10%;
  }
}
</style>