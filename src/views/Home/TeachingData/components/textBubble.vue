<template>
    <div class="text">
        <ModuleHeader>
            <div :class="'active'+activeIndex" class="inner">
                <span v-for="(item, index) in list" :key="index">{{ item }}</span>
            </div>
        </ModuleHeader>
    </div>
</template>

<script>
import ModuleHeader from "@/components/moduleBorder"
export default {
    name: "text-bubble",
    components: {
        ModuleHeader,
    },
    data() {
        return {
            activeIndex: 0,
            timer: "",
            list: ['学习教学',"老师学生","白板","写作","校长","教学互动","学习教学","心智园","学习","分享","老师","平台学习","电子书","线上线下","云端写作","互动","互动教学","线上线下"]
        }
    },
    created() {
        this.$nextTick(() => {
            this.timer = setTimeout(() => {
                this.timer = setInterval(() => {
                    if(this.activeIndex == 4) {
                        this.activeIndex = 0;
                    }
                    this.activeIndex ++ ;
                }, 300)
            }, 1000)
        })
    },
    beforeDestroy() {
        clearTimeout(this.timer)
        clearTimeout(this.timer)
        this.timer = null;
    }
};
</script> 

<style scoped lang="scss">
.text {
    width: 100%;
    display: flex;
    margin-top: .1rem;
    .inner {
        position: relative;
        span {
            position: absolute;
        }
        span:nth-of-type(1) {
            top: .5rem;
            left: 1rem;
            font-size: 0.2125rem;
            color: #71DEEF;
            line-height: 0.3125rem;
            opacity: .7;
        }
        span:nth-of-type(2) {
            top: .4rem;
            left: 2.65rem;
            font-size: 0.275rem;
            font-weight: 500;
            color: #163F6D;
            line-height: 0.375rem;
            opacity: .8;
        }
        span:nth-of-type(3) {
            left: 4.0625rem;
            top: .6625rem;
            font-size: .2125rem;
            color: #71DEEF;
            line-height:  0.3125rem;
            opacity: .5;
        }
        span:nth-of-type(4) {
            top: 1rem;
            left: .6rem;
            font-size: 0.275rem;
            font-weight: 500;
            color: #484B70;
            line-height: 0.375rem;
        }
        span:nth-of-type(5) {
            top: 1.2374rem;
            left: 1.725rem;
            font-size: 0.1875rem;
            font-weight: 600;
            color: #163F6D;
            line-height: 0.2625rem;
            opacity: .5;
        }
        span:nth-of-type(7) {
            top: 0.8265rem;
            left: 2.3125rem;
            font-size: 0.2875rem;
            font-weight: 500;
            color: #7BE9FA;
            line-height: 0.4125rem;
        }
        span:nth-of-type(6) {
            top: 1.1325rem;
            left: 4.1875rem;
            font-size: 0.25rem;
            color: #71DEEF;
            line-height: 0.35rem;
        }
        span:nth-of-type(8) {
            top: 1.465rem;
            left: .025rem;
            font-size: 0.1875rem;
            font-weight: 500;
            color: #71DEEF;
            line-height: 0.2625rem;
            opacity: .8;
        }
        span:nth-of-type(9) {
            top: 1.575rem;
            left: 1.1375rem;
            font-size: 0.25rem;
            font-weight: 500;
            color: #71DEEF;
            line-height: 0.35rem;
        }
        span:nth-of-type(10) {
            top: 1.6rem;
            left: 2.025rem;
            font-size: 0.1875rem;
            font-weight: 500;
            color: #71DEEF;
            line-height: 0.2625rem;
            opacity: .8;
        }
        span:nth-of-type(11) {
            top: 1.4rem;
            left: 3.1625rem;
            font-size: 0.2125rem;
            font-weight: 500;
            color: #1B4E83;
            line-height: 0.3125rem;
        }
        span:nth-of-type(12) {
            top: 2.025rem;
            left: .4rem;
            font-size: 0.175rem;
            color: #71DEEF;
            opacity: .6;
            line-height: 0.25rem;
        }
        span:nth-of-type(13) {
            top: 2.0625rem;
            left: 1.4375rem;
            font-size: 0.2125rem;
            font-weight: 500;
            color: #5A5D87;
            line-height: 0.3125rem;
            opacity: .8;
        }
        span:nth-of-type(14) {
            top: 1.875rem;
            left: 2.5125rem;
            font-size: 0.1625rem;
            font-weight: 500;
            color: #71DEEF;
            line-height: 0.225rem;
            opacity: .3;
        }
        span:nth-of-type(15) {
            top: 2.2rem;
            left: 2.875rem;
            font-size: 0.25rem;
            color: #71DEEF;
            line-height: 0.35rem;
        }
        span:nth-of-type(16) {
            top: 2.1125rem;
            left: 4.5rem;
            font-size: 0.2125rem;
            font-weight: 500;
            color: #71DEEF;
            line-height: 0.3125rem;
            opacity: .6;
        }
        span:nth-of-type(17) {
            top: 1.7rem;
            left: 3.775rem;
            font-size: 0.2125rem;
            font-weight: 500;
            color: #71DEEF;
            line-height: 0.3125rem;
            opacity: .3;
        }
    }
    .active0 {
        span:nth-of-type(n) {
            opacity: 1;
        }
    }
    .active1 {
        span:nth-of-type(1),
        span:nth-of-type(3),
        span:nth-of-type(6),
        span:nth-of-type(8),
        span:nth-of-type(9),
        span:nth-of-type(10),
        span:nth-of-type(12),
        span:nth-of-type(13),
        span:nth-of-type(14),
        span:nth-of-type(15),
        span:nth-of-type(16),
        span:nth-of-type(17){
            opacity: 1;
        }
    }
    .active2 {
        span:nth-of-type(2),
        span:nth-of-type(5){
            opacity: 1;
        }
    }
    .active3 {
        span:nth-of-type(11){
            opacity: 1;
        }
    }
    .active4 {
         span:nth-of-type(4){
            opacity: 1;
        }
    }
}
</style>