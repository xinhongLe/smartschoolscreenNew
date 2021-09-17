<template>
  <module-header title="社会活动指数">
    <Flex :flex="1" column>
      <title-common :titleList="titleList"></title-common>
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
        <Flex :flex="2">
          <div v-for="item in progressList" :key="item.id" style="height: 100%;flex: 1">
            <ProgressA custom="per" :styleObject="item.styleObject" :proData="item"></ProgressA>
          </div>
        </Flex>
      </Flex>
    </Flex>
  </module-header>
</template>

<script>
import ProgressA from "@/components/ProgressA";
import ModuleHeader from "@/components/moduleHeader";
import TitleCommon from "@/components/titleCommon";
import Flex from "@/components/flex";
import Echart from "@/components/echart";
export default {
  name: "rightActivity",
  components: {Flex, TitleCommon, ModuleHeader, Echart, ProgressA},
  data() {
    return {
      options: {},
      titleList: [
        {name: '艺术体验'},
        {name: '艺术体验'},
      ],
      rightList: [
        {name: '音乐达标率', value: '78%', color: '#0DFFFF'},
        {name: '美术达标率', value: '66%', color: '#30A2FD'},
      ],
      progressList: [
        {
          name: "音乐课出勤率",
          progressNum: '86',
          per: '%',
          id: 1,
          styleObject: {
            background: 'linear-gradient(270deg,#A962F3 0%, #7833E2 100%)',
          },
        },
        {
          name: "音乐课出勤率",
          progressNum: '94',
          per: '%',
          id: 2,
          styleObject: {
            background: 'linear-gradient(270deg, #0DFFFF 0%, #70BFFF 100%)',
          },
        },
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