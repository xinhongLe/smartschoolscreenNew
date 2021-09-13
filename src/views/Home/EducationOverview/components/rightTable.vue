<template>
  <div>
    <module-header title="各区满意度排名">
      <div class="right-table">
        表格
      </div>
    </module-header>
  </div>
</template>

<script>
import ModuleHeader from "../../../../components/moduleHeader";
export default {
  name: "rightTable",
  components: {ModuleHeader}
}
</script>

<style scoped lang="scss">
.right-table{
  width: 4.85rem;
  height: 1.75rem;
  color: #fff;
}
</style>