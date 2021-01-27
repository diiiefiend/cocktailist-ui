<template>
  <div>
    <h1 class="colored-by-type" :class="cocktail.type">
      {{ cocktail.name }}
      <span class="type">
        <!-- eslint-disable-next-line -->
        (<a href="">{{ cocktail.type }}</a>)
      </span>
    </h1>
    <div class="cocktail-image">
      <img :src="cocktail.imgUrl" :alt="cocktail.name + ' image'" />
    </div>
    <h2>
      from <a href="">{{ cocktail.bar }}</a>
    </h2>
    <h2>Ingredients:</h2>
    <ul class="ingredients">
      <li
        v-for="ingredient in cocktail.ingredients.split(',')"
        :key="ingredient"
      >
        {{ ingredient }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { CocktailDetailItem } from "@/models";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class CocktailDetail extends Vue {
  @Prop() private cocktail!: CocktailDetailItem;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/styles/components/cocktail-detail.scss";
</style>
