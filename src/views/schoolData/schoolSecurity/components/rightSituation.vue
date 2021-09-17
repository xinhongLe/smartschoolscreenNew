<template>
  <Flex>
    <Flex :flex="1">
      <module-header title="隐患排查处理情况">
        <Flex :flex="1" :column="true">
          <Flex :flex="1">
            <echart :options="options"  width="100%" height="100%"></echart>
          </Flex>
          <div class="footer">
            <div>
              <p>正常运行(个)<span class="text-blue">10102</span></p>
              <p>重大隐患(个)<span class="text-gree">25</span></p>
              <p>未及时处理(个)<span class="text-pink">8</span></p>
            </div>
          </div>
        </Flex>
      </module-header>
    </Flex>
    <div class="h-line"></div>
    <Flex :flex="1">
      <module-header title="督查情况">
        <Flex :flex="1" :column="true">
          <Flex :flex="1">
            <echart :options="options1"  width="100%" height="100%"></echart>
          </Flex>
          <div class="footer">
            <div>
              <p>达标学校(所)<span class="text-blue">1682</span></p>
              <p>未达标(所)<span class="text-pink">36</span></p>
            </div>
          </div>
        </Flex>
      </module-header>
    </Flex>
  </Flex>
</template>

<script>
import Flex from "@/components/flex";
import ModuleHeader from "@/components/moduleHeader";
import Echart from "@/components/echart";
export default {
  name: "rightSituation",
  components: {
    Echart,
    ModuleHeader,
    Flex,
  },
  data() {
    return {
      options: {},
      options1: {},
    }
  },
  mounted() {
    const options =  {
      // title: [
      //   {
      //     text: "{name|" + "82%" + "}",
      //     top: "center",
      //     left: "center",
      //     borderWidth: 1,
      //     borderColor: "#142e52",
      //     // backgroundColor:'rgba(20, 46, 82, 0.7)',
      //     padding: [38, 20, 33, 16],
      //     borderRadius: 50,
      //     textStyle: {
      //       rich: {
      //         name: {
      //           width: 100,
      //           height: 200,
      //           fontSize: 30,
      //           marginLeftL:'10px',
      //           fontWeight: "bold",
      //           color: "#ffffff"
      //         }
      //       }
      //     }
      //   }
      // ],
      series: [
        {
          type: 'pie',
          animation: false,
          color: ["rgba(20,46,82,0.4)"],
          selectedMode: 'single',
          radius: [0, '50%'],
          label: {
            position: 'center',
            fontSize: 14,
          },
          labelLine: {
            show: true
          },
          itemStyle:{
            borderColor: 'rgba(25, 52, 88, 0.8)'
          },
          data: [
            {value: 1548, name: '82%', label:{color: '#fff', shadowColor: 'rgba(0, 0, 0, 0.5)'}},
          ]
        },
        {
          name: "访问来源",
          type: "pie",
          radius: ["60%", "75%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: "center"
          },
          itemStyle: {
            borderRadius: 0,
            borderWidth: 5,
            borderColor: "#000000"
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "40",
              fontWeight: "bold"
            }
          },
          labelLine: {
            show: false
          },
          data: [
            {
              value: 18,
              itemStyle: { color: "rgba(38, 215, 255, 0.3)" }
            },
            {
              value: 82,
              itemStyle: { color: "rgba(13, 255, 255, 1)" }
            }
          ]
        }
      ]
    };

    const options1 = {
      series: [{
        type: 'gauge',
        axisLine: {
          lineStyle: {
            width: 12,
            color: [
              [0, '#B821D0'],
              [0.3, '#F755D3'],
              [0.7, '#07E99A'],
              [1, '#0DFFFF']
            ]
          }
        },
        pointer: {
          itemStyle: {
            color: '#0DFFFF'
          }
        },
        axisTick: {
          // show: false
          distance: 15,
          length: 1,
          lineStyle: {
            color: '#193458',
            width: 2
          }
        },
        splitLine: {
          // distance: -30,
          // length: 30,
          lineStyle: {
            color: '#000916',
            width: 4
          }
        },
        axisLabel: {
          show: false,
          // color: 'auto',
          // distance: 6,
          // fontSize: 12
        },
        detail: {
          valueAnimation: true,
          formatter: 82  + '%',
          color: '#fff',
          fontSize: 12,
          padding: [20, 5, 0, 5],
          borderType: 'solid'
        },
        data: [{
          value: 82,
        }]
      }]
    }

    this.options = options
    this.options1 = options1
  }
}
</script>

<style scoped lang="scss">
.h-line {
  width: 0.4rem;
}
.footer{
  display: flex;
  justify-content: center;
  width: 100%;
  color: #96ACC3;
  text-align: center;
  padding-top: 0.2rem;
  p{
    margin: 0 0 0.1rem;
    text-align: left;
  }
  .text-blue{
    margin-left: 0.2rem;
    color: #0DFFFF;
  }
  .text-gree{
    margin-left: 0.2rem;
    color: #07E99A;
  }
  .text-pink{
    margin-left: 0.15rem;
    color: #C127D1;
  }
}
</style>