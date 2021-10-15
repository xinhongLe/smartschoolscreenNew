<template>
    <div class="box">
        <p>最近3节课的使用率</p>
        <table-common :marquee="false" :headerList="headerList" :tableList="tableList">
            <template slot="table-header">
                <div class="header-color row">
                    <div
                        :class="[
                            index === headerList.length - 1
                                ? 'col-first'
                                : 'col'
                        ]"
                        v-for="(item, index) in headerList"
                        :key="index"
                    >
                        {{ item.name }}
                    </div>
                </div>
            </template>
            <template v-if="tableList.length > 0">
                <div
                    v-for="(item, index) in tableList"
                    :key="index"
                    class="row"
                >
                    <div class="col">{{ item.teacherName }}</div>
                    <div class="col">{{ item.teacherGroup }}</div>
                    <div class="col col-process" style="color: #0dffff">
                        <ProgressB
                            :proData="{
                                progressNum:
                                    item.oneNum + item.twoNum + item.threeNum
                            }"
                            :ratioNum="3"
                            :isNum="false"
                            style="float: left"
                            :key="`progress_${index}`"
                        ></ProgressB>
                         <span>{{ item.oneNum + item.twoNum + item.threeNum }}/3</span>
                    </div>
                    <div class="col-first">
                        <img
                            v-if="index < 2"
                            src="./../images/icon_zan@2x.png"
                        />
                    </div>
                </div>
            </template>
        </table-common>
    </div>
</template>
<script>
import TableCommon from "@/components/tableCommon";
import ProgressB from "@/components/ProgressB.vue";
import { queryAxsClassUseingNum } from "../api";
export default {
    name: "rightTable",
    components: { TableCommon, ProgressB },
    data() {
        return {
            headerList: [
                { name: "姓名" },
                { name: "科目组" },
                { name: "上课使用率" },
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
            queryAxsClassUseingNum().then((res) => {
                if (res.data.success) {
                    this.tableList = res.data.result
                        .map((v) => {
                            v.all = v.oneNum + v.twoNum + v.threeNum;
                            return v;
                        })
                        .sort(function (a, b) {
                            return b.all - a.all;
                        })
                }
            });
        }
    }
};
</script>

<style scoped lang="scss">
.box {
    width: 100%;
    height: calc(100% - 20px);
    padding: 24px;
    box-sizing: border-box;
    > p {
        font-size: 14px;
        color: #96acc3;
        line-height: 20px;
        margin: 0;
    }
}
.col-first img {
    width: 1vw;
    margin: auto;
}
.col {
    text-align: left !important;
}
.col-first {
    width: 0.8rem !important;
}

.row {
    height: 0.2rem !important;
}
.col-process {
    display: flex;
    justify-content: flex-start;
}
.progressBox {
    display: block;
    margin-right: 2vw;
}
</style>