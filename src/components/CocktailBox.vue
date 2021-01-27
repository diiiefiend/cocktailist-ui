<template>
  <div
    class="cocktail-box"
    @mouseover="hovered = true"
    @mouseleave="hovered = false"
  >
    <router-link :to="'/cocktail/' + id">
      <h3 :class="{ hovered }">
        {{ name }}
      </h3>
      <ul
        class="details colored-by-type"
        :class="[hovered ? `hovered ${type}` : type]"
      >
        <li>{{ bar }}</li>
        <li>{{ rating }}</li>
        <li class="label">{{ type }}</li>
      </ul>
    </router-link>
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
      id: this.cocktail.id,
      name: this.cocktail.name,
      bar: this.cocktail.bar,
      rating: this.cocktail.rating,
      type: this.cocktail.type,
      hovered: false
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/styles/components/cocktail-box.scss";
</style>
