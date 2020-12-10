<template>
  <div class="grid">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class LayoutContainer extends Vue {
  // @Prop() private asideType!: number; // 0: not aside, 1: left aside, 2: right aside

  data() {
    // const isAside = this.asideType > 0;

    return {
      // isAside,
      // asideClass: isAside && this.asideType > 1 ? "right" : "left"
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/styles/components/layout-container.scss";
</style>
