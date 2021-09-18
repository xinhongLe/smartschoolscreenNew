<template>
  <div style="width:100%;height:100%;">
    <Echart width="100%" height="100%" :options="options"></Echart>
  </div>
</template>
<script>
import Echart from "@/components/echart";
export default {
  data() {
    return {
      options: {},
    };
  },
  components: { Echart },
  created() {},
  mounted() {
    const options = {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: "bar",
        },
      ],
    };
    this.options = options;
  },
  computed: {},
  methods: {},
};
</script>
<style lang="scss" scoped>
</style>
