<template>
  <module-header  title="各区满意度排名">
    <div>
      <div class="row header-color">
        <div>序号</div>
        <div>区域名称</div>
        <div>办学满意度</div>
      </div>
      <div class="right-table" id="table">
        <div>
          <div v-for="(item,index) in tableList" :key="index" class="row">
            <div>{{index + 1 }}</div>
            <div>{{item.name}}</div>
            <div>{{item.pre}}</div>
          </div>
        </div>
      </div>
    </div>
  </module-header>
</template>
<script>
import ModuleHeader from "../../../../components/moduleHeader";
export default {
  name: "rightTable",
  components: {ModuleHeader},
  data() {
    return {
      tableList: [
        {name: '吴中区', pre: '87'},
        {name: '吴江区', pre: '67'},
        {name: '高新区', pre: '98'},
        {name: '昆山市', pre: '77'},
        {name: '相城区', pre: '57'},
        {name: '姑苏区', pre: '66'},
        {name: '虎丘区', pre: '66'},
        {name: '常熟市', pre: '66'},
        {name: '张家港市', pre: '66'},
      ]
    }
  },
mounted() {
  const marquee = document.getElementById('table');
  const contents =  marquee.innerHTML;
  marquee.innerHTML = contents + contents
}
}
</script>

<style scoped lang="scss">
.row{
  padding: 0.1rem 0;
  height: 0.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.1);
  >div{
    &:first-child{
      width: 0.5rem;
      text-align: center;
    }
    &:last-child{
      width: 1rem;
      text-align: center;
    }
  }
}
.header-color{
  color: #70BFFF;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.right-table{
  width: 100%;
  height: 100%;
  overflow: hidden;
  &:hover>div{
    animation-play-state:paused;
  }
  >div{
    animation: marquee 10s linear infinite;
  }
  @keyframes marquee {
    0% {
      transform: translateY(0%);
    }
    100% {
      transform: translateY(-100%);
    }
  }
}
</style>