<template>
    <div class="instructions">
        <module-header
            title="苏州工业园区"
            rightTitle="学生入学趋势"
        ></module-header>
        <div class="instructions-content">
            <div class="instructions-total">
                <div>
                    <img src="" alt="" /><span>学校总数：</span
                    ><font>72所</font>
                </div>
                <div style="margin: 0 20px 0 20px">|</div>
                <div>
                    <img src="" alt="" /><span>学生总数：</span
                    ><font>122741人</font>
                </div>
            </div>
            <div class="instructions-tree">
                <div class="student-total">
                    <p>14212</p>
                    <p>新生入学(人)</p>
                </div>
                <div class="arrow">
                    <img src="" alt="" />
                </div>
                <div class="student-total">
                    <p>18</p>
                    <p>幼儿园(所)</p>
                </div>
                <div class="arrow">
                    <p>幼升小比例</p>
                    <p>100%</p>
                    <img src="" alt="" />
                </div>
                <div class="student-total">
                    <p>23</p>
                    <p>小学(所)</p>
                </div>
                <div class="arrow">
                    <p>小升初比例</p>
                    <p>99.58%</p>
                    <img src="" alt="" />
                </div>
                <div class="student-total">
                    <p>17</p>
                    <p>初中(所)</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ModuleHeader from "@/components/moduleHeader";
export default {
    data() {
        return {};
    },
    components: { ModuleHeader }
};
</script>
<style lang="scss" scoped>
.instructions {
    width: 100%;
}
.instructions-content {
    position: relative;
    .instructions-total {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        padding: 28px 12px;
        div {
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #96acc3;
            font {
                font-size: 12px;
                font-family: PingFangSC-Semibold, PingFang SC;
                font-weight: 600;
                color: #0dffff;
                line-height: 17px;
            }
        }
    }
    .instructions-tree{
        height: 100%;
        background:#ddd;
        color:#fff;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
    }
}
</style>
