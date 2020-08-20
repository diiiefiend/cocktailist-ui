<template>
  <div id="cocktail" class="grid">
    <layout-container :is-left-side="true" :width="2">
      <content-box title="Cocktail Name" :has-header="true">
        <cocktail-detail :cocktail="cocktail"></cocktail-detail>
      </content-box>

      <content-box title="Rate Me" :has-header="true"></content-box>

      <content-box title="Ratings" :has-header="true"></content-box>
    </layout-container>

    <layout-container :is-left-side="false" :width="1">
      <content-box title="Bar Name" :is-narrow="true">
        <map-view></map-view>
      </content-box>
      <content-box title="Similar:" :is-narrow="true">
        <cocktail-item :cocktail="cocktail"></cocktail-item>
      </content-box>
    </layout-container>
  </div>
</template>

<script>
// @ is an alias to /src
import LayoutContainer from "@/components/LayoutContainer.vue";
import ContentBox from "@/components/ContentBox.vue";
import MapView from "@/components/MapView.vue";
import CocktailItem from "@/components/CocktailItem.vue";
import CocktailDetail from "@/components/CocktailDetail.vue";

export default {
  name: "Browse",
  components: {
    LayoutContainer,
    ContentBox,
    MapView,
    CocktailItem,
    CocktailDetail
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
