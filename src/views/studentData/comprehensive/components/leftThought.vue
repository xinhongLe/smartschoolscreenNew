<template>
  <module-header title="思想品德指数">
    <Flex :flex="1" column>
      <title-common :titleList="titleList"></title-common>
      <Flex :flex="1">
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
                  :styleObject="item.styleObject"
                  :isNum="false"
              ></progress-b>
            </div>
          </div>
        </div>
      </Flex>
    </Flex>
  </module-header>
</template>

<script>
import ModuleHeader from "@/components/moduleHeader";
import ProgressB from "@/components/ProgressB.vue";
import TitleCommon from "../../../../components/titleCommon";
import Flex from "../../../../components/flex";
export default {
  name: "leftThought",
  components: {Flex, TitleCommon, ModuleHeader, ProgressB},
  data() {
    return {
      titleList: [
        {name: '思想素质'},
        {name: '品德发展'},
        {name: '公民意识'},
      ],
      ratingDataList: [
        {
          schoolName: "牢记并践行社会主义核心价值观",
          progressNum: 98,
          id: 1,
          styleObject: {
            background: "linear-gradient(270deg, #FF8465 0%, #FF1700 100%)",
          },
          color: "#FA4A4F",
        },
        {
          schoolName: "积极参加升旗仪式，会唱国歌，维护国旗国徽国歌",
          progressNum: 95,
          id: 2,
          styleObject: {
            background: 'linear-gradient(270deg, #FFC584 0%, #FF9200 100%)',
          },
          color: '#FFD01D'
        },
        {
          schoolName: "尊重老师，尊重长辈，遇到老师主动问好，在家尊重长辈",
          progressNum: 92,
          id: 3,
          styleObject: {
            background: 'linear-gradient(270deg, #0DFFFF 0%, #70BFFF 100%)',
          },
          color: '#0DFFFF'
        },
        {
          schoolName: "讲诚信，不说谎，不作弊",
          progressNum: 89,
          id: 4,
          color: '#70BFFF'
        },
        {
          schoolName: "积极参加校内外公益性活动，学校组织的公益活动",
          progressNum: 85,
          id: 5,
          color: '#70BFFF'
        },
        {
          schoolName: "无违法行为，无欺凌行为，未收到法律校规处分",
          progressNum: 82,
          id: 6,
          color: '#70BFFF'
        },
      ]
    }
  },
}
</script>

<style scoped>
.rating_box {
  width: 100%;
  height: 100%;
  overflow: hidden;
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
  padding: 0 0.1rem;
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