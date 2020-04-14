<template>
  <div class="box" :class="{ small: isNarrow }">
    <h1 v-if="title">{{ title }}</h1>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ContentBox extends Vue {
  @Prop() private title?: string;
  @Prop() private isNarrow!: boolean;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/styles/components/content-box.scss";
</style>
