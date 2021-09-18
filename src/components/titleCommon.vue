<template>
  <div class="title-box">
    <div @click="activeIndex = index" :class="['title', activeIndex === index ? 'title-active' : '']" v-for="(item,index) in titleList" :key="index">{{item.name}}</div>
  </div>
</template>

<script>
export default {
  name: "titleCommon",
  props:{
    titleList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      activeIndex: 0
    }
  },
}
</script>

<style scoped lang="scss">
.title-box{
  display: flex;
  justify-content: flex-start;
  margin: 0.1rem 0.1rem;
  flex-wrap: wrap;
.title{
  color: #fff;
  padding: 0.08rem 0.15rem;
  border: 1px solid rgba(16, 163, 190, 0.23);
  margin-right: 0.2rem;
  cursor: pointer;
  margin-bottom: 0.1rem;
  color: #96ACC3;
}
.title-active{
  background: rgba(3, 86, 176, 0.31);
  color: #70BFFF;
}
}
</style>