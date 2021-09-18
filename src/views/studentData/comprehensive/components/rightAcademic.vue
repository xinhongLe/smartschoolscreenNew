<template>
 <module-header title="学业水平指数">
   <Flex :flex="1" column>
     <title-common :titleList="titleList"></title-common>
     <Flex :flex="1">
       <echart  width="100%" height="100%" :options="options"></echart>
     </Flex>
   </Flex>
 </module-header>
</template>

<script>
import ModuleHeader from "@/components/moduleHeader";
import TitleCommon from "@/components/titleCommon";
import Echart from "@/components/echart";
import * as echarts from "echarts";
import Flex from "@/components/flex";
export default {
  name: "rightAcademic",
  components: {Flex, Echart, TitleCommon, ModuleHeader}, //
  data() {
    return {
      options: {},
      titleList: [
        {name: '学业成绩'},
        {name: '学业潜力'},
        {name: '学业素养'},
      ]
    }
  },
 mounted() {
   const options = {
     xAxis: {
       type: "category",
       data: ["语文", "数学", "英语", "音乐", "美术", "体育"],
     },
     yAxis: {
       type: "value",
       splitLine: {
         lineStyle: {
           color: "rgba(255, 255, 255, .1)"
         }
       },
     },
     series: [
       {
         barWidth:20,
         data: [
           {
             value: 35,
             itemStyle: {
               normal: {
                 color: new echarts.graphic.LinearGradient(
                     0,
                     0,
                     0,
                     1,
                     [
                       { offset: 0, color: "#0DFFFF" },
                       { offset: 0.6, color: "#70BFFF" },
                       { offset: 1, color: "#70BFFF" }
                     ]
                 )
               }
             }
           },
           {
             value: 45,
             itemStyle: {
               normal: {
                 color: new echarts.graphic.LinearGradient(
                     0,
                     0,
                     0,
                     1,
                     [
                       { offset: 0, color: "#0DFFFF" },
                       { offset: 0.6, color: "#70BFFF" },
                       { offset: 1, color: "#70BFFF" }
                     ]
                 )
               }
             }
           },
           {
             value: 95,
             itemStyle: {
               normal: {
                 color: new echarts.graphic.LinearGradient(
                     0,
                     0,
                     0,
                     1,
                     [
                       { offset: 0, color: "#0DFFFF" },
                       { offset: 0.6, color: "#70BFFF" },
                       { offset: 1, color: "#70BFFF" }
                     ]
                 )
               }
             }
           },
           {
             value: 45,
             itemStyle: {
               normal: {
                 color: new echarts.graphic.LinearGradient(
                     0,
                     0,
                     0,
                     1,
                     [
                       { offset: 0, color: "#0DFFFF" },
                       { offset: 0.6, color: "#70BFFF" },
                       { offset: 1, color: "#70BFFF" }
                     ]
                 )
               }
             }
           },
           {
             value: 10,
             itemStyle: {
               normal: {
                 color: new echarts.graphic.LinearGradient(
                     0,
                     0,
                     0,
                     1,
                     [
                       { offset: 0, color: "#0DFFFF" },
                       { offset: 0.6, color: "#70BFFF" },
                       { offset: 1, color: "#70BFFF" }
                     ]
                 )
               }
             }
           },
           {
             value: 45,
             itemStyle: {
               normal: {
                 color: new echarts.graphic.LinearGradient(
                     0,
                     0,
                     0,
                     1,
                     [
                       { offset: 0, color: "#0DFFFF" },
                       { offset: 0.6, color: "#70BFFF" },
                       { offset: 1, color: "#70BFFF" }
                     ]
                 )
               }
             }
           },
         ],
         type: "bar"
       }
     ]
   };
   this.options = options;
 }
}
</script>

<style scoped>

</style>