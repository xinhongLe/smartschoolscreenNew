<template>
    <moduleHeader title="学分银行">
        <table-common id="creditBank" :tableList="tableList" class="ranking-box">
            <template>
                <div v-for="(item, index) in tableList" :key="index" class="row">
                    <div class="col first text-left">No.{{ index + 1 }}</div>
                    <div class="col text-center">{{ item.grade }}</div>
                    <div class="col text-right">{{ item.num }}</div>
                </div>
            </template>
        </table-common>
    </moduleHeader>
</template>
<script>
import moduleHeader from "@/components/moduleHeader.vue";
import TableCommon from "@/components/tableCommon";
export default {
    components: { moduleHeader, TableCommon },
    data() {
        return {
            tableList: [
                {grade: "三年级", num: 3002},
                {grade: "四年级", num: 2780},
                {grade: "一年级", num: 2656},
                {grade: "六年级", num: 2300},
                {grade: "二年级", num: 2099},
                {grade: "五年级", num: 1967},
                {grade: "七年级", num: 1676},
                {grade: "八年级", num: 1309},
                {grade: "九年级", num: 1023},
                {grade: "十年级", num: 1023},
            ]
        };
    }
};
</script>

<style scoped lang="scss">
.ranking-box {
    .row:nth-of-type(1) .first {
        color: #FA4A4F
    }
    .row:nth-of-type(2) .first {
        color: #FFD01D
    }
    .row:nth-of-type(3) .first {
        color: #0DFFFF
    }
}
</style>