<template>
  <module-header :title="'隐患实时动态'">
    <div class="right-table" id="table">
      <div :class="[animateScroll ? 'animate-scroll' : '']">
        <div v-for="(item,index) in tableList" :key="index" class="row">
          <div class="first-col">
            <img v-if="item.type === 1" src="../images/icon_ganhao@2x.png" alt="">
            <img v-if="item.type === 3" src="../images/icon_duigou@2x.png" alt="">
            <span>{{item.name}}</span>
          </div>
          <p>{{item.pre}}</p>
        </div>
      </div>
    </div>
  </module-header>
</template>

<script>
import ModuleHeader from "@/components/moduleHeader";
export default {
  name: "rightDynamic",
  components: { ModuleHeader},
  data() {
    return {
      animateScroll: false,
      tableList: [
        {type: 1, name: '**敬文实验小学王老师上报', pre: '10:35:28'},
        {type: 2, name: '**市外国语学校小学部赵老师验收了校', pre: '10:24:46'},
        {type: 3, name: '**市苏苑实验小学李老师上报了校园消防', pre: '昨天'},
        {type: 4, name: '苏**市苏苑实验小学李老师上报了校园消防', pre: '前天'},
        {type: 5, name: '**市苏苑实验小学李老师处理了校园消防', pre: '2019-06-20'},
      ]
    }
  },
  mounted() {
    const marquee = document.getElementById('table');
    if(this.tableList.length >= marquee.offsetHeight / 80 / 0.6){
      this.animateScroll = true
      this.$nextTick(() => {
        const contents =  marquee.innerHTML;
        marquee.innerHTML = contents + contents
      })
    }
  }
}
</script>

<style scoped lang="scss">
.row{
  width: 100%;
  padding: 0.1rem 0;
  height: 0.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.1);
  .first-col{
    width: 70%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  img{
    width: 0.225rem;
    height: 0.225rem;
    margin-right: 0.1rem;
    vertical-align: text-bottom;
  }
}
.right-table{
  height: 100%;
  width: 100%;
  overflow: hidden;
  &:hover>div{
    animation-play-state:paused;
  }
  >div{
    overflow: hidden;
  }
  .animate-scroll{
    animation: marquee 15s linear infinite;
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