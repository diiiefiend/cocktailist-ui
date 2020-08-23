<template>
  <li>
    <router-link to="/cocktail">
      <div class="cocktail-item" :title="imageLabel">
        <img class="thumb" :src="cocktail.img" :alt="cocktail.id" />
      </div>
      <rating :rating-value="cocktail.rating" />>
    </router-link>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Rating from "@/components/Rating.vue";

@Component({
  components: {
    Rating
  }
})
export default class CocktailItem extends Vue {
  @Prop() private cocktail!: any;
  imageLabel = `${this.cocktail.id} @ ${this.cocktail.bar}`;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/styles/components/cocktail-item.scss";
</style>
