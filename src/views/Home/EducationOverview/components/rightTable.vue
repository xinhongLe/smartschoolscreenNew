<template>
  <module-header  title="各区满意度排名">
    <table-common :headerList="headerList" :tableList="tableList"></table-common>
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
        {name: '序号',},
        {name: '区域名称'},
        {name: '办学满意度'},
      ],
      tableList: [
        {name: '吴中区', pre: '87'},
        {name: '吴江区', pre: '67'},
        {name: '高新区', pre: '98'},
        {name: '昆山市', pre: '77'},
        {name: '相城区', pre: '57'},
        {name: '姑苏区', pre: '66'},
        {name: '虎丘区', pre: '66'},
        {name: '常熟市', pre: '66'},
        {name: '张家港市', pre: '66'},
      ]
    }
  },
}
</script>

<style scoped lang="scss">
</style>