<template>
    <module-header title="在线课堂热度分布">
        <BallBounce :list="list" :scale="10"></BallBounce>
    </module-header>
</template>

<script>
import ModuleHeader from "@/components/moduleHeader";
import BallBounce from '@/components/ballBounce'
export default {
    components: {
        ModuleHeader,
        BallBounce
    },
    data() {
        return {
            list: [
                { name: "一年级", count: 532 },
                { name: "二年级", count: 493 },
                { name: "三年级", count: 321 },
                { name: "四年级", count: 468 },
                { name: "五年级", count: 386 },
                { name: "六年级", count: 325 },
                { name: "七年级", count: 420 },
                { name: "八年级", count: 317 },
                { name: "九年级", count: 397 },
            ]
        };
    }
};
</script>

<style scoped lang="scss">
/deep/.box {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 50%;
    filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.35));
    .num {
        margin: 0;
        color: #fff;
        text-align: center;
        display: block;
    }
    > span {
        color: #fff;
        display: block;
        text-align: center;
    }
}
.heat-distribution-container {
    position: relative;
    height: 100%;
}
.inner-box {
    width: 3rem;
    height: 3rem;
    border: 1px solid rgba(20, 43, 74, 0.4);
    border-radius: 50%;
    margin: auto;
    box-sizing: border-box;
    position: absolute;
    left: 0;
    right: 0;
    top: .25rem;
    z-index: -1;
    &:after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        margin: auto;
        width: 2rem;
        height: 2rem;
        display: block;
        border-radius: 50%;
        border: 1px solid rgba(20, 43, 74, 0.7);
    }
}
/deep/.rate-box {
    color: #fff;
    width: 100%;
    height: 100%;
    position: relative;
    > div:nth-of-type(1) {
        background: linear-gradient(225deg, #0dffff 0%, #70bfff 100%);
        box-shadow: 0px 12px 37px 0px rgba(95, 201, 255, 0.4);
        opacity: 0.9;
    }
    > div:nth-of-type(2) {
        background: linear-gradient(214deg, #31f0b3 0%, #00d88c 100%);
        box-shadow: 0px 12px 37px 0px rgba(14, 223, 152, 0.4);
        opacity: 0.9;
    }
    > div:nth-of-type(3) {
        background: linear-gradient(210deg, #4cb1ff 0%, #376dcc 100%);
        box-shadow: 0px 12px 37px 0px rgba(61, 129, 219, 0.4);
        opacity: 0.9;
    }
    > div:nth-of-type(4) {
        background: linear-gradient(229deg, #a962f3 0%, #7833e2 100%);
        box-shadow: 0px 12px 37px 0px rgba(149, 79, 236, 0.4);
        opacity: 0.9;
    }
    > div:nth-of-type(5) {
        background: linear-gradient(225deg, #0dffff 0%, #70bfff 100%);
        box-shadow: 0px 12px 37px 0px rgba(95, 201, 255, 0.4);
        opacity: 0.9;
    }
    > div:nth-of-type(6) {
        background: linear-gradient(-135deg, #b921d0 0%, #fc5ad3 100%);
        background: linear-gradient(222deg, #fc5ad3 0%, #b921d0 100%);
        box-shadow: 0px 12px 37px 0px rgba(228, 69, 210, 0.4);
        opacity: 0.9;
    }
    > div:nth-of-type(7) {
        background: linear-gradient(214deg, #31f0b3 0%, #00d88c 100%);
        box-shadow: 0px 12px 37px 0px rgba(14, 223, 152, 0.4);
        opacity: 0.9;
    }
    > div:nth-of-type(8) {
        background: linear-gradient(222deg, #fc5ad3 0%, #b921d0 100%);
        box-shadow: 0px 12px 37px 0px rgba(228, 69, 210, 0.4);
        opacity: 0.9;
    }
    > div:nth-of-type(9) {
        background: linear-gradient(210deg, #4cb1ff 0%, #376dcc 100%);
        box-shadow: 0px 12px 37px 0px rgba(61, 129, 219, 0.4);
        opacity: 0.9;
    }
    > div:nth-of-type(10) {
        background: linear-gradient(229deg, #a962f3 0%, #7833e2 100%);
        box-shadow: 0px 12px 37px 0px rgba(149, 79, 236, 0.4);
        opacity: 0.9;
    }
}
</style>