<template>
    <div class="gender-ratio">
        <module-header title="学生男女比例(园区)">
            <div class="gender-ratio-content">
                <div class="man">
                    <div class="man-header">

                    </div>
                    <div class="man-list">
                        <div></div>
                    </div>
                </div>
                <div class="woman"></div>
            </div>
        </module-header>
    </div>
</template>
<script>
import moduleHeader from "@/components/moduleHeader";
export default {
   data() {
      return {
          manList:[
              {
                  name:'幼儿园',
                  progressNum:562,
                  id:562
              },
              {
                  name:'小学',
                  progressNum:1005,
                  id:1005
              },
              {
                  name:'初中',
                  progressNum:1419,
                  id:1419
              },
              {
                  name:'中职',
                  progressNum:3042,
                  id:3042
              },
              {
                  name:'高中',
                  progressNum:2560,
                  id:2560
              }
          ]
      }
   },
   components:{
       moduleHeader
   }
}
</script>
<style lang="scss" scoped>
.gender-ratio{
    width: 100%;
    .gender-ratio-content{
        width: 100%;
        display: flex;
        
    }
}
</style>
