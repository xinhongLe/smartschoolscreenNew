<template>
        <div class="teacher-list">
            <div
                class="teacher-list-item"
                v-for="(item, index) in teacherList"
                :key="index"
            >
                <div class="progres">
                    <Progres :max="250" :proData="item"></Progres>
                </div>
            </div>
        </div>
</template>
<script>
import Progres from "./Progre.vue";
export default {
    data() {
        return {
            teacherList: [
                {
                    name: "20年以上",
                    progressNum: 12,
                    id: 1111,
                    people: 61
                },
                {
                    name: "15-20以上",
                    progressNum: 96,
                    id: 1113,
                    people: 318
                },
                {
                    name: "10-15年",
                    progressNum: 143,
                    id: 1115,
                    people: 122
                },
                {
                    name: "3-10年",
                    progressNum: 231,
                    id: 1119,
                    people: 10
                },
                {
                    name: "0-3年",
                    progressNum: 174,
                    id: 1749
                }
            ]
        };
    },
    components: { Progres },
    created() {},
    computed: {},
    methods: {}
};
</script>
<style lang="scss" scoped>
.teacher-list{
    padding-top: 0.2rem;
    height: 100%;
    display: flex;
    flex:1;
    flex-direction: column;
    justify-content: space-around;
}
.teacher-list-item {
    display: flex;
    align-items: center;
    .people {
        width: 0.3rem;
        padding-left: 10px;
        font-size: 12px;
        font-family: Bahnschrift;
        color: #7ab3e2;
        font{
            font-size: 8px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #FFFFFF;
        }
    }
    .progres{
        width: 100%;
    }
}
</style>
