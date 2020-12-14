<template>
  <div id="cocktail-view">
    <context-menu>
      <div class="row-gap-1"></div>
      <div class="span-3 justify-left">
        <button class="primary">Add Review</button>
        <button class="primary">Modify Lists</button>
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
      <!-- main content -->
      <grid-box width="6" startCol="1" :applyBoxStyle="false">
        <!-- grids in grids so the left and right content areas can flow independently--at least until there's native masonry -->
        <layout-container>
          <grid-box width="10">
            <cocktail-detail :cocktail="cocktail"></cocktail-detail>
          </grid-box>
          <grid-box width="10">
            <h1 class="reviews">
              Guests say...
            </h1>
            <review-list :reviews="reviews"></review-list>
          </grid-box>
        </layout-container>
      </grid-box>
      <!-- sidebar -->
      <grid-box width="4" startCol="7" :applyBoxStyle="false">
        <layout-container>
          <grid-box width="10">
            <h2>Stats</h2>
            <rating
              :rating-value="cocktail.rating"
              :showTotal="true"
              :totalRatings="cocktail.totalRatings"
            ></rating>
            <scatter-chart
              :x-values="scatterChartData.xValues"
              :y-values="scatterChartData.yValues"
              x-label="spirited"
              y-label="innovative"
              :is-drink-stats="true"
            ></scatter-chart>
            <div class="teaser-link">
              <a href="#!">View stats for {{ cocktail.type }} drinks</a>
            </div>
          </grid-box>
          <grid-box width="10">
            <h2>{{ bar.name }}</h2>
            {{ bar.address }}
            <div class="placeholder-box"></div>
            <div class="teaser-link"><a href="#!">View all drinks</a></div>
          </grid-box>
        </layout-container>
      </grid-box>
    </layout-container>
  </div>
</template>

<script>
// @ is an alias to /src
import {
  mockCocktailDetailData,
  mockReviewData,
  mockBarData
} from "../mocks.js";
import ContextMenu from "@/components/ContextMenu.vue";
import LayoutContainer from "@/components/LayoutContainer.vue";
import GridBox from "@/components/GridBox.vue";
import CocktailDetail from "@/components/CocktailDetail.vue";
import ReviewList from "@/components/ReviewList.vue";
import Rating from "@/components/Rating.vue";
import ScatterChart from "@/components/ScatterChart.vue";

export default {
  name: "Cocktail",
  components: {
    ContextMenu,
    LayoutContainer,
    GridBox,
    CocktailDetail,
    ReviewList,
    Rating,
    ScatterChart
  },
  data: function() {
    return {
      bar: mockBarData,
      cocktail: mockCocktailDetailData,
      reviews: mockReviewData,
      scatterChartData: {
        xValues: [4, 6],
        yValues: [5, 7]
      }
    };
  }
};
</script>
