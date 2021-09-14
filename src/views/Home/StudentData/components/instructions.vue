<template>
    <div class="instructions">
      <module-header :title="title">
         <div>
           <div class="header">
             <div v-for="(item, index) in headerList" :key="index">
              <span>{{item.name}}：</span>
              <span>{{item.count}}</span>
             </div>
           </div>
           <div class="content">
            <div>
              <div></div>
              <img src="../images/pic_arrow@2x.png" alt="">
            </div>
           </div>
         </div>
      </module-header>
    </div>
</template>
<script>
import ModuleHeader from "@/components/moduleHeader";
export default {
    data() {
        return {
          title: '苏州工业园区',
          headerList: [
            {name: '学校总数', count: '77所'},
            {name: '学生总数', count: '88人'},
          ],
          contentList: [
            {name: '新生入学(人)', count: 1299},
            {name: '幼儿园(所)', count: 88},
            {name: '小学(所)', count: 77},
            {name: '初中(所)', count: 19},
          ]
        };
    },
    components: { ModuleHeader }
};
</script>
<style lang="scss" scoped>
.instructions {
    width: 100%;
    height: 1.5rem;
    .header{
      display: flex;
      justify-content: flex-start;
    }
    .content{

    }
}
</style>
