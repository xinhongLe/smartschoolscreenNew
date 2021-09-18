<template>
  <ModuleHeader  title="年度评优">
    <Flex :flex="1" column>
      <title-common :titleList="titleList"></title-common>
      <Flex :flex="1">
        <table-common style="width: 100%" :tableList="tableList">
          <template slot="table-header">
            <div class="header-color row">
              <div :class="[index === 0 ? 'text-left' : index === 2 ? 'text-right' : '', 'col']" v-for="(item, index) in headerList" :key="index">{{item.name}}</div>
            </div>
          </template>
          <template>
            <div v-for="(item,index) in tableList" :key="index" class="row">
              <div class="col text-left text-first">{{ item.bzr }}</div>
              <div class="col text-center">{{ item.js }}</div>
              <div class="col text-right">
                <span class="text">{{ item.gzz }}</span>
              </div>
            </div>
          </template>
        </table-common>
      </Flex>
    </Flex>
  </ModuleHeader>
</template>

<script>
import TableCommon from "@/components/tableCommon";
import ModuleHeader from "@/components/moduleHeader";
import Flex from "@/components/flex";
import TitleCommon from "@/components/titleCommon";
export default {
  name: "yearEvaluation",
  components: {TitleCommon, ModuleHeader,Flex, TableCommon},
  data() {
    return {
      options: {},
      titleList: [
        {name: '体质状况'},
        {name: '健康生活'},
        {name: '心理健康'},
        {name: '安全素养'},
      ],
      headerList: [
        {name: '优秀班主任',},
        {name: '优秀教师'},
        {name: '优秀教育工作者'},
      ],
      tableList: [
        {bzr: '王*月', js: '赵*虎', gzz: '王*月'},
        {bzr: '孔*区', js: '孔*区', gzz: '孔*区'},
        {bzr: '张*鹏', js: '张*鹏', gzz: '张*鹏'},
        {bzr: '李*明', js: '李*明', gzz: '李*明'},
        {bzr: '颂*丽', js: '颂*丽', gzz: '颂*丽'},
        {bzr: '张*红', js: '张*红', gzz: '张*红'},
        {bzr: '旭*鹏', js: '旭*鹏', gzz: '旭*鹏'},
        {bzr: '刘*星', js: '刘*星', gzz: '刘*星'},
        {bzr: '郭*悦', js: '郭*悦', gzz: '郭*悦'},
        {bzr: '*数数', js: '*数数', gzz: '*数数'},
        {bzr: '王*市', js: '王*市', gzz: '王*市'},
      ]
    }
  },
}
</script>

<style scoped>

</style>