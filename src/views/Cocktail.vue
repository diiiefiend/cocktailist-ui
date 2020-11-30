<template>
  <div id="cocktail-detail">
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
            <h1 class="coloredByType" :class="cocktail.type">
              {{ cocktail.name }}
              <span class="type">({{ cocktail.type }})</span>
            </h1>
            <div class="cocktailImage">
              <img :src="cocktail.imgUrl" :alt="cocktail.name + ' image'" />
            </div>
            <h2>from {{ cocktail.bar }}</h2>
            <h2>Ingredients:</h2>
            <ul class="ingredients">
              <li
                v-for="ingredient in cocktail.ingredients.split(',')"
                :key="ingredient"
              >
                {{ ingredient }}
              </li>
            </ul>
          </grid-box>
          <grid-box width="10">
            <h1 class="reviews">
              Guests say...
            </h1>
            <ul class="reviews">
              <li v-for="review in reviews" :key="review.id">
                <!-- {{ review.rating }}<br /> -->
                <img src="/images/rating-empty.png" alt="rating" /><br />
                Spirited:
                <span class="rating number">{{ review.spiritedRating }}</span>
                ; Innovative:
                <span class="rating number">{{ review.innovationRating }}</span>
                <br />
                <p>{{ review.comment }}</p>
                <div class="reviewer">{{ review.reviewer }}</div>
              </li>
            </ul>
          </grid-box>
        </layout-container>
      </grid-box>
      <!-- sidebar -->
      <grid-box width="4" startCol="7" :applyBoxStyle="false">
        <layout-container>
          <grid-box width="10">
            <h2>Stats</h2>
            <div class="drink-rating">
              <img src="/images/rating-empty.png" alt="rating" /><br />
              (based on 2 reviews)
            </div>
            <div class="placeholder-box"></div>
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

export default {
  name: "Cocktail",
  components: {
    ContextMenu,
    LayoutContainer,
    GridBox
  },
  data: function() {
    return {
      bar: mockBarData,
      cocktail: mockCocktailDetailData,
      reviews: mockReviewData
    };
  }
};
</script>
