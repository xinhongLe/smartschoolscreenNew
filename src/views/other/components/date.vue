<template>
    <el-date-picker
        v-model="date"
        type="daterange"
        range-separator="-"
        value-format="yyyy-MM-dd"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        @change="change"
    >
    </el-date-picker>
</template>
<script>
export default {
    data() {
        return {
            date: []
        }
    },
    methods: {
        change() {
            this.$emit("change", this.date)
        }
    }
};
</script>
<style scoped lang="scss">
::v-deep.el-date-editor {
    width: 12vw;
    height: 28px;
    background: rgba(3, 86, 176, 0.31);
    border: 1px solid rgba(16, 163, 190, 0.23);
    input {   
        background: none;
        line-height: 28px;
        color: #96ACC3;
        font-size: 12px;
    }
    i {
        margin-top: -11px;
    }
    .el-range-separator {
        color:#96ACC3;
        margin-top: -11px;
        font-size: 12px;
        font-weight: 400;
    }
}
</style>