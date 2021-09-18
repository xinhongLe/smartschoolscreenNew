<template>
    <moduleHeader title="异常记录时间轴">
        <div class="time-box">
            <div class="time-line">
                <div class="time-left">15:48</div>
                <div class="time-content">
                    <div class="time-text">
                        王同学与刘同学 体育课上发生冲突，涉及打架行为。
                    </div>
                    <div class="time-text bg-1">
                        王同学 体育课意外腿部受伤，需要包扎。
                    </div>
                </div>
            </div>
            <div class="time-line">
                <div class="time-left">15:21</div>
                <div class="time-content">
                    <div class="time-text">
                        李同学 不慎摔伤膝盖，需要去医院就诊。
                    </div>
                </div>
            </div>
            <div class="time-line">
                <div class="time-left">10:15</div>
                <div class="time-content">
                    <div class="time-text bg-2">
                        刘同学 课上突发肚子不适，校医室修养。
                    </div>
                    <div class="time-text bg-1">校外人员翻墙进入校园。</div>
                </div>
            </div>
            <div class="time-line">
                <div class="time-left">15:48</div>
                <div class="time-content">
                    <div class="time-text bg-2">
                        XX教室停电，停电原因配电室电闸老化
                    </div>
                </div>
            </div>
            <div class="time-line">
                <div class="time-left">15:21</div>
                <div class="time-content">
                    <div class="time-text bg-1">
                        王同学 李同学于走廊玩闹不慎打碎消防应急箱。
                    </div>
                </div>
            </div>
        </div>
    </moduleHeader>
</template>
<script>
import moduleHeader from "@/components/moduleHeader";
export default {
    components: { moduleHeader }
};
</script>
<style lang="scss" scoped>
.time-box {
    padding: 0.2rem 0;
    position: relative;
    &:before {
        content: "";
        display: block;
        width: 0.1rem;
        height: 0.4rem;
        position: absolute;
        background: #000916;
        left: 0.75rem;
    }
}
.time-line {
    display: flex;
    align-items: center;
    .time-left {
        width: 0.8rem;
        font-size: 0.15rem;
        color: #96acc3;
        position: relative;
        &:before {
            content: "";
            display: block;
            width: 0.1rem;
            height: 0.8rem;
            z-index: 1;
            background: linear-gradient(277deg, #0dffff 0%, #70bfff 100%);
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: -0.05rem;
            border-radius: 0.02rem;
        }
    }
    .time-content {
        border-left: 0.0175rem solid rgba(13, 255, 255, 0.2);
        flex: 1;
        min-width: 0;
        padding: 0.2rem 0.05rem;
        overflow: hidden;
        .time-text {
            padding: 0.15rem 0.2rem;
            color: #ffffff;
            font-size: 0.15rem;
            background: linear-gradient(
                270deg,
                rgba(252, 90, 211, 0) 0%,
                #b921d0 100%
            );
            margin-left: 0.5rem;
            margin-bottom: 0.2rem;
            position: relative;
            animation: slideLeft .3s forwards;
            &:last-child {
                margin-bottom: 0;
            }
            &:before {
                content: "";
                display: block;
                width: 0.6rem;
                height: 0.1rem;
                background: linear-gradient(
                    to right,
                    rgba(13, 255, 255, 0.6),
                    rgba(185, 33, 208, 0.6)
                );
                position: absolute;
                left: -0.61rem;
                top: 50%;
                transform: translateY(-50%);
            }
            &.bg-1 {
                background: linear-gradient(
                    to right,
                    rgba(112, 191, 255, 1),
                    rgba(13, 255, 255, 0)
                );
            }
            &.bg-2 {
                background: linear-gradient(
                    to right,
                    rgba(55, 108, 203, 1),
                    rgba(48, 162, 253, 0)
                );
            }
        }
    }
}

@keyframes slideLeft {
    0% {
        transform: translateX(100%);
    }

    100% {
        transform: translateX(0);
    }
}
</style>
