<template>
    <SortMap :schoolList="schoolList">
        <div class="footer-box">
            <div class="sort-box">
                <div
                    class="sort-item"
                    v-for="(item, index) in schoolList.slice(0, 3)"
                    :key="index"
                >
                    <div class="sort-num" :class="['red', 'yellow', 'blue'][index]">No.{{ index + 1 }}</div>
                    <div class="sort-address">{{ item.address }}</div>
                </div>
            </div>

           
        </div>
         <div class="treatment">
                <div class="treatment-proportion">89%</div>
                <div class="treatment-desc">随迁学生享受同等待遇</div>
            </div>
    </SortMap>
</template>

<script>
import SortMap from "@/components/sortMap";
export default {
    components: { SortMap },
    data() {
        return {
            schoolList: [
                {
                    lng: 120.619585,
                    lat: 31.259379,
                    num: 8876,
                    address: "吴江区"
                },
                {
                    lng: 120.61585,
                    lat: 31.300379,
                    num: 6876,
                    address: "工业园区"
                },
                {
                    lng: 120.629585,
                    lat: 31.294379,
                    num: 5676,
                    address: "虎丘区"
                },
                {
                    lng: 120.589585,
                    lat: 31.294379,
                    num: 4676,
                    address: "吴中区"
                },
                {
                    lng: 120.629585,
                    lat: 31.334379,
                    num: 3676,
                    address: "昆山"
                }
            ]
        };
    }
};
</script>

<style scoped>
.footer-box {
    position: absolute;
    top: 1.2rem;
    left: 2.3rem;
    /* right: 1rem; */
    display: flex;
    z-index: 100;
    justify-content: space-between;
    align-items: center;
}

.sort-box {
    display: flex;
}

.sort-item {
    padding: 0.2rem;
    width: 1.5rem;
    box-sizing: border-box;
    background-color: rgba(3, 86, 176, 0.13);
    border: 0.0125rem solid rgba(16, 163, 190, 0.23);
    margin-right: 0.2rem;
}

.sort-num {
    color: #ffffff;
    font-size: 0.175rem;
}

.sort-num.red {
    color: #FA4A4F;
}

.sort-num.yellow {
    color: #FFD01D;
}

.sort-num.blue {
    color: #0DFFFF;
}

.sort-address {
    color: #ffffff;
    font-size: 0.175rem;
    margin-top: 0.05rem;
    font-weight: 600;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.treatment {
    position: absolute;
    bottom: 1.45rem;
    left: 2.3rem;
    z-index: 100;
    text-align: left;
}

.treatment-proportion {
    font-size: 0.225rem;
    color: #ffffff;
    font-weight: 600;
}

.treatment-desc {
    font-size: 0.15rem;
    color: #96ACC3;
}
</style>