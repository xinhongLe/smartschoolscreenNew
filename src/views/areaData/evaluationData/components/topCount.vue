<template>
    <div class="top-count">
        <ModuleBorder :autoHeight="true">     
            <div class="inner">
                <CountTo
                    ref="example2"
                    class="num num1"
                    :start-val="0"
                    :end-val="1523416"
                    :duration="3000"
                ></CountTo>
                <p>课时数量</p>
                <span><i></i><i></i><i></i></span>
            </div>
        </ModuleBorder>
        <ModuleBorder :autoHeight="true">     
            <div class="inner">
                <CountTo
                    ref="example2"
                    class="num num2"
                    :start-val="0"
                    :end-val="6023768"
                    :duration="3000"
                ></CountTo>
                <p>备课次数</p>
                <span><i></i><i></i><i></i></span>
            </div>
        </ModuleBorder>
        <ModuleBorder :autoHeight="true">     
            <div class="inner">
                <CountTo
                    ref="example2"
                    class="num num3"
                    :start-val="0"
                    :end-val="687219"
                    :duration="3000"
                ></CountTo>
                <p>教研次数</p>
                <span><i></i><i></i><i></i></span>
            </div>
        </ModuleBorder>
        <ModuleBorder :autoHeight="true">     
            <div class="inner">
                <CountTo
                    ref="example2"
                    class="num num4"
                    :start-val="0"
                    :end-val="78293734"
                    :duration="3000"
                ></CountTo>
                <p>作业次数</p>
                <span><i></i><i></i><i></i></span>
            </div>
        </ModuleBorder>
        <ModuleBorder :autoHeight="true">     
            <div class="inner">
                <CountTo
                    ref="example2"
                    class="num num5"
                    :start-val="0"
                    :end-val="873728"
                    :duration="3000"
                ></CountTo>
                <p>考试次数</p>
                <span><i></i><i></i><i></i></span>
            </div>
        </ModuleBorder>
    </div>
</template>

<script>
import CountTo from "vue-count-to";
import ModuleBorder from "@/components/moduleBorder";
export default {
    name: "top-count",
    components: {
        CountTo,
        ModuleBorder 
    }
};
</script> 

<style scoped lang="scss">
.top-count {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: .4rem;
    >div {
        margin-right: .5rem;
    }
    >div:last-of-type {
        margin-right: 0;
    }
    .inner {
        height: 1.2rem;
        text-align: center;
        box-sizing: border-box;
        padding-top: 0.1875rem;
        .num {
            font-size: 0.55rem;
            margin-top: 0;
            line-height: 0.55rem;
            margin-bottom: 0.05rem;
            color: #FFFFFF;
        }
        .num1 {
            color: #0DFFFF;
        }
        .num2 {
            color: #70BFFF; 
        }
        .num3 {
            color: #07E99A;
        }
        .num4 {
            color: #FA4A4F;
        }
        .num5 {
            color: #733EFA;
        }
        >p {
            margin: 0;
            font-size: 0.2rem;
            line-height: 0.2rem;
            margin-top: 0.1rem;
            color: #FFFFFF;
        }
        >span:last-of-type {
            margin-left: 0.45rem;
            overflow: hidden;
            display: block;
        }
        i {
            margin-top: 0.15rem;
            width: 0.025rem;
            height: 0.025rem;
            background: #EDF2F8;
            opacity: 0.3;
            display: block;
            float: left;
            margin-right: 0.065rem;
        }
    }
}
</style>