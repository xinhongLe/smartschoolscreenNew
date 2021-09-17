<template>
    <div class="left-box">
        <div class="data-box">
            <div class="data-title">本学期已开启</div>
            <div class="data-num">{{ day }}</div>
        </div>
        <div class="v-line"></div>
        <ModuleHeader autoHeight title="今日考勤">
            <div class="v-line"></div>
            <div class="data-box">
                <div class="data-top">出勤 <span>98%</span></div>
                <div class="data-bottom">4792 <span>（人）</span></div>
            </div>
            <div class="v-line"></div>
            <div class="data-box">
                <div class="data-top">请假 <span>0.3%</span></div>
                <div class="data-bottom">15 <span>（人）</span></div>
            </div>
            <div class="v-line"></div>
            <div class="data-box">
                <div class="data-top">旷课 <span>0.1%</span></div>
                <div class="data-bottom">5 <span>（人）</span></div>
            </div>
            <div class="v-line"></div>
            <div class="data-box">
                <div class="data-top">早退 <span>0.2%</span></div>
                <div class="data-bottom">10 <span>（人）</span></div>
            </div>
            <div class="v-line"></div>
            <div class="data-box">
                <div class="data-top">迟到 <span>1.4%</span></div>
                <div class="data-bottom">68 <span>（人）</span></div>
            </div>
            <div class="v-line"></div>
        </ModuleHeader>
    </div>
</template>

<script>
import ModuleHeader from "@/components/moduleHeader";
export default {
    components: {
        ModuleHeader
    },

    data() {
        return {
            day: 0
        };
    },

    mounted() {
        this.day = Math.ceil(
            (new Date().getTime() - new Date("2021-09-01").getTime()) /
                1000 /
                24 /
                60 /
                60
        );
    }
};
</script>

<style scoped>
.v-line {
    height: 0.4rem;
}

.left-box {
    display: flex;
    flex-direction: column;
}

.data-box {
    width: 1.8rem;
    height: 1.5625rem;
    background: rgba(3, 86, 176, 0.13);
    border: 0.0175rem solid rgba(16, 163, 190, 0.23);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.data-title {
    text-align: center;
    font-size: .25rem;
    font-weight: 600;
    color: #ffffff;
    line-height: .35rem;
    background: linear-gradient(to bottom, #6aa8de 0%, #dff9ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-top: .15rem;
}

.data-num {
    font-size: .5rem;
    color: #0DFFFF;
    font-weight: 600;
    text-align: center;
    margin-top: .1rem;
}

.data-num:after {
    content: "天";
    color: #ffffff;
    font-size: .175rem;
    margin-left: .1rem;
}

.data-top {
    font-size: .3rem;
    font-weight: 600;
    color: #ffffff;
}

.data-top span {
    font-size: 0.225rem;
    color: #0DFFFF;
    margin-left: .1rem;
}

.data-bottom {
    font-size: 0.225rem;
    color: #0DFFFF;
    margin-top: .1rem;
}

.data-bottom span {
    font-size: .15rem;
    color: #ffffff;
    margin-left: .1rem;
}
</style>