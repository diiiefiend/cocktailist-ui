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
      Hi
    </layout-container>
  </div>
</template>

<script>
// @ is an alias to /src
import { mockCocktailData } from "../mocks.js";
import ContextMenu from "@/components/ContextMenu.vue";
import LayoutContainer from "@/components/LayoutContainer.vue";

export default {
  name: "Cocktail",
  components: {
    ContextMenu,
    LayoutContainer
  },
  data: function() {
    return {
      cocktail: {
        id: "1",
        img:
          "https://s3.amazonaws.com/cocktailist-pro/cocktails/imgs/000/000/008/small/queensparkswizzle.jpg",
        bar: "wherever",
        liquor: "whiskey",
        rating: 1.5
      }
    };
  }
};
</script>
