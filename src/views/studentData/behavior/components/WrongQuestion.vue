<template>
    <module-header title="学生处理错题来源">
        <BallBounce :list="list" :scale="1.5" :r="30"></BallBounce>
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
                { name: "举一反三", count: 40 },
                { name: "测评推送", count: 25 },
                { name: "作业中", count: 12 },
                { name: "集中攻克", count: 5 },
                { name: "学生自选", count: 18 },
            ]
        };
    }
};
</script>