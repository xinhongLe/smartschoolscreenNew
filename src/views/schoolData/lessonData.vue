<template>
    <div class="img-content" ref="content">
        <img ref="img" :style="style" @load="imgLoad" src="@/assets/screen/学校_课堂教学大屏.png" alt="">
    </div>
</template>

<script>
export default {
    data() {
        return {
            style: {}
        }
    },

    methods: {
        imgLoad() {
            const imgScale = this.$refs.img.clientWidth / this.$refs.img.clientHeight;
            const scale = this.$refs.content.clientWidth / this.$refs.content.clientHeight;
            if (imgScale > scale) {
                this.style = { width: '100%' }
            } else {
                this.style = { height: '100%' }
            }
        }
    }
}
</script>

<style scoped>
.img-content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.img-content img {
    display: block;
}
</style>