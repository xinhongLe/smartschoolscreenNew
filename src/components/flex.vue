<template>
    <div :style="getStyle">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "Flex",
    props: {
        flex: {
            type: Number,
            default: 1
        },
        column: {
            type: Boolean,
            default: false
        },
        alignItem: {
            type: String,
            default: "flex-start"
        },
        justifyContent: {
            type: String,
            default: "flex-start"
        }
    },
    computed: {
        getStyle() {
            return {
                display: "flex",
                flex: this.flex,
                flexDirection: this.column ? "column" : "row",
                minWidth: 0,
                minHeight: 0,
                alignItems: this.alignItem,
                justifyContent: this.justifyContent,
                position: "relative",
                width: "100%",
                height: "100%"
            };
        }
    }
};
</script>