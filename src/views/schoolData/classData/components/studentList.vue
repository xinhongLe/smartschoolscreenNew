<template>
    <ModuleHeader title="优秀学生列表">
      <table-common  :tableList="tableList">
        <template>
          <div v-for="(item,index) in tableList" :key="index" class="row">
            <div class="col text-left text-first">{{index + 1 }}</div>
            <div class="col text-center">{{ item.name }}</div>
            <div class="col text-right">
              <span>综合评分：</span>
              <span class="text">{{ item.pre }}</span>
            </div>
          </div>
        </template>
      </table-common>
    </ModuleHeader>
</template>

<script>
import TableCommon from "@/components/tableCommon";
import ModuleHeader from "@/components/moduleHeader";
export default {
    components: {
        ModuleHeader,
        TableCommon
    },
  data() {
    return {
      tableList: [
        {name: '王*月', pre: '94'},
        {name: '孔*区', pre: '89'},
        {name: '张*鹏', pre: '87'},
        {name: '李*明', pre: '86'},
        {name: '颂*丽', pre: '84'},
        {name: '张*红', pre: '83'},
        {name: '旭*鹏', pre: '66'},
        {name: '刘*星', pre: '88'},
        {name: '郭*悦悦', pre: '88'},
        {name: '*数数', pre: '88'},
        {name: '王*市', pre: '88'},
      ]
    }
  },
};
</script>

<style scoped>
.v-line {
    height: 0.4rem;
}
.text{
  color: #0DFFFF;
}
.text-first{
  padding-left: 0.2rem;
}
</style>