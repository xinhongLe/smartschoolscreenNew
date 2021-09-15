<template>
    <div class="gender-ratio">
        <module-header title="学生男女比例(园区)" autoHeight>
            <div slot="header-right" style="color:#96ACC3;font-size: 10px;">注释：0.3%的学生未录入性别数据</div>
            <div class="gender-ratio-content">
                <div class="gender-ratio-item">
                    <div class="man-header">
                        <div class="center">
                           <img src="../images/pic_nan.png" alt=""> 
                           <div>
                                <p >男生</p>
                                <p style="color:#0DFFFF;">62262</p>
                            </div>
                            <span style="color: #0DFFFF;">71%</span>
                        </div>
                        
                    </div>
                    <div class="man-list">
                       <div class="man-list-item" v-for="(item,index) in manList" :key="index">
                            <ProgressB :proData="item"></ProgressB>
                       </div>
                    </div>
                </div>
                <div class="gender-ratio-item">
                    <div class="man-header">
                        <div class="center">
                            <img src="../images/pic_nv.png" alt="">
                            <div>
                                <p>女生</p>
                                <p>12345</p>
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
                  name:'幼儿园',
                  progressNum:562,
                  id:11
              },
              {
                  name:'小学',
                  progressNum:1005,
                  id:22
              },
              {
                  name:'初中',
                  progressNum:1419,
                  id:33
              },
              {
                  name:'中职',
                  progressNum:3042,
                  id:44
              },
              {
                  name:'高中',
                  progressNum:2560,
                  id:442
              }
          ],
          wanList:[
              {
                  name:'幼儿园',
                  progressNum:562,
                  id:111
              },
              {
                  name:'小学',
                  progressNum:1005,
                  id:221
              },
              {
                  name:'初中',
                  progressNum:1419,
                  id:331
              },
              {
                  name:'中职',
                  progressNum:3042,
                  id:441
              },
              {
                  name:'高中',
                  progressNum:2560,
                  id:4412
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
    width: 100%;
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
