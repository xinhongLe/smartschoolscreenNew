<template>
    <moduleHeader title="知识点覆盖情况">
        <div class="teacher-list">
            <div
                class="teacher-list-item"
                v-for="(item, index) in teacherList"
                :key="index"
            >
                <div class="progres">
                    <Progres :percent="true" :max="100" :proData="item"></Progres>
                </div>
            </div>
        </div>
    </moduleHeader>
</template>
<script>
import moduleHeader from "@/components/moduleHeader.vue";
import Progres from '@/views/schoolData/schoolBasic/components/Progre'
export default {
   data() {
      return {
          teacherList: [
                {
                    name: "六年级",
                    progressNum: 75,
                    id: 10111,
                    people: 61
                },
                {
                    name: "五年级",
                    progressNum: 86,
                    id: 11013,
                    people: 318
                },
                {
                    name: "四年级",
                    progressNum: 85,
                    id: 11015,
                    people: 122
                },
                {
                    name: "三年级",
                    progressNum: 95,
                    id: 11109,
                    people: 10
                },
                {
                    name: "二年级",
                    progressNum: 78,
                    id: 17049
                },
                {
                    name: "一年级",
                    progressNum: 89,
                    id: 170409
                }
            ]
      }
   },
   components:{moduleHeader,Progres},
   created(){
   },
   computed:{
   },
   methods:{
   },
}
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
