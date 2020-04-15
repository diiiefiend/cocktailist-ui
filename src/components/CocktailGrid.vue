<template>
  <ul class="grid-cocktails">
    <cocktail-item
      v-for="entry in cocktails"
      :key="entry.id"
      :cocktail="entry"
    ></cocktail-item>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import CocktailItem from "@/components/CocktailItem.vue";

@Component({
  components: {
    CocktailItem
  }
})
export default class CocktailGrid extends Vue {
  @Prop() private cocktails!: object[];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/styles/components/cocktail-grid.scss";
</style>
