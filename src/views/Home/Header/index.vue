<template>
    <div class="screen-header-box">
        <div class="screen-header">
            <div class="tab-box">
                <div
                    class="tab-item"
                    :class="`${$route.path.indexOf(item.name) > -1 && 'active'} ${openName == item.name && 'icon-active'}`"
                    v-for="(item) in tabList"
                    :key="item.name"
                    @click.stop="tabSwitch(item)"
                >
                    <img :src="$route.path.indexOf(item.name) > -1 ? item.selected : item.url" />
                    <div class="tab-title">{{ item.title }}</div>
                    <img class="icon" src="./imgs/icon_arrow_selected@2x.png" alt="">
                    <div class="select-list" v-if="item.name == openName" :class="item.name == openName && 'active'" v-click-outside="close">
                        <div class="select-item" :class="$route.name == select.name && 'active'" v-for="(select) in item.list" :key="select.name" @click.stop="selectPage(select)">
                            {{select.title}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ClickOutside from "vue-click-outside";
export default {
    name: "Header",
    directives: { ClickOutside },
    props: {
        showSelect: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            openName: "",
            tabList: [
                {
                    name: "studentData",
                    title: "学生数据中心",
                    url: require("./imgs/icon_xuesheng_default@2x.png"),
                    selected: require("./imgs/icon_xuesheng_selected@2x.png"),
                    list: [
                        {
                            name: "comprehensive",
                            title: "学生综合素质评价"
                        },
                        {
                            name: "behavior",
                            title: "行为表现数据"
                        },
                        {
                            name: "studies",
                            title: "学业评价数据"
                        },
                        {
                            name: "exam",
                            title: "考试数据"
                        },
                        {
                            name: "homework",
                            title: "作业数据"
                        },
                        {
                            name: "studentBasic",
                            title: "学生基础数据概况"
                        }
                    ]
                },
                {
                    name: "teacherData",
                    title: "教师数据中心",
                    url: require("./imgs/icon_laoshi_default@2x.png"),
                    selected: require("./imgs/icon_laoshi_selected@2x.png"),
                    list: [
                        {
                            name: "teachingEvaluation",
                            title: "教师教学与评价"
                        },
                        {
                            name: "teacherPersonal",
                            title: "教师个人发展数据"
                        },
                        {
                            name: "teacherBasic",
                            title: "教师基础数据概况"
                        }
                    ]
                },
                {
                    name: "schoolData",
                    title: "学校数据驾驶舱",
                    url: require("./imgs/icon_ketang_default@2x.png"),
                    selected: require("./imgs/icon_ketang_selected@2x.png"),
                    list: [
                        {
                            name: "schoolBasic",
                            title: "校园基础数据"
                        },
                        {
                            name: "lessonData",
                            title: "课堂教学数据"
                        },
                        {
                            name: "classData",
                            title: "班级评比数据"
                        },
                        {
                            name: "schoolSecurity",
                            title: "校园安全数据"
                        }
                    ]
                },
                {
                    name: "areaData",
                    title: "区域数据驾驶舱",
                    url: require("./imgs/icon_jiaoyan_default@2x.png"),
                    selected: require("./imgs/icon_jiaoyan_selected@2x.png"),
                    list: [
                        {
                            name: "educationData",
                            title: "教育数据概况"
                        },
                        {
                            name: "evaluationData",
                            title: "教-学-评价数据"
                        },
                        {
                            name: "areaEducationData",
                            title: "区域教育教研"
                        },
                        {
                            name: "areaSecurity",
                            title: "区域教育安全"
                        },
                        {
                            name: "areaResource",
                            title: "区域资源建设"
                        }
                    ]
                }
            ]
        };
    },
    methods: {
        tabSwitch(item) {
            console.log(item.name)
            this.openName = item.name;
        },

        close() {
            this.openName = "";
        },

        selectPage(select) {
            this.openName = "";
            this.$router.push({
                name: select.name
            })
        }
    }
};
</script>

<style scoped>
.screen-header-box {
    position: relative;
    z-index: 100;
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
    position: relative;
}

.select-list {
    position: absolute;
    background-color: red;
    left: 50%;
    transform: translateX(-50%);
    bottom: .7rem;
    transition: .3s all;
    width: 2.4rem;
    box-sizing: border-box;
    background: url("~./imgs/bg_popup@2x.png") no-repeat;
    background-size: 100% 100%;
    padding: .2rem .08rem .12rem;
    display: none;
    opacity: 0;
}

.select-list.active {
    display: block;
    opacity: 1;
}

.select-item {
    padding: .15rem .2rem;
    font-size: 0.175rem;
    color: #ffffff;
}

.tab-item .icon {
    width: .18rem;
    display: block;
    transition: .3s all;
    margin-left: .1rem;
    margin-right: 0;
    position: relative;
    top: .03rem;
}

.tab-item.icon-active .icon {
    transform: rotate(180deg);
    top: 0;
}

.select-item.active {
    background: linear-gradient(to left, rgba(71, 245, 252, 0) 0%, rgba(71, 245, 252, .2));
    color: rgba(18, 252, 255, 1);
    position: relative;
}

.select-item.active:after {
    content: "";
    display: block;
    width: .22rem;
    height: .22rem;
    background: url("~./imgs/icon_selected@2x.png") no-repeat;
    background-size: 100% 100%;
    position: absolute;
    right: .2rem;
    top: 50%;
    transform: translateY(-50%);
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

.update-time-box {
    position: absolute;
    right: .3rem;
}

.update-time-title {
    font-size: .15rem;
    color: #EDF2F8;
    padding-left: 0.18rem;
}

.update-time-text {
    display: flex;
    align-items: center;
    margin-top: .05rem;
    font-size: .15rem;
    color: #70BFFF;
}

.update-time-text img {
    display: block;
    width: 0.13rem;
    margin-right: 0.05rem;
    position: relative;
    top: -0.008rem;
}
</style>