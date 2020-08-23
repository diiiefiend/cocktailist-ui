<template>
  <div id="browse">
    <context-menu>
      <div class="gap-1"></div>
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
import ContextMenu from "@/components/ContextMenu.vue";
// import LayoutContainer from "@/components/LayoutContainer.vue";
// import ContentBox from "@/components/ContentBox.vue";
// import CocktailGrid from "@/components/CocktailGrid.vue";

export default {
  name: "Browse",
  components: {
    ContextMenu
    // LayoutContainer,
    // ContentBox,
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
