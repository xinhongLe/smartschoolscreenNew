<template>
  <module-header  title="知识点覆盖率">
    <table-common :headerList="headerList" :tableList="tableList">
      <template slot="table-header">
        <div class="header-color row">
          <div :class="[index === 0 ? 'col' : 'col']" v-for="(item, index) in headerList" :key="index">{{item.name}}</div>
        </div>
      </template>
      <template>
        <div v-for="(item,index) in tableList" :key="index" class="row">
          <div class="col">{{ item.grade }}</div>
          <div class="col">{{ item.knowledge }}</div>
          <div class="col">{{ item.pre }}</div>
          <div class="col">{{ item.mastery }}%</div>
        </div>
      </template>
    </table-common>
  </module-header>
</template>
<script>
import ModuleHeader from "@/components/moduleHeader";
import TableCommon from "@/components/tableCommon";
export default {
  name: "rightTable",
  components: {TableCommon, ModuleHeader},
  data() {
    return {
      headerList: [
        {name: '年级',},
        {name: '知识点'},
        {name: '知识点权重'},
        {name: '班级掌握度'},
      ],
      tableList: [
        {grade:'三年级',knowledge: '汉字字形', pre: '0.51',mastery:'97'},
        {grade:'三年级',knowledge: '叠词', pre: '89',mastery:'96'},
        {grade:'三年级',knowledge: '四字成语', pre: '87',mastery:'89'},
        {grade:'四年级',knowledge: '反义词', pre: '86',mastery:'69'},
        {grade:'四年级',knowledge: '特殊句式', pre: '84',mastery:'78'},
        {grade:'四年级',knowledge: '特殊句式', pre: '83',mastery:'78'},
        {grade:'三年级',knowledge: '汉字字形', pre: '0.51',mastery:'97'},
        {grade:'三年级',knowledge: '叠词', pre: '89',mastery:'96'},
        {grade:'三年级',knowledge: '四字成语', pre: '87',mastery:'89'},
      ]
    }
  },
}
</script>

<style scoped lang="scss">
</style>