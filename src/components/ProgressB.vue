<template>
    <div class="progressBox">
        <span class="progress_name" v-if="islable">{{
            progressData.name
        }}</span>
        <div class="progress_border">
            <div
                class="progress_cont"
                :style="{ width: progress + '%', ...styleObject }"
                v-bind:class="{ progress_active: isActive }"
            >
            </div>
        </div>
        <span class="progress_number" v-if="isNum"
            >{{ progressData.progressNum }}<i v-if="ispercent">{{ unit }}</i>
        </span>
    </div>
</template>
<script>
export default {
    name: "progressB",
    props: {
        proData: {
            // 进度条数据对象
            type: Object,
            default: () => {}
        },
        ratioNum: {
            // 计算进度条的比例值
            type: Number,
            default: 1000
        },
        islable: {
            // 是否显示进度条的名字 默认显示
            type: Boolean,
            default: true
        },
        isNum: {
            // 是否显示进度条的占比数 默认显示
            type: Boolean,
            default: true
        },
        ispercent: {
            // 是否显示百分号 默认不显示
            type: Boolean,
            default: false
        },
        unit: {
            type: String,
            default: "%"
        },
        styleObject: {
            // 控制进度条颜色的对象 默认为蓝色渐变
            type: Object,
            default: () => {
                return {
                    background:
                        "linear-gradient(90deg, #70bfff 0%, #0dffff 100%)"
                };
            }
        }
    },
    data() {
        return {
            isActive: true,
            Interval: null,
            progressData: this.proData,
            progress: 0
        };
    },
    mounted() {
        this.initProgress();
    },
    watch: {
        // proData: {
        //     handler(data) {
        //         this.progressData = data;
        //         this.initProgress();
        //     },
        //     deep: true
        // }
    },
    methods: {
        async initProgress() {
            let num = (this.progressData.progressNum / this.ratioNum) * 100;
            clearInterval(this.Interval);
            this.Interval = setInterval(() => {
                this.progress = 0;
                this.isActive = false;
                setTimeout(() => {
                    this.isActive = true;
                    this.progress = num;
                }, 200);
            }, 5000);
            await this.sleep(200);
            this.progress = num;
        },

        sleep(time) {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve();
                }, time);
            })
        }
    },

    beforeDestroy() {
        clearInterval(this.Interval);
    }
};
</script>
<style lang="scss" scoped>
.progressBox {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // margin: 0.2rem auto;
    .progress_name {
        width: 0.9rem;
        font-size: 0.15rem;
        color: #96acc3;
    }
    .progress_number {
        // width: 0.4rem;
        text-align: center;
        font-size: 0.15rem;
        color: #7ab3e2;
    }
    .progress_border {
        flex: 1;
        height: 50%;
        max-height: 0.25rem;
        min-height: 0.15rem;
        margin: 0 0.1rem;
        display: flex;
        align-items: center;
        background: rgba(255, 255, 255, 0.1);
    }
    .progress_cont {
        width: 0px;
        height: 80%;
        min-height: 0.1rem;
        position: relative;
        background: linear-gradient(90deg, #70bfff 0%, #0dffff 100%);
    }
    .progress_cont::after {
        content: " ";
        display: block;
        width: 0.002rem;
        height: 120%;
        position: absolute;
        right: 0;
        top: -0.02rem;
        background: #ffffff;
    }
    .progress_active {
        transition: width 2s;
    }
}
</style>