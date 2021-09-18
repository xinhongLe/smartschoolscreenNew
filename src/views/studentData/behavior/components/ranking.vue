<template>
    <table-common :headerList="headerList" :tableList="tableList" class="ranking-box">
        <template slot="table-header">
            <div class="header-color row">
                <div
                    :class="[index === 0 ? 'text-left' : 'text-center', 'col']"
                    v-for="(item, index) in headerList"
                    :key="index"
                >
                    {{ item.name }}
                </div>
            </div>
        </template>
        <template>
            <div v-for="(item, index) in tableList" :key="index" class="row">
                <div class="first col text-left">No.{{ index + 1 }}</div>
                <div class="col text-center">{{ item.name }}</div>
            </div>
        </template>
    </table-common>
</template>
<script>
import TableCommon from "@/components/tableCommon";
export default {
    name: "rightTable",
    components: { TableCommon },
    data() {
        return {
            headerList: [
                { name: "名次" },
                { name: "类别" }
            ],
            tableList: [
                { name: "科幻"},
                { name: "文学"},
                { name: "漫画"},
                { name: "武侠"},
                { name: "童话"},
                { name: "言情"},
                { name: "历史"},
                { name: "自传"}
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