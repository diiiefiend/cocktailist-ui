<template>
  <div id="browse">
    <context-menu>
      <div class="row-gap-1"></div>
      <div class="span-2 justify-left">
        <button class="primary">Add Cocktail</button>
      </div>
      <div class="span-2">
        <select>
          <option>All spirits</option>
        </select>
      </div>
      <div class="span-2">
        <select>
          <option>All bars</option>
        </select>
      </div>
      <div class="span-3 justify-right">
        <input id="search" placeholder="I have something in mind" />
      </div>
      <div class="span-1 justify-right">
        <button class="secondary">Search</button>
      </div>
    </context-menu>
    <layout-container>
      <cocktail-box
        v-for="cocktail in cocktails"
        :key="cocktail.id"
        :cocktail="cocktail"
      >
      </cocktail-box>
    </layout-container>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { mockCocktailData } from "../mocks.js";
import ContextMenu from "@/components/ContextMenu.vue";
import LayoutContainer from "@/components/LayoutContainer.vue";
import CocktailBox from "@/components/CocktailBox.vue";
// import GridBox from "@/components/GridBox.vue";

export default {
  name: "Browse",
  components: {
    ContextMenu,
    LayoutContainer,
    CocktailBox
    // GridBox,
  },
  data: function() {
    return {
      cocktails: mockCocktailData
    };
  }
};
</script>
