<template>
  <li>{{ cocktail.id }}</li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class CocktailItem extends Vue {
  @Prop() private cocktail!: object;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/styles/components/cocktail-item.scss";
</style>
