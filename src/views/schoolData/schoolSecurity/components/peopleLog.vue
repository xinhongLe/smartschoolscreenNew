<template>
    <module-header autoHeight title="人员记录">
        <div class="v-line"></div>
        <div class="message-box">
            <div class="message-item">
                <div class="num">
                    1328
                </div>
                <div class="message-text">入校学生(名)</div>
            </div>
            <div class="h-line"></div>
            <div class="message-item">
                <div class="num">
                    298
                </div>
                <div class="message-text">入校教职工(名)</div>
            </div>
            <div class="h-line"></div>
            <div class="message-item">
                <div class="num">
                    6
                </div>
                <div class="message-text">入校访客(名)</div>
            </div>
        </div>
        <div class="v-line"></div>
        <div class="message-box">
            <div class="message-item">
                <div class="num">
                    3
                </div>
                <div class="message-text">请假学生(名)</div>
            </div>
            <div class="h-line"></div>
            <div class="message-item">
                <div class="num blue">
                    0
                </div>
                <div class="message-text">请假教职工(名)</div>
            </div>
            <div class="h-line"></div>
            <div class="message-item">
                <div class="num red">
                    1
                </div>
                <div class="message-text">异常访客(名)</div>
            </div>
        </div>
        <div class="v-line"></div>
    </module-header>
</template>

<script>
import ModuleHeader from "@/components/moduleHeader";
export default {
    components: {
        ModuleHeader
    }
};
</script>

<style scoped>
.v-line {
    height: 0.2rem;
}

.h-line {
    width: .2rem;
}

.message-box {
    display: flex;
}

.message-item {
    flex: 1;
    border: .0175rem solid rgba(16, 163, 190, 0.23);
    background-color: rgba(3, 86, 176, 0.1);
    text-align: center;
    padding: .1rem 0;
}

.num {
    font-size: .3rem;
    color: #70BFFF;
    font-weight: 600;
}

.message-text {
    font-size: .15rem;
    color: #96ACC3;
}

.red {
    color: #FA4A4F;
}

.blue {
    color: #0DFFFF;
}
</style>