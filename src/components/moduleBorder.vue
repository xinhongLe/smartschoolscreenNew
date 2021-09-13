<template>
    <div class="module-box" :class="autoHeight && 'autoHeight'">
        <div class="module-border-top"></div>
        <div class="module-border-right"></div>
        <div class="module-border-left"></div>
        <slot />
    </div>
</template>

<script>
export default {
    name: "ModuleBorder",
    props: {
        autoHeight: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>
    .module-box {
        position: relative;
        width: 100%;
        height: 100%;
        z-index: 99;
    }

    .module-box.autoHeight {
        height: auto;
    }

    .module-border-top {
        position: absolute;
        height: 0.0125rem;
        background-color: rgba(237, 242, 248, 0.1);
        width: 25%;
        top: -0.0125rem;
        right: .5rem;
    }

    .module-border-top:before {
        content: "";
        display: block;
        width: 0.2rem;
        height: 0.025rem;
        background-color: rgba(237, 242, 248, 0.3);
        position: relative;
        top: -0.00625rem;
    }

    .module-border-right {
        position: absolute;
        width: 0.0125rem;
        background-color: rgba(25, 52, 88, 0.8);
        height: 100%;
        top: 0;
        right: -0.0125rem;
    }

    .module-border-right:before {
        content: "";
        display: block;
        width: 0.0125rem;
        height: 0.1rem;
        background-color: rgba(25, 52, 88, 0.8);
        position: relative;
        top: 20%;
        border-top: .2rem solid #000916;
        border-bottom: .2rem solid #000916;
    }

    .module-border-right:after {
        content: "";
        display: block;
        width: 0.025rem;
        height: 0.1rem;
        background-color: rgba(237, 242, 248, 1);
        position: absolute;
        right: 0;
        bottom: 0;
    }

    .module-border-left {
        position: absolute;
        width: 0.0125rem;
        background-color: rgba(25, 52, 88, 0.8);
        height: 100%;
        top: 0;
        left: -0.0125rem;
    }

    .module-border-left:before {
        content: "";
        display: block;
        width: 0.0125rem;
        height: 0.1rem;
        background-color: rgba(25, 52, 88, 0.8);
        position: relative;
        top: 40%;
        border-top: .2rem solid #000916;
        border-bottom: .2rem solid #000916;
    }

    .module-border-left:after {
        content: "";
        display: block;
        width: 0.025rem;
        height: 0.1rem;
        background-color: rgba(237, 242, 248, 1);
        position: absolute;
        left: 0;
        top: 0;
    }
</style>