<template>
    <div class="container">
        <Title title="*州市教育信息化数据大屏" />
        <router-view />
        <Header />
    </div>
</template>

<script>
import Title from "./Header/title";
import Header from "./Header";
export default {
    name: "home",
    components: {
        Header,
        Title
    }
};
</script>

<style scoped>
.container {
    overflow: hidden;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #000916;
}
</style>
