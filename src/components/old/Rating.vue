<template>
  <div class="rating">
    <img :src="img" v-for="val in fullValue" :key="val" alt="*" />

    <span class="partial" :style="{ width: partialValueWidth + 'px' }">
      <img :src="img" alt="*" />
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Rating extends Vue {
  @Prop() private ratingValue!: number;

  img =
    "https://s3.amazonaws.com/cocktailist-pro/cocktails/imgs/rating-full.png";

  fullValue = Math.floor(this.ratingValue);
  partialValueWidth = Math.floor(18 * (this.ratingValue % 1));
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/styles/components/rating.scss";
</style>
