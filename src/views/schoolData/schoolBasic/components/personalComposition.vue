<template>
    <ModuleHeader title="学校人员组成">
        <div class="v-line"></div>
        <div class="total-box">
            <div class="total-num">5093</div>
            <div class="total-desc">
                人员总数（名）
            </div>
        </div>
        <div class="personal-item">
            <div class="personal-name">
                教师
            </div>
            <div class="personal-num">
                518
            </div>
        </div>
        <div class="personal-item">
            <div class="personal-name">
                学生
            </div>
            <div class="personal-num">
                4503
            </div>
        </div>
        <div class="personal-item">
            <div class="personal-name">
                后勤
            </div>
            <div class="personal-num">
                72
            </div>
        </div>
        <div class="v-line"></div>
    </ModuleHeader>
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
    height: 0.4rem;
}

.total-box {
    padding: 0 .4rem;
    margin-bottom: .2rem;
}

.total-num {
    font-size: .3rem;
    color: #0DFFFF;
    font-weight: 600;
}

.total-desc {
    font-size: .15rem;
    color: #EDF2F8;
}

.personal-item {
    padding: .2rem .4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.personal-name {
    font-size: .2rem;
    color: #96ACC3;
}

.personal-num {
    color: #70BFFF;
    font-size: .2rem;
}

.personal-num:after {
    font-size: .175rem;
    content: "(人)";
    color: #ffffff;
    margin-left: .1rem;
}
</style>