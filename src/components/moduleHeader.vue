<template>
  <div class="module-box" :class="autoHeight && 'autoHeight'">
    <div class="module-header">
      <div class="title" v-if="typeof title == 'string'">{{ title }}</div>
      <div class="tab-box" v-else>
        <div
            class="tab-item"
            v-for="(item, index) in title"
            :key="index"
            @click="tabClick(index)"
            :class="selected == index && 'active'"
        >
          {{ item }}
        </div>
      </div>
      <slot name="header-right" />
    </div>
    <div class="module-content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "ModuleHeader",
  props: {
    title: {
      type: [String, Array],
      default: ""
    },

    autoHeight: {
      type: Boolean,
      default: false
    },

    selected: {
      type: Number,
      default: 0
    },

    transparent: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    tabClick(i) {
      this.$emit("change", i);
    }
  }
};
</script>

<style scoped>
.module-box {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 99;
  display: flex;
  flex-direction: column;
}

.module-box.autoHeight {
  height: auto;
}

.module-header {
  position: relative;
  padding: 0.1rem 0.15rem;
  font-size: 0.2rem;
  color: #ffffff;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.0125rem solid rgba(25, 52, 88, 0.8);
  z-index: 10;
}

.title {
    display: flex;
    align-items: center;
}

.module-header .title:before, .tab-box:before {
  content: "";
  display: block;
  height: 0.1rem;
  width: 0.1rem;
  background-color: #ffffff;
  transform: rotate(45deg);
  margin-right: 0.15rem;
}



.module-header::after {
  content: "";
  display: block;
  height: 0.025rem;
  width: 0.1rem;
  background-color: rgba(237, 242, 248, 1);
  position: absolute;
  right: 0;
  bottom: -0.0125rem;
}

.tab-box {
  display: flex;
  align-items: center;
}

.tab-item {
  margin-right: 1rem;
  color: #96acc3;
  cursor: pointer;
  white-space: nowrap;
}

.tab-item.active {
  color: #ffffff;
  position: relative;
}

.tab-item.active:after {
    content: "";
    display: block;
    height: .03rem;
    position: absolute;
    left: 20%;
    width: 60%; 
    bottom: -.12rem;
    background: linear-gradient(90deg, #70BFFF 0%, #0DFFFF 100%);
}

.module-content {
  flex: 1;
  min-height: 0;
  height: 100%;
}
</style>