<template>
  <div>
    <module-header title="各区满意度排名">
      <div class="right-table">
        <div v-for="(item,index) in tableList" :key="index" class="row">
          <div>{{index + 1 }}</div>
          <div>{{item.name}}</div>
          <div>{{item.pre}}</div>
        </div>
      </div>
    </module-header>
  </div>
</template>
<script>
import ModuleHeader from "../../../../components/moduleHeader";
export default {
  name: "rightTable",
  components: {ModuleHeader},
  data() {
    return {
      tableList: [
        {name: '吴中区', pre: '87'},
        {name: '吴江区', pre: '67'},
        {name: '高新区', pre: '98'},
        {name: '昆山市', pre: '77'},
        {name: '相城区', pre: '57'},
        {name: '姑苏区', pre: '66'},
      ]
    }
  },
}
</script>

<style scoped lang="scss">
.right-table{
  width: 4.85rem;
  height: 1.75rem;
  color: #fff;
  .row{
    display: flex;
    justify-content: space-between;
  }
}
</style>