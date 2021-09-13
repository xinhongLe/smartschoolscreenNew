<template>
    <div class="module-box">
        <div class="module-header">
            {{title}}
        </div>
        <slot />
    </div>
</template>

<script>
export default {
    name: "ModuleHeader",
    props: {
        title: {
            type: String,
            default: ""
        }
    }
}
</script>

<style scoped>
    .module-box {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .module-header {
        position: relative;
        padding: 0.1rem 0.15rem;
        font-size: 0.2rem;
        color: #ffffff;
        font-weight: 600;
        display: flex;
        align-items: center;
        border-bottom: 0.0125rem solid rgba(25, 52, 88, 0.8);
    }

    .module-header:before {
        content: "";
        display: block;
        height: 0.1rem;
        width: 0.1rem;
        background-color: #ffffff;
        transform: rotate(45deg);
        margin-right: .15rem;
    }

    .module-header::after {
        content: "";
        display: block;
        height: 0.025rem;
        width: 0.1rem;
        background-color: rgba(237, 242, 248, 1);
        position: absolute;
        right: 0;
        bottom: -0.0125rem;
    }
</style>