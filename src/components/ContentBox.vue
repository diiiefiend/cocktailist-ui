<template>
  <div class="box" :class="{ small: isNarrow }">
    <h1 v-if="title" :class="{ header: hasHeader }">{{ title }}</h1>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ContentBox extends Vue {
  @Prop() private title?: string;
  @Prop() private isNarrow!: boolean;
  @Prop() private hasHeader?: boolean;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/styles/components/content-box.scss";
</style>
