<template>
  <div id="cocktail-detail">
    <context-menu>
      <div class="row-gap-1"></div>
      <div class="span-3 justify-left">
        <button class="primary">Add Review</button>
        <button class="primary">Add to List</button>
      </div>
      <div class="span-4">
        Listed in: Done and Done
      </div>
      <div class="span-2 justify-right emerald">
        Last updated: 09.04.2020
      </div>
      <div class="span-1 justify-right">
        <button class="secondary">Edit Entry</button>
      </div>
    </context-menu>
    <layout-container>
      <content-box width="6">
        <h1 class="coloredByType" :class="cocktail.type">
          {{ cocktail.name }}
          <span class="type">({{ cocktail.type }})</span>
        </h1>
        <h2>from {{ cocktail.bar }}</h2>
        <h2>Ingredients:</h2>
        <ul>
          <li
            v-for="ingredient in cocktail.ingredients.split(',')"
            :key="ingredient"
          >
            {{ ingredient }}
          </li>
        </ul>
      </content-box>
    </layout-container>
  </div>
</template>

<script>
// @ is an alias to /src
import { mockCocktailDetailData } from "../mocks.js";
import ContextMenu from "@/components/ContextMenu.vue";
import LayoutContainer from "@/components/LayoutContainer.vue";
import ContentBox from "@/components/ContentBox.vue";

export default {
  name: "Cocktail",
  components: {
    ContextMenu,
    LayoutContainer,
    ContentBox
  },
  data: function() {
    return {
      cocktail: mockCocktailDetailData
    };
  }
};
</script>
