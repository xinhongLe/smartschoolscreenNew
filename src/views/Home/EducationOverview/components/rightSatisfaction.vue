<template>
 <module-border autoHeight>
  <div class="rightSatisfaction">
    <div>
      <div class="img-class">
        <right-satisfaction-animation></right-satisfaction-animation>
      </div>
      <div class="text-box">
        <p class="text-count">96%</p>
        <span class="text">办学满意度</span>
      </div>
    </div>
  </div>
</module-border>
</template>

<script>
import ModuleBorder from "../../../../components/moduleBorder";
import RightSatisfactionAnimation from "./rightSatisfactionAnimation";
export default {
  name: "rightSatisfaction",
  components: {RightSatisfactionAnimation, ModuleBorder}
}
</script>

<style scoped lang="scss">
.rightSatisfaction{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
 >div{
   display: flex;
   justify-content: center;
   align-items: center;
   .img-class{
     width: 1.1rem;
     height: 1.1rem;
     margin-right: 0.3rem;
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