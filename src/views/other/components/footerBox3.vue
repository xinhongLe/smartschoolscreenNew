<template>
<div class="box">
    <p>最近3节课的备课情况</p>
    <table-common :headerList="headerList" :tableList="tableList">
      <template slot="table-header">
        <div class="header-color row">
          <div :class="[index === headerList.length - 1 ? 'col-first' : 'col']" v-for="(item, index) in headerList" :key="index">{{item.name}}</div>
        </div>
      </template>
      <template>
        <div
                    v-for="(item, index) in tableList"
                    :key="index"
                    class="row"
                >
                    <div class="col">{{ item.teacherName }}</div>
                    <div class="col">{{ item.teacherGroup }}</div>
                    <div class="col" style="color: #0DFFFF">{{ (item.oneReflectNum + item.twoReflectNum + item.threeReflectNum) / 3 }}min</div>
                    <div class="col-first">
                        <img v-if="index < 2" src="./../images/icon_zan@2x.png" />
                    </div>
                </div>
      </template>
    </table-common>
    </div>
</template>
<script>
import TableCommon from "@/components/tableCommon";
import { queryAxsReflectTime } from "../api"
export default {
  name: "rightTable",
  components: {TableCommon},
  data() {
    return {
      headerList: [
        {name: '姓名',},
        {name: '科目组'},
        {name: '平均反思时长'},
        {name: ''},
      ],
      tableList: []
    }
  },
  created() {
      this.getData();
  },
  methods: {
      getData() {
          queryAxsReflectTime().then(res => {
              if(res.data.success) {
                  this.tableList = res.data.result;
              }
          })
      }
  }
}
</script>

<style scoped lang="scss">
.box {
    width: 100%;
    height: calc(100% - 20px);
    background: rgba(87, 174, 249, 0.06);
    padding: 24px;
    box-sizing: border-box;
    >p {
        font-size: 14px;
        color: #96ACC3;
        line-height: 20px;
        margin: 0;
    }
}
.col-first img {
    width: 1vw;
    margin: auto;
}
.col {
    text-align: left !important;
}
.col-first {
    width: .8rem!important;
}
</style>