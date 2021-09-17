<template>
    <moduleHeader title="作业认真度">
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
                    progressNum: 81,
                    id: 1111,
                    people: 61
                },
                {
                    name: "五年级",
                    progressNum: 76,
                    id: 1113,
                    people: 318
                },
                {
                    name: "四年级",
                    progressNum: 83,
                    id: 1115,
                    people: 122
                },
                {
                    name: "三年级",
                    progressNum: 92,
                    id: 1119,
                    people: 10
                },
                {
                    name: "二年级",
                    progressNum: 85,
                    id: 1749
                },
                {
                    name: "一年级",
                    progressNum: 72,
                    id: 17490
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
