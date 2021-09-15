<template>
  <div class="map-wrapper">
    <ModuleHeader title="教研开展情况">
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
                    num: 8876,
                    address: "**区"
                },
                {
                    lng: 120.61585,
                    lat: 31.300379,
                    num: 6876,
                    address: "***区"
                },
                {
                    lng: 120.629585,
                    lat: 31.294379,
                    num: 5676,
                    address: "**区"
                },
                {
                    lng: 120.589585,
                    lat: 31.294379,
                    num: 4676,
                    address: "**区"
                },
                {
                    lng: 120.629585,
                    lat: 31.334379,
                    num: 3676,
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