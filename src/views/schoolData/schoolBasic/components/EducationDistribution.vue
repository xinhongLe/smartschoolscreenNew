<template>
    <moduleHeader title="教师学历分布">
        <div class="teacher-list">
            <div
                class="teacher-list-item"
                v-for="(item, index) in teacherList"
                :key="index"
            >
                <div class="progres">
                    <Progres :max="100" :proData="item"></Progres>
                </div>
                <div class="people">{{ item.people }}<font>(人)</font></div>
            </div>
        </div>
    </moduleHeader>
</template>
<script>
import moduleHeader from "@/components/moduleHeader.vue";
import Progres from "./Progres.vue";
export default {
    data() {
        return {
            teacherList: [
                {
                    name: "专科",
                    progressNum: 12,
                    id: 111,
                    people: 61
                },
                {
                    name: "本科",
                    progressNum: 62,
                    id: 113,
                    people: 318
                },
                {
                    name: "硕士",
                    progressNum: 24,
                    id: 115,
                    people: 122
                },
                {
                    name: "博士及以上",
                    progressNum: 2,
                    id: 119,
                    people: 10
                }
            ]
        };
    },
    components: { moduleHeader, Progres },
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
