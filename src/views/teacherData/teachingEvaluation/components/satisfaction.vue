<template>
  <module-header title="家长对教师工作满意度">
    <Flex :flex="1">
      <Flex :flex="2">
        <Echart :options="options"  width="100%" height="100%"></Echart>
      </Flex>
      <Flex :flex="3" column>
        <div class="satisfaction-box">
          <div v-for="(item,index) in satisfaction" :key="index" class="title">
            <div :style="{color: item.color}">{{item.pre}}</div>
            <div>{{item.name}}</div>
          </div>
        </div>
        <title-common :titleList="titleList"></title-common>
      </Flex>
    </Flex>
  </module-header>
</template>

<script>
import ModuleHeader from "@/components/moduleHeader";
import Flex from "@/components/flex";
import Echart from "@/components/echart";
// import * as echarts from "echarts";
import TitleCommon from "@/components/titleCommon";
export default {
  name: "satisfaction",
  components: {TitleCommon, Echart, Flex, ModuleHeader},
  data() {
    return {
      options: {},
      satisfaction: [
        {name: '满意度', pre: '75%', color: '#0DFFFF'},
        {name: '较满意', pre: '14%', color: '#FFFF00'},
        {name: '不满意', pre: '11%', color: '#FC5AD3'},
      ],
      titleList: [
        {name: '一年级'},
        {name: '二年级'},
        {name: '三年级'},
        {name: '四年级'},
        {name: '五年级'},
        {name: '六年级'},
      ],
    }
  },
  mounted() {
    const options =  {
      grid: {
        left: "50",
        right: "0%",
        bottom: "50",
        top: "15%"
      },
      tooltip: {
        trigger: 'item'
      },
      series: [
        {
          type: 'pie',
          animation: false,
          color: ["rgba(20,46,82,0.4)"],
          selectedMode: 'single',
          radius: [0, '35%'],
          label: {
            position: 'center',
            fontSize: 14,
          },
          itemStyle:{
            borderColor: 'rgba(25, 52, 88, 0.1)'
          },
          data: [
            {value: 100, label:{color: '#fff', shadowColor: 'rgba(3, 86, 176, 0.1)'}},
          ]
        },
        {
          type: 'pie',
          radius: ['30%', '45%'],
          label: {
            show: false,
          },
          labelLine: {
            show: false
          },
          itemStyle:{
            borderColor: 'rgba(25, 52, 88, 0.1)'
          },
          data: [
            {value: 75, itemStyle: { color: "#0DFFFF" }},
            {value: 25, itemStyle: { color: "rgba(3, 86, 176, 0.1)" }},
          ]
        },
        {
          type: 'pie',
          radius: ['55%', '70%'],
          label: {
            show: false,
          },
          labelLine: {
            show: false
          },
          itemStyle:{
            borderColor: 'rgba(25, 52, 88, 0.1)'
          },
          data: [
            {value: 14, itemStyle: { color: "#FFFF00" }, label:{color: '#fff', shadowColor: 'rgba(0, 0, 0, 0.5)'}},
            {value: 86, itemStyle: { color: "rgba(3, 86, 176, 0.1)" }},
          ]
        },
        {
          type: 'pie',
          radius: ['80%', '95%'],
          label: {
            show: false,
          },
          labelLine: {
            show: false
          },
          itemStyle:{
            borderColor: 'rgba(25, 52, 88, 0.1)'
          },
          data: [
            {value: 11, itemStyle: { color: "#FC5AD3" }},
            {value: 89, itemStyle: { color: "rgba(3, 86, 176, 0.1)" }},
          ]
        },
      ]
    }
    this.options = options
  }
}
</script>

<style scoped lang="scss">
.satisfaction-box{
  display: flex;
  justify-content: flex-start;
  margin: 0.2rem 0.1rem 0;
  flex-wrap: wrap;
  .title{
    text-align: center;
    color: #fff;
    padding: 0.15rem 0.2rem;
    background: rgba(3, 86, 176, 0.31);
    margin-right: 0.2rem;
    cursor: pointer;
    margin-bottom: 0.1rem;
    color: #96ACC3;
  }
}
</style>