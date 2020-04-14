<template>
  <div id="browse" class="grid-container">
    <layout-container :is-left-side="true" :width="2">
      <content-box>
        <map-view :is-wide="true"></map-view>
      </content-box>

      <content-box title="Latest additions">
        <cocktail-grid :cocktails="cocktails"></cocktail-grid>
      </content-box>
    </layout-container>

    <layout-container :is-left-side="false" :width="1">
      <content-box title="Browse by:" :is-narrow="true">
        beep boop
      </content-box>
    </layout-container>
  </div>
</template>

<script>
// @ is an alias to /src
import LayoutContainer from "@/components/LayoutContainer.vue";
import ContentBox from "@/components/ContentBox.vue";
import MapView from "@/components/MapView.vue";
import CocktailGrid from "@/components/CocktailGrid.vue";

export default {
  name: "Browse",
  components: {
    LayoutContainer,
    ContentBox,
    MapView,
    CocktailGrid
  },
  data: function() {
    return {
      cocktails: [
        { id: "1" },
        { id: "2" },
        { id: "3" },
        { id: "4" },
        { id: "5" }
      ]
    };
  }
};
</script>
