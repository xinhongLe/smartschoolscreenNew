<template>
    <div class="title-header">
        <div class="title-bg" ref="ani"></div>
        <div class="back" v-if="$route.query.hasback" @click="goBack()">
            <i></i>
            返回
        </div>
        <div class="title">{{ title }}</div>
        <div class="header-right-box" v-if="showSelect">
            <VSelect v-model="addreessValue" :options="addressList" />
            <div style="width: 0.25rem"></div>
            <VSelect v-model="schoolValue" :options="schoolList" />
            <div class="reset-btn">重置</div>
        </div>
    </div>
</template>

<script>
import lottie from "lottie-web";
import VSelect from "@/components/select";
export default {
    components: { VSelect },
    props: {
        title: {
            type: String,
            default: ""
        },

        showSelect: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            addressList: [
                {
                    value: "1",
                    label: "全市区"
                },
                {
                    value: "2",
                    label: "工业园区"
                },
                {
                    value: "3",
                    label: "吴中区"
                }
            ],
            addreessValue: "1",
            schoolList: [
                {
                    value: "1",
                    label: "独墅湖校区"
                },
                {
                    value: "2",
                    label: "市一中"
                },
                {
                    value: "3",
                    label: "东沙湖校区"
                }
            ],
            schoolValue: "1"
        };
    },

    mounted() {
        this.$nextTick(() => {
            const animationData = require(`/public/jsonAnimation/header/data.json`);
            this.animation = lottie.loadAnimation({
                container: this.$refs.ani,
                renderer: "svg",
                loop: true,
                autoplay: true,
                animationData: animationData
            });
        });
    },

    methods: {
        goBack() {
            history.back();
        }
    },

    beforeDestroy() {
        this.animation.destroy();
    }
};
</script>

<style scoped>
.title-header {
    position: relative;
    /* background-color: #000916; */
}
.title {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 0.35rem;
    font-weight: 600;
    letter-spacing: 1px;
    background: linear-gradient(to bottom, #6aa8de 0%, #dff9ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.header-right-box {
    position: absolute;
    right: 0.5rem;
    display: flex;
    top: 50%;
    transform: translateY(-50%);
    align-items: center;
}

.reset-btn {
    font-size: 0.15rem;
    color: #fff;
    cursor: pointer;
    margin-left: 0.25rem;
}

.back {
    position: absolute;
    left: 0.25rem;
    z-index: 10;
    top: 0.25rem;
    color: #ffffff;
    display: flex;
    align-items: center;
    font-size: 0.25rem;
    cursor: pointer;
}

.back i {
    display: block;
    width: 0.16rem;
    height: 0.16rem;
    border: 0.02rem solid;
    border-color: #ffffff #ffffff transparent transparent;
    transform: rotate(-135deg);
}
</style>