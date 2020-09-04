<template>
  <div class="box" :style="widthStyle">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ContentBox extends Vue {
  @Prop() private width?: number;

  data() {
    return {
      widthStyle: `grid-column-end: span ${this.width || 1};`
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/styles/components/content-box.scss";
</style>
