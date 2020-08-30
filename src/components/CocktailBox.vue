<template>
  <div class="cocktail-box">
    {{ name }}
    {{ bar }}
    {{ rating }}
    {{ type }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { CocktailBoxItem } from "../models";
// import CocktailItem from "@/components/CocktailItem.vue";

@Component({
  components: {
    // CocktailItem
  }
})
export default class CocktailBox extends Vue {
  @Prop() private cocktail!: CocktailBoxItem;

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
