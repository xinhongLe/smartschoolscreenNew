<template>
  <module-header title="学校类型分布">
   <div class="school-type">
     <div class="title-box">
       <div @click="activeIndex = index" :class="['title', activeIndex === index ? 'title-active' : '']" v-for="(item,index) in titleList" :key="index">{{item.name}}</div>
     </div>
     <div class="content-box">
       <table-common :headerList="headerList" :tableList="tableList">
         <template slot="table-header">
           <div class="header-color row">
             <div :class="[index === 0 ? 'col-first' : 'col']" v-for="(item, index) in headerList" :key="index">{{item.name}}</div>
           </div>
         </template>
         <template>
           <div v-for="(item,index) in tableList" :key="index" class="row">
             <div class="col-first">{{index + 1 }}</div>
             <div class="col">{{ item.name }}</div>
             <div class="col">{{ item.gzs }}</div>
             <div class="col">{{ item.gkk }}</div>
             <div class="col">{{ item.hd }}</div>
             <div class="col">{{ item.cg }}</div>
           </div>
         </template>
       </table-common>
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
        {name: '**港市', gzs: '12', gkk: '123', hd: '234', cg: '46'},
        {name: '*城区', gzs: '12', gkk: '136', hd: '229', cg: '40'},
        {name: '*苏区', gzs: '9', gkk: '128', hd: '221', cg: '36'},
        {name: '*新区', gzs: '8', gkk: '149', hd: '204', cg: '38'},
        {name: '**中区', gzs: '11', gkk: '129', hd: '198', cg: '28'},
        {name: '**园区', gzs: '23', gkk: '128', hd: '196', cg: '46'},
        {name: '*山市', gzs: '16', gkk: '107', hd: '203', cg: '39'},
        {name: '*丘区', gzs: '13', gkk: '78', hd: '167', cg: '32'},
        {name: '*仓市', gzs: '12', gkk: '89', hd: '109', cg: '27'},
        {name: '*熟市', gzs: '12', gkk: '86', hd: '102', cg: '26'},
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