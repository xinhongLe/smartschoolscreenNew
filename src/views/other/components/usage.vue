<template>
    <module-header title="老师使用情况">
        <table-common :headerList="headerList" :tableList="tableList">
            <template slot="table-header">
                <div class="header-color row">
                    <div
                       :class="[index === headerList.length - 1 ? 'col-first' : 'col']"
                        v-for="(item, index) in headerList"
                        :key="index"
                    >
                        {{ item.name }}
                    </div>
                </div>
            </template>
            <template>
                <div
                    v-for="(item, index) in tableList"
                    :key="index"
                    class="row"
                >
                    <div class="col">{{ item.teacherName }}</div>
                    <div class="col">{{ item.teacherGroup }}</div>
                    <div class="col">{{ item.onlineFrequency }}</div>
                    <div class="col">{{ item.onlineTime }}</div>
                    <div class="col-first" v-if="index < 2">
                        <img src="./../images/icon_zan@2x.png" />
                    </div>
                </div>
            </template>
        </table-common>
    </module-header>
</template>
<script>
import ModuleHeader from "@/components/moduleHeader";
import TableCommon from "@/components/tableCommon";
import { selectAxsTeacherUsage } from "./../api";
export default {
    name: "rightTable",
    components: { TableCommon, ModuleHeader },
    data() {
        return {
            headerList: [
                { name: "姓名" },
                { name: "科目组" },
                { name: "上线次数" },
                { name: "上线总时长" },
                { name: "" }
            ],
            tableList: []
        };
    },
    created() {
        this.getData();
    },
    methods: {
        getData() {
            selectAxsTeacherUsage().then((res) => {
                if (res.data.success) {
                    this.tableList = res.data.result;
                }
            });
        }
    }
};
</script>

<style scoped lang="scss">
.col-first img {
    width: 1vw;
    margin: auto;
}
.col {
    text-align: left !important;
}
.col-first {
    width: .8rem!important;
}
</style>