<template>
    <div class="instructions">
      <module-header :title="title">
         <div>
           <div class="header">
             <div v-for="(item, index) in headerList" :key="index">
              <span>{{item.name}}：</span>
              <span class="text-blue">{{item.count}}</span>
             </div>
           </div>
           <div class="content">
            <div class="content-box" v-for="(item, index) in contentList" :key="index">
              <div class="content-col">
                <p class="count" :style="{color: item.color}">{{item.count}}</p>
                <p>{{item.name}}</p>
                <p class="count-detail text-blue">{{item.countDetatil ?  item.countDetatil+'人' : ''}}</p>
              </div>
              <div class="img-box">
                <img class="animation-img" src="../images/pic_arrow@2x.png" alt="">
                <img class="animation-img" v-if="item.type === 4" src="../images/pic_arrow@2x.png" alt="">
              </div>
            </div>
             <div>
               <div class="col-last"  v-for="(item, index) in contentListLast" :key="index">
                 <p class="count-last" :style="{color: item.color}">{{item.count}}</p>
                 <p>{{item.name}}</p>
                 <p class="count-detail-last text-blue">{{item.countDetatil}}人</p>
               </div>
             </div>
           </div>
         </div>
      </module-header>
    </div>
</template>
<script>
import ModuleHeader from "@/components/moduleHeader";
export default {
    data() {
        return {
          title: '苏州工业园区',
          headerList: [
            {name: '学校总数', count: '77所'},
            {name: '学生总数', count: '88人'},
          ],
          contentList: [
            {type: 1, name: '新生入学(人)', count: 1299, countDetatil: '', color: '#70BFFF'},
            {type: 2, name: '幼儿园(所)', count: 88, countDetatil: 122434, color: '#0DFFFF'},
            {type: 3, name: '小学(所)', count: 77, countDetatil: 32324, color: '#FA4A4F'},
            {type: 4, name: '初中(所)', count: 19, countDetatil: 42321, color: '#FFD01D'},
          ],
          contentListLast: [
            {type: 1, name: '高中(所)', count: 1299, countDetatil: 232311, color: '#733EFA'},
            {type: 2, name: '中职(所)', count: 88, countDetatil: 122434, color: '#733EFA'},
          ],
        };
    },
    components: { ModuleHeader }
};
</script>
<style lang="scss" scoped>
.instructions {
    width: 100%;
    height: 2rem;
    color: #96ACC3;
    position: relative;
    z-index: 100;
    .text-blue{
      color: #0DFFFF;
    }
    .header{
      display: flex;
      justify-content: flex-start;
      margin-top: 0.15rem;
      padding: 0 0.1rem;
      >div{
        margin-right: 0.3rem;
      }
    }
    .content{
      display: flex;
      justify-content: flex-start;
      margin-top: 0.2rem;
      padding: 0 0.1rem;
      .content-box{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .content-col{
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: rgba(3, 86, 176, 0.31);
          border: 1px solid rgba(16, 163, 190, 0.23);
          width: 1.2rem;
          height: 0.8rem;
          p {
            margin: 0;
          }
          .count{
            margin-bottom: 0.1rem;
          }
          .count-detail{
            position: absolute;
            bottom: -0.3rem;
          }
        }
        .img-box{
          display: flex;
          flex-direction: column;
          img{
            //width: 0.5rem;
            height: 0.225rem;
            margin: 0 0.25rem;
            &:nth-child(2){
              margin-top: 0.2rem;
            }
          }
        }
      }
      .col-last{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 1.2rem;
        height: 0.4rem;
        padding: 0.06rem 0;
        background: rgba(3, 86, 176, 0.31);
        border: 1px solid rgba(16, 163, 190, 0.23);
        &:first-child{
          margin-bottom: 0.2rem;
          .count-detail-last{
            position: absolute;
            top: -0.25rem;
          }
        }
        &:last-child{
          .count-detail-last{
            position: absolute;
            bottom: -0.25rem;
          }
        }
        p{
          margin: 0;
          &:first-child{
            margin-bottom: 0.06rem;
          }
        }
      }
    }
}

.animation-img{
  animation: animation_img 2s infinite;
}
@keyframes animation_img{
  0%{
    opacity: 0;
  }
  50%{
    opacity: 0.5;
  }
  100%{
    opacity: 1;
  }
}
</style>
