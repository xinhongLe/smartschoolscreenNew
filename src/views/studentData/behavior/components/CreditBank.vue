<template>
    <moduleHeader title="学分银行">
        <table-common :headerList="headerList" :tableList="tableList" class="ranking-box">
            <template>
                <div v-for="(item, index) in tableList" :key="index" class="row">
                    <div class="col-first">No.{{ index + 1 }}</div>
                    <div class="col">{{ item.grade }}</div>
                    <div class="col">{{ item.num }}</div>
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
                {grade: "九年级", num: 1023}
            ]
        };
    }
};
</script>

<style scoped lang="scss">
.ranking-box {
    margin-top: .5rem;
    .row {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding: 0 15%;
        .col, .col-first {
            flex: 1;
            color: #70BFFF
        }
        .col {
            color: #96ACC3
        }
    }
    .header-color .col-first {
        color: #70BFFF!important
    }
    .row:nth-of-type(1) .col-first {
        color: #FA4A4F
    }
    .row:nth-of-type(2) .col-first {
        color: #FFD01D
    }
    .row:nth-of-type(3) .col-first {
        color: #0DFFFF
    }
}
</style>