<template>
  <module-header title="学校类型分布">
   <div class="school-type">
     <div class="title-box">
       <div @click="activeIndex = index" :class="['title', activeIndex === index ? 'title-active' : '']" v-for="(item,index) in titleList" :key="index">{{item.name}}</div>
     </div>
     <div class="content-box">
       <table-common :headerList="headerList" :tableList="tableList"></table-common>
     </div>
   </div>
  </module-header>
</template>

<script>
import ModuleHeader from "@/components/moduleHeader";
import TableCommon from "@/components/tableCommon";
export default {
  name: "leftSchoolType",
  components: {TableCommon, ModuleHeader},
  data() {
    return {
      activeIndex: 0,
      titleList: [
        {name: '各区/市排名'},
        {name: '学习排名'},
        {name: '教师排名'},
      ],
      headerList: [
        {name: '序号',},
        {name: '区域名称'},
        {name: '名师工作室'},
        {name: '区域公开课'},
        {name: '教研活动'},
        {name: '教研成果'},
      ],
      tableList: [
        {name: '吴中区', gzs: '87', gkk: '56', hd: '66', cg: '88'},
        {name: '吴江区', gzs: '67', gkk: '56', hd: '66', cg: '88'},
        {name: '高新区', gzs: '98', gkk: '56', hd: '66', cg: '88'},
        {name: '昆山市', gzs: '77', gkk: '56', hd: '66', cg: '88'},
        {name: '相城区', gzs: '57', gkk: '56', hd: '66', cg: '88'},
        {name: '姑苏区', gzs: '66', gkk: '56', hd: '66', cg: '88'},
        {name: '虎丘区', gzs: '66', gkk: '56', hd: '66', cg: '88'},
        {name: '常熟市', gzs: '66', gkk: '56', hd: '66', cg: '88'},
        {name: '张家港市', gzs: '66', gkk: '56', hd: '66', cg: '88'},
      ]
    }
  },
}
</script>

<style scoped lang="scss">
.school-type{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .title-box{
    display: flex;
    justify-content: flex-start;
    margin: 0.2rem 0.1rem;
    .title{
      color: #fff;
      padding: 0.08rem 0.15rem;
      border: 1px solid rgba(16, 163, 190, 0.23);
      margin-right: 0.2rem;
      cursor: pointer;
    }
    .title-active{
      background: rgba(3, 86, 176, 0.31);
    }
  }
  .content-box{
    flex: 1;
    min-height: 0;
  }
}
</style>