<template>
    <div class="countToBox">
        <div class="city_info">
            <span class="city_name">苏州市</span>
            <div class="schoolsum">
                <CountTo class="school_count" :start-val="0" :end-val="1000" :duration="3000"></CountTo>
                <span>学校总数</span>
            </div>
        </div>
        <div class="personnel_info">
            <div class="personnel">
                <CountTo :start-val="0" :end-val="1000" :duration="3000"></CountTo>
                <span>总学生人数</span>
            </div>
            <div  class="personnel">
                <CountTo :start-val="0" :end-val="1000" :duration="3000"></CountTo>
                <span>总教师人数</span>
            </div>
            <div  class="personnel">
                <CountTo :start-val="0" :end-val="1000" :duration="3000"></CountTo>
                <span>总职工人数</span>
            </div>
        </div>
    </div>
</template>
<script>
import CountTo from 'vue-count-to'
export default {
    components:{
        CountTo
    }
}
</script>
<style lang="scss" scoped>
span{
    display: block;
}
.countToBox{
    width: 4.8rem;
    height: 1.7rem;
    margin: 0 auto;
    background: #8cabd6;
    .city_info{
        width: 100%;
        display: flex;
        justify-content: space-between;
        .city_name{
            font-size: 0.5rem;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: #ffffff;
            line-height: 56px;
            background: linear-gradient(180deg, #6AA8DE 0%, #DFF9FF 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent; 
        }
        // .schoolsum{
        //     display: flex;
        //     flex-direction: column;
        // }
        .school_count{
            font-size: 0.3rem;
            font-family: Bahnschrift_SemiBold;
            color: #0DFFFF;
            line-height: 29px;
        }
    }
    .personnel_info{
        width: 100%;
        display: flex;
        justify-content: space-between;
        .personnel{
            flex: 1;
            display: flex;
            flex-direction: column;
        }
    }
}

</style>