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
          id: 'g1',
        },
        {
          name: "工业园区",
          progressNum: 12,
          id: 'g2',
        },
        {
          name: "吴中区",
          progressNum: 46,
          id: 'g3',
        },
        {
          name: "相城区",
          progressNum: 78,
          id: 'g4',
        },
        {
          name: "昆山市",
          progressNum: 33,
          id: 'g5',
        },
        {
          name: "常熟市",
          progressNum: 12,
          id: 'g6',
        },
        {
          name: "吴江区",
          progressNum: 46,
          id: 'g7',
        },
        {
          name: "虎丘区",
          progressNum: 78,
          id: 'g8',
        },
        {
          name: "太仓市",
          progressNum: 23,
          id: 'g9',
        },
        {
          name: "张家港市",
          progressNum: 33,
          id: 'g10',
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