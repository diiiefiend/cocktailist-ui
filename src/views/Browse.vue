<template>
  <div id="browse" class="grid">
    <!-- <layout-container :is-left-side="true" :width="2">
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
      <content-box title="Liquor:" :is-narrow="true">
        beep boop
      </content-box>
    </layout-container> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import LayoutContainer from "@/components/LayoutContainer.vue";
// import ContentBox from "@/components/ContentBox.vue";
// import MapView from "@/components/MapView.vue";
// import CocktailGrid from "@/components/CocktailGrid.vue";

export default {
  name: "Browse",
  components: {
    // LayoutContainer,
    // ContentBox,
    // MapView,
    // CocktailGrid
  },
  data: function() {
    return {
      cocktails: [
        {
          id: "1",
          img:
            "https://s3.amazonaws.com/cocktailist-pro/cocktails/imgs/000/000/008/small/queensparkswizzle.jpg",
          bar: "wherever",
          rating: 1.5
        },
        {
          id: "2",
          img:
            "https://s3.amazonaws.com/cocktailist-pro/cocktails/imgs/000/000/008/small/queensparkswizzle.jpg",
          bar: "wherever",
          rating: 2.2
        },
        {
          id: "3",
          img:
            "https://s3.amazonaws.com/cocktailist-pro/cocktails/imgs/000/000/008/small/queensparkswizzle.jpg",
          bar: "wherever",
          rating: 3.8
        },
        {
          id: "4",
          img:
            "https://s3.amazonaws.com/cocktailist-pro/cocktails/imgs/000/000/008/small/queensparkswizzle.jpg",
          bar: "wherever",
          rating: 4.3
        },
        {
          id: "5",
          img:
            "https://s3.amazonaws.com/cocktailist-pro/cocktails/imgs/000/000/008/small/queensparkswizzle.jpg",
          bar: "wherever",
          rating: 5
        }
      ]
    };
  }
};
</script>
