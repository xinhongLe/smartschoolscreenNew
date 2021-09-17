<template>
    <module-header title="在线课堂热度分布">
        <BallBounce :list="list" :scale="10" :hasPercentage="false"></BallBounce>
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
                { name: "一年级", count: 532 },
                { name: "二年级", count: 493 },
                { name: "三年级", count: 321 },
                { name: "四年级", count: 468 },
                { name: "五年级", count: 386 },
                { name: "六年级", count: 325 },
                { name: "七年级", count: 420 },
                { name: "八年级", count: 317 },
                { name: "九年级", count: 397 },
            ]
        };
    }
};
</script>