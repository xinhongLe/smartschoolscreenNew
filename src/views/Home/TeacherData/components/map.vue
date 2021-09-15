<template>
  <div class="map-wrapper">
    <ModuleHeader title="教师分布情况">
      <SortMap :schoolList="schoolList" />
    </ModuleHeader>
  </div>
</template>

<script>
import SortMap from "@/components/sortMap";
import ModuleHeader from "@/components/moduleHeader";
export default {
    components: { SortMap, ModuleHeader },
    data() {
        return {
            schoolList: [
                {
                    lng: 120.619585,
                    lat: 31.259379,
                    num: 18951,
                    address: "**区"
                },
                {
                    lng: 120.61585,
                    lat: 31.300379,
                    num: 9712,
                    address: "***区"
                },
                {
                    lng: 120.629585,
                    lat: 31.294379,
                    num: 8625,
                    address: "**区"
                },
                {
                    lng: 120.589585,
                    lat: 31.294379,
                    num: 7351,
                    address: "**区"
                },
                {
                    lng: 120.629585,
                    lat: 31.334379,
                    num: 7243,
                    address: "**市"
                }
            ]
        };
    }
};
</script>

<style scoped>
.map-wrapper{
  position: relative;
  z-index: 1;
  height: 100%;
  width: 100%;
}
</style>