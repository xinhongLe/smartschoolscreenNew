<template>
    <module-header title="教师参与率（资源建设）">
        <div class="container">
            <div class="rate-box" id="container"></div>
            <div class="inner-box"></div>
        </div>
    </module-header>
</template>

<script>
import ModuleHeader from "@/components/moduleHeader";
// import CountTo from "vue-count-to";
import { CollBox, Ball } from "./collision.min.js";
export default {
    components: {
        ModuleHeader
        // CountTo
    },
    data() {
        return {
            list: [
                { name: "*苏区", count: 82 },
                { name: "**园区", count: 67 },
                { name: "*熟市", count: 43 },
                { name: "*仓市", count: 45 },
                { name: "*山市", count: 44 },
                { name: "**港市", count: 62 },
                { name: "*丘区", count: 41 },
                { name: "*城区", count: 45 },
                { name: "*中区", count: 70 },
                { name: "*江区", count: 44 }
            ]
        };
    },
    created() {
        this.$nextTick(() => {
            function rand(m, n) {
                return m + parseInt((n - m) * Math.random());
            }
            var oC = document.getElementById("container");
            var mxwidth = oC.offsetWidth;
            var mxheight = oC.offsetHeight;
            var oB = new CollBox("container");
            oB.ballRun();
            this.list.forEach((element) => {
                var b = rand(mxwidth / 22, mxwidth / 14);
                var x = rand(b, mxwidth / 10 - b);
                var y = rand(b, mxheight - b);
                let str1 =
                    "style=font-size:" +
                    parseInt(b / 2) +
                    "px;line-height:" +
                    parseInt(b / 2) +
                    "px";
                let str2 =
                    "style=font-size:" +
                    parseInt(b / 3.5) +
                    "px;line-height:" +
                    parseInt(b / 3.5) +
                    "px";
                var ball = new Ball({
                    b: b,
                    x: x,
                    y: y,
                    sx: rand(1, 4),
                    sy: rand(1, 4),
                    html: `<p class="num" ${str1}><span>${element.count}</span><span>%</span></p><span ${str2}>${element.name}</span>`
                });
                oB.addBall(ball);
            });
        });
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
.container {
    position: relative;
    height: 100%;
}
.inner-box {
    width: 3.5rem;
    height: 3.5rem;
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