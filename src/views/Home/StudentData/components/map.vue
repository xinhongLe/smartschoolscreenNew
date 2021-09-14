<template>
    <div class="map-box">
        <div class="filter-blur"></div>
        <div class="map-container" ref="map"></div>
        <div class="footer-box">
            <div class="sort-box">
                <div
                    class="sort-item"
                    v-for="(item, index) in schoolList.slice(0, 3)"
                    :key="index"
                >
                    <div class="sort-num" :class="['red', 'yellow', 'blue'][index]">No.{{ index + 1 }}</div>
                    <div class="sort-address">{{ item.address }}</div>
                </div>
            </div>

            <div class="treatment">
                <div class="treatment-proportion">89%</div>
                <div class="treatment-desc">随迁学生享受同等待遇</div>
            </div>
        </div>
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
                    lat: 31.259379,
                    num: 8876,
                    address: "吴江区"
                },
                {
                    lng: 120.61585,
                    lat: 31.300379,
                    num: 6876,
                    address: "工业园区"
                },
                {
                    lng: 120.629585,
                    lat: 31.294379,
                    num: 5676,
                    address: "虎丘区"
                },
                {
                    lng: 120.589585,
                    lat: 31.294379,
                    num: 4676,
                    address: "吴中区"
                },
                {
                    lng: 120.629585,
                    lat: 31.334379,
                    num: 3676,
                    address: "昆山"
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

.footer-box {
    position: absolute;
    bottom: 2rem;
    left: 1rem;
    right: 1rem;
    display: flex;
    z-index: 100;
    justify-content: space-between;
    align-items: center;
}

.sort-box {
    display: flex;
}

.sort-item {
    padding: 0.2rem;
    width: 1.5rem;
    box-sizing: border-box;
    background-color: rgba(3, 86, 176, 0.13);
    border: 0.0125rem solid rgba(16, 163, 190, 0.23);
    margin-right: 0.2rem;
}

.sort-num {
    color: #ffffff;
    font-size: 0.175rem;
}

.sort-num.red {
    color: #FA4A4F;
}

.sort-num.yellow {
    color: #FFD01D;
}

.sort-num.blue {
    color: #0DFFFF;
}

.sort-address {
    color: #ffffff;
    font-size: 0.175rem;
    margin-top: 0.05rem;
    font-weight: 600;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.treatment {
    text-align: right;
}

.treatment-proportion {
    font-size: 0.225rem;
    color: #ffffff;
    font-weight: 600;
}

.treatment-desc {
    font-size: 0.15rem;
    color: #96ACC3;
}
</style>

<style>
.amap-marker-label {
    border: none;
    background-color: transparent;
}
</style>