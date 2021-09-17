<template>
    <moduleHeader title="学校年级、性别分布">
        <div class="gender-ratio-content">
                <div class="gender-ratio-item">
                    <div class="man-header">
                        <div class="center">
                           <img src="./imgs/pic_nan.png" alt=""> 
                           <div>
                                <p >男生</p>
                                <p style="color:#0DFFFF;">2332</p>
                            </div>
                            <span style="color: #0DFFFF;">51.8%</span>
                        </div>
                        
                    </div>
                    <div class="man-list">
                       <div class="man-list-item" v-for="(item,index) in manList" :key="index">
                            <ProgressB :max="500" :proData="item"></ProgressB>
                       </div>
                    </div>
                </div>
                <div class="gender-ratio-item">
                    <div class="man-header">
                        <div class="center">
                            <img src="./imgs/pic_nv.png" alt="">
                            <div>
                                <p>女生</p>
                                <p>2171</p>
                            </div>
                            <span>48.2%</span>
                        </div>
                    </div>
                    <div class="man-list">
                       <div class="man-list-item" v-for="(item,index) in wanList" :key="index">
                            <ProgressD :max="500" :proData="item"></ProgressD>
                       </div>
                    </div>
                </div>
        </div>
    </moduleHeader>
</template>
<script>
import moduleHeader from "@/components/moduleHeader.vue";
import ProgressB from './Progress'
import ProgressD from '@/components/ProgressD'
export default {
    data() {
        return {
            manList: [
                {
                    name: "一年级",
                    progressNum: 272,
                    id: 11
                },
                {
                    name: "二年级",
                    progressNum: 279,
                    id: 22
                },
                {
                    name: "三年级",
                    progressNum: 253,
                    id: 33
                },
                {
                    name: "四年级",
                    progressNum: 258,
                    id: 44
                },
                {
                    name: "五年级",
                    progressNum: 282,
                    id: 442
                },
                {
                    name: "六年级",
                    progressNum: 279,
                    id: 279
                },
                {
                    name: "七年级",
                    progressNum: 364,
                    id: 364
                },
                {
                    name: "八年级",
                    progressNum: 379,
                    id: 379
                },
                {
                    name: "九年级",
                    progressNum: 397,
                    id: 390
                }
            ],
            wanList: [
                {
                    name: "一年级",
                    progressNum: 252,
                    id: 252
                },
                {
                    name: "二年级",
                    progressNum: 239,
                    id: 239
                },
                {
                    name: "三年级",
                    progressNum: 246,
                    id: 246
                },
                {
                    name: "四年级",
                    progressNum: 238,
                    id: 238
                },
                {
                    name: "五年级",
                    progressNum: 249,
                    id: 249
                },
                {
                    name: "六年级",
                    progressNum: 237,
                    id: 237
                },
                {
                    name: "七年级",
                    progressNum: 360,
                    id: 360
                },
                {
                    name: "八年级",
                    progressNum: 337,
                    id: 337
                },
                {
                    name: "九年级",
                    progressNum: 362,
                    id: 362
                }
            ]
        };
    },
    components: { moduleHeader, ProgressD, ProgressB },
    created() {},
    computed: {},
    methods: {}
};
</script>
<style lang="scss" scoped>
.gender-ratio-content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .gender-ratio-item {
        width: 48%;
        .man-header {
            display: flex;
            flex: 1;
            justify-content: center;
            align-items: center;
            padding: 20px 0 6px 0;
            .center {
                display: flex;
                img {
                    width: 0.43rem;
                    height: 0.7rem;
                    margin-right: 0.18rem;
                }
                div {
                    width: 0.6rem;
                    height: 0.6rem;
                    margin-right: 0.2rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    p:nth-of-type(1) {
                        font-size: 16px;
                        font-family: PingFangSC-Semibold, PingFang SC;
                        font-weight: 600;
                        color: #ffffff;
                        margin: 0;
                    }
                    p:nth-of-type(2) {
                        font-size: 12px;
                        font-family: Bahnschrift;
                        color: #fc5ad3;
                        margin: 0;
                        padding-top: 0.11rem;
                    }
                }
                span {
                    padding-top: 0.09rem;
                    color: #fc5ad3;
                    line-height: 18px;
                    font-size: 14px;
                }
            }
        }
    }
}
</style>
