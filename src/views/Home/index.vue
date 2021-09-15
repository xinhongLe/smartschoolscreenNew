<template>
    <div class="container">
        <Header :showSelect="$route.name != 'educationOverview'" />
        <router-view />
    </div>
</template>

<script>
import Header from "./Header";
export default {
    name: "home",
    components: {
        Header
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
