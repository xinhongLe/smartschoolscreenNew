<template>
    <div class="img-content" ref="content">
        <img ref="img" :style="style" @load="imgLoad" src="https://up.enterdesk.com/edpic_360_360/54/47/32/54473277c698848d82235953dd2c1f63.jpg" alt="">
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