<template>
 <div>
   <module-border>
     <div class="rightSatisfaction">
       <div>
         <img class="img-class" src="" alt="">
         <div class="text-box">
           <p class="text-count">96%</p>
           <span class="text">办学满意度</span>
         </div>
       </div>
     </div>
   </module-border>
 </div>
</template>

<script>
import ModuleBorder from "../../../../components/moduleBorder";
export default {
  name: "rightSatisfaction",
  components: {ModuleBorder}
}
</script>

<style scoped lang="scss">
.rightSatisfaction{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.85rem;
  height: 1.75rem;
 >div{
   display: flex;
   justify-content: center;
   align-items: center;
   .img-class{
     width: 1.1rem;
     height: 1.1rem;
     background-color: pink;
     margin-right: 0.2rem;
   }
   .text-box{
     text-align: center;
     .text-count{
       margin: 0 0 0.05rem;
       font-size: 0.5rem;
       color: rgba(13, 255, 255, 1);
     }
     .text{
       color: rgba(237, 242, 248, 1);
       font-size: 0.15rem;
     }
   }
 }

}
</style>