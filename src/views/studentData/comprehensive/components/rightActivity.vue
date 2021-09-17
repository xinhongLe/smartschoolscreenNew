<template>
  <module-header title="社会活动指数">
    <title-common :titleList="titleList"></title-common>
  </module-header>
</template>

<script>
import ModuleHeader from "@/components/moduleHeader";
import TitleCommon from "../../../../components/titleCommon";
export default {
  name: "rightActivity",
  components: {TitleCommon, ModuleHeader},
  data() {
    return {
      options: {},
      titleList: [
        {name: '艺术体验'},
        {name: '艺术体验'},
      ]
    }
  },
}
</script>

<style scoped>

</style>