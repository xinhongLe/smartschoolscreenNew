<template>
    <div class="common-table">
        <slot name="table-header"></slot>
        <div class="right-table" :ref="id">
            <div :class="[animateScroll ? 'animate-scroll' : '']">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "tableCommon",
    props: {
        headerList: {
            type: Array,
            default: () => []
        },
        tableList: {
            type: Array,
            default: () => []
        },
        id: {
            type: String,
            default: () => "table"
        },
        marquee: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            animateScroll: false
        };
    },
    watch: {
        tableList: {
            handler() {
                this.$nextTick(() => {
                    const marquee = this.$refs[this.id];
                    if (this.tableList.length >= marquee.offsetHeight / 80 / 0.6) {
                        this.animateScroll = true;
                        this.$nextTick(() => {
                            if (!this.marquee) return;
                            const contents = marquee.innerHTML;
                            marquee.innerHTML = contents + contents;
                        });
                    }
                });
            },
            deep: true
        }
    },
    mounted() {
        this.$nextTick(() => {
            const marquee = this.$refs[this.id];
            if (this.tableList.length >= marquee.offsetHeight / 80 / 0.6) {
                this.animateScroll = true;
                this.$nextTick(() => {
                    if (!this.marquee) return;
                    const contents = marquee.innerHTML;
                    marquee.innerHTML = contents + contents;
                });
            }
        });
    }
};
</script>

<style scoped lang="scss">
.common-table {
    display: flex;
    flex-direction: column;
    height: 100%;
    .row {
        padding: 0.1rem 0;
        height: 0.4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        border-bottom: 1px dashed rgba(255, 255, 255, 0.1);
        .col-first {
            width: 0.4rem;
            text-align: center;
        }
        .col {
            flex: 1;
            text-align: center;
        }
        .text-left {
            text-align: left;
        }
        .text-right {
            text-align: right;
        }
        .text-center {
            text-align: center;
        }
    }
    .header-color {
        color: #70bfff;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    .right-table {
        width: 100%;
        flex: 1;
        min-height: 0;
        overflow: hidden;
        &:hover > div {
            animation-play-state: paused;
        }
        > div {
            overflow: hidden;
        }
        .animate-scroll {
            animation: marquee 15s linear infinite;
        }
        @keyframes marquee {
            0% {
                transform: translateY(0%);
            }
            100% {
                transform: translateY(-100%);
            }
        }
    }
}
</style>