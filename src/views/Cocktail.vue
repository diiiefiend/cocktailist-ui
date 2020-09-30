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
      </content-box>
      <content-box width="3">
        testing
      </content-box>
      <content-box width="6">
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
      </content-box>
    </layout-container>
  </div>
</template>

<script>
// @ is an alias to /src
import { mockCocktailDetailData, mockReviewData } from "../mocks.js";
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
      cocktail: mockCocktailDetailData,
      reviews: mockReviewData
    };
  }
};
</script>
