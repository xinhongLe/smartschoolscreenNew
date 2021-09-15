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
        {name: '吴*区', pre: '94'},
        {name: '高*区', pre: '89'},
        {name: '姑*区', pre: '87'},
        {name: '工*区', pre: '86'},
        {name: '昆*市', pre: '84'},
        {name: '相*区', pre: '83'},
        {name: '太*市', pre: '66'},
        {name: '常*市', pre: '88'},
        {name: '张*市', pre: '88'},
      ]
    }
  },
}
</script>

<style scoped lang="scss">
</style>