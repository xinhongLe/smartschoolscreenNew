<template>
    <module-header title="教师参与率（资源建设）">
        <BallBounce :list="list" :scale="1.5"></BallBounce>
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
    }
};
</script>

<style scoped lang="scss">

</style>