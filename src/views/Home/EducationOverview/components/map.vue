<template>
    <div class="map-box">
        <div class="filter-blur"></div>
        <div class="map-container" ref="map"></div>
    </div>
</template>

<script>
const AMap = window.AMap;
export default {
    data() {
        return {
            map: null,
            activeMarker: null,
            schoolList: [
                {
                    lng: 120.619585,
                    lat: 31.299379
                },
                {
                    lng: 120.62585,
                    lat: 31.300379
                },
                {
                    lng: 120.629585,
                    lat: 31.294379
                }
            ]
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
            this.schoolList.forEach((item) => {
                const icon = this.getIcon(
                    require("./imgs/pic_dingwei1@2x.png")
                );
                const marker = new AMap.Marker({
                    position: new AMap.LngLat(item.lng, item.lat),
                    // 将一张图片的地址设置为 icon
                    icon: icon,
                    // 设置了 icon 以后，设置 icon 的偏移量，以 icon 的 [center bottom] 为原点
                    offset: new AMap.Pixel(-30, -38)
                });
                markers.push(marker);
                marker.on("mouseover", () => {
                    const position = marker.getPosition();
                    this.openInfoWindow(position);
                    this.updateMarkers(marker);
                });
            });

            this.map.add(markers);
            if (markers.length > 0) {
                this.updateMarkers(markers[0]);
                const position = markers[0].getPosition();
                this.openInfoWindow(position);
            }
        },

        getIcon(img) {
            return new AMap.Icon({
                size: new AMap.Size(82, 88),
                image: img,
                imageSize: new AMap.Size(82, 88),
                imageOffset: new AMap.Pixel(0, 0)
            });
        },

        updateMarkers(marker) {
            if (this.activeMarker) {
                const icon = this.getIcon(
                    require("./imgs/pic_dingwei1@2x.png")
                );
                this.activeMarker.setIcon(icon);
            }
            this.activeMarker = marker;
            const icon = this.getIcon(require("./imgs/pic_dingwei2@2x.png"));
            marker.setIcon(icon);
        },

        openInfoWindow(position) {
            const infoWindow = new AMap.InfoWindow({
                isCustom: true,
                content: this.getInfoWindowDom("苏州市敬文实验小学"),
                offset: new AMap.Pixel(10, -30)
            });

            infoWindow.open(this.map, position);
        },

        getInfoWindowDom(text) {
            const div = document.createElement("div");
            const bg = require("./imgs/pic_bg_selected@2x.png");
            div.style.background = `url(${bg}) no-repeat`;
            div.style.backgroundSize = "100% 100%";
            div.style.padding = ".2rem .3rem";
            div.style.color = "#0DFFFF";
            div.style.fontSize = "0.18rem";
            div.innerText = text;
            return div;
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