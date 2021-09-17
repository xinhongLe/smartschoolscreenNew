<template>
  <module-header title="社会活动指数">
    <Flex :flex="1">
      <Flex :flex="2">
        <echart :options="options"  width="100%" height="100%"></echart>
      </Flex>
      <Flex :flex="1">
        <div class="legend">
          <div>
            <div class="row" v-for="(item, index) in rightList" :key="index">
              <div>
                <span class="before" :style="{backgroundColor: item.color}"></span>
                <span>{{item.name}}</span>
              </div>
              <div class="value">{{item.value}}</div>
            </div>
          </div>
        </div>
      </Flex>
    </Flex>
  </module-header>
</template>

<script>
import ModuleHeader from "@/components/moduleHeader";
import Echart from "@/components/echart";
import Flex from "@/components/flex";
export default {
  name: "leftActivity",
  components: {Flex, Echart, ModuleHeader},
  data() {
    return {
      options: {},
      rightList: [
        {name: '社会学习参与率', value: '78%', color: '#0DFFFF'},
        {name: '劳动实践参与率', value: '58%', color: '#30A2FD'},
        {name: '创新能力参与率', value: '68%', color: '#A962F3'},
      ]
    }
  },
  mounted() {
    const options =  {
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
            borderColor: 'rgba(25, 52, 88, 0.8)'
          },
          data: [
            {value: 100, name: '100%', label:{color: '#fff', shadowColor: 'rgba(0, 0, 0, 0.5)'}},
          ]
        },
        {
          type: 'pie',
          radius: ['45%', '55%'],
          label: {
            show: false,
          },
          labelLine: {
            show: false
          },
          itemStyle:{
            borderColor: 'rgba(25, 52, 88, 0.8)'
          },
          data: [
            {value: 78, name: '社会学习参与率', itemStyle: { color: "#0DFFFF" }},
            {value: 22, itemStyle: { color: "rgba(38, 215, 255, 0.1)" }},
          ]
        },
        {
          type: 'pie',
          radius: ['65%', '75%'],
          label: {
            show: false,
          },
          labelLine: {
            show: false
          },
          itemStyle:{
            borderColor: 'rgba(25, 52, 88, 0.8)'
          },
          data: [
            {value: 68, name: '创新能力参与率',  itemStyle: { color: "#30A2FD" }, label:{color: '#fff', shadowColor: 'rgba(0, 0, 0, 0.5)'}},
            {value: 32, itemStyle: { color: "rgba(38, 215, 255, 0.1)" }},
          ]
        },
        {
          type: 'pie',
          radius: ['85%', '95%'],
          label: {
            show: false,
          },
          labelLine: {
            show: false
          },
          itemStyle:{
            borderColor: 'rgba(25, 52, 88, 0.8)'
          },
          data: [
            {value: 58, name: '劳动实践参与率', itemStyle: { color: "#A962F3" }},
            {value: 42, itemStyle: { color: "rgba(38, 215, 255, 0.1)" }},
          ]
        },
      ]
    }
    this.options = options
  }
}
</script>

<style scoped lang="scss">
.legend{
  height: 100%;
  display: flex;
  align-items: center;
}
.row{
  .before{
    width: 0.1rem;
    height: 0.1rem;
    border-radius: 50%;
    display: inline-block;
    margin-right: 0.06rem;
  }
  .value{
    margin: 0.1rem 0;
    color: #7AB3E2;
    padding-left: 0.2rem;
  }
}
</style>