<template>
    <div class="map-box">
        <div class="filter-blur"></div>
        <div class="map-container" ref="map"></div>
        <slot />
    </div>
</template>

<script>
const AMap = window.AMap;
export default {
    props: {
        schoolList: {
            type: Array,
            default: () => []
        }
    },

    data() {
        return {
            map: null,
            activeMarker: null
        };
    },

    mounted() {
        this.$nextTick(() => {
            this.map = new AMap.Map(this.$refs.map, {
                resizeEnable: true,
                rotateEnable: true,
                zoom: 14,
                pitch: 60,
                rotation: -15,
                viewMode: "3D", //开启3D视图,默认为关闭
                buildingAnimation: true, //楼块出现是否带动画
                expandZoomRange: true,
                zooms: [4, 20],
                showLabel: false
            });

            const styleName = "amap://styles/26bb48843ba248605a499a965412e92b";
            this.map.setMapStyle(styleName);

            this.addMarkers();
        });
    },

    methods: {
        addMarkers() {
            const markers = [];
            this.schoolList.forEach((item, index) => {
                const icon = this.getIcon(index);
                const marker = new AMap.Marker({
                    position: new AMap.LngLat(item.lng, item.lat),
                    // 将一张图片的地址设置为 icon
                    icon: icon,
                    // 设置了 icon 以后，设置 icon 的偏移量，以 icon 的 [center bottom] 为原点
                    offset: new AMap.Pixel(-30, -38)
                });
                markers.push(marker);
                marker.setLabel({
                    offset: new AMap.Pixel(-5, -20), //设置文本标注偏移量
                    content: `<div><div style="color: #ffffff;font-size: 0.2rem;margin-bottom: 0.05rem">${
                        item.num
                    }</div><div style="color: rgba(255, 255, 255, 0.6);font-size: 0.15rem">${
                        item.address
                    }(No.${index + 1})</div></div>`, // 设置文本标注内容
                    direction: "right" //设置文本标注方位
                });
            });

            this.map.add(markers);
        },

        getIcon(sort) {
            const img =
                sort > 2
                    ? require("./imgs/pic_dian4@2x.png")
                    : [
                          require("./imgs/pic_dian1@2x.png"),
                          require("./imgs/pic_dian2@2x.png"),
                          require("./imgs/pic_dian3@2x.png")
                      ][sort];
            return new AMap.Icon({
                size: new AMap.Size(82, 88),
                image: img,
                imageSize: new AMap.Size(82, 88),
                imageOffset: new AMap.Pixel(0, 0)
            });
        }
    },

    beforeDestroy() {
        this.map.destroy();
    }
};
</script>

<style scoped>
.map-box {
    width: calc(100% + 4rem);
    height: calc(100% + 2rem);
    margin: -1rem -2rem;
    overflow: hidden;
    border-radius: 20%;
    position: relative;
    z-index: 0;
}

.map-container {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: calc(100% + 6rem);
    margin: -6rem 0;
}

.filter-blur {
    position: absolute;
    top: -0.1rem;
    bottom: -0.1rem;
    left: -0.1rem;
    right: -0.1rem;
    z-index: 10;
    border-radius: 20%;
    box-shadow: 0 0 2rem 2rem #000916 inset;
    pointer-events: none;
}
</style>

<style>
.amap-marker-label {
    border: none;
    background-color: transparent;
}
</style>