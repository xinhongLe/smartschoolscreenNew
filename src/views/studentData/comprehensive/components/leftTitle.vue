<template>
  <div class="title-box">
    <div  class="title" v-for="(item,index) in titleList" :key="index">
      <div class="count">
        <count-to
            :start-val="0"
            :end-val="item.count"
            :duration="3000">
        </count-to>
      </div>
      <p>{{item.name}}</p>
    </div>
  </div>
</template>

<script>
import CountTo from 'vue-count-to'
export default {
  name: "leftTitle",
  components: { CountTo },
  data() {
    return {
      color: '#70BFFF',
      titleList: [
        {name: '参与测评学生数', count: 142121},
        {name: '学生覆盖率', count: 87976},
        {name: '累计数据量', count: 58565},
      ]
    }
  },
}
</script>

<style scoped lang="scss">
.title-box{
  display: flex;
  justify-content: flex-start;
  margin: 0.2rem 0.1rem;
  .count{
    color: #70BFFF;
    font-size: 0.2rem;
    text-align: center;
  }
.title{
  color:#96ACC3;
  padding: 0.08rem 0.15rem;
  border: 1px solid rgba(16, 163, 190, 0.23);
  margin-right: 0.2rem;
  cursor: pointer;
  background: rgba(3, 86, 176, 0.31);
}
}
</style>