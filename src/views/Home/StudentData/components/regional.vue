<template>
    <div class="regional">
        <div
            class="item"
            :class="activeIndex === index ? 'active' : ''"
            @click="changeIndex(index)"
            v-for="(item, index) in addressList"
            :key="index"
        >
            {{ item }}
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            addressList: [
                "工业园区",
                "吴江区",
                "吴中区",
                "相城区",
                "姑苏区",
                "虎丘区",
                "太仓市",
                "昆山市",
                "张家港市",
                "常熟市"
            ],
            activeIndex: 0
        };
    },
    methods: {
        changeIndex(index) {
            this.activeIndex = index;
        }
    }
};
</script>
<style lang="scss" scoped>
.regional {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 32px 32px;
    .item {
        // margin: 20px;
        padding: 4px 31px;
        border: 1px solid rgba(16, 163, 190, 0.23);
        font-size: 14px;
        white-space: nowrap;
        font-family: PingFangSC-Semibold, PingFang SC;
        color: #ffffff;
        line-height: 20px;
        cursor: pointer;
    }
    .active {
        background: rgba(3, 86, 176, 0.31);
        border: 1px solid rgba(16, 163, 190, 0.23);
        color: #6fe5f7;
        white-space: nowrap;
        cursor: pointer;
    }
}
</style>
