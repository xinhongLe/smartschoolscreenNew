<template>
    <module-header autoHeight title="安全防范重点布控区域">
        <div class="security-box">
            <div class="v-line"></div>
            <div class="img-box">
                <div class="img-left">
                    <img src="../images/pic_school@2x.png" alt="">
                </div>
                <div class="h-line"></div>
                <div class="img-right">
                    <div class="img-top">
                        <img src="../images/pic_school2@2x.png" alt="">
                    </div>
                    <div class="v-line"></div>
                    <div class="img-bottom">
                        <img src="../images/pic_school3@2x.png" alt="">
                    </div>
                </div>
            </div>
            <div class="v-line"></div>
        </div>
    </module-header>
</template>

<script>
import ModuleHeader from "@/components/moduleHeader";
export default {
    components: {
        ModuleHeader
    }
};
</script>

<style scoped>
.v-line {
    height: 0.1rem;
}

.h-line {
    width: 0.2rem;
}

.security-box {
    height: 100%;
    display: flex;
    flex-direction: column;
}

.img-box {
    display: flex;
    flex: 1;
}

.img-left, .img-right {
    flex: 1;
}

.img-right {
    display: flex;
    flex-direction: column;
}

.img-top, .img-bottom {
    flex: 1;
}

.img-box img {
    width: 100%;
}

/* .img-left {
    background: url(~../images/pic_school@2x.png) no-repeat;
    background-size: cover;
    background-position: center;
}

.img-top {
    background: url(~../images/pic_school2@2x.png) no-repeat;
    background-size: cover;
    background-position: center;
}

.img-bottom {
    background: url(~../images/pic_school3@2x.png) no-repeat;
    background-size: cover;
    background-position: center;
} */
</style>