<template>
    <ModuleHeader autoHeight title="重点关注学生">
        <div class="v-line"></div>
        <div class="attention-box">
            <div class="attention-item">
                <div class="data-num">37</div>
                <div class="data-desc">留守儿童(人)</div>
            </div>
            <div class="border-line"></div>
            <div class="attention-item">
                <div class="data-num">256</div>
                <div class="data-desc">农民工子女(人)</div>
            </div>
            <div class="border-line"></div>
            <div class="attention-item">
                <div class="data-num">99</div>
                <div class="data-desc">单亲家庭(人)</div>
            </div>
            <div class="border-line"></div>
            <div class="attention-item">
                <div class="data-num">62</div>
                <div class="data-desc">贫困生(人)</div>
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

.attention-box {
    display: flex;
    align-items: center;
}

.attention-item {
    flex: 1;
    text-align: center;
}

.data-num {
    font-size: .225rem;
    color: #0DFFFF;
    font-weight: 600;
}

.data-desc {
    font-size: .15rem;
    color: #96ACC3;
}

.border-line {
    height: .4rem;
    border-right: .0175rem solid rgba(255, 255, 255, .1);
}
</style>