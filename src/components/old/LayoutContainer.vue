<template>
  <div :class="[sideClass, widthClass]">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class LayoutContainer extends Vue {
  @Prop() private isLeftSide!: boolean;
  @Prop() private width!: number; // should be 1-3

  data() {
    const widthClasses: string[] = ["narrow", "wide", "single-col"];

    return {
      sideClass: this.isLeftSide ? "left" : "right",
      widthClass: widthClasses[this.width - 1]
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/styles/components/layout-container.scss";
</style>
