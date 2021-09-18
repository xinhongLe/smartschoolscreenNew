<template>
    <module-header title="设备概况">
        <div class="v-line"></div>
        <div class="schoolData">
            <div
                class="progressitem"
                v-for="item in progressList"
                :key="item.id"
            >
                <ProgressB :proData="item" :max="500"></ProgressB>
            </div>
        </div>
        <div class="v-line"></div>
        <div class="device-list">
            <div class="device-box">
                <div class="device-header">
                    <img src="../images/icon_wifi@2x.png" alt="">
                    网络
                </div>
                <div class="device-border"></div>
                <div class="device-message">
                    <div class="device-message-text">
                        设备总数 <span>182</span>
                    </div>
                    <div class="device-message-text">
                        运行正常 <span>176</span>
                    </div>
                    <div class="device-message-text">
                        故障数据 <span class="red">5</span>
                    </div>
                </div>
            </div>
            <div class="h-line"></div>
             <div class="device-box">
                <div class="device-header">
                    <img src="../images/icon_jiankong@2x.png" alt="">
                    监控
                </div>
                <div class="device-border"></div>
                <div class="device-message">
                    <div class="device-message-text">
                        设备总数 <span>374</span>
                    </div>
                    <div class="device-message-text">
                        运行正常 <span>372</span>
                    </div>
                    <div class="device-message-text">
                        故障数据 <span class="red">2</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="v-line"></div>
        <div class="device-list">
            <div class="device-box">
                <div class="device-header">
                    <img src="../images/icon_jinbao@2x.png" alt="">
                    警报
                </div>
                <div class="device-border"></div>
                <div class="device-message">
                    <div class="device-message-text">
                        设备总数 <span>221</span>
                    </div>
                    <div class="device-message-text">
                        运行正常 <span>211</span>
                    </div>
                    <div class="device-message-text">
                        故障数据 <span class="red">10</span>
                    </div>
                </div>
            </div>
            <div class="h-line"></div>
             <div class="device-box">
                <div class="device-header">
                    <img src="../images/icon_xiaofang@2x.png" alt="">
                    消防
                </div>
                <div class="device-border"></div>
                <div class="device-message">
                    <div class="device-message-text">
                        设备总数 <span>164</span>
                    </div>
                    <div class="device-message-text">
                        运行正常 <span>164</span>
                    </div>
                    <div class="device-message-text">
                        故障数据 <span class="red">0</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="v-line"></div>
    </module-header>
</template>

<script>
import ModuleHeader from "@/components/moduleHeader";
import ProgressB from "@/components/ProgressB.vue";
export default {
    components: {
        ModuleHeader,
        ProgressB
    },
    data() {
        return {
            progressList: [
                {
                    name: "网络设备",
                    progressNum: 182,
                    id: 1
                },
                {
                    name: "监控设备",
                    progressNum: 374,
                    id: 2
                },
                {
                    name: "警报设备",
                    progressNum: 221,
                    id: 3
                },
                {
                    name: "消防设备",
                    progressNum: 164,
                    id: 4
                }
            ]
        };
    }
};
</script>

<style scoped lang="scss">
.v-line {
    height: 0.2rem;
}

.h-line {
    width: 0.2rem;
}

.schoolData {
    width: 100%;
    // height: calc(100% - 1rem);
    padding-left: 0.3rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .progressitem {
        margin: 0.1rem 0;
    }
}

.device-list {
    display: flex;
    .device-box {
        flex: 1;
        min-width: 0;
        display: flex;
        background-color: rgba(3, 86, 176, 0.1);
        border: .0175rem solid rgba(16, 163, 190, 0.23);
        align-items: center;
        .device-header {
            width: 1.2rem;
            height: 1.2rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            img {
                width: .5rem;
            }
            font-size: 0.175rem;
            color: #96ACC3;
        }
        .device-message {
            height: .85rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        .device-message-text {
            font-size: .15rem;
            color: #96ACC3;
            span {
                margin-left: .1rem;
                color: #70BFFF;
            }
            .red {
                color: #FA4A4F;
            }
        }
    }
}
</style>