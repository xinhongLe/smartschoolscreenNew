<template>
    <div class="v-select-box" v-click-outside="close">
        <div
            class="v-select-view"
            :style="style"
            :class="`${open && 'active'} ${customClass}`"
            @click="() => (open = !open)"
        >
            {{ selectValue || placeholder }}
            <img v-if="!customIcon" src="./imgs/icon_arrow@2x.png" alt="" />
            <img v-if="customIcon" :src="customIcon" alt="" />
        </div>

        <div class="v-select-list" :class="open && 'active'">
            <div
                class="v-select-item"
                v-for="(item, index) in options"
                :key="index"
                @click="onSelect(item)"
            >
                {{ item.label }}
            </div>
        </div>
    </div>
</template>

<script>
import ClickOutside from "vue-click-outside";

export default {
    directives: {
        ClickOutside
    },
    props: {
        placeholder: {
            type: String,
            default: "请选择"
        },

        value: {
            default: ""
        },

        options: {
            type: Array,
            default: () => []
        },

        customClass: {
            type: String,
            default: ""
        },

        style: {
            type: Object,
            default: () => {}
        },

        customIcon: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            open: false
        };
    },
    computed: {
        selectValue() {
            const obj = this.options.find((item) => {
                return item.value == this.value;
            });
            return obj ? obj.label : "";
        }
    },
    methods: {
        onSelect(item) {
            this.open = false;
            this.$emit("input", item.value);
            this.$emit("onSelect", item);
        },

        close() {
            this.open = false;
        }
    }
};
</script>

<style scoped>
.v-select-box {
    position: relative;
    z-index: 10;
}

.v-select-view {
    border: 0.0175rem solid rgba(16, 163, 190, 0.23);
    padding: 0.1rem 0.4rem 0.1rem 0.1rem;
    position: relative;
    font-size: 0.15rem;
    font-weight: 600;
    letter-spacing: 1px;
    background: linear-gradient(to bottom, #6aa8de 0%, #dff9ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    cursor: pointer;
    width: 1rem;
    display: flex;
    align-items: center;
}

.v-select-view img {
    width: 0.12rem;
    position: absolute;
    right: 0.1rem;
    top: 50%;
    transform: translateY(-50%);
    transition: 0.3s all;
}

.v-select-view.active img {
    transform: translateY(-50%) rotate(180deg);
}

.v-select-list {
    position: absolute;
    left: 0;
    right: 0;
    background-color: #ffffff;
    border-radius: 0.04rem;
    overflow: hidden;
    z-index: 1;
    height: 0;
    max-height: 4rem;
}

.v-select-list.active {
    height: auto;
}

.v-select-item {
    padding: 0.1rem;
    font-size: 0.15rem;
    cursor: pointer;
}

.v-select-item:hover {
    background-color: #f5f7fa;
}
</style>