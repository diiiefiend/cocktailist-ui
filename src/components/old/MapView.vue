<template>
  <div class="map-view" :class="{ wide: isWide }">
    <!-- put google maps stuff here -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class MapView extends Vue {
  @Prop() private isWide!: boolean;
  // will prob add options to toggle showing bar-info
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/styles/components/map-view.scss";
</style>
