<template>
  <div>
    <div class="image-placeholder">
      <img :src="cocktail.img" alt="img" />
    </div>
    <div class="user-stats">
      <p><router-link to="/login">Log in</router-link> to add to lists!</p>
    </div>

    <h3>at {{ cocktail.bar }}</h3>
    <h2>{{ cocktail.liquor }}</h2>
    <p>Rating: <rating :rating-value="cocktail.rating" /></p>

    <h3>Ingredients</h3>
    <ul></ul>
  </div>
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/styles/components/cocktail-detail.scss";
</style>
