<template>
  <div :class="{ centered: showTotal }">
    <div class="rating">
      <img :src="img" v-for="val in fullValue" :key="val" alt="*" />

      <span class="partial" :style="{ width: partialValueWidth + 'px' }">
        <img :src="img" alt="*" />
      </span>
    </div>
    <p v-if="showTotal">(based on {{ totalRatings }} reviews)</p>
    <img class="divider" v-if="showDivider" :src="flourishImg" alt="" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Rating extends Vue {
  @Prop() private ratingValue!: number;
  @Prop({ default: false }) private showTotal!: boolean;
  @Prop({ default: 0 }) private totalRatings!: number;
  @Prop({ default: false }) private showDivider!: boolean;

  img = "/images/rating-full.png";
  flourishImg = "/images/deco-flourish.jpg";

  fullValue = Math.floor(this.ratingValue);
  partialValueWidth = Math.floor(18 * (this.ratingValue % 1));
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/styles/components/rating.scss";
</style>
