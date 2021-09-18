<template>
  <ModuleHeader  title="知识点掌握度">
    <Flex :flex="1" column>
      <div class="title">综合掌握度：<span class="text">89%</span></div>
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
              <div class="col text-right">{{ item.gzz }}%</div>
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
export default {
  name: "knowledge",
  components: { ModuleHeader,Flex, TableCommon},
  data() {
    return {
      headerList: [
        {name: '知识点掌握度',},
        {name: '知识点权重'},
        {name: '班级掌握率'},
      ],
      tableList: [
        {bzr: '汉字字形', js: '0.1', gzz: '98'},
        {bzr: '叠词', js: '0.5', gzz: '100'},
        {bzr: '四字成语', js: '0.2', gzz: '100'},
        {bzr: '反义词', js: '0.6', gzz: '98'},
        {bzr: '近义词', js: '0.1', gzz: '97'},
        {bzr: '特殊句式', js: '0.1', gzz: '98'},
        {bzr: '短文写作', js: '0.5', gzz: '100'},
        {bzr: '文言文', js: '0.5', gzz: '95'},
        {bzr: '字词', js: '0.5', gzz: '95'},
      ]
    }
  },
}
</script>

<style scoped>
.title{
  margin: 0.2rem 0;
  color: #96ACC3;
}
.text{
  color: #0DFFFF;
}
</style>