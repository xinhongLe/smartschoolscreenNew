<template>
    <div class="screen-header-box">
        <div class="screen-header">
            <div class="tab-box">
                <div
                    class="tab-item"
                    :class="$route.name == item.name && 'active'"
                    v-for="(item, index) in tabList"
                    :key="index"
                    @click="tabSwitch(item)"
                >
                    <img :src="$route.name == item.name ? item.selected : item.url" />
                    <div class="tab-title">{{ item.title }}</div>
                </div>
            </div>
        </div>
        <Title title="苏州市教育信息化数据大屏" />
    </div>
</template>

<script>
import Title from "./title";
export default {
    name: "Header",
    components: {
        Title
    },
    data() {
        return {
            tabList: [
                {
                    name: "educationOverview",
                    title: "苏州市教育概况",
                    url: require("./imgs/icon_suzhoushi_default@2x.png"),
                    selected: require("./imgs/icon_suzhoushi_selected@2x.png")
                },
                {
                    name: "studentData",
                    title: "学生数据",
                    url: require("./imgs/icon_xuesheng_default@2x.png"),
                    selected: require("./imgs/icon_xuesheng_selected@2x.png")
                },
                {
                    name: "teacherData",
                    title: "教师数据",
                    url: require("./imgs/icon_laoshi_default@2x.png"),
                    selected: require("./imgs/icon_laoshi_selected@2x.png")
                },
                {
                    name: "classTeach",
                    title: "课堂教学",
                    url: require("./imgs/icon_ketang_default@2x.png"),
                    selected: require("./imgs/icon_ketang_selected@2x.png")
                },
                {
                    name: "teachingData",
                    title: "教研数据",
                    url: require("./imgs/icon_jiaoyan_default@2x.png"),
                    selected: require("./imgs/icon_jiaoyan_selected@2x.png")
                },
                {
                    name: "school",
                    title: "校园安全",
                    url: require("./imgs/icon_xiaoyuan_default@2x.png"),
                    selected: require("./imgs/icon_xiaoyuan_selected@2x.png")
                },
                {
                    name: "resources",
                    title: "资源建设",
                    url: require("./imgs/icon_ziyuani_default@2x.png"),
                    selected: require("./imgs/icon_ziyuani_selected@2x.png")
                }
            ]
        };
    },
    methods: {
        tabSwitch(item) {
            this.$router.push(item.name);
        }
    }
};
</script>

<style scoped>
.screen-header-box {
    position: relative;
    z-index: 10;
}

.screen-header {
    height: 0.75rem;
    background-color: #04172e;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 2rem;
}

.tab-box {
    display: flex;
    align-items: center;
}

.tab-item {
    display: flex;
    align-items: center;
    padding: 0.2rem 0.3rem;
    cursor: pointer;
    transition: .3s all;
}

.tab-item img {
    display: block;
    width: .2rem;
    margin-right: .05rem;
}

.tab-title {
    font-size: 0.175rem;
    font-weight: 600;
    color: #ffffff;
    background: linear-gradient(to bottom, #d0f2fa 0%, #4a779e 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.tab-item.active {
    background: url(~./imgs/pic_bg_selected@2x.png) no-repeat;
    background-size: 100% 100%;
}

.tab-item.active .tab-title {
    color: #0DFFFF;
    background: none;
    -webkit-background-clip: unset;
    -webkit-text-fill-color: unset;
}
</style>