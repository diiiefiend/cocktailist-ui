<template>
  <div :class="{ box: this.applyBoxStyle }" :style="gridStyle">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class GridBox extends Vue {
  @Prop() private width?: number;
  @Prop() private startCol?: number;
  @Prop({ default: true }) private applyBoxStyle!: boolean;

  data() {
    return {
      gridStyle: `grid-column: ${this.startCol || "auto"} / span ${this.width ||
        1};`
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/styles/components/grid-box.scss";
</style>
