<template>
    <div class="gender-ratio">
        <module-header title="教师性别分布情况">
            <div class="gender-ratio-content">
                <div class="gender-ratio-item">
                    <div class="man-header">
                        <div class="center">
                           <img src="../../StudentData/images/pic_nan.png" alt=""> 
                           <div>
                                <p >男教师</p>
                                <p style="color:#0DFFFF;">42637</p>
                            </div>
                            <span style="color: #0DFFFF;">29%</span>
                        </div>
                        
                    </div>
                    <div class="man-list">
                       <div class="man-list-item" v-for="(item,index) in manList" :key="index">
                            <ProgressB :proData="item" :max="50000"></ProgressB>
                       </div>
                    </div>
                </div>
                <div class="gender-ratio-item">
                    <div class="man-header">
                        <div class="center">
                            <img src="../../StudentData/images/pic_nv.png" alt="">
                            <div>
                                <p>女教师</p>
                                <p>75109</p>
                            </div>
                            <span>71%</span>
                        </div>
                    </div>
                    <div class="man-list">
                       <div class="man-list-item" v-for="(item,index) in wanList" :key="index">
                            <ProgressD :proData="item"></ProgressD>
                       </div>
                    </div>
                </div>
            </div>
        </module-header>
    </div>
</template>
<script>
import ProgressB from '@/components/ProgressE'
import ProgressD from '@/components/ProgressD'
import moduleHeader from "@/components/moduleHeader";
export default {
   data() {
      return {
          manList:[
              {
                  name:'高职',
                  progressNum: 2333,
                  id:11
              },
              {
                  name:'中职',
                  progressNum: 2026,
                  id:22
              },
              {
                  name:'高中',
                  progressNum: 9888,
                  id:33
              },
              {
                  name:'初中',
                  progressNum: 10345,
                  id:44
              },
              {
                  name:'小学',
                  progressNum: 16422,
                  id:442
              },
              {
                  name:'幼儿园',
                  progressNum: 1623,
                  id:445
              }
          ],
          wanList:[
              {
                  name:'高职',
                  progressNum: 4262,
                  id:111
              },
              {
                  name:'中职',
                  progressNum: 4005,
                  id:221
              },
              {
                  name:'高中',
                  progressNum: 11419,
                  id:331
              },
              {
                  name:'初中',
                  progressNum: 13042,
                  id:441
              },
              {
                  name:'小学',
                  progressNum: 30560,
                  id:4412
              },
              {
                  name:'幼儿园',
                  progressNum: 23560,
                  id:4415
              }
          ]
      }
   },
   components:{
       moduleHeader,ProgressD,ProgressB
   }
}
</script>
<style lang="scss" scoped>
.gender-ratio{
    flex:1;
    .gender-ratio-content{
        width: 100%;
        display: flex;
        justify-content: space-between;
        .gender-ratio-item{
            width: 48%;
            .man-header{
                display: flex;
                flex: 1;
                justify-content: center;
                align-items: center;
                padding: 20px 0 6px 0 ;
                .center{
                    display: flex;
                    img{
                        width: 0.43rem;
                        height: 0.7rem;
                        margin-right: 0.18rem;
                    }
                    div{
                        width: 0.6rem;
                        height: 0.6rem;
                        margin-right: 0.2rem;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        p:nth-of-type(1){
                            font-size: 16px;
                            font-family: PingFangSC-Semibold, PingFang SC;
                            font-weight: 600;
                            color: #FFFFFF;
                            margin: 0;
                        }
                        p:nth-of-type(2){
                            font-size: 12px;
                            font-family: Bahnschrift;
                            color: #FC5AD3;
                            margin: 0;
                            padding-top: 0.11rem;
                        }
                    }
                    span{
                        padding-top: 0.09rem;
                        color: #FC5AD3;
                        line-height: 18px;
                        font-size: 14px;
                    }
                }
            }
        }
    }
}
</style>
