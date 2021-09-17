<template>
  <div class="box">
    <moduleHeader title="市资源有效排行">
      <div class="schoolData">
        <div class="progressitem" v-for="item in progressList" :key="item.id">
          <ProgressA :proData="item" :isprogressNum="false"></ProgressA>
        </div>
      </div>
    </moduleHeader>
  </div>
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
      activeIndex: 0,
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
          progressNum: 33,
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
          progressNum: 23,
          id: 9,
        },
        {
          name: "张家港市",
          progressNum: 33,
          id: 10,
        },
      ],
      titleNum: 0,
    };
  }
};
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 100;
}

.schoolData {
  width: 100%;
  height: calc(100% - 0.3rem);
  padding-left: 0.3rem;
  box-sizing: border-box;
  margin-top: 0.3rem;
  display: flex;
  .progressitem {
    flex: 1;
  }
}
</style>