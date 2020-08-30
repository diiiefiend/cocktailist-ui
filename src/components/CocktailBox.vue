<template>
  <div class="cocktail-box">
    <h3>
      <a href="#">{{ name }}</a>
    </h3>
    <ul class="details" :class="[type]">
      <li>{{ bar }}</li>
      <li>{{ rating }}</li>
      <li class="label">{{ type }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { CocktailBoxItem } from "../models";

@Component({
  components: {
    // CocktailItem
  }
})
export default class CocktailBox extends Vue {
  @Prop() private cocktail!: CocktailBoxItem;

  // should add an onclick on the main div

  data() {
    return {
      name: this.cocktail.name,
      bar: this.cocktail.bar,
      rating: this.cocktail.rating,
      type: this.cocktail.type
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/styles/components/cocktail-box.scss";
</style>
